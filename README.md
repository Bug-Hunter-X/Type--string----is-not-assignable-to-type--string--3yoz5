# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## The Problem

The `greeter` function is defined to accept a single string argument and return a greeting.  However, the code attempts to pass an array of strings to it.

## The Solution

The solution involves either modifying the `greeter` function to accept an array of strings, or modifying the way the array is handled.  The provided solution demonstrates iterating over the array and calling the `greeter` function for each element.