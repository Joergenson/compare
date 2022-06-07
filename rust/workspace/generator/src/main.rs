use clap::{Command, CommandFactory, Parser, ValueHint};
use clap_complete::{generate, Generator, Shell};
use rand::{distributions::Uniform, Rng};
use std::path::PathBuf;

#[derive(Parser, Debug, PartialEq)]
#[clap(author, version, about, trailing_var_arg = true, long_about = Some("What diss?"))]
struct Args {
    #[cfg(target_endian = "little")]
    #[clap(arg_enum, short, long, value_hint = ValueHint::Other, default_value_t = Endian::Little)]
    endian: Endian,
    #[cfg(target_endian = "big")]
    #[clap(arg_enum, short, long, value_hint = ValueHint::Other, default_value_t = Endian::Big)]
    endian: Endian,

    #[clap(short, long, value_hint = ValueHint::Other, default_value_t = i32::MIN)]
    lowest: i32,

    #[clap(long, value_hint = ValueHint::Other, default_value_t = i32::MAX)]
    highest: i32,

    #[clap(short, long, value_hint = ValueHint::Other, default_value_t = 10_000_000)]
    size: usize,

    #[clap(short, long, value_hint = ValueHint::FilePath)]
    path: Option<PathBuf>,

    #[clap(long = "print-shell-function", arg_enum)]
    shell: Option<Shell>,
}

#[derive(Debug, Clone, clap::ArgEnum, PartialEq)]
enum Endian {
    Little,
    Big,
}

fn print_completions<G: Generator>(gen: G, cmd: &mut Command) {
    generate(gen, cmd, cmd.get_name().to_string(), &mut std::io::stdout());
}

fn main() {
    let args = Args::parse();

    if let Some(generator) = args.shell {
        let mut cmd = Args::command();
        eprintln!("Generate completion file for {:?}... ", generator);
        print_completions(generator, &mut cmd);
        return;
    }
    dbg!(&args);

    let mut rng = rand::thread_rng();
    let range = Uniform::new(args.lowest, args.highest);

    let vals: Vec<u8> = (0..args.size)
        .map(|_| rng.sample(&range))
        .map(|number: i32| match args.endian {
            Endian::Little => number.to_le_bytes(),
            Endian::Big => number.to_be_bytes(),
        })
        .flatten()
        .collect();

    std::fs::write(get_path(&args), vals).unwrap();
}

fn get_path<'a>(args: &'a Args) -> PathBuf {
    match &args.path {
        Some(s) => s.clone(),
        None => {
            let mut path = PathBuf::new();
            path.push(format!("i32_size:{}_.i32{:?}", args.size, args.endian));
            path
        } //
    }
}
