# Recipes

This is just a small collection of recipes. They are reformatted to take minimal space, and are set up in cards. To see each recipe card, tap the title or picture of the recipe. You can view the collection here:

[http://recognition101.github.io/recipes/](http://recognition101.github.io/recipes/)


## Reading a Card

All the ingredients are listed along the left edge. Starting from the top left and moving right, perform each step. When two rows in the table merge, that means to mix those ingredients (the method is usually specified in the table cell). By doing this for each ingredient, eventually all the rows merge on the very right, leaving you with your fully prepared dish.


## Adding a Recipe

A recipe can be added by modifying the `src/data.js` file. Add a new object to the end of the `recipes` array containing the following:

 * `title` - The name of the recipe.
 * `image` - A URL pointing to the image of the recipe.
 * `url` - A URL pointing to the recipe.
 * `ingredients` - A list of ingredients.
 * `steps` - A list of step objects. Each step object contains two properties:
    * `range` - The list of ingredients to combine (see "Step Range" below for details).
    * `step` - The instructions for how to combine all the ingredients in the `range`.

### Step Range

Represents a contiguous subset of the `ingredients` list. A list of the form: [`start`, `end`].

If `start` is a...
  - String: find first ingredient containing `start` (ignore case).
  - Number N: The Nth ingredient in the list.
  - Number -1: The last ingredient in the list.

If `end` is a...
  - String: find the next match (after `start`) containing `end`.
  - Number N: The range will be of size N.
  - Number -1: The range will span all remaining ingredients.
  - Empty: The range will be of size 1 (contain only `start`).


## Features

 1. Responsive Design (Desktop / Mobile / Tablet)
 2. iOS Optimizations (touch)
 3. Offline support
