import { recipes } from './src/data.js';
import { select, getButton, getTable } from './src/dom.js';

const storeKey = 'r101-recipes-options';

/**
 * @typedef {import('./src/types').RecipeOptions} RecipeOptions
 */

// Helper Functions

/**
 * Filters an array in-place.
 * @template T
 * @param {T[]} list the list to filter
 * @param {(item: T) => boolean} predicate the filter function
 * @return {T[]} the same list, all `x` s.t. `predicate(x) === false` removed
 */
const filter = (list, predicate) => {
    let writeIndex = 0;
    for(let readIndex = 0; readIndex < list.length; readIndex += 1) {
        if (predicate(list[readIndex])) {
            if (writeIndex !== readIndex) {
                list[writeIndex] = list[readIndex];
            }
            writeIndex += 1;
        }
    }
    list.length = writeIndex;
    return list;
};

/**
 * Reads the options out of local storage.
 * @return {RecipeOptions} the recipe options stored
 */
const readStorage = () => {
    try {
        const optionsJson = window.localStorage.getItem(storeKey) ?? '';
        const options = /** @type {RecipeOptions} */(JSON.parse(optionsJson));
        const isValid = Array.isArray(options.favorites)
            && typeof options.filter === 'string'
            && typeof options.sort === 'string';

        if (isValid) {
            return options;
        }
        return options;
    } catch(e) { }

    return { favorites: [], sort: 'time-old', filter: '' };
}

/**
 * Attempts to write the options to local storage.
 * @param {RecipeOptions} options
 * @return {string} the JSON that was written
 */
const writeStorage = (options) => {
    const json = JSON.stringify(options, null, '    ');
    try { window.localStorage.setItem(storeKey, json); } catch(e) { }
    return json;
};

/**
 * Creates the set of views to be displayed/manipulated.
 * @param {RecipeOptions} options the application options
 */
const makeViews = options => {
    const favoriteSet = new Set(options.favorites);
    return recipes.map((recipe, index) => {
        const button = getButton(recipe, index, favoriteSet.has(index));
        const { domButton, domFavorite } = button;
        const title = recipe.title.toLocaleLowerCase();
        const domTable = getTable(recipe);
        return { index, recipe, title, domButton, domFavorite, domTable };
    });
};

// Initialization Code

let idOpen = /** @type {number|null} */(null);
let curSort = /** @type {string|null} */(null);
const options = readStorage();
const recipeViews = makeViews(options);
const selSort = select('#sort')[0];
const domSort = selSort instanceof HTMLSelectElement ? selSort : null;
const selFilter = select('#filter')[0];
const domFilter = selFilter instanceof HTMLInputElement ? selFilter : null;
const domRecipes = select('#recipes')[0];
const selExport = select('#export')[0];
const domExport = selExport instanceof HTMLAnchorElement ? selExport : null;
const selImport = select('#import')[0];
const domImport = selImport instanceof HTMLInputElement ? selImport : null;
const selKeepOn = select('#keep-on')[0];
const domKeepOn = selKeepOn instanceof HTMLInputElement ? selKeepOn : null;

const hasDom = domRecipes
    && domSort
    && domFilter
    && domExport
    && domImport
    && domKeepOn;

if (!hasDom) {
    console.error('Missing DOM Element.'); // eslint-disable-line

} else {
    /**
     * Updates all UI on the page.
     * @param {boolean} [forceResort] if true, resort all recipes
     */
    const updateUi = (forceResort) => {
        const favoriteMap = new Map(
            options.favorites.map((id, i) => [id, i])
        );

        // Save Changes
        const json = writeStorage(options);

        // Update Controls Values (Export / Sort / Filter)
        const dataBlob = new Blob([ json ], { type: 'octet/stream' });
        const dataUrl = window.URL.createObjectURL(dataBlob);
        domExport.href = dataUrl;
        domSort.value = options.sort;
        domFilter.value = options.filter;

        // Sort (If Necessary)
        const sort = options.sort;
        if (curSort !== sort || forceResort) {
            const isName = sort.startsWith('name');
            const order = sort === 'name-a' || sort === 'time-old' ? 1 : -1;

            recipeViews.sort((a, b) => {
                const aFavorite = favoriteMap.get(a.index);
                const bFavorite = favoriteMap.get(b.index);
                const isFavA = aFavorite !== undefined;
                const isFavB = bFavorite !== undefined;
                return isFavA && isFavB ? aFavorite - bFavorite :
                    isFavA && !isFavB ? -1 :
                    isFavB && !isFavA ? 1 :
                    isName
                        ? order * a.title.localeCompare(b.title)
                        : order * (a.index - b.index)
            });

            for(const view of recipeViews) {
                view.domTable.classList.add('hidden');
                domRecipes.appendChild(view.domButton);
                domRecipes.appendChild(view.domTable);
            }

            curSort = sort;
        }

        // Update Table Filter, Visibility, Favorites
        const filter = options.filter.toLocaleLowerCase();
        for(const view of recipeViews) {
            const doShow = view.title.includes(filter);
            view.domButton.classList.toggle('hidden', !doShow);
            view.domTable.classList.toggle('hidden', view.index !== idOpen);
            view.domFavorite.checked = favoriteMap.has(view.index);
        }
    };

    updateUi();

    // ---- EVENT HANDLING AND SETUP ----
    // Update Sort
    domSort.addEventListener('change', () => {
        options.sort = domSort.value;
        updateUi();
    });

    // Update Filter
    domFilter.addEventListener('input', () => {
        options.filter = domFilter.value;
        idOpen = null;
        updateUi();
    });

    // Update All Options
    domImport.addEventListener('change', async () => {
        const file = domImport.files?.item(0);
        const text = file ? await file.text() : 'null';
        const newOptions = /** @type {RecipeOptions} */(JSON.parse(text));
        if (newOptions && Array.isArray(newOptions.favorites)) {
            Object.assign(options, newOptions);
            updateUi();
        }
    });

    // Update Table Visibility, Favorite Order
    domRecipes.addEventListener('click', ev => {
        const target = /** @type {HTMLElement} */(ev.target);
        const domLeft = target.closest('.recipe-options-move-left');
        const domRight = target.closest('.recipe-options-move-right');
        const domOptions = target.closest('.recipe-options');
        const domRecipe = target.closest('.recipe-toggle');
        const idString = domRecipe?.getAttribute('data-id') ?? null;
        const id = idString ? parseInt(idString, 10) : null;

        if (id !== null && !domOptions) {
            idOpen = idOpen === id ? null : id;
            updateUi();

        } else if (id !== null && (domLeft || domRight)) {
            const oldIndex = options.favorites.findIndex(x => x === id);
            const newIndex = oldIndex + (domLeft ? -1 : 1);
            const maxIndex = options.favorites.length;
            if (oldIndex >= 0 && newIndex >= 0 && newIndex < maxIndex) {
                const favorite = options.favorites[oldIndex];
                options.favorites[oldIndex] = options.favorites[newIndex];
                options.favorites[newIndex] = favorite;
                updateUi(true);
            }
        }
    });

    // Update Favorite Contents
    domRecipes.addEventListener('change', ({ target }) => {
        const input = target instanceof HTMLInputElement ? target : null;
        const recipeBtn = input?.closest('.recipe-toggle');
        const idString = recipeBtn?.getAttribute('data-id') ?? null;
        const id = idString !== null ? parseInt(idString, 10) : null;

        if (input && recipeBtn && id !== null) {
            filter(options.favorites, x => x !== id);
            if (input.checked) {
                options.favorites.push(id);
            }
            updateUi(true);
        }
    });

    // Keep Screen On
    let wakeLock = /** @type {WakeLockSentinel|null} */(null);
    domKeepOn.addEventListener('change', async () => {
        if (wakeLock) {
            await wakeLock.release();
            wakeLock = null;
        }
        if (domKeepOn.checked) {
            wakeLock = await navigator.wakeLock.request('screen');
        }
    });
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./cache-worker.js', { scope: './' });
}
