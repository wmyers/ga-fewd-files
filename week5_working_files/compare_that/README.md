We want a simple application that takes two inputted numbers (in an HTML page), compares them, and then updates the text in another HTML element as to whether Number A is greater than, less than, or the same as Number B.

We are starting to use `<form>` elements in the HTML like `<input>` and `<button>`. We will look more closely at forms in Week 8.

Let's look up the methods at <https://api.jquery.com/> as we go along

We will need to do the following:

* write a function that will be called each time we want to compare two numbers
* select the two number `<input>` elements with jQuery `$()`
* use **conditional** syntax to compare the numbers
* use the jQuery `val()` method to get the number in the inputs
* use the jQuery `html()` method to update the value of an html element
* use the jQuery `click()` method to bind our function to the `<button>` on the page
