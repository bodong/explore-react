import React from "react";

export function multiply(number, multiplier) {
  return number * multiplier;
}

export function add(number1, number2) {
  return number1 + number2;
}

export function even(number) {
  if (number > 0 && number % 2 == 0) {
    return true;
  }
  return false;
}
