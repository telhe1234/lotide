# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @telhe1234/lotide`

**Require it:**

`const _ = require('@telhe1234/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head(...)`: This function head returns the first element of an array
* `tail(...)`: This function returns an array with every element except the head (first element) of the array
* `middle(...)`: This function returns the middle most element of an array in the case of an array with odd length, and it returns the two middle most elements in the case of an array with even length.
