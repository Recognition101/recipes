/// <reference path="types.d.ts" />

import { recipes } from './src/data.js';
import { select, getButton, getTable } from './src/dom.js';

const recipeViews = recipes.map((recipe, index) => ({
    index,
    recipe,
    title: recipe.title.toLocaleLowerCase(),
    domButton: getButton(recipe),
    domTable: getTable(recipe)
}));

const domRecipes = select('#recipes')[0];
const domSort = select('#sort')[0];
const domFilter = select('#filter')[0];

if (!domRecipes || !domSort || !domFilter) {
    console.error('Missing DOM Element.'); // eslint-disable-line

} else {
    for(const view of recipeViews) {
        domRecipes.appendChild(view.domButton);
        domRecipes.appendChild(view.domTable);
    }


    // ---- EVENT HANDLING AND SETUP ----
    domSort.addEventListener('change', ev => {
        if (!(ev.target instanceof HTMLSelectElement)) {
            return;
        }

        const sort = ev.target.value;
        const isName = sort.startsWith('name');
        const isTime = sort.startsWith('time');
        const order = sort === 'name-a' || sort === 'time-old' ? 1 : -1;

        recipeViews.sort((a, b) =>
            isTime ? order * (a.index - b.index) :
            isName ? order * a.title.localeCompare(b.title) : 0
        );

        for(const view of recipeViews) {
            view.domTable.classList.add('hidden');
            domRecipes.appendChild(view.domButton);
            domRecipes.appendChild(view.domTable);
        }
    });

    domFilter.addEventListener('input', ev => {
        if (!(ev.target instanceof HTMLInputElement)) {
            return;
        }
        const filter = ev.target.value.toLocaleLowerCase();
        for(const view of recipeViews) {
            const doShow = view.title.includes(filter);
            view.domButton.classList.toggle('hidden', !doShow);
            view.domTable.classList.add('hidden');
        }
    });

    domRecipes.addEventListener('click', ev => {
        const target = /** @type {HTMLElement} */(ev.target);
        const targetTag = target.tagName.toLowerCase();

        const recipeBtn = target.closest('.recipe-toggle');
        const recipeSwap = recipeBtn && recipeBtn.nextElementSibling;
        const doSwap = recipeSwap && recipeSwap.classList.contains('recipe');

        if (recipeBtn && recipeSwap && doSwap && targetTag !== 'a') {
            const isVisible = recipeSwap.classList.contains('hidden');
            recipeSwap.classList.toggle('hidden', !isVisible);
        }
    });

}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./cache-worker.js', { scope: './' });
}
