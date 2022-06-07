use core::time::Duration;
use std::time::Instant;

fn bytes_to_list_of_i32(bytes: &[u8]) -> Vec<i32> {
    bytes
        .windows(4)
        .map(|v| i32::from_le_bytes(v[0..4].try_into().unwrap()))
        .collect()
}

fn main() {
    let path = std::env::args()
        .skip(1)
        .next()
        .expect("Expected there to be a '<cmd> <path>'");
    println!("Started reading file: {path} ...");
    let list_of_numbers = std::fs::read(path).unwrap();
    println!("File loaded");
    let mut list_of_numbers = bytes_to_list_of_i32(&list_of_numbers);
    println!("Converted numbers from file");

    let duration: Duration = sort_get_time(&mut list_of_numbers);
    dbg!(duration);
}

fn sort_get_time(test: &mut Vec<i32>) -> Duration {
    let now = Instant::now();
    test.sort();
    now.elapsed()
}
