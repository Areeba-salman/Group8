import { test } from "node:test";
import assert from "node:assert/strict";
import { add, multiply, subtract } from "../src/calc.js";

test("add works", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply works", () => {
  assert.equal(multiply(4, 5), 20);
});

test("subtract works", () => {
  assert.equal(subtract(5, 3), 2);
});
