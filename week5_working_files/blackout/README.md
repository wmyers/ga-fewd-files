###Blackout

Let's think about pseudo code.

Let's look up the methods at <https://api.jquery.com/> as we go along.


* First we need to create a `function` that will be called when the light-switch button is clicked

* Inside this function we just want to select the `<body>` and add or remove a class using the following jQuery functions `addClass`, `removeClass`.

* We need a variable to store *outside of the function* to tell us the **state** of the light-switch.

* We need to check what the state of the light switch is using a **conditional**

* Finally we need to bind our function as an event listener to the light-switch button, using jQuery `click()`
