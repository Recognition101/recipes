import { select, addColumnSpans, findText } from './lib.js';

// ---- EVENT HANDLING AND SETUP ----

document.addEventListener('click', ev => {
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

select('.recipe-toggle + .recipe').forEach(el => el.classList.add('hidden'));
select('.grid').forEach(el => addColumnSpans(el));
