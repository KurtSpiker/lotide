# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kurtspiker/lotide`

**Require it:**

`const _ = require('@kurtspiker/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of input array.
* `tail`: Returns the input array with the first element removed.
* `middle`: Return the middle element/elements of an input array.
* `eqArrays`: Returns the result of comparing two arrays.
* `assertArraysEqual`: Returns a log of the result of two arrays.