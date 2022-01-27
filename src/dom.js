/**
 * Puts an element in an array if it is not already an array.
 * @template T the type of element to put into an array
 * @param {Recipes.MaybeArray<T>} x the object to convert
 * @return {T[]} the `x` array, or an array containing `x` if it is not an array
 */
const boxArray = x =>
    x === null || x === undefined ? [ ] : (Array.isArray(x) ? x : [ x ]);

/**
 * Keeps a number `x` between `min` and `max` by wrapping it around.
 * @param {number} x the number to keep between `min` and `max`
 * @param {number} min the minimum `x` can be before becoming `max`
 * @param {number} max the maximum `x` can be before becoming `min`
 * @return {number} the wrapped value
 */
const wrap = (x, min, max) => {
    const normalized = (x - min) % (max + 1 - min);
    return (normalized < 0 ? max + 1 : min) + normalized;
};

/**
 * Keeps a number `x` between `min` and `max` either by wrapping or clamping.
 * @param {number} x the number to keep between `min` and `max`
 * @param {number} min the minimum that `x` is allowed to be
 * @param {number} max the maximum that `x` is allowed to be
 * @param {boolean} [wrapMin] if `true`, wrap min value. Otherwise clamp.
 * @param {boolean} [wrapMax] if `true`, wrap max value. Otherwise clamp.
 * @return {number} the clamped/wrapped value
 */
const clamp = (x, min, max, wrapMin, wrapMax) =>
    (wrapMin && x < min) || (wrapMax && x > max)
        ? wrap(x, min, max)
        : Math.max(min, Math.min(max, x));

/**
 * Finds elements within a given root that match a given selector
 * @param {string} s find all elements within `e` that match this selector
 * @param {HTMLElement} [e] the root element to search within
 * @return {HTMLElement[]} the elements that matched `s` within `e`
 */
export const select = (s, e=document.body) => Array.from(e.querySelectorAll(s));

/**
 * Creates an HTML element, adding children and attributes if needed.
 * @template {keyof HTMLElementTagNameMap} T the tag name to create
 * @param {T} tag
 * @param {Recipes.Attributes<T>} attributes
 * @param {Recipes.MaybeArray<Recipes.Child>} children
 */
const h = (tag, attributes, children = [ ]) => {
    const dom = document.createElement(tag);

    for(const key in attributes) {
        const value = /** @type {any} */(attributes)[key];

        if (key === 'style' && attributes.style) {
            Object.assign(dom.style, attributes.style);

        } else if (key === 'dataset' && attributes.dataset) {
            Object.assign(dom.dataset, attributes.dataset);

        } else if (key === 'classList' && attributes.classList) {
            for(const name of attributes.classList) {
                if (name) {
                    dom.classList.add(name);
                }
            }

        } else if (key === 'className' && value) {
            dom.className = String(value);

        } else if (key.startsWith('on') && value instanceof Function) {
            dom.addEventListener(key.slice(2), value);

        } else if (key && (value || value === '')) {
            dom.setAttribute(key, String(value));
        }
    }

    for(const child of boxArray(children)) {
        if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child) {
            dom.appendChild(child);
        }
    }

    return dom;
};

/**
 * Creates a recipe button for a given recipe.
 * @param {Recipes.Recipe} recipe the recipe to create DOM for
 * @return {HTMLElement} the recipe button
 */
export const getButton = recipe => {
    const { title, image, url } = recipe;

    return h('button', { className: 'recipe-toggle' }, [
        h('h2', { }, title),
        h('img', { src: image }),
        h('a', { href: url }, '(link)')
    ]);
};

/**
 * Creates a recipe table for a given recipe.
 * @param {Recipes.Recipe} recipe the recipe to create DOM for
 * @return {HTMLElement} the recipe table
 */
export const getTable = recipe => {
    const { ingredients, steps } = recipe;

    const lowerIngredients = ingredients.map(x => x.toLowerCase());
    const max = ingredients.length - 1;

    /**
     * Finds the index of a particular ingredient (or -1 if not found).
     * @param {string} target the (all lowercase) ingredient substring
     * @param {number} [index=-1] start searching after this index
     */
    const findIngredient = (target, index = -1) =>
        lowerIngredients.findIndex((x, i) => i > index && x.includes(target));

    /** @type {Recipes.RecipeRow[]} */
    const rows = ingredients.map((ingredient) => ({ ingredient, cells: [ ] }));

    for(const step of steps) {
        const [ rangeStart, count ] = step.range;
        const isCountString = typeof count === 'string';

        const start = typeof rangeStart === 'string'
            ? clamp(findIngredient(rangeStart.toLowerCase()), 0, max)
            : wrap(rangeStart, 0, max);

        const end =
            count === undefined ? start :
            isCountString ? clamp(findIngredient(count, start), start, max) :
            clamp(count + start - (count > 0 ? 1 : 0), start, max, true, false);

        const cell = { step, indexStart: start, indexEnd: end };
        for(let i = start; i <= end; i += 1) {
            rows[i].cells.push(cell);
        }
    }

    /** @type {HTMLElement[]} */
    const domChildren = [ ];

    const columnCount = rows.reduce(
        (oldMax, x) => Math.max(oldMax, x.cells.length + 1),
        1
    );
    for(const [ rowIndex, row ] of rows.entries()) {
        const indexParity = rowIndex % 2 === 0 ? 'even' : 'odd';
        const width = columnCount - row.cells.length;
        const className = `c${width} start-${indexParity}`;
        domChildren.push(h('div', { className }, row.ingredient));
        for(const { indexStart, indexEnd, step } of row.cells) {
            if (rowIndex === indexStart) {
                const add = (indexEnd - indexStart + 1).toString();
                const dom = h('div', { dataset: { add } });
                dom.innerHTML = step.step;
                domChildren.push(dom);
            }
        }
    }

    const className = `grid grid-${columnCount} recipe hidden`;
    return h('div', { className }, domChildren);
};
