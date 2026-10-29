import { test } from "node:test";
import assert from "node:assert/strict";
import { add, multiply } from "../src/calc.js";

test("add works", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply works", () => {
  assert.equal(multiply(4, 5), 20);
});