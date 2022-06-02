# Rust

First generate some data.
Second run the benchmark.

## Generating data

### First generate some data by running:

```sh
❯ cargo run -p generator --release -- --path ../res/sortable/default
```

### For help generating other data use the `-h` flag
```sh
❯ cargo run -p generator --release -- -h
    Finished release [optimized] target(s) in 0.05s
     Running `target/release/generator -h`
generator 0.1.0

USAGE:
    generator [OPTIONS]

OPTIONS:
    -e, --endian <ENDIAN>                 [default: little] [possible values: little, big]
    -h, --help                            Print help information
        --highest <HIGHEST>               [default: 2147483647]
    -l, --lowest <LOWEST>                 [default: -2147483648]
    -p, --path <PATH>
        --print-shell-function <SHELL>    [possible values: bash, elvish, fish, powershell, zsh]
    -s, --size <SIZE>                     [default: 10000000]
    -V, --version                         Print version information
```

### install the generator
```sh
❯ cargo install --path workspace/generator
```

### Remove the generator
```sh
❯ cargo uninstall generator
```

## Benchmarking workspace

### simple version
```sh
❯ cargo run -p simple --release -- ../res/sortable/default
```
