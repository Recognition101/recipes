export type Recipes = {
    recipes: Recipe[];
};

export type Recipe = {
    title: string;
    image: string;
    url: string;
    ingredients: string[];
    steps: Step[];
};

/**
 * A step is an instruction for how to combine a range of ingredients.
 */
export type Step = {
    /**
     * Gets a range of ingredients. A tuple of the form: [`start`, `end`].
     *
     * If `start` is a...
     *  - String: find first ingredient containing `start` (ignore case).
     *  - Number N: The Nth ingredient in the list.
     *  - Number -1: The last ingredient in the list.
     *
     * If `end` is a...
     *  - String: find the next match (after `start`) containing `end`.
     *  - Number N: The range will be of size N.
     *  - Number -1: The range will span all remaining ingredients.
     *  - Empty: The range will be of size 1 (contain only `start`).
     */
    range: [ string | number, string | number ] | [ string | number ];

    /** The instructions used to combine the ingredients. */
    step: string;
};

export type RecipeOptions = {
    favorites: number[];
    sort: string;
    filter: string;
};

export type Attributes<T extends keyof HTMLElementTagNameMap> =
    Partial<Omit<HTMLElementTagNameMap[T], keyof AttributesExtra>>
    & Partial<AttributesExtra>;

export type AttributesExtra = {
    classList: (string|null)[];
    dataset: { [key: string]: string };
    placeholder: string;
    style: { [ key in keyof CSSStyleDeclaration ]?: string };
};

export type RecipeRow = {
    ingredient: string;
    cells: RecipeRowCell[];
};

export type RecipeRowCell = {
    indexStart: number;
    indexEnd: number;
    step: Step;
}

export type Child = Element | string | null;

export type MaybeArray<T> = T | T[];
