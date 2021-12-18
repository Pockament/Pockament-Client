#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tokio::{io::{AsyncWriteExt, AsyncReadExt}, task::JoinHandle};

use tokio::fs::File;
use std::{convert::Infallible, net::SocketAddr};

use hyper::{
  service::{make_service_fn, service_fn},
  Response, Server,
};

static mut SERVER: Option<JoinHandle<()>> = None;

use tauri::command;

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

use futures_util::stream::StreamExt;
use hyper::{body::Bytes, client::Client, Body, Request};

#[allow(dead_code)]
#[command(async)]
async fn push(uri: &str, path: &str) {
  let mut f = File::open(path).await.unwrap();
  let mut v = vec![];
  f.read_to_end(&mut v).await.unwrap();

  Client::new()
    .request(Request::post(uri).body(Body::from(v)).unwrap())
    .await
    .unwrap();
}

#[allow(dead_code)]
#[command(async)]
async fn pull(port: u16) {
  let service = make_service_fn(|_| async move {
    Ok::<_, Infallible>(service_fn(|req: Request<Body>| async move {
      let mut collected = vec![];
      let rv: Vec<Result<Bytes, _>> = req.into_body().collect().await;
      rv.into_iter()
        .filter(|r| r.is_ok())
        .map(|r| r.unwrap())
        .for_each(|v| collected.append(&mut v.to_vec()));

      let path =
        std::env::join_paths(&[std::env::var("HOME").unwrap().as_str(), "download.bin"]).unwrap();

      let mut f = File::open(path).await.unwrap();
      f.write(collected.as_slice()).await.unwrap();

      Ok::<_, Infallible>(Response::new(Body::from("")))
    }))
  });

  let addr = SocketAddr::from(([0u8, 0, 0, 0], port));
  let server = Server::bind(&addr).serve(service);

  let server_handle = tokio::spawn(async move {
    let _ = server.await;
  });

  unsafe {
    SERVER.as_ref().map(|h| h.abort());
    SERVER = Some(server_handle);
  }
}
