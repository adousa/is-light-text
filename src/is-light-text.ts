const MODEL_COEFFICIENTS = [0.027291010670827655, 0.0688366354332175, 0.006274975111680701] as const;
const MODEL_INTERCEPT = -13.936983449682737;

/**
 * Determines whether light (white) text should be used on a given background color.
 *
 * Uses a logistic regression model trained on color/readability data to predict
 * the optimal text color for contrast and accessibility.
 *
 * @param rgb - A tuple of `[red, green, blue]` values, each in the range 0–255.
 * @returns `true` if white/light text is recommended, `false` if black/dark text is better.
 *
 * @example
 * ```ts
 * isLightText([0, 0, 0]);       // true  — use white text on black background
 * isLightText([255, 255, 255]); // false — use black text on white background
 * isLightText([44, 62, 80]);    // true  — use white text on dark blue
 * ```
 */
const isLightText = (rgb: [number, number, number]): boolean => {
  const score =
    rgb[0] * MODEL_COEFFICIENTS[0] +
    rgb[1] * MODEL_COEFFICIENTS[1] +
    rgb[2] * MODEL_COEFFICIENTS[2] +
    MODEL_INTERCEPT;

  return 1 / (1 + Math.exp(-score)) <= 0.5;
};

export default isLightText;
export { isLightText };
