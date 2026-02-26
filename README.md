# black-or-white-text

[![npm version](https://img.shields.io/npm/v/black-or-white-text)](https://www.npmjs.com/package/black-or-white-text)
[![npm downloads](https://img.shields.io/npm/dw/black-or-white-text)](https://www.npmjs.com/package/black-or-white-text)
[![bundle size](https://img.shields.io/bundlephobia/minzip/black-or-white-text)](https://bundlephobia.com/package/black-or-white-text)
[![license](https://img.shields.io/npm/l/black-or-white-text)](./LICENSE)

A tiny, zero-dependency utility that tells you whether to use **black** or **white** text on any background color — for instant, readable contrast.

**[Try the interactive demo →](https://adousa.github.io/is-light-text/)**

## Install

```bash
npm install black-or-white-text
```

## Usage

```ts
import isLightText from "black-or-white-text";

isLightText("#1a1a2e");  // true  → use white text
isLightText("#f5f5f5");  // false → use black text
isLightText([44, 62, 80]); // true  → use white text
```

Accepts hex strings (`"#fff"`, `"#ffffff"`, `"ffffff"`) and RGB tuples (`[r, g, b]`).

### CommonJS

```js
const { isLightText } = require("black-or-white-text");
```

## Why This Exists

Choosing text color on a dynamic background is a common problem — and most solutions get it wrong:

| Approach | Problem |
|---|---|
| **Simple luminance threshold** | Picks a single cutoff (e.g. 128) that fails on mid-range colors like teal, olive, or dark orange |
| **WCAG relative luminance** | Designed for contrast *ratios*, not for a binary black/white decision — often over-complicates a simple choice |
| **Hardcoded lookups** | Doesn't scale to arbitrary colors |

`black-or-white-text` uses a **logistic regression model** trained on color/contrast data. Instead of a hand-tuned threshold, it learned the boundary from real data — a single sigmoid function, no dependencies, under 1KB.

## Use Cases

- **Theming** — auto-pick text color for user-chosen brand colors
- **Badges & tags** — readable labels on any background
- **Data visualization** — legible labels on colored chart segments
- **Dark mode** — dynamically adapt text when backgrounds shift
- **Avatars** — overlay initials on generated background colors
- **CMS / admin panels** — let editors pick colors without worrying about readability

## API

### `isLightText(color: [number, number, number] | string): boolean`

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `[number, number, number] \| string` | An RGB tuple (each 0–255) or a hex string (`"#fff"`, `"#ffffff"`, `"fff"`, `"ffffff"`) |

**Returns** `true` if you should use light (white) text, `false` if dark (black) text is better.

## Features

- **Zero dependencies**
- **< 1KB** minified + gzipped
- **ESM + CommonJS** dual package
- **Full TypeScript** types included
- **Hex + RGB** input support
- **Logistic regression** — trained, not hand-tuned

## License

MIT
