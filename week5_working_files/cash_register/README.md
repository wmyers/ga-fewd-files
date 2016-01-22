###Cash Register

Starting with the HTML let's write some pseudo code for a cash register.

Next we will code the cash register using the following jQuery methods:

(Let's look up the methods at <https://api.jquery.com/> as we go along)

For binding a submit event listener function:
`submit()`

What will happen in the function?

Get a new value from an html element:
`val()`

We will need to format the value so that it is a float number (this is a Vanilla JS function)
`parseFloat()`

We will need to add new html elements to a container
`append()`

We will need to update the content of an html element
`html()`

####Something New

We will need another function that formats our float number so that it looks like currency. This function will take a *number* as an **argument** and **return** a formatted *string*.

We will also need to use this vanilla JS method in our currency formatter function:
`toFixed()`
