/* eslint-disable no-console */
import { select, findText } from './lib.js';

const data = { recipes: [ ] };

/**
 * @param {string} ing
 * @return {string}
 */
const getSimple = ing =>
    ing.replace(/^\s*\d+([-/.]\d+)?\s*(oz|rotisserie|4"|ears|g|ounces?|very|thin|lbs|inch|medium|slices|roma|6-inch|med|cloves|large|small|cloves|loaf|ripe|fajita size|inches|whole|c|tb?sp|large|cups?|yellow|head|lg|sm|in|clove|cranks|bunch|can|lb)\.?\s+/i, '') //eslint-disable-line
        .replace(/^\s*\d+"?([-/.]\d+)?\s+/i, '')
        .replace(/^\s*handful\s+/i, '')
        .replace(/^.75\slbs\s/i, '')
        .replace(/^1.2-1.6\slbs\s/i, '')
        .replace(/\(.*\)\s*$/i, '')
        .replace(/,.*$/i, '')
        .trim();

for(const button of select('.recipe-toggle')) {
    const grid = button.nextElementSibling;
    if (!grid
        || !(grid instanceof HTMLElement)
        || !grid.classList.contains('grid')) {
        console.error('MISSING GRID AFTER BUTTON');
        break;
    }

    const title = select('h2', button)[0]?.innerText ?? '';
    const image = select('img', button)[0]?.getAttribute('src') ?? '';
    const url = select('a', button)[0]?.getAttribute('href') ?? '';

    const isMine =
        title === 'Chicken Parmesan' ||
        title === 'Smoothie' ||
        title === 'Tempura Shrimp';

    if (!title || (!isMine && (!image || !url))) {
        console.error('H2/IMG/LINK MISSING');
        break;
    }

    const children = /** @type {HTMLElement[]} */(Array.from(grid.children));
    const domIngredients = select('.start', grid);
    const ingredients = domIngredients.map(x => x.innerText.trim());

    /** @type {{from?: string, to?: string, toEnd?: boolean, step: string}[]} */
    const steps = [ ];
    let domIngredient = domIngredients[0];
    const domIngredientLast = domIngredients[domIngredients.length - 1];

    for(const item of children) {
        if (item.classList.contains('start')) {
            domIngredient = item;
        } else {
            const fullIngredient = domIngredient.innerText.toLowerCase().trim();
            const simpleIngredient = getSimple(fullIngredient);

            const add = parseInt(item.getAttribute('data-add') || '0', 10);
            const step = item.innerHTML.trim().replace(/\n[ ]+/g, '\n')
                .replaceAll('°', '&deg;');
            const findSimple = findText(
                children[0],
                simpleIngredient,
                '.start'
            );
            const findFull = findText(children[0], fullIngredient, '.start');
            const from = findSimple === domIngredient ? simpleIngredient :
                findFull === domIngredient ? fullIngredient : null;
            const fromMaybe = !from || domIngredient === domIngredients[0]
                ? 0
                : from;

            if (from && add === domIngredients.length) {
                steps.push({ from: fromMaybe, to: -1, step });

            } else if (from && add > 1) {
                const index = domIngredients.indexOf(domIngredient);
                const domIngredientEnd = domIngredients[index + add - 1];
                if (!domIngredientEnd) {
                    console.error('BAD DATA-ADD = ' + add, button);
                    break;
                }

                const endFull = domIngredientEnd.innerText.toLowerCase().trim();
                const endSimple = getSimple(endFull);
                const endFullDom = findText(domIngredient, endFull, '.start');
                const endSimpleDom = findText(
                    domIngredient,
                    endSimple,
                    '.start'
                );

                const to = endSimpleDom === domIngredientEnd ? endSimple :
                    endFullDom === domIngredientEnd ? endFull : null;

                if (to) {
                    if (domIngredientEnd === domIngredientLast) {
                        steps.push({ from: fromMaybe, to: -1, step });
                    } else {
                        steps.push({ from: fromMaybe, to, step });
                    }

                } else {
                    console.error('No valid to: ' + endFull, button);
                }
            } else if (from) {
                steps.push({ from: fromMaybe, step });

            } else {
                console.error('No valid from: ' + fullIngredient, button);
            }
        }
    }

    data.recipes.push({
        title, image, url, ingredients, steps
    });
}

/**
 * @param {string|number} x
 * @return {string}
 */
const escape = x => typeof x === 'number'
    ? x.toString()
    : `'${x.replaceAll('\'', '\\\'').replaceAll('\n', '<br/>')}'`;

const recipeStrings = data.recipes.map(recipe => {
    const ingredients = recipe.ingredients.map(x => escape(x));
    const steps = recipe.steps.map(x =>
        (x.to
            ? `            range: [ ${escape(x.from)}, ${escape(x.to)} ],\n`
            : `            range: [ ${escape(x.from)} ],\n`) +
        `            step: ${escape(x.step)}`
    ).join('\n        }, {\n');

    return `{
    title: ${escape(recipe.title)},
    image: ${escape(recipe.image)},
    url: ${escape(recipe.url)},
    ingredients: [
        ${ingredients.join(',\n        ')}
    ],
    steps: [
        {
${steps}
        }
    ]
}`;
});

console.log(recipeStrings.join(',\n'));
