[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/wantakimax6/one-word-for-the-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/wantakimax6/one-word-for-the-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

# One Word for the Boss

Entry for the make.fun bounty [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735).

## The word

> **Blackhole**

One word, 9 characters. The boss who pulls in time, energy, emails and meetings — and lets nothing escape back out. It is funny on its own, true about a real habit of bosses, and it works for a boss in a kitchen, a warehouse or an office without any explanation.

## How it works

`main.ts` (Node 22, standard library only) writes that exact word to `entry.txt` in the output directory — nothing else, no trailing newline. It validates the text first: 1–30 characters, non-blank, a single line, and exactly one word of letters only.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The grader runs it with the output directory at `/output` (the default when `MAKEFUN_OUTPUT_DIR` is not set). All paths are resolved relative to `main.ts` itself, never relative to the working directory, so it works from any directory.

## License

MIT — see [LICENSE](LICENSE).
