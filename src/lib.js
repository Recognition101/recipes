/**
 * Finds elements within a given root that match a given selector
 * @param {string} s find all elements within `e` that match this selector
 * @param {HTMLElement} [e] the root element to search within
 * @return {HTMLElement[]} the elements that matched `s` within `e`
 */
export const select = (s, e=document.body) => Array.from(e.querySelectorAll(s));

/**
 * Gets the next sibling that matches a given selector.
 * @param {Element|null|undefined} element the element to start searching after
 * @param {string|null} [selector] the selector to find the next match of
 * @return {Element|null} the next matching sibling, or null if none match
 */
const getNextMatchingSibling = (element, selector) => {
    while(element) {
        element = element.nextElementSibling;
        if (element && (!selector || element.matches(selector))) {
            return element;
        }
    }
    return null;
};

/**
 * Finds the first element that contains a text fragment.
 * @param {Element|null|undefined} element search this and its next siblings
 * @param {string} fragment the string to look for
 * @param {string|null} [selector] if given, only consider matching elements
 * @return {HTMLElement|null} the matching node, or `null` if none matched
 */
const findText = (element, fragment, selector) => {
    while(element) {
        if (element instanceof HTMLElement
            && element.innerText.toLowerCase().includes(fragment)) {
            return element;
        }
        element = getNextMatchingSibling(element, selector);
    }
    return null;
};

/**
 * Gets the length of a slice of DOM siblings with a given `start` and `end`.
 * @param {Element|null|undefined} start the start of the sibling slice to count
 * @param {Element|null|undefined} end the end of the sibling slice to count
 * @return {number} `[ start, ..., end ].length`, or 0 if `start` is `end`
 */
const getSiblingSliceCount = (start, end) => {
    let index = 0;
    while(start && start !== end) {
        start = start.nextElementSibling;
        index += 1;
    }
    return index;
};

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
    for(const cell of select('[data-span]', grid)) {
        const parent = cell.parentNode;
        const domInit = parent?.firstElementChild;
        const span = cell.getAttribute('data-span') || '';
        const [ from, last ] = span.split('::');
        const domFrom = findText(domInit, from, '.start');
        const domLast = findText(domFrom, last || from || '', '.start');
        const insertBefore = getNextMatchingSibling(domFrom, '.start');

        if (parent && domFrom && domLast && insertBefore) {
            parent.insertBefore(cell, insertBefore);
            const count = getSiblingSliceCount(domFrom, domLast);
            cell.setAttribute('data-add', count.toString());
        } else {
            console.error(`Could not find referenced data-span="${span}"`);
        }
    }

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
