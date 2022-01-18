/**
 * Finds elements within a given root that match a given selector
 * @param {string} s find all elements within `e` that match this selector
 * @param {HTMLElement} [e] the root element to search within
 * @return {HTMLElement[]} the elements that matched `s` within `e`
 */
export const select = (s, e=document.body) => Array.from(e.querySelectorAll(s));

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

    for(const cell of select('.start', grid)) {
        addHeightsForRow(spanningCells, cell);
        maxLength = Math.max(maxLength, spanningCells.length);
        spanningCells = spanningCells.map(x => x - 1).filter(x => x > 0);
    }

    return maxLength;
};

/**
 * Adds the `c<width>` classes to each `.start` element in a grid.
 * @param {HTMLElement} grid the grid whose row starts we will add classes to
 */
export const addColumnSpans = grid => {
    let spanningCells = /** @type {number[]} */([]);
    const width = getColumnCount(grid);
    grid.classList.add('grid-' + width);

    for(const [i, cell] of select('.start', grid).entries()) {
        addHeightsForRow(spanningCells, cell);
        cell.className = 'start';
        cell.classList.add('c' + (width - spanningCells.length + 1));
        cell.classList.add(i % 2 === 0 ? 'start-even' : 'start-odd');
        spanningCells = spanningCells.map(x => x - 1).filter(x => x > 0);
    }
};
