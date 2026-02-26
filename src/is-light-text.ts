const MODEL_COEFFICIENTS = [0.027291010670827655, 0.0688366354332175, 0.006274975111680701] as const;
const MODEL_INTERCEPT = -13.936983449682737;

type Color = [number, number, number] | string;

function parseColor(color: Color): [number, number, number] {
  if (Array.isArray(color)) return color;

  let hex = color.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(hex)) {
    throw new Error(`Invalid hex color: "${color}"`);
  }

  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}

/**
 * Determines whether light (white) text should be used on a given background color.
 *
 * Uses a logistic regression model trained on color/readability data to predict
 * the optimal text color for contrast and accessibility.
 *
 * @param color - An RGB tuple `[r, g, b]` (each 0–255) or a hex string (`"#fff"`, `"#ffffff"`, `"fff"`, `"ffffff"`).
 * @returns `true` if white/light text is recommended, `false` if black/dark text is better.
 *
 * @example
 * ```ts
 * isLightText("#000000");        // true  — use white text on black background
 * isLightText("#fff");           // false — use black text on white background
 * isLightText([44, 62, 80]);    // true  — use white text on dark blue
 * ```
 */
const isLightText = (color: Color): boolean => {
  const rgb = parseColor(color);

  const score =
    rgb[0] * MODEL_COEFFICIENTS[0] +
    rgb[1] * MODEL_COEFFICIENTS[1] +
    rgb[2] * MODEL_COEFFICIENTS[2] +
    MODEL_INTERCEPT;

  return 1 / (1 + Math.exp(-score)) <= 0.5;
};

export default isLightText;
export { isLightText };
