extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}

#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

#[wasm_bindgen]
impl Universe {

    pub fn tick(&mut self) {
        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                let next_cell = match (cell, live_neighbors) {
                    // Rule 1: Any live cell with fewer than two live neighbours
                    // dies, as if caused by underpopulation.
                    (Cell::Alive, x) if x < 2 => Cell::Dead,
                    // Rule 2: Any live cell with two or three live neighbours
                    // lives on to the next generation.
                    (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    // Rule 3: Any live cell with more than three live
                    // neighbours dies, as if by overpopulation.
                    (Cell::Alive, x) if x > 3 => Cell::Dead,
                    // Rule 4: Any dead cell with exactly three live neighbours
                    // becomes a live cell, as if by reproduction.
                    (Cell::Dead, 3) => Cell::Alive,
                    // All other cells remain in the same state.
                    (otherwise, _) => otherwise,
                };

                next[idx] = next_cell;
            }
        }

        self.cells = next;
    }

    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }
    // ...
    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += self.cells[idx] as u8;
            }
        }
        count
    }

    pub fn new() -> Universe {
        let width = 64;
        let height = 64;

        let cells = (0..width * height)
            .map(|i| {
                if i % 2 == 0 || i % 7 == 0 {
                    Cell::Alive
                } else {
                    Cell::Dead
                }
            })
            .collect();

        Universe {
            width,
            height,
            cells,
        }
    }

    pub fn render(&self) -> String {
        self.to_string()
    }
}

use std::fmt;

impl fmt::Display for Universe {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for line in self.cells.as_slice().chunks(self.width as usize) {
            for &cell in line {
                let symbol = if cell == Cell::Dead { '◻' } else { '◼' };
                write!(f, "{}", symbol)?;
            }
            write!(f, "\n")?;
        }

        Ok(())
    }
}







//use std::fmt;

//  #[wasm_bindgen]
//  #[repr(u8)]
//  #[derive(Clone, Copy, Debug, PartialEq, Eq)]
//  pub enum Snake {
//      Dead = 0,
//      Alive = 1,
//  }

//  #[wasm_bindgen]
//  pub struct SnakeField {
//      width: u32,
//      height: u32,
//      cells: Vec<Snake>,
//  }

//  #[wasm_bindgen]
//  impl SnakeField {

//      fn get_index(&self, row: u32, column: u32) -> usize {
//          (row * self.width + column) as usize
//      }

//      pub fn new() -> SnakeField {
//          let width = 64;
//          let height = 64;

//          let cells = (0..width * height)
//              .map(|i| {
//                  if i == 0 {
//                      Snake::Alive
//                  } else {
//                      Snake::Dead
//                  }
//              })
//              .collect();

//          SnakeField {
//              width,
//              height,
//              cells
//          }
//      }

//      pub fn render(&self) -> String {
//          self.to_string()
//      }

//  }

use std::iter::IntoIterator::into_iter;

#[wasm_bindgen]
pub fn LDL(n: i32, a: Vec<Vec<i32>>, b: Vec<i32>, x: Vec<i32>) 
{
    for j in n.into_iter()
    {
        for k in j
        {
            a[j][j] -= a[j][k] * a[j][k] * a[k][k];
        }
        let mut i = j + 1;
        for i in n
        {
            for k in j
            {
                a[i][j] -= a[i][k] * a[k][k] * a[j][k];
            }
            a[i][j] /= a[j][j];
        }
    }
    for i in n
    {
		x[i] = b[i];
		for j in i 
        {
			x[i] -= a[i][j] * x[j];
		}
	}
	for i in n 
    {
		x[i] = x[i] / a[i][i];
	}
    let mut i = n - 1;
	for i in i..0
    {
        let mut j = i + 1;
		for j in n
        {
			x[i] -= a[j][i] * x[j];
		}
	}
}



