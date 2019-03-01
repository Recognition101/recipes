/**
 * Finds elements within a given root that match a given selector
 * @param {string} sel find all elements within `el` that match this selector
 * @param {HTMLElement} [el] the root element to search within
 * @return {HTMLElement[]} the elements that matched `sel` within `el`
 */
const $$ = (sel, el=document.body) => Array.from(el.querySelectorAll(sel));

/**
 * Given a cell that starts a row, append the `data-add` attribute value all
 * cells in this row to a given array of numbers.
 * @param {number[]} cellHeights `data-add` values will be appended to this
 * @param {Element|null} cell the cell that starts a row
 */
const addHeightsForRow = (cellHeights, cell) => {
    while(cell) {
        cellHeights.push(parseInt(cell.getAttribute('data-add') || '0') || 0);
        cell = cell.nextElementSibling;
        cell = cell && cell.classList.contains('start') ? null : cell;
    }
};

/**
 * Gets the number of columns in a given grid.
 * @param {HTMLElement} grid a grid to determine the column count of
 * @return {number} the number of columns in this grid
 */
const getColumnCount = grid => {
    let spanningCells = /** @type {number[]} */([]);
    let maxLength = 0;

    Array.from(grid.getElementsByClassName('start')).forEach(cell => {
        addHeightsForRow(spanningCells, cell);
        maxLength = Math.max(maxLength, spanningCells.length);
        spanningCells = spanningCells.map(x => x - 1).filter(x => x > 0);
    });

    return maxLength;
};

/**
 * Adds the `c<width>` classes to each `.start` element in a grid.
 * @param {HTMLElement} grid the grid whose row starts we will add classes to
 */
const addColumnSpans = grid => {
    let spanningCells = /** @type {number[]} */([]);
    const width = getColumnCount(grid);
    grid.classList.add('grid-' + width);

    Array.from(grid.getElementsByClassName('start')).forEach((cell, i) => {
        addHeightsForRow(spanningCells, cell);
        cell.classList.add('c' + (width - spanningCells.length + 1));
        cell.classList.add(i % 2 === 0 ? 'start-even' : 'start-odd');
        spanningCells = spanningCells.map(x => x - 1).filter(x => x > 0);
    });
};

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

$$('.recipe').forEach(el => el.classList.add('hidden'));
$$('.grid').forEach(el => addColumnSpans(el));

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./cache-worker.js', { scope: './' });
}