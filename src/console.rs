extern crate cfg_if;
extern crate web_sys;
extern crate wasm_bindgen;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen(start)]
pub fn run()
{
    bare_bones();
    using_a_macro();
    //using_web_sys();
}

#[wasm_bindgen]
extern "C" 
{
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);

}

fn bare_bones()
{
    log("Hello from Rust!");
    log_u32(42);
    log_many("Logging", "many values!");
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

fn using_a_macro() {
    console_log!("Hello {}!", "world");
    console_log!("Let's print some numbers...");
    console_log!("1 + 3 = {}", 1 + 3);
}


// fn using_web_sys() {
//     use web_sys::console;

//     console::log_1(&"Hello using web-sys".into());

//     let js: JsValue = 4.into();
//     console::log_2(&"Logging arbitrary values looks like".into(), &js);
// }


// #[wasm_bindgen(method)]
// pub fn square(x: f32) -> f32
// {
//     x.sqrt()
// }