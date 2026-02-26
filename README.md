# black-or-white-text

A tiny, zero-dependency utility that tells you whether to use **black** or **white** text on a given background color for optimal readability.

It uses a logistic-regression model trained on color/contrast data — no magic thresholds, just a fast sigmoid.

**[Try the interactive demo →](https://adousa.github.io/is-light-text/)**

## Install

```bash
npm install black-or-white-text
```

## Usage

```ts
import isLightText from "black-or-white-text";

// Hex strings
isLightText("#000000");        // true  → use white text on black
isLightText("#fff");           // false → use black text on white
isLightText("2c3e50");        // true  → use white text on dark blue

// RGB tuples
isLightText([0, 0, 0]);       // true
isLightText([255, 255, 255]); // false
```

### CommonJS

```js
const { isLightText } = require("black-or-white-text");
```

## API

### `isLightText(color: [number, number, number] | string): boolean`

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `[number, number, number] \| string` | An RGB tuple (each 0–255) or a hex string (`"#fff"`, `"#ffffff"`, `"fff"`, `"ffffff"`) |

**Returns** `true` if you should use light (white) text, `false` if dark (black) text is better.

## License

MIT
