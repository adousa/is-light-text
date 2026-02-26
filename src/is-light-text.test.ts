import { describe, it, expect } from "vitest";
import isLightText from "./is-light-text";

describe("isLightText", () => {
  describe("RGB tuples", () => {
    it("returns true for black (needs white text)", () => {
      expect(isLightText([0, 0, 0])).toBe(true);
    });

    it("returns false for white (needs black text)", () => {
      expect(isLightText([255, 255, 255])).toBe(false);
    });

    it("returns true for dark blue", () => {
      expect(isLightText([44, 62, 80])).toBe(true);
    });

    it("returns false for bright yellow", () => {
      expect(isLightText([255, 255, 0])).toBe(false);
    });

    it("returns true for dark red", () => {
      expect(isLightText([139, 0, 0])).toBe(true);
    });

    it("returns false for light gray", () => {
      expect(isLightText([200, 200, 200])).toBe(false);
    });

    it("returns true for dark gray", () => {
      expect(isLightText([50, 50, 50])).toBe(true);
    });

    it("returns true for navy", () => {
      expect(isLightText([0, 0, 128])).toBe(true);
    });

    it("returns false for lime green", () => {
      expect(isLightText([0, 255, 0])).toBe(false);
    });

    it("returns true for purple", () => {
      expect(isLightText([128, 0, 128])).toBe(true);
    });
  });

  describe("hex strings — 6-digit with #", () => {
    it("returns true for #000000", () => {
      expect(isLightText("#000000")).toBe(true);
    });

    it("returns false for #ffffff", () => {
      expect(isLightText("#ffffff")).toBe(false);
    });

    it("returns true for #2c3e50", () => {
      expect(isLightText("#2c3e50")).toBe(true);
    });

    it("returns false for #ecf0f1", () => {
      expect(isLightText("#ecf0f1")).toBe(false);
    });
  });

  describe("hex strings — 3-digit shorthand", () => {
    it("returns true for #000", () => {
      expect(isLightText("#000")).toBe(true);
    });

    it("returns false for #fff", () => {
      expect(isLightText("#fff")).toBe(false);
    });

    it("returns true for #333", () => {
      expect(isLightText("#333")).toBe(true);
    });

    it("returns false for #ccc", () => {
      expect(isLightText("#ccc")).toBe(false);
    });
  });

  describe("hex strings — without #", () => {
    it("returns true for 000000", () => {
      expect(isLightText("000000")).toBe(true);
    });

    it("returns false for ffffff", () => {
      expect(isLightText("ffffff")).toBe(false);
    });

    it("returns true for fff (3-digit without #)", () => {
      expect(isLightText("fff")).toBe(false);
    });
  });

  describe("hex strings — case insensitive", () => {
    it("handles uppercase hex", () => {
      expect(isLightText("#FF5733")).toBe(isLightText("#ff5733"));
    });

    it("handles mixed case hex", () => {
      expect(isLightText("#aAbBcC")).toBe(isLightText("#aabbcc"));
    });
  });

  describe("hex and RGB equivalence", () => {
    it("#000000 equals [0, 0, 0]", () => {
      expect(isLightText("#000000")).toBe(isLightText([0, 0, 0]));
    });

    it("#ffffff equals [255, 255, 255]", () => {
      expect(isLightText("#ffffff")).toBe(isLightText([255, 255, 255]));
    });

    it("#2c3e50 equals [44, 62, 80]", () => {
      expect(isLightText("#2c3e50")).toBe(isLightText([44, 62, 80]));
    });

    it("#ff5733 equals [255, 87, 51]", () => {
      expect(isLightText("#ff5733")).toBe(isLightText([255, 87, 51]));
    });
  });

  describe("invalid input", () => {
    it("throws on empty string", () => {
      expect(() => isLightText("")).toThrow("Invalid hex color");
    });

    it("throws on invalid hex characters", () => {
      expect(() => isLightText("#gggggg")).toThrow("Invalid hex color");
    });

    it("throws on wrong length", () => {
      expect(() => isLightText("#abcd")).toThrow("Invalid hex color");
    });

    it("throws on random string", () => {
      expect(() => isLightText("red")).toThrow("Invalid hex color");
    });
  });
});
