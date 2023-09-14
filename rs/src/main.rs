use silk_rs::encode_silk;
use clap::Parser;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
struct Opt {
    /// The input PCM file
    #[arg(short = 'i', long = "input")]
    input: String,

    /// The output SILK file
    #[arg(short = 'o', long = "output")]
    output: String,

    /// The sampling rate in Hz
    #[arg(short = 's', long = "sample-rate")]
    sample_rate: i32,
}

fn main() {
    let opt = Opt::parse();
    let input = std::fs::read(opt.input).unwrap();
    let output = encode_silk(input, opt.sample_rate, 25000, true).unwrap();
    std::fs::write(opt.output, &output[0..output.len() - 1]).unwrap();
}