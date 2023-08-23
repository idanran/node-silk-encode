from pilk import encode
from sys import argv, stdout


def main():
    input = argv[1]
    output = argv[2]
    duration = encode(input, output, pcm_rate=44100, tencent=True)
    print("duration:", duration)
    stdout.flush()


if __name__ == "__main__":
    main()
