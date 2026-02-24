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

isLightText([0, 0, 0]);       // true  → use white text on black
isLightText([255, 255, 255]); // false → use black text on white
isLightText([44, 62, 80]);    // true  → use white text on dark blue
```

### CommonJS

```js
const { isLightText } = require("black-or-white-text");
```

## API

### `isLightText(rgb: [number, number, number]): boolean`

| Parameter | Type | Description |
|-----------|------|-------------|
| `rgb` | `[number, number, number]` | An RGB tuple where each value is 0–255 |

**Returns** `true` if you should use light (white) text, `false` if dark (black) text is better.

## License

MIT
