extern crate cfg_if;
extern crate wasm_bindgen;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn greet() -> Result<(), JsValue>
{
    let window = web_sys::window().expect("no global window exist");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document have should a body");

    let val = document.create_element("p")?;
    val.set_inner_html("hello from Rust!");

    body.append_child(&val);

    Ok(())
}