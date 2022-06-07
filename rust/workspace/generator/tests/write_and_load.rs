// #[test]
// fn write_i32_little_endian_to_file() {
//     std::fs::write("tests/784963790.i32Little", 784963790_i32.to_le_bytes()).unwrap();
// }

#[test]
fn read_1_i32_from_file() {
    let number = include_bytes!("784963790.i32Little");
    let number = i32::from_le_bytes(number[0..4].try_into().unwrap());
    assert_eq!(784963790, number);
}


// #[test]
// fn write_2_i32_little_endian_to_file() {
//     let numbers: [i32; 2] = [10, 999999999];
//     std::fs::write(
//         "tests/10_999999999.i32Little",
//         numbers
//             .iter()
//             .map(|v| v.to_le_bytes())
//             .flatten()
//             .collect::<Vec<u8>>(),
//     )
//     .unwrap();
// }

#[test]
fn read_2_i32_from_file() {
    let number = include_bytes!("10_999999999.i32Little");
    let number1 = i32::from_le_bytes(number[0..4].try_into().unwrap());
    assert_eq!(10, number1);
    let number2 = i32::from_le_bytes(number[4..8].try_into().unwrap());
    assert_eq!(999999999, number2);
}
