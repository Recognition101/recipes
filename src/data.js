/* eslint-disable max-len */

/** @type {Recipes.Recipe[]} */
export const recipes = [
    {
        title: 'Chicken Parmesan',
        image: '',
        url: '',
        ingredients: [
            'Egg',
            'Chicken',
            'Breadcrumbs'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Scramble'
            }, {
                range: [ 0, 'chicken' ],
                step: 'Dip'
            }, {
                range: [ 0, -1 ],
                step: 'Sprinkle / Cover'
            }, {
                range: [ 'chicken' ],
                step: 'Thaw, cut'
            }
        ]
    },
    {
        title: 'Smoothie',
        image: '',
        url: '',
        ingredients: [
            'Banana',
            '1 Cup Frozen Fruit',
            '2 Heaped Tbsps Yogurt',
            '1/4 Cup quick cook oats (not instant)',
            '1 Cup 1% Milk / soy milk / apple juice',
            '5 ice cubes'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Mix; Blend'
            }
        ]
    },
    {
        title: 'Smoothie V2',
        image: './images/smoothie-v2.jpg',
        url: 'https://www.blenderbabes.com/lifestyle-diet/dairy-free/copycat-jamba-juice-razzmatazz-smoothie-recipe-vegan/',
        ingredients: [
            '1 Cup Orange Juice',
            '3/4 Cup Non-Dairy Yogurt',
            '1/2 Banana',
            '2 Cups Frozen Fruit'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Blend on variable-low, turn up to variable-high<br/>smoothly over 2 seconds, switch to high, blend 30 seconds'
            }
        ]
    },
    {
        title: 'Tempura Shrimp',
        image: '',
        url: '',
        ingredients: [
            'Shrimp',
            'Flour',
            'Egg',
            'Panko',
            'Olive Oil'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Dry'
            }, {
                range: [ 0, 'flour' ],
                step: 'Toss / coat'
            }, {
                range: [ 0, 'egg' ],
                step: 'Dip'
            }, {
                range: [ 0, 'panko' ],
                step: 'Toss / coat'
            }, {
                range: [ 0, -1 ],
                step: 'Heat oil, fry'
            }
        ]
    },
    {
        title: 'Dragon Noodles',
        image: './images/dragon-noodles.jpg',
        url: 'http://www.budgetbytes.com/2012/08/spicy-noodles/',
        ingredients: [
            'Water',
            'Lo Mein Noodles',
            '1 Tbsp Brown Sugar',
            '1 Tbsp Soy Sauce',
            '1 Tbsp Sriracha',
            '2 Tbsp Butter',
            '1/4 Tbsp Crushed Red Pepper',
            '1 Large Egg',
            'Cilantro, Green Onion'
        ],
        steps: [
            {
                range: [ 0, 'lo mein noodles' ],
                step: 'Boil Noodles 5-7 Minutes'
            }, {
                range: [ 0, 'lo mein noodles' ],
                step: 'Drain Water'
            }, {
                range: [ 0, -1 ],
                step: 'Add all together,<br>heat on low to<br>evaporate water'
            }, {
                range: [ 'brown sugar', 'sriracha' ],
                step: 'Mix Together, Stir'
            }, {
                range: [ 'butter' ],
                step: 'Melt in large skillet (med-low heat)'
            }, {
                range: [ 'butter', 'egg' ],
                step: 'Add both to melting butter,<br>turn off heat when egg is done'
            }, {
                range: [ 'egg' ],
                step: 'Whisk'
            }
        ]
    },
    {
        title: 'Chicken Yakisoba',
        image: './images/chicken-yakisoba.jpg',
        url: 'http://www.budgetbytes.com/2012/03/chicken-yakisoba/',
        ingredients: [
            'Chicken',
            '2 Tbsp Veg Oil',
            '2in Ginger',
            '1 Yellow Onion',
            '1/2 head Cabbage',
            '2 Carrots',
            '1 Sm Broccoli',
            '1/4c soy sauce',
            '1/4c worcester',
            '2Tbsp Ketchup',
            '1Tbsp Sriracha',
            '1Tbsp Sugar',
            'Water',
            'Ramen Noodles, No Seasoning',
            'Sesame Oil'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cut'
            }, {
                range: [ 0, 'ginger' ],
                step: 'Cook Chicken (5 min)'
            }, {
                range: [ 0, 'broccoli' ],
                step: 'Add all veggies, stir cook until wilted (5-10 min)'
            }, {
                range: [ 0, 'sugar' ],
                step: 'Mix sauce into skillet, heat med high'
            }, {
                range: [ 'veg oil' ],
                step: 'Heat med-high'
            }, {
                range: [ 'veg oil', 'ginger' ],
                step: 'Add, saute 30s-1m'
            }, {
                range: [ 'ginger' ],
                step: 'Peel, Grate'
            }, {
                range: [ 'onion' ],
                step: 'Slice into strips'
            }, {
                range: [ 'cabbage' ],
                step: 'Remove Core, cut into strips'
            }, {
                range: [ 'carrots' ],
                step: 'Peel, Grate'
            }, {
                range: [ 'broccoli' ],
                step: 'Cut to pieces'
            }, {
                range: [ 'soy sauce', 'sugar' ],
                step: 'Mix in small bowl until sugar and ketchup are dissolved<br/>(note, can use less sriracha for less spicy)'
            }, {
                range: [ 'water' ],
                step: 'Boil'
            }, {
                range: [ 'water', 'ramen noodles' ],
                step: 'Add, cook 2-3m'
            }, {
                range: [ 'water', -1 ],
                step: 'Drain noodles, return to pot (no heat), toss with oil'
            }
        ]
    },
    {
        title: 'Teriyaki Meatball Bowls',
        image: './images/teriyaki-meatball-bowls.jpg',
        url: 'http://www.budgetbytes.com/2012/01/teriyaki-meatball-bowls/',
        ingredients: [
            '1lb Ground Pork',
            '2in Ginger',
            '1 clove Garlic',
            '2 Green Onions',
            '1 Egg',
            '1/2 cup breadcrumbs',
            '1/2 tsp Soy Sauce',
            '10-15 cranks black pepper',
            '1/2 cup soy sauce',
            '1/2 cup water',
            '1/2 cup brown sugar',
            '1 Tbsp Rice Vinegar',
            '1/2 Tbsp Sesame oil',
            '2" Ginger',
            '2 Tbsp Corn Starch',
            '1Tbsp sesame seeds',
            '2.5 Cups Rice',
            '3.75 Cups Water'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: 'Mix until even (using hands)<br/><br/>Roll into balls on baking sheet w/foil<br/><br/>Bake in 400 degree oven for 35-40 mins'
            }, {
                range: [ 0, 'sesame seeds' ],
                step: 'Take meatballs out of oven<br/><br/>Put meatballs in glaze<br/><br/>Add to rice bowls with more green onions on rice'
            }, {
                range: [ 'ginger' ],
                step: 'Peel, Grate'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'green onions' ],
                step: 'Cut'
            }, {
                range: [ '1/2 cup soy sauce', 'ginger' ],
                step: 'Mix in medium pot<br/><br/>heat on low until brown sugar dissolved (2 min)'
            }, {
                range: [ '1/2 cup soy sauce', 'corn starch' ],
                step: 'Pour into pot with glaze<br/><br/>Turn heat to medium high<br><br> Stir / Cook until thickened'
            }, {
                range: [ '2" ginger' ],
                step: 'Peel, Grate'
            }, {
                range: [ 'corn starch' ],
                step: 'Dissolve to be pourable'
            }, {
                range: [ '2.5 cups rice', -1 ],
                step: 'Make rice'
            }
        ]
    },
    {
        title: 'Thai Chicken Pizzas (4 Pizzas)',
        image: './images/thai-chicken-pizzas.jpg',
        url: 'http://www.budgetbytes.com/2012/01/thai-chicken-pizza/',
        ingredients: [
            '1 Chicken Breast',
            'Salt + Pepper',
            '1/8 cup sriracha',
            '1/4 cup hoison sauce',
            '1/4 cup peanut butter',
            '1/4 tsp sriracha',
            '1in Ginger',
            '1/6 cup hot water',
            '1/2 Red Onion',
            '1/2 Red Bell Pepper',
            '1/4 Cup cheese per pizza',
            '1/2 bunch Cilantro',
            '1 Naan Per Pizza'
        ],
        steps: [
            {
                range: [ 0, 'salt + pepper' ],
                step: 'Season, Grill'
            }, {
                range: [ 0, 'sriracha' ],
                step: 'Cut into small pieces, coat with sriracha'
            }, {
                range: [ 0, -1 ],
                step: 'Oven at 400 degrees<br/><br/>Top pizza (add all but cilantro)<br/><br/>cook each pizza about 10 minutes<br><br> Add cilantro'
            }, {
                range: [ 'hoison sauce', 'hot water' ],
                step: 'Whisk until smooth'
            }, {
                range: [ 'ginger' ],
                step: 'Peel, Grate'
            }
        ]
    },
    {
        title: 'Chicken in Peanut Sauce (4 Servings)',
        image: './images/chicken-in-peanut-sauce.jpg',
        url: 'http://www.budgetbytes.com/2013/01/chicken-in-peanut-sauce/',
        ingredients: [
            '4 cups rice',
            '2 cloves Garlic',
            '2in Ginger',
            '1 Tbsp Vegetable Oil',
            '1 Chicken Breast',
            '14oz Can Coconut Milk',
            '1/2 cup peanut butter',
            '1 Tbsp Soy Sauce',
            '1 Tbsp Brown Sugar',
            '1/2 Tsp Sriracha',
            'Juice of 1/2 Lime',
            'Bunch of Cilantro'
        ],
        steps: [
            {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'garlic', 'vegetable oil' ],
                step: 'Saute med heat for 2m'
            }, {
                range: [ 'garlic', 'chicken breast' ],
                step: 'Add chicken, cook 10m<br>(until chicken done)'
            }, {
                range: [ 'garlic', 'peanut butter' ],
                step: 'Add, stir, should be no brown bits on bottom<br/><br/>Sir until consistent'
            }, {
                range: [ 'garlic', -1 ],
                step: 'Add other things<br/><br/>Heat for 10 minutes<br/><br/>Finish with cilantro topping'
            }, {
                range: [ 'ginger' ],
                step: 'Peel, Grate'
            }, {
                range: [ 'chicken breast' ],
                step: 'Cut into small pieces (1in<sup>3</sup>)'
            }
        ]
    },
    {
        title: 'Oven-Cooked Fajitas (8 Fajitas)',
        image: './images/oven-cooked-fajitas.jpg',
        url: 'http://www.budgetbytes.com/2013/02/oven-fajitas/',
        ingredients: [
            '1 Tbsp Chili Powder',
            '1/2 Tbsp Paprika',
            '1/2 Tsp Onion Powder',
            '1/4 Tsp Garlic Powder',
            '1/4 Tsp Cumin',
            '1/8 Tsp Cayenne Pepper',
            '1 tsp Sugar',
            '1/2 Tsp Salt',
            '1/2 Tbsp Corn Starch',
            '2 Small Onions',
            '2 Green Bell Peppers',
            '1 Red Bell Pepper',
            '1 lb Chicken Breast',
            '2 Tbsp Veg Oil',
            '1 lime',
            'Tortillas, Opt: Sour Cream, Cilantro, Tomatoes, Lettuce'
        ],
        steps: [
            {
                range: [ 0, 'corn starch' ],
                step: 'Mix all in small bowl, set aside'
            }, {
                range: [ 0, 'veg oil' ],
                step: 'Sprinkle seasoning over meat and veggies<br/><br/>Drizzle oil over everything<br/><br/>Toss with hands until all well coated<br/><br/>Bake in <b>400deg</b> oven for 35-40 mins, stirring halfway'
            }, {
                range: [ 0, -1 ],
                step: 'Squeeze Lime over fully cooked meat and veggies.<br/><br/>Make Fajitas.'
            }, {
                range: [ 'onions', 'red bell pepper' ],
                step: 'Cut into 1/4 to 1/2 inch strips'
            }, {
                range: [ 'onions', 'chicken breast' ],
                step: 'Add to casserole dish (9x13in)'
            }, {
                range: [ 'chicken breast' ],
                step: 'Thin Strips'
            }
        ]
    },
    {
        title: 'Creamy Spinach & Sausage Pasta (4 servings)',
        image: './images/creamy-spinach-sausage-pasta.jpg',
        url: 'http://www.budgetbytes.com/2013/01/creamy-spinach-sausage-pasta/',
        ingredients: [
            '6 oz Smoked Sausage',
            '1 Tbsp Olive Oil',
            '1 Onion',
            '14.5 oz can of diced tomatoes w/chiles',
            '2 cups chicken broth',
            '8 oz Pasta',
            '3 cups Spinach',
            '1 cup Shredded Monterrey Jack Cheese',
            '1 whole green onion'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: 'Thinly Slice, add to skillet, cook 5-7min, drain off fat'
            }, {
                range: [ 0, 'onion' ],
                step: 'Add to pan, cook until onion softened (5min)'
            }, {
                range: [ 0, 'chicken broth' ],
                step: 'Add both, stir to combine / dissolve browned bits<br/>from bottom of skillet'
            }, {
                range: [ 0, 'pasta' ],
                step: 'Submerge uncooked pasta, add lid, boil,<br/>lower heat and simmer 10min (stir occasionally)'
            }, {
                range: [ 0, -1 ],
                step: 'Add one leaf at a time<br/><br/>After wilted, add cheese to top, cook with lid until<br/>cheese is melted<br/><br/>Top with green onions'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }
        ]
    },
    {
        title: 'Teriyaki Noodle Bowls (4 Servings)',
        image: './images/teriyaki-noodle-bowls.jpg',
        url: 'http://www.budgetbytes.com/2013/06/teriyaki-noodle-bowls/',
        ingredients: [
            '1/4 cup Soy Sauce',
            '2 Tbsp Rice Vinegar',
            '1 Tbsp Brown Sugar',
            '1/4 Tsp Toasted Sesame Oil',
            'Pinch Red Pepper Flakes',
            '1 Tbsp Cornstarch',
            '2 Tbsp Water',
            '2 inches Ginger',
            '1 Tbsp Vegetable Oil',
            '1 lb. Frozen Stir Fry Veggies',
            'Medium Pot Water',
            '8oz Buckwheat Soba Noodles'
        ],
        steps: [
            {
                range: [ 0, 'water' ],
                step: 'Add together'
            }, {
                range: [ 0, 'ginger' ],
                step: 'Peel Ginger<br/><br/>Grate directly into bowl<br/><br/>Mix well'
            }, {
                range: [ 0, 'frozen stir fry veggies' ],
                step: 'Stir sauce, add to pan. Simmer to thicken. Turn off heat.'
            }, {
                range: [ 0, -1 ],
                step: 'Add Noodles to skillet, stir until coated.'
            }, {
                range: [ 'vegetable oil', 'frozen stir fry veggies' ],
                step: 'Heat oil, Add veggies for 2min'
            }, {
                range: [ 'medium pot water', -1 ],
                step: 'Boil Water, Add Noodles, Boil <i>5-6min</i>, Drain'
            }
        ]
    },
    {
        title: 'Sesame Chicken (4 servings)',
        image: './images/sesame-chicken.jpg',
        url: 'http://www.budgetbytes.com/2013/08/easy-sesame-chicken/',
        ingredients: [
            '1 large egg',
            '2 Tbsp Cornstarch',
            '1 pinch each, salt & pepper',
            '1lb. boneless, skinless chicken thigh',
            '2 Tbsp Oil',
            '2 Tbsp Soy Sauce',
            '1 Tbsp water',
            '1/2 Tbsp Toasted Sesame Oil',
            '1.5 Tbsp brown sugar',
            '1.5 Tbsp rice vinegar',
            '1 in fresh ginger',
            '1 clove garlic, minced',
            '2 Tbsp sesame seeds',
            '1 Tbsp cornstarch',
            '4 cups (cooked) Rice.',
            '2 whole green onions'
        ],
        steps: [
            {
                range: [ 0, 'pinch each' ],
                step: 'Mix'
            }, {
                range: [ 0, 'boneless' ],
                step: 'Cut chicken into 1in pieces, toss in mixture'
            }, {
                range: [ 0, 'oil' ],
                step: 'Fry chicken mixture in pan 7-10min (golden brown)'
            }, {
                range: [ 0, '1 tbsp cornstarch' ],
                step: 'Pour sauce over top, toss chicken. Once Coated, turn off heat.'
            }, {
                range: [ 0, -1 ],
                step: 'Add chicken on rice, add onions on top.'
            }, {
                range: [ 'oil' ],
                step: 'Heat in Pan to wavy'
            }, {
                range: [ 'soy sauce', 'cornstarch' ],
                step: 'Mix. Grate Ginger into mix.'
            }, {
                range: [ '(cooked) rice.' ],
                step: 'Cook Rice.'
            }, {
                range: [ 'green onions' ],
                step: 'Cut into pieces'
            }
        ]
    },
    {
        title: 'Cold Soba & Cucumber Salad (6 servings)',
        image: './images/cold-soba-cucumber-salad.jpg',
        url: 'http://www.budgetbytes.com/2013/08/cold-soba-cucumber-salad/',
        ingredients: [
            '1 large Cucumber',
            '2 green onions',
            'Peanuts',
            '1/3 cup rice vinegar',
            '2 Tbsp Sugar',
            '0.5 Tsp Toasted Sesame Oil',
            '1/2 Tsp Salt',
            '1/2 Tsp Crushed Red Pepper',
            '8 oz Soba Noodles (Buckwheat)'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Peel (if desired), Slice, Quarter (remove seeds).'
            }, {
                range: [ 0, 'peanuts' ],
                step: 'Put in large Bowl'
            }, {
                range: [ 0, 'crushed red pepper' ],
                step: 'Pour dressing onto veggies.'
            }, {
                range: [ 0, -1 ],
                step: 'Add all together, toss.'
            }, {
                range: [ 'green onions' ],
                step: 'Cut'
            }, {
                range: [ 'peanuts' ],
                step: 'Roughly cut'
            }, {
                range: [ 'rice vinegar', 'crushed red pepper' ],
                step: 'Combine into dressing.'
            }, {
                range: [ 'soba noodles' ],
                step: 'Boil pot of water. Add noodles, cook 5-7min. Drain.<br/>Rinse in cold water, drain all water'
            }
        ]
    },
    {
        title: 'Creamy Tomato & Spinach Pasta (4 Servings)',
        image: './images/creamy-tomato-spinach-pasta.jpg',
        url: 'http://www.budgetbytes.com/2013/07/creamy-tomato-spinach-pasta/',
        ingredients: [
            '1 Small Onion',
            '2 cloves garlic',
            '1 Tbsp Olive Oil',
            '1 (15oz) can Diced Tomatoes',
            '1/2 tsp dried oregano',
            '1/2 tsp dried basil',
            'Pinch red pepper flakes',
            '1/2 tsp salt',
            'Freshly cracked pepper to taste',
            '2 oz. cream cheese',
            '1/4 cup grated Parmesan',
            '4.5oz bag fresh spinach',
            '1/2lb. penne pasta'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Dice'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Add all to skillet, cook on low until softened<br/>and transparent (5min).'
            }, {
                range: [ 0, 'freshly cracked pepper to taste' ],
                step: 'Add all to skillet, stir to combine / until paste dissolved.'
            }, {
                range: [ 0, 'grated parmesan' ],
                step: 'Turn heat to low. Add cream cheese pieces.<br/>Add 1/2 parmesan. Whisk until cream cheese is melted in.<br/>Add rest of parmesan, whisk until melted.'
            }, {
                range: [ 0, 'bag fresh spinach' ],
                step: 'Add spinach and stir until wilted (3-5min).'
            }, {
                range: [ 0, -1 ],
                step: 'Add pasta, mix until coated. Add salt &amp; pepper to taste.'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'cream cheese' ],
                step: 'Cut into a few pieces'
            }, {
                range: [ 'penne pasta' ],
                step: 'Boil water. Cook pasta 7-10min (until tender). Drain.'
            }
        ]
    },
    {
        title: 'Spicy Shrimp & Tomato Pasta (4 Servings)',
        image: './images/spicy-shrimp-tomato-pasta.jpg',
        url: 'http://www.budgetbytes.com/2013/07/spicy-shrimp-tomato-pasta/',
        ingredients: [
            '2 Tbsp Olive Oil',
            '1 Tbsp Butter',
            '4 cloves garlic',
            '1/2 lb. Peeled/Deveined Shrimp',
            '15oz Can diced tomatoes',
            '1/4 tsp crushed red pepper',
            '1/4 tsp salt',
            'Freshly cracked pepper to taste',
            '8 oz. fettuccine',
            'Handful fresh parsley'
        ],
        steps: [
            {
                range: [ 0, 'butter' ],
                step: 'Add to large skillet'
            }, {
                range: [ 0, 'peeled/deveined shrimp' ],
                step: 'Add to skillet, saute for 3-5min.<br/>Remove from skillet, set aside for later'
            }, {
                range: [ 0, 'freshly cracked pepper to taste' ],
                step: 'Add to skillet, stir, simmer 5min.'
            }, {
                range: [ 0, -1 ],
                step: 'Add pasta in, toss, add shrimp back in.<br/>Finish by topping with chopped parsley.'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'peeled/deveined shrimp' ],
                step: 'Rinse w/cool water, drain'
            }, {
                range: [ 'fettuccine' ],
                step: 'Boil pot of water, add pasta, cook 7-10min. Drain.'
            }
        ]
    },
    {
        title: 'BBQ Black Bean Pizzas (8 pizzas)',
        image: './images/bbq-black-bean-pizzas.jpg',
        url: 'http://www.budgetbytes.com/2013/07/bbq-black-bean-pizzas/',
        ingredients: [
            '8 fajita size flour tortillas',
            '3 green onions',
            '1 small red onion',
            '15 oz. black beans',
            '3/4 cup BBQ Sauce',
            '2 cups shredded monterrey jack cheese'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Preheat to 400deg. Place tortillas on foil, bake for 5min.'
            }, {
                range: [ 0, -1 ],
                step: 'Each pizza:<br><br/><ul><br/><li>1-1.5 tbsp BBQ Sauce</li><br/><li>1/4 cup black beans </li><br/><li>1/4 cup shredded cheese</li><br/><li>Sprinkle with both kinds of onion.</li><br/></ul>'
            }, {
                range: [ 0, -1 ],
                step: 'Put back in oven on rack for 5min.'
            }, {
                range: [ 'green onions', 'red onion' ],
                step: 'Slice.'
            }, {
                range: [ 'black beans' ],
                step: 'Drain.'
            }
        ]
    },
    {
        title: 'Peach Ricotta Crostini (24 pieces)',
        image: './images/peach-ricotta-crostini.jpg',
        url: 'http://www.budgetbytes.com/2013/08/peach-ricotta-crostini/',
        ingredients: [
            '1 loaf French bread (baguette)',
            '15oz ricotta cheese',
            '2 ripe peaches',
            'Salt & Freshly Cracked Pepper'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cut into 24 slices (1" thick)'
            }, {
                range: [ 0 ],
                step: '400deg Oven, bake 5 min'
            }, {
                range: [ 0, 'ricotta cheese' ],
                step: 'Smear 1Tbsp onto each piece'
            }, {
                range: [ 0, 'peaches' ],
                step: 'Top each with 2 slices of peach'
            }, {
                range: [ 0, -1 ],
                step: 'Sprinkle with salt and fresh cracked pepper'
            }, {
                range: [ 'peaches' ],
                step: 'Cut into 24 slices per peach'
            }
        ]
    },
    {
        title: 'Southwest Steak Bowls (4 servings)',
        image: './images/southwest-steak-bowls.jpg',
        url: 'http://www.budgetbytes.com/2013/08/southwest-steak-bowls/',
        ingredients: [
            '.75-1lb flank or skirt steak',
            '1.5 Tbsp olive oil',
            '1 clove garlic',
            '0.5tsp ground cumin',
            '0.25tsp salt',
            'Juice of 1/2 a Lime',
            '1/2 onion',
            '1.5 cups uncooked brown rice',
            '3 cups chicken broth',
            '1 large Tomato',
            'Other half onion',
            'Juice of 1/2 a Lime',
            '1/4 tsp salt',
            'Cilantro (Handful)',
            '15 oz can black beans',
            '1 cup frozen corn kernels',
            '8oz sour cream'
        ],
        steps: [
            {
                range: [ 0, 'juice of 1/2 a lime' ],
                step: 'Mince garlic, combine all in ziplock bag, set in<br/>refrigerator to mainate for 30min.'
            }, {
                range: [ 0, 'juice of 1/2 a lime' ],
                step: 'Put steak in very hot (med high) skillet.<br/>Cook 3-5min on one side, flip and repeat.<br/>Move to cutting board. Cool 5 minutes.'
            }, {
                range: [ 0, 'onion' ],
                step: 'Use same skillet to caramelize 1/2 onion.'
            }, {
                range: [ 0, -1 ],
                step: 'Cut steak, combine all into bowl:<br/><ul><br/><li>1 cup rice</li><br/><li>1/4 cup beans, corn, pico</li><br/><li>Few slices steak</li><br/><li>Few sprigs cilantro</li><br/><li>Dollop of sour cream</li><br/></ul>'
            }, {
                range: [ 'onion' ],
                step: 'Slice'
            }, {
                range: [ 'uncooked brown rice', 'chicken broth' ],
                step: 'Cook, but use chicken broth instead of water'
            }, {
                range: [ 'tomato' ],
                step: 'Dice'
            }, {
                range: [ 'tomato', 'cilantro' ],
                step: 'Combine, stir'
            }, {
                range: [ 'other half onion' ],
                step: 'Dice'
            }, {
                range: [ 'cilantro' ],
                step: 'Chop'
            }, {
                range: [ 'can black beans', 'frozen corn kernels' ],
                step: 'Thaw, heat'
            }
        ]
    },
    {
        title: 'Peanut Butter Banana Quesadillas (1 Serving)',
        image: './images/peanut-butter-banana-quesadillas.jpg',
        url: 'http://www.budgetbytes.com/2013/05/peanut-butter-banana-quesadillas/',
        ingredients: [
            'Tortilla',
            '2 Tbsp Peanut Butter',
            '1/2 Medium Banana',
            '1 Tbsp chocolate chips'
        ],
        steps: [
            {
                range: [ 0, 'peanut butter' ],
                step: 'Spread on tortilla'
            }, {
                range: [ 0, -1 ],
                step: 'Add to tortilla, fold, heat in skillet until<br/>chocolate is melted.'
            }, {
                range: [ 'banana' ],
                step: 'Slice'
            }
        ]
    },
    {
        title: 'Sausage & Pepper Pasta (8 servings)',
        image: './images/sausage-pepper-pasta.jpg',
        url: 'http://www.budgetbytes.com/2013/07/sausage-pepper-pasta/',
        ingredients: [
            '19oz Package Italian Sausage',
            '1 Tbsp Vegetable Oil',
            '2 med. green bell peppers',
            '1 medium red bell pepper',
            '1 medium yellow bell pepper',
            '1 medium white / yellow onion',
            '2 cloves garlic',
            '28oz can petite diced tomatoes OR 3 cups marinara sauce',
            '1/2 Tbsp dried basil',
            '1/2 Tbsp dried oregano',
            '1/4 Tsp crushed red pepper (optional)',
            '3/4lb pasta'
        ],
        steps: [
            {
                range: [ 0, 'vegetable oil' ],
                step: 'Add to large pot, cook med heat until sausage<br/>browned enough to cut (not necessarily fully cooked)'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Remove sausage, slice.<br/>Add vegetables to pot, heat until softened.'
            }, {
                range: [ 0, 'crushed red pepper' ],
                step: 'Add sliced sausage and other ingredients to pot,<br/>stir to combine over medium heat.'
            }, {
                range: [ 0, -1 ],
                step: 'Mix pasta into pot, stir to combine, cook in sauce for about<br/>5 more minutes with lid on top. Add salt to taste.'
            }, {
                range: [ 'green bell peppers', 'garlic' ],
                step: 'Thinly slice / mince garlic'
            }, {
                range: [ 'pasta' ],
                step: 'Cook pasta for 7 minutes (should still be a bit firm), drain'
            }
        ]
    },
    {
        title: 'Chipotle Sweet Potato Burgers (4 servings)',
        image: './images/chipotle-sweet-potato-burgers.jpg',
        url: 'http://www.budgetbytes.com/2013/05/chipotle-sweet-potato-burgers/',
        ingredients: [
            '1 medium (1lb) Sweet potato',
            '1/2 cup frozen corn kernels',
            '15 oz can black beans',
            '1/4 bunch cilantro',
            '1/4 cup cornmeal',
            '1/4 tsp garlic powder',
            '1/2 tsp cumin',
            '1/2 tsp salt',
            'Can of chipotle peppers<br/>in adobo sauce',
            '1/2 tbsp vegetable oil',
            '1 Avocado',
            '1/4 bunch cilantro',
            'Mayo',
            '4 Hamburger buns'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Use a fork to poke holes in the potato.<br/>Wrap loosely w/paper towel, microwave for 5min.<br/>Squeeze to see if soft all the way through -<br/>if not add 1 min, repeat.'
            }, {
                range: [ 0, 'can of chipotle peppers<br/>in adobo sauce' ],
                step: 'Scoop out potato into bowl with all others,<br/>mash potatoes and beans. Chill for 30min.'
            }, {
                range: [ 0, 'vegetable oil' ],
                step: 'Cook in skillet with oil (heat oil first until wavy),<br/>5min per side, until brown.'
            }, {
                range: [ 0, -1 ],
                step: 'Make burgers, topped with 1/4 avocado sliced,<br/>mayo, and cilantro'
            }, {
                range: [ 'frozen corn kernels', 'can of chipotle peppers<br/>in adobo sauce' ],
                step: 'Mix all in bowl.'
            }, {
                range: [ 'can black beans' ],
                step: 'Drain and rinse.'
            }, {
                range: [ 'cilantro' ],
                step: 'Roughly chop'
            }, {
                range: [ 'can of chipotle peppers<br/>in adobo sauce' ],
                step: 'Take one pepper, chop, add 1 tsp of the sauce'
            }
        ]
    },
    {
        title: 'Honey Sriracha Chicken Thighs (6 Servings)',
        image: './images/honey-sriracha-chicken-thighs.jpg',
        url: 'http://www.budgetbytes.com/2013/12/honey-sriracha-chicken-thighs/',
        ingredients: [
            '2 cloves garlic',
            '1in Ginger',
            '2 Tbsp Sriracha',
            '1.5 Tbsp Soy Sauce',
            '1 Tbsp Rice Vinegar',
            '2 Tbsp Honey',
            '2 Tbsp Brown Sugar',
            '1 Tbsp Vegetable Oil',
            '0.5 Cup Water',
            '2 Tbsp Corn Starch',
            '6 Chicken Thighs',
            '1/4 bunch cilantro',
            'Several green onions'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Mince'
            }, {
                range: [ 0, 'water' ],
                step: 'Stir to Combine'
            }, {
                range: [ 0, 'corn starch' ],
                step: 'Add, stir until dissolved'
            }, {
                range: [ 0, 'chicken thighs' ],
                step: 'Add half marinade/sauce to chicken, toss to coat.<br/>Put in bag, refrigerate 30 minutes.<br/><br/><br/>Preheat oven 400 degrees, bake chicken in 8x8 dish for<br/>30 minutes (basting once halfway through).<br/><br/><br/>While chicken is baking, simmer other half of sauce in<br/>saucepan until it thickens into a glaze, then set aside.<br/>Spread over cooked chicken.'
            }, {
                range: [ 0, -1 ],
                step: 'Top chicken, serve.'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }
        ]
    },
    {
        title: 'Taco Seasoning',
        image: './images/taco-seasoning.jpg',
        url: 'http://www.budgetbytes.com/2012/02/taco-seasoning/',
        ingredients: [
            '1 Tbsp chili Powder',
            '1 tsp smoked paprika',
            '1 tsp cumin',
            '1/4 tsp cayenne pepper',
            '1/2 tsp oregano',
            '1/2 tsp salt',
            '1/2 tsp (15 cranks) black pepper',
            '1/2 tsp corn starch'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Combine, stir until even.'
            }
        ]
    },
    {
        title: 'Roasted Corn and Zucchini Tacos (6 Servings)',
        image: './images/roasted-corn-zucchini-tacos.jpg',
        url: 'http://www.budgetbytes.com/2013/12/roasted-corn-zucchini-tacos/',
        ingredients: [
            '2 medium zucchini',
            '8oz Corn',
            '2 Tbsp olive oil',
            '2.4Tbsp taco seasoning',
            '1/4 tsp garlic powder',
            '1 can Black Beans',
            '12 small corn tortillas',
            '1 Med Avocado',
            '4oz Monterrey Jack Cheese',
            '1/4 bunch Cilantro'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Dice'
            }, {
                range: [ 0, 'garlic powder' ],
                step: 'Combine, stir until coated<br><br/>Spread over foil on baking sheet<br><br/>Roast for 25 mins'
            }, {
                range: [ 0, 'black beans' ],
                step: 'Combine, add 1/4 tsp salt'
            }, {
                range: [ 0, -1 ],
                step: 'Make Tacos by topping tortillas with a scope of the veggie mix,<br/>2 slices of avocado, cheese, and cilantro.'
            }, {
                range: [ 'black beans' ],
                step: 'Rinse/Drain'
            }, {
                range: [ 'corn tortillas' ],
                step: 'Lightly toast in pan'
            }, {
                range: [ 'avocado' ],
                step: 'Cut 12 slices'
            }
        ]
    },
    {
        title: 'Curried Chickpeas with Spinach (4 Servings)',
        image: './images/curried-chickpeas-with-spinach.jpg',
        url: 'http://www.budgetbytes.com/2013/12/curried-chickpeas-spinach/',
        ingredients: [
            '1 small onion',
            '2 cloves garlic',
            '1in Ginger',
            '2 Tbsp olive oil',
            '1.5 Tbsp Curry Powder',
            '8 oz spinach',
            '29oz can chickpeas',
            '15oz can tomato sauce'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Dice'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Saute until onions soft (3-5 mins)'
            }, {
                range: [ 0, 'curry powder' ],
                step: 'Add powder, saute for 1 more minute.'
            }, {
                range: [ 0, 'spinach' ],
                step: 'Add 1/4 cup water and spinach, little by little until wilted'
            }, {
                range: [ 0, -1 ],
                step: 'Add both to skillet, stir, heat for 5 minutes'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }, {
                range: [ 'can chickpeas' ],
                step: 'Drain/rinse'
            }
        ]
    },
    {
        title: 'Southwest Chicken Skillet (6 servings)',
        image: './images/southwest-chicken-skillet.jpg',
        url: 'http://www.budgetbytes.com/2014/05/southwest-chicken-skillet/',
        ingredients: [
            '1 cup uncooked long grain rice',
            '1 cup salsa',
            '1.5-2 cups precooked shredded chicken',
            '15oz Black beans',
            '1 Tbsp chili powder',
            '1.75cup chicken broth',
            '1cup shredded cheese',
            '2-3 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0, 'chicken broth' ],
                step: 'Combine in skillet, Stir until even <br/><br/>Cover w/lid, bring to boil w/high heat. <br/><br/>Immediately set low heat, simmer 30min <br/><br/>Fluff with fork, rice should be tender.'
            }, {
                range: [ 0, 'shredded cheese' ],
                step: 'Add cheese, put top on for a minute (melt cheese).'
            }, {
                range: [ 0, -1 ],
                step: 'Top with green onion, serve.'
            }
        ]
    },
    {
        title: 'Chorizo Sweet Potato Skillet (6 servings)',
        image: './images/chorizo-sweet-potato-skillet.jpg',
        url: 'http://www.budgetbytes.com/2014/06/chorizo-sweet-potato-skillet/',
        ingredients: [
            '1 med. sweet potato',
            '1 Tbsp Olive Oil',
            '.5lb Mexican chorizo',
            '15oz Black beans',
            '1 cup uncooked long grain white rice',
            '1 cup green or red salsa',
            '1.75cup chicken broth',
            '1 cup shredded cheese',
            '2-3 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Peel, dice into .5-.75 inch<sup>3</sup>'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Saute 5min (skillet)'
            }, {
                range: [ 0, '.5lb mexican chorizo' ],
                step: 'Squeeze chorizo out into pan, saute and break up until cooked'
            }, {
                range: [ 0, 'chicken broth' ],
                step: 'Pour off grease, add, stir until combined.<br/><br/>Add lid to skillet, high heat until boiling<br/><br/>Immediately very low heat, simmer for 20min<br><br>'
            }, {
                range: [ 0, 'shredded cheese' ],
                step: 'Add cheese, put lid back on for 1min (melt cheese).'
            }, {
                range: [ 0, -1 ],
                step: 'Add green onions, serve'
            }, {
                range: [ 'black beans' ],
                step: 'Rinse and drain'
            }
        ]
    },
    {
        title: 'Monterrey Chicken Skillet (4 Servings)',
        image: './images/monterrey-chicken-skillet.jpg',
        url: 'http://www.budgetbytes.com/2014/11/monterrey-chicken-skillet/',
        ingredients: [
            '2 cups shredded cooked<br/>chicken (1/2 rotisserie)',
            '10oz can Rotel<br/>(diced tomatoes<br/>w/green chiles)',
            '1/2 lb fusili pasta',
            '2 cups chicken broth',
            '1/3 cup BBQ sauce',
            '1 cup shredded Monterrey Jack cheese',
            '3 slices bacon',
            '2 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0, 'chicken broth' ],
                step: 'Place in skillet, mix (do not drain Rotel)<br/><br/>Bring to boil on high heat with lid, then reduce heat to low,<br/>simmer with lid for 15 minutes (stir every 5 minutes)<br/>- most liquid should be gone at the end.'
            }, {
                range: [ 0, 'bbq sauce' ],
                step: 'Drizzle on top'
            }, {
                range: [ 0, 'shredded monterrey jack cheese' ],
                step: 'Add on top, cover with lid for 1min'
            }, {
                range: [ 0, -1 ],
                step: 'Add on top, serve'
            }, {
                range: [ 'bacon' ],
                step: 'Cook, Drain, break into pieces'
            }
        ]
    },
    {
        title: 'Sausage and Kale Skillet (4 servings)',
        image: './images/sausage-kale-skillet.jpg',
        url: 'http://www.budgetbytes.com/2014/02/sausage-kale-skillet/',
        ingredients: [
            '19oz Italian sausage',
            '1 bunch kale',
            '15oz can chickpeas',
            '1 cup marinara sauce',
            '1 cup shredded mozzarella'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Squeeze out of casing, cook on medium until brown.'
            }, {
                range: [ 0, 'kale' ],
                step: 'Stir into skillet, cook until wilted'
            }, {
                range: [ 0, 'marinara sauce' ],
                step: 'Stir into skillet'
            }, {
                range: [ 0, -1 ],
                step: 'Add to top, cover, simmer 5-10 minutes'
            }, {
                range: [ 'kale' ],
                step: 'Remove woody stalks, slice into thin strips, rinse.'
            }, {
                range: [ 'can chickpeas' ],
                step: 'Drain, rinse'
            }
        ]
    },
    {
        title: 'Smokey Roasted Sweet Potatoes (6 servings)',
        image: './images/smokey-roasted-sweet-potatoes.jpg',
        url: 'http://www.budgetbytes.com/2015/01/smoky-roasted-sweet-potatoes/',
        ingredients: [
            '2 med sweet potatoes',
            '2 Tbsp olive oil',
            '1 Tbsp brown sugar',
            '1 tsp smoked paprika',
            '1/8 tsp garlic powder',
            '1/8 tsp cayenne pepper',
            '1/4 tsp salt',
            '10-15 cranks black pepper'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Preheat oven to 400deg. Wash and peel,<br/>cut into 1/8in thick slices'
            }, {
                range: [ 0, -1 ],
                step: 'Drizzle oil, sprinkle spices, mix<br/><br/>Arrange like deck of cards in casserole dish<br/><br/>Cover dish with foil, roast 30min.<br/><br/>Remove foil, cook additional 15min<br/><br/>If potatoes are firm, add additional 10-15 min.<br/>Foil may be used to prevent further browning.'
            }, {
                range: [ 'brown sugar', -1 ],
                step: 'Mix'
            }
        ]
    },
    {
        title: 'Honey Mustard Pork Chops (4 servings)',
        image: './images/honey-mustard-pork-chops.jpg',
        url: 'http://www.budgetbytes.com/2015/01/honey-mustard-pork-chops/',
        ingredients: [
            '1/3 cup mayonnaise',
            '2 Tbsp Dijon mustard',
            '2 Tbsp honey',
            '1/8 tsp garlic powder',
            '1/4 tsp smoked paprika',
            '1/4 tsp salt',
            '15 cranks black pepper',
            '2 lbs pork chops',
            'Pinch of salt and pepper',
            '1 Tbsp vegetable oil'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: 'Mix. Preheat oven to 350deg.'
            }, {
                range: [ 0, -1 ],
                step: 'Coat pork in casserole dish. Bake 30min.<br/><br/>Set oven to broil, move dish so pork is 6in from broiler,<br/>broil 3-5min.'
            }, {
                range: [ 'pork chops', 'pinch of salt and pepper' ],
                step: 'Dry with paper towel, season'
            }, {
                range: [ 'pork chops', -1 ],
                step: 'Cook 2 at a time until golden brown (3-5min)'
            }, {
                range: [ 'vegetable oil' ],
                step: 'Heat in heavy skillet on med-high'
            }
        ]
    },
    {
        title: 'Zucchini and Corn Frittata (6 slices)',
        image: './images/zucchini-corn-frittata.jpg',
        url: 'http://www.budgetbytes.com/2014/12/zucchini-corn-frittata/',
        ingredients: [
            '1 Tbsp olive oil',
            '2 cloves garlic',
            '1 medium zucchini',
            '3 Roma tomatoes',
            '1 cup frozen corn',
            '1 tsp cumin',
            '1/2 tsp salt',
            'Black Pepper to taste',
            '6 large eggs',
            '1/2 cup 2% milk',
            '1/2 cup shredded Monterrey Jack cheese'
        ],
        steps: [
            {
                range: [ 0, 'black pepper to taste' ],
                step: 'Add to skillet, Saute until tomatoes have broken down<br/>and most moisture has evaporated'
            }, {
                range: [ 0, -1 ],
                step: 'Top skillet with cheese<br/><br/>Pour egg mix into skillet, make sure eggs are<br/>beneath veggies<br/><br/>Bake skillet for 30-35min, top should be brown and puffy'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'zucchini' ],
                step: 'Dice'
            }, {
                range: [ 'tomatoes' ],
                step: 'Dice'
            }, {
                range: [ 'eggs', '2% milk' ],
                step: 'Whisk, preheat oven to 350deg.'
            }
        ]
    },
    {
        title: 'Spicy Pork Pad Thai (4-6 servings)',
        image: './images/spicy-pork-pad-thai.jpg',
        url: 'http://www.budgetbytes.com/2014/12/spicy-pork-pad-thai/',
        ingredients: [
            '8oz flat rice noodles',
            '1/4 cup oyster sauce',
            '1 Tbsp fish sauce',
            '3-4 Tbsp fresh lime juice (1 lime)',
            '1 Tbsp sriracha',
            '2 cloves garlic',
            '1 Tbsp vegetable oil',
            '1/2 lb ground pork',
            '2 large eggs',
            '1 med onion',
            '1 med green bell pepper',
            '1/2 bunch cilantro'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Place in dish, cover with hot water, soak 30min'
            }, {
                range: [ 0, 'green bell pepper' ],
                step: 'Drain noodles, combine all in skillet, saute 1-3min'
            }, {
                range: [ 0, -1 ],
                step: 'Top, serve'
            }, {
                range: [ 'oyster sauce', 'sriracha' ],
                step: 'Mix'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'garlic', 'ground pork' ],
                step: 'Add to skillet, saute pork until pork is cooked through'
            }, {
                range: [ 'garlic', 'eggs' ],
                step: 'Push pork to edges of skillet, crack eggs in middle and<br/>scramble until lightly set, mix skillet'
            }, {
                range: [ 'garlic', 'green bell pepper' ],
                step: 'Add to skillet, saute until softening (3-5min)'
            }, {
                range: [ 'onion' ],
                step: 'Thinly slice'
            }, {
                range: [ 'green bell pepper' ],
                step: 'Thinly slice'
            }, {
                range: [ 'cilantro' ],
                step: 'Chop'
            }
        ]
    },
    {
        title: 'Baked Eggs with Spinach and Tomatoes (4 servings)',
        image: './images/baked-eggs-with-spinach-tomatoes.jpg',
        url: 'http://www.budgetbytes.com/2014/05/baked-eggs-spinach-tomatoes/',
        ingredients: [
            '1/2lb frozen<br/>spinach',
            '2med Roma<br/>tomatoes',
            '1/8 tsp garlic powder',
            '1/8 tsp red pepper flakes',
            'Pinch Salt and 5 cranks Pepper',
            '4 large eggs',
            '2 Tbsp cream or half and half',
            '1/2 cup shredded cheese'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Preheat oven 400deg, Thaw spinach, squeeze moisture out'
            }, {
                range: [ 0, 'roma<br/>tomatoes' ],
                step: 'Sprinkle spinach over tomatoes'
            }, {
                range: [ 0, 'pinch salt and 5 cranks pepper' ],
                step: 'Season, mix'
            }, {
                range: [ 0, 'eggs' ],
                step: 'Crack eggs on top'
            }, {
                range: [ 0, 'cream or half and half' ],
                step: 'Drizzle cream over everything'
            }, {
                range: [ 0, -1 ],
                step: 'Top with cheese, bake for 15-20min, or until eggs are opaque,<br/>but soft and runny (time varies due to dish shape)'
            }, {
                range: [ 'roma<br/>tomatoes' ],
                step: 'Grease 2 quart casserole dish, cut tomatoes into chunks<br/>and put in casserole dish'
            }
        ]
    },
    {
        title: 'Chocolate Cayenne Crinkles (20 cookies)',
        image: './images/chocolate-cayenne-crinkles.jpg',
        url: 'http://www.budgetbytes.com/2014/12/chocolate-cayenne-crinkles/',
        ingredients: [
            '3 cups powdered sugar',
            '3/4 cup unsweetened cocoa powder',
            '1 Tbsp cornstarch',
            '1/4 tsp salt',
            '1/2 tsp cayenne pepper',
            '2 large egg whites',
            '1 large whole egg',
            '1 tsp vanilla extract',
            '1 cup chocolate chips'
        ],
        steps: [
            {
                range: [ 0, 'cayenne pepper' ],
                step: 'Preheat oven to 350degs. Stir in large bowl until even.'
            }, {
                range: [ 0, 'vanilla extract' ],
                step: 'Add all, carefully stir mix until all powdered sugar has<br/>dissolved into the eggs and a very thick batter forms.<br/>Stir even if seems like not enough moisture -<br/>batter will be very thick.'
            }, {
                range: [ 0, -1 ],
                step: 'Add in, stir.<br/><br/>Line two baking sheets with parchment paper.<br/><br/>Make cookies one heaping tablespoon at a time,<br/>a few inches between each.<br/><br/>Bake one cookie sheet at a time for 14 minutes or<br/>until cookies are puffed and cracked.'
            }
        ]
    },
    {
        title: 'Bacon and Spinach Pasta with Parmesan (4 servings)',
        image: './images/bacon-spinach-pasta-parmesan.jpg',
        url: 'http://www.budgetbytes.com/2014/10/bacon-spinach-pasta-parmesan/',
        ingredients: [
            '6oz bacon',
            '1 small onion',
            '2 cups chicken broth',
            '1/2 lb pasta',
            '1/4 lb (3-4 cups) fresh spinach',
            '1/3 cup grated Parmesan'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cut strips into 1in sections, Saute in skillet until brown/crispy.<br/>Pour fat off into a bowl, leave 1 Tbsp'
            }, {
                range: [ 0, 'onion' ],
                step: 'Add, cook until onion soft and transparent'
            }, {
                range: [ 0, 'chicken broth' ],
                step: 'Add, stir'
            }, {
                range: [ 0, 'pasta' ],
                step: 'Add, cover, boil on high, once boiling set heat to low,<br/>simmer 15min (quick stir every 5min).'
            }, {
                range: [ 0, '(3-4 cups) fresh spinach' ],
                step: 'Add, stir until wilted'
            }, {
                range: [ 0, -1 ],
                step: 'Turn off heat, add, stir, serve'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }
        ]
    },
    {
        title: 'Spicy Hoisin Noodle Salad (4-6 servings)',
        image: './images/spicy-hoisin-noodle-salad.jpg',
        url: 'http://www.budgetbytes.com/2014/08/spicy-hoisin-noodle-salad/',
        ingredients: [
            '8oz whole wheat spaghetti or angel hair pasta',
            '1/4 cup hoisin sauce',
            '1 Tbsp sriracha sauce',
            '3 green onions',
            '1/2 bunch fresh cilantro',
            '1med red bell pepper',
            '1 cup frozen shelled edamame',
            '1/4 cup unsalted peanuts'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cook pasta according to package (7-10min),<br/>drain, rinse w/cold water, drain. Toss occasionally to dry.'
            }, {
                range: [ 0, -1 ],
                step: 'Return to pot, combine, toss, serve.'
            }, {
                range: [ 'hoisin sauce', 'sriracha sauce' ],
                step: 'Stir together'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'green onions', -1 ],
                step: 'Combine'
            }, {
                range: [ 'fresh cilantro' ],
                step: 'Pick leaves / rough chop'
            }, {
                range: [ 'red bell pepper' ],
                step: 'Dice'
            }, {
                range: [ 'frozen shelled edamame' ],
                step: 'Thaw'
            }, {
                range: [ 'unsalted peanuts' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Spinach Tomato Quesadillas (4 servings)',
        image: './images/spinach-tomato-quesadillas.jpg',
        url: 'http://www.budgetbytes.com/2014/08/spinach-tomato-quesadillas/',
        ingredients: [
            '1/2lb frozen cut spinach',
            '2 roma tomatoes',
            '1.5 cups shredded mozzarella',
            '1/4 tsp salt',
            '1/8 tsp garlic powder',
            '1/2 tsp dried basil',
            'Black pepper',
            '12 small fajita-size flour tortillas'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Thaw, squeeze out water. Break into small pieces.'
            }, {
                range: [ 0, 'black pepper' ],
                step: 'Add to bowl, stir.'
            }, {
                range: [ 0, -1 ],
                step: 'Heat skillet on medium, fill each tortilla with 1/3 cup of mixture,<br/>fold close, and heat in skillet until brown and crispy. Cut,<br/>serve.'
            }, {
                range: [ 'tomatoes' ],
                step: 'Slice, squeeze out liquid/seeds. Dice.'
            }
        ]
    },
    {
        title: 'Southwest Mac and Cheese (4 servings)',
        image: './images/southwest-mac-cheese.jpg',
        url: 'http://www.budgetbytes.com/2014/03/easy-southwest-mac-n-cheese/',
        ingredients: [
            '1 Tbsp olive oil',
            '1sm yellow onion',
            '2 cloves garlic',
            '1 cup frozen corn',
            '10oz diced tomatoes and green chiles (Rotel)',
            '1/2 tsp chili powder',
            '8oz pasta (elbow or shell)',
            '6oz Greek yogurt',
            '1 cup shredded sharp cheddar',
            '2-3 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Saute in large pot on med heat until onions soft and<br/>transparent (5min)'
            }, {
                range: [ 0, 'chili powder' ],
                step: 'Add, saute 3min'
            }, {
                range: [ 0, 'greek yogurt' ],
                step: 'Turn off heat, Add to pot, stir'
            }, {
                range: [ 0, 'shredded sharp cheddar' ],
                step: 'Add, stir until melted (very low heat)'
            }, {
                range: [ 0, -1 ],
                step: 'Sprinkle on top'
            }, {
                range: [ 'yellow onion' ],
                step: 'Dice'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'diced tomatoes and green chiles' ],
                step: 'Drain'
            }, {
                range: [ 'pasta' ],
                step: 'Cook by package directions (7-10m), drain'
            }
        ]
    },
    {
        title: 'Sauteed Corn and Tomatoes (4 Servings)',
        image: './images/sauteed-corn-tomatoes.jpg',
        url: 'http://www.budgetbytes.com/2014/06/sauteed-corn-tomatoes/',
        ingredients: [
            '1 Tbsp butter',
            '2 cloves garlic',
            '15oz can diced tomatoes',
            '1/2 tsp dried basil',
            '1/4 tsp salt',
            '15-20 cranks black pepper',
            '1/4 tsp sugar',
            '2 cups frozen corn kernels',
            'Handful fresh parsley'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Saute on med-low for 1-2min'
            }, {
                range: [ 0, 'sugar' ],
                step: 'Add, stir, simmer on med for 10min<br/>(or until most juice evaporated)'
            }, {
                range: [ 0, 'frozen corn kernels' ],
                step: 'Add unthawed, stir and heat 3-5min'
            }, {
                range: [ 0, -1 ],
                step: 'Sprinkle on top, turn off heat, serve.'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }
        ]
    },
    {
        title: 'Beef and Pineapple Enchiladas (4 Servings)',
        image: './images/beef-pineapple-enchiladas.jpg',
        url: 'http://www.budgetbytes.com/2014/04/beef-pineapple-enchiladas/',
        ingredients: [
            '2 Tbsp vegetable oil',
            '2 Tbsp all-purpose flour',
            '2 Tbsp chili powder',
            '2 cups water',
            '6oz tomato paste',
            '1/2 tsp cumin',
            '1/2 tsp garlic powder',
            '1/8 to 1/4 tsp cayenne pepper',
            '2 tsp unsweetened cocoa powder',
            '1 tsp salt',
            '1 Tbsp vegetable oil',
            '2 cloves garlic',
            '1 med jalapeno',
            '1/2 lb lean ground beef',
            '15oz black beans',
            '1/2 Tbsp chili powder',
            '1/4 tsp salt',
            '7.5 oz (1/2 can) pineapple chunks',
            '2 green onions',
            '1/4 bunch fresh cilantro',
            '12 6-inch corn tortillas'
        ],
        steps: [
            {
                range: [ 0, 'chili powder' ],
                step: 'Heat/whisk on med 1m after bubbles'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, whisk to combine, simmer until thickens,<br/>turn off heat.<br/><br/>Preheat oven to 375.'
            }, {
                range: [ 0, -1 ],
                step: 'Top enchiladas with sauce, bake at 375 for 30 minutes,<br/>or until edges of tortillas are crispy and sauce bubbling.'
            }, {
                range: [ '1 tbsp vegetable oil', 'jalapeno' ],
                step: 'Saute med heat 1-2min'
            }, {
                range: [ '1 tbsp vegetable oil', 'lean ground beef' ],
                step: 'Add, saute until fully browned.'
            }, {
                range: [ '1 tbsp vegetable oil', 'salt' ],
                step: 'Add, stir to combine and heat through'
            }, {
                range: [ '1 tbsp vegetable oil', 'fresh cilantro' ],
                step: 'Turn off heat and add. Stir.'
            }, {
                range: [ '1 tbsp vegetable oil', -1 ],
                step: 'Fill each tortilla with 3-5 cups of mixture,<br/>place in casserole dish (seam down).'
            }, {
                range: [ '2 cloves garlic' ],
                step: 'Mince'
            }, {
                range: [ 'jalapeno' ],
                step: 'remove seeds, dice'
            }, {
                range: [ 'black beans' ],
                step: 'Drain and rinse'
            }, {
                range: [ '(1/2 can) pineapple chunks' ],
                step: 'Drain, roughly chop'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'fresh cilantro' ],
                step: 'Pull from stems'
            }, {
                range: [ 'corn tortillas' ],
                step: 'Warm in microwave, covered with damp paper towel.'
            }
        ]
    },
    {
        title: 'Strawberry White Chocolate Scones (8 servings)',
        image: './images/strawberry-white-chocolate-scones.jpg',
        url: 'http://www.budgetbytes.com/2014/02/strawberry-white-chocolate-scones/',
        ingredients: [
            '2 large eggs',
            '3 Tbsp milk',
            '1/2 tsp vanilla extract',
            '1 cup frozen sliced strawberries',
            '1/3 cup white chocolate chips',
            '2 cups flour',
            '2 Tbsp sugar',
            '2 tsp baking powder',
            '1/2 tsp salt',
            '5 Tbsp cold butter',
            '1/2 cup powdered sugar',
            '1/4 tsp vanilla extract',
            '1 Tbsp milk'
        ],
        steps: [
            {
                range: [ 0, 'vanilla extract' ],
                step: 'Preheat oven 450deg. Whisk until smooth.'
            }, {
                range: [ 0, 'white chocolate chips' ],
                step: 'Mix in'
            }, {
                range: [ 0, 'cold butter' ],
                step: 'Mix together, stir w/spoon to ball of dough<br/><br/>Put on lightly flowered surface, flatten to 6-9in diameter circle,<br/>1.5in thick.<br/><br/>Cut into 8 wedges. Put wedges on baking sheet covered in<br/>parchment paper.<br/><br/>Bake 13-15min or until lightly golden brown.'
            }, {
                range: [ 0, -1 ],
                step: 'Cool completely, then drizzle icing on top.'
            }, {
                range: [ 'frozen sliced strawberries' ],
                step: 'Thaw, chop.'
            }, {
                range: [ 'flour', 'salt' ],
                step: 'In large bowl, stir until combined.'
            }, {
                range: [ 'flour', 'cold butter' ],
                step: 'Work into mix until resembles damp sand.'
            }, {
                range: [ 'cold butter' ],
                step: 'Slice chunks'
            }, {
                range: [ 'powdered sugar', -1 ],
                step: 'Mix until smooth'
            }
        ]
    },
    {
        title: 'Coconut Vegetable Curry (4-5 servings)',
        image: './images/coconut-vegetable-curry.jpg',
        url: 'http://www.budgetbytes.com/2014/03/coconut-vegetable-curry/',
        ingredients: [
            '2 Tbsp olive oil',
            '2 cloves garlic',
            '1in ginger',
            '2 Tbsp curry powder',
            '1/2 lb carrots (3-4med)',
            '1sm onion',
            '2Tbsp tomato paste',
            '15oz diced tomatoes',
            '1lb frozen broccoli and cauliflower',
            '14oz light coconut milk',
            '1/2 tsp salt (+to taste)',
            '1/2 tsp sugar',
            'Handful chopped cilantro'
        ],
        steps: [
            {
                range: [ 0, 'ginger' ],
                step: 'Saute 1-2 min'
            }, {
                range: [ 0, 'curry powder' ],
                step: 'Add, saute 1min'
            }, {
                range: [ 0, 'onion' ],
                step: 'Add, saute until onions transparent'
            }, {
                range: [ 0, 'diced tomatoes' ],
                step: 'Add, heat/stir until thick'
            }, {
                range: [ 0, 'frozen broccoli and cauliflower' ],
                step: 'Add, stir, simmer 5-10min'
            }, {
                range: [ 0, 'light coconut milk' ],
                step: 'Set heat low, add. Stir until thoroughly mixed. Heat low 5min.'
            }, {
                range: [ 0, -1 ],
                step: 'Stir in, top w/cilantro'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Peel, grate'
            }, {
                range: [ 'carrots' ],
                step: 'Peel and cut into rounds'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }
        ]
    },
    {
        title: 'Weeknight Black Bean Chili (6 Servings)',
        image: './images/weeknight-black-bean-chili.jpg',
        url: 'http://www.budgetbytes.com/2015/02/weeknight-black-bean-chili/',
        ingredients: [
            '1 Tbsp olive oil',
            '1 yellow onion',
            '4 cloves garlic',
            '1/2 lb ground turkey',
            '3 15oz cans black beans',
            '15oz diced tomatoes w/green chiles',
            '3oz tomato paste',
            '1 Tbsp chili powder',
            '1/2 tsp cumin',
            '1/2 tsp smoked paprika',
            '1/2 tsp oregano',
            '1/4 tsp salt',
            'Optional green onions, cheese topping'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Add to large pot, cook med-low 2-3min'
            }, {
                range: [ 0, 'ground turkey' ],
                step: 'Add, break up/saute 5-7min (until cooked)'
            }, {
                range: [ 0, 'oregano' ],
                step: 'Add all (no draining), stir to combine'
            }, {
                range: [ 0, -1 ],
                step: 'Simmer 10min, add salt to taste'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }
        ]
    },
    {
        title: 'Pasta with Creamy Pumpkin Sauce (2 Servings)',
        image: './images/pasta-creamy-pumpkin-sauce.jpg',
        url: 'http://www.budgetbytes.com/2015/02/pasta-creamy-pumpkin-sauce/',
        ingredients: [
            '2 cloves garlic',
            '1 Tbsp butter',
            '1 cup pumpkin puree',
            '1 cup chicken broth',
            '1/8 tsp nutmeg',
            '1/4 tsp chili powder',
            'Pinch Cayenne pepper',
            'Freshly cracked black pepper',
            '2 Tbsp half and half or cream',
            '8oz pasta'
        ],
        steps: [
            {
                range: [ 0, 'butter' ],
                step: 'Mince, saute 1-2m in skillet'
            }, {
                range: [ 0, 'freshly cracked black pepper' ],
                step: 'Add, stir to combine, simmer 10min (stir occasionally)'
            }, {
                range: [ 0, 'half and half or cream' ],
                step: 'Add, stir in, add salt to taste'
            }, {
                range: [ 0, -1 ],
                step: 'Combine'
            }, {
                range: [ 'pasta' ],
                step: 'Boil water, cook to al dente (7-10min), drain.'
            }
        ]
    },
    {
        title: 'Green Chile Breakfast Quesadillas (4 servings)',
        image: './images/green-chile-breakfast-quesadillas.jpg',
        url: 'http://www.budgetbytes.com/2015/02/green-chile-breakfast-quesadillas/',
        ingredients: [
            '4 oz can diced mild green chiles',
            '4 oz Monterrey Jack or Pepper Jack',
            '1/4 bunch cilantro, chopped',
            '4 large eggs',
            '4 fajita size tortillas'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Drain well'
            }, {
                range: [ 0, 'cilantro' ],
                step: 'add to bowl and mix'
            }, {
                range: [ 0, -1 ],
                step: 'Spread on tortilla, add egg, fold, cook until cheese melted.'
            }, {
                range: [ 'eggs' ],
                step: 'Cook (scramble or over easy)'
            }
        ]
    },
    {
        title: 'Dirty Rice (4 servings)',
        image: './images/dirty-rice.JPG',
        url: 'http://easypeasyeats.blogspot.com/2011/02/dirty-rice.html',
        ingredients: [
            '1 lb pork sausage',
            '1 med onion',
            '1 green pepper',
            '1 red pepper',
            '4 cloves garlic',
            '2 tsp red pepper flakes',
            '2 tsp Cajun seasoning',
            '32oz beef stock',
            '2 cups rice'
        ],
        steps: [
            {
                range: [ 0, 'cajun seasoning' ],
                step: 'Mix in large skillet,<br><br/>cook until sausage crumbled'
            }, {
                range: [ 0, -1 ],
                step: 'Add, bring to boil<br><br/>Turn down heat, simmer with lid 20min'
            }, {
                range: [ 'onion' ],
                step: 'Chop'
            }, {
                range: [ 'green pepper' ],
                step: 'Chop'
            }, {
                range: [ 'red pepper' ],
                step: 'Chop'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }
        ]
    },
    {
        title: 'Peanut Butter Cup Pie',
        image: './images/peanut-butter-cup-pie.jpg',
        url: 'http://m.kraftrecipes.com/recipedetail.do?recipeid=114688&cn=US',
        ingredients: [
            '8oz cream cheese (softened)',
            '1/2 cup Creamy Peanut Butter',
            '1 cup cold milk',
            '3.4oz Vanilla Instant Pudding',
            '1 cup thawed cool whip',
            '1 oreo crust',
            '1.5cup cool whip',
            '3oz semi-sweet chocolate',
            '1 Tbsp peanut butter'
        ],
        steps: [
            {
                range: [ 0, 'creamy peanut butter' ],
                step: 'Mix, beat until blended'
            }, {
                range: [ 0, 'vanilla instant pudding' ],
                step: 'Add, beat 2min'
            }, {
                range: [ 0, 'oreo crust' ],
                step: 'Whisk in, spoon onto crust, refrigerate'
            }, {
                range: [ 0, 'semi-sweet chocolate' ],
                step: 'Cover with mixture, refrigerate'
            }, {
                range: [ 0, -1 ],
                step: 'Drizzle on top, Refrigerate 4 hours.'
            }, {
                range: [ '1.5cup cool whip', 'semi-sweet chocolate' ],
                step: 'Mix, Microwave on high 1.5-2min, stir until well blended<br/>(may need more microwave). Cool fully.'
            }, {
                range: [ '1 tbsp peanut butter' ],
                step: 'Microwave 30sec'
            }
        ]
    },
    {
        title: 'Easy Beef and Broccoli Stir Fry (4 servings)',
        image: './images/easy-beef-broccoli-stir-fry.jpg',
        url: 'http://www.food.com/recipe/the-best-easy-beef-and-broccoli-stir-fry-99476',
        ingredients: [
            '2 tbsp cornstarch',
            '2 tbsp water',
            '1/2 tsp garlic powder',
            '1 lb steak, cut into 3inch strips',
            '1 Tbsp vegetable oil',
            '1 Tbsp veg oil',
            '4 cups broccoli',
            '1 sm onion, cut into wedges',
            '1/3 cup soy sauce',
            '2 tbsp brown sugar',
            '1 tsp ground ginger',
            '1 tbsp cornstarch',
            '1/2 cup water',
            'Cooked Rice'
        ],
        steps: [
            {
                range: [ 0, 'garlic powder' ],
                step: 'Combine until smooth'
            }, {
                range: [ 0, 'steak' ],
                step: 'Coat, toss'
            }, {
                range: [ 0, 'vegetable oil' ],
                step: 'Fry in pan until beef is done, remove from pan'
            }, {
                range: [ 0, '1/2 cup water' ],
                step: 'Combine in pan, cook + stir 2 min'
            }, {
                range: [ 'veg oil', 'onion' ],
                step: 'Stir-fry 4-5min'
            }, {
                range: [ 'soy sauce', 'water' ],
                step: 'Combine, add water until smooth'
            }
        ]
    },
    {
        title: 'Skillet Potatoes and Green Beans (4 servings)',
        image: './images/skillet-potatoes-green-beans.jpg',
        url: 'http://www.budgetbytes.com/2015/03/skillet-potatoes-and-green-beans/',
        ingredients: [
            '1.25 lbs red creamer potatoes',
            '2 cloves garlic',
            '2 Tbsp olive oil',
            '.75 lbs fresh green beans',
            '3/4 tsp salt',
            '1/2 tsp dried oregano',
            'Freshly cracked black pepper'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Quarter lengthwise, cut 1/4" slices'
            }, {
                range: [ 0 ],
                step: 'Boil (covered) on high, simmer on low 5min<br/>(until tender), drain'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Add, stir every 3-5min, saute 5-10min (until golden brown)'
            }, {
                range: [ 0, 'fresh green beans' ],
                step: 'Add, saute 5min (until soft)'
            }, {
                range: [ 0, -1 ],
                step: 'Season, saute 1min, serve'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'garlic', 'olive oil' ],
                step: 'Saute in pan over med heat 1min'
            }, {
                range: [ 'fresh green beans' ],
                step: 'Snap stems off, cut 1-2" sections, rinse'
            }
        ]
    },
    {
        title: 'Curry Roasted Carrots (2-3 servings)',
        image: './images/curry-roasted-carrots.jpg',
        url: 'http://www.budgetbytes.com/2015/03/curry-roasted-carrots/',
        ingredients: [
            '1 lb carrots',
            '1 Tbsp olive oil',
            '1/2 Tbsp curry powder',
            'Cayenne to taste',
            '1/4 tsp salt',
            'Handful fresh cilantro'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Peel, remove ends, slice diagonally (1/4" slices)'
            }, {
                range: [ 0, 'salt' ],
                step: 'Preheat oven 400deg. Add all bowl, toss until coated, put on<br/>foil on baking sheet in 1 layer, roast 30min<br/>(stir once halfway)'
            }, {
                range: [ 0, -1 ],
                step: 'Add cilantro on top, serve'
            }, {
                range: [ 'fresh cilantro' ],
                step: 'Chop'
            }
        ]
    },
    {
        title: 'Curried Potatoes with Poached Eggs (4 Servings)',
        image: './images/curried-potatoes-poached-eggs.jpg',
        url: 'http://www.budgetbytes.com/2015/05/curried-potatoes-with-poached-eggs/',
        ingredients: [
            '2lbs Russet Potatoes',
            '1in Ginger',
            '2 cloves garlic',
            '1 tbsp olive oil',
            '2 tbsp curry powder',
            '15oz can tomato sauce',
            '4 large eggs',
            '1/2 bunch cilantro'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Wash, cut into 3/4-inch cubes, boil in water covered on<br/>high heat 5-6min, drain'
            }, {
                range: [ 0, -1 ],
                step: 'Combine, create 4 dips/wells, crack egg into each, add<br/>lid to skillet, simmer 6-10min<br/><br/>Top with cilantro'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }, {
                range: [ 'ginger', 'olive oil' ],
                step: 'saute in skillet on low 1-2min'
            }, {
                range: [ 'ginger', 'curry powder' ],
                step: 'Add, saute 1min'
            }, {
                range: [ 'ginger', 'can tomato sauce' ],
                step: 'Mix/combine, heat on med 1m, add salt'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }
        ]
    },
    {
        title: 'Blackberry Sage Pork Chops (4 Servings)',
        image: './images/blackberry-sage-pork-chops.jpg',
        url: 'http://www.budgetbytes.com/2015/04/blackberry-sage-pork-chops/',
        ingredients: [
            '4 thin pork chops',
            'Pinch salt & pepper',
            '1 Tbsp olive oil',
            '1/2 cup blackberry jam',
            '1 Tbsp butter',
            '2 Tbsp balsamic vinegar',
            '1 Tbsp water',
            '1/2 tsp dried sage',
            '1/8 tsp salt'
        ],
        steps: [
            {
                range: [ 0, 'pinch salt & pepper' ],
                step: 'Thaw 10min, dry w/paper towel, season both sides'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Cook until browned (3-5min per side),<br/>Move chops to plate, cool skillet 2min'
            }, {
                range: [ 0, 'dried sage' ],
                step: 'Add all to skillet, heat low, whisk until consistent.<br/>Heat med. until simmer 5min.'
            }, {
                range: [ 0, -1 ],
                step: 'Heat off, add salt to taste.<br/>Return chops and juices, coat, simmer until warm.'
            }, {
                range: [ 'olive oil' ],
                step: 'Heat in skillet on med-high until wavy'
            }
        ]
    },
    {
        title: 'Sweet and Spicy Chicken Bowls (4 servings)',
        image: './images/sweet-spicy-chicken-bowls.jpg',
        url: 'http://www.budgetbytes.com/2015/05/sweet-n-spicy-chicken-bowls/',
        ingredients: [
            '1 cup uncooked rice',
            '1.75 cup chicken broth',
            '1 tsp chili powder',
            '1/2 tsp cumin',
            '1/4 tsp garlic powder',
            '1/4 tsp smoked paprika',
            '1/8 tsp cayenne',
            '1/4 tsp salt',
            '1 Tbsp olive oil',
            '1 Tbsp honey',
            '1/2 tsp apple cider vinegar',
            '1 chicken breast',
            '15oz can black beans',
            '8oz can pineapple tidbits',
            '2 green onions',
            '1/4 bunch cilantro',
            '1 ripe avocado'
        ],
        steps: [
            {
                range: [ 0, 'chicken broth' ],
                step: 'Combine, add lid, boil on high, low heat simmer for 25min.<br/>Fluff, heat off, uncover, and let sit 10min.'
            }, {
                range: [ 0, -1 ],
                step: 'Combine in bowl'
            }, {
                range: [ 'chili powder', 'apple cider vinegar' ],
                step: 'Combine.'
            }, {
                range: [ 'chili powder', 'chicken breast' ],
                step: 'Combine, set aside to marinate.<br/>Once other ingredients are chopped, cook in skillet on med<br/>5-7min (until brown).'
            }, {
                range: [ 'chicken breast' ],
                step: 'Chop into small pieces'
            }, {
                range: [ 'can black beans' ],
                step: 'Rinse, drain'
            }, {
                range: [ 'can pineapple tidbits' ],
                step: 'Drain, chop into small pieces'
            }, {
                range: [ 'green onions' ],
                step: 'Chop'
            }, {
                range: [ 'cilantro' ],
                step: 'Roughly chop'
            }, {
                range: [ 'avocado' ],
                step: 'Chop in half, slice/cube'
            }
        ]
    },
    {
        title: 'Spicy Beef & Sweet Potato Tacos (4-6 servings)',
        image: './images/spicy-beef-sweet-potato-tacos.jpg',
        url: 'http://www.poorgirleatswell.com/2013/01/recipe-spicy-beef-sweet-potato-tacos.html',
        ingredients: [
            '1 clove garlic',
            '1/2 cup Chopped Yellow onion',
            '1 Tbsp cooking oil',
            '1 sm sweet potato',
            '1lb ground beef',
            '2 Tbsp tomato paste',
            '1/4 tsp cumin',
            '1/4 tsp cayenne',
            '1/4 tsp paprika',
            'Salt/pepper to taste',
            '8-12 4" corn tortillas',
            'Chopped onion & cilantro',
            'Salsa/pico de gallo'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Dice'
            }, {
                range: [ 0, 'cooking oil' ],
                step: 'Cook until onion translucent'
            }, {
                range: [ 0, 'sweet potato' ],
                step: 'Cook 5min, until slightly soft/brown'
            }, {
                range: [ 0, 'salt/pepper to taste' ],
                step: 'Add all, cook through'
            }, {
                range: [ 0, -1 ],
                step: 'Combine to make tacos'
            }, {
                range: [ 'sweet potato' ],
                step: 'cut into 1/2" cubes'
            }, {
                range: [ 'corn tortillas' ],
                step: 'Moisten hands, pat until damp, heat on griddle<br/>45-60sec each side'
            }
        ]
    },
    {
        title: 'Chicken Kale Caesar Wraps (4 servings)',
        image: './images/chicken-kale-ceasar-wraps.jpg',
        url: 'http://www.budgetbytes.com/2015/07/chicken-kale-caesar-wraps/',
        ingredients: [
            '1 bunch lacinato kale',
            '15oz can Chickpeas',
            '2 carrots',
            '1/2 rotisserie chicken',
            '1/4 cup grated Parmesan',
            'Freshly cracked pepper',
            '1/4 cup Caesar dressing',
            '4 burrito tortillas'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Remove stems, cut into strips, rinse, dry well'
            }, {
                range: [ 0, -1 ],
                step: 'Combine all except tortillas in bowl, mix well,<br/>then place in tortilla and roll it like a burrito.'
            }, {
                range: [ 'can chickpeas' ],
                step: 'Drain, rinse'
            }, {
                range: [ 'carrots' ],
                step: 'Peel, shred'
            }, {
                range: [ 'chicken' ],
                step: 'Remove meat, rough chop'
            }
        ]
    },
    {
        title: 'Crunchy Chinese Chicken Salad (4 servings)',
        image: './images/crunch-chinese-chicken-salad.jpg',
        url: 'http://www.budgetbytes.com/2015/07/crunchy-chinese-chicken-salad/',
        ingredients: [
            '1/4 cup Canola/veg oil',
            '3 Tbsp rice vinegar',
            '1 Tbsp honey',
            '1 tsp soy sauce',
            '1/2 tsp ground ginger',
            '1/8 tsp garlic powder',
            '1/2 tsp toasted sesame oil',
            'Freshly cracked pepper',
            '1 head (2 lbs) Napa cabbage',
            '2 carrots',
            '4 green onions',
            '1/4 cup sliced almonds/peanuts',
            '3oz uncooked ramen noodles',
            '1/2 rotisserie chicken'
        ],
        steps: [
            {
                range: [ 0, 'freshly cracked pepper' ],
                step: 'Dressing: Combine, mix/shake'
            }, {
                range: [ 0, -1 ],
                step: 'Top with dressing'
            }, {
                range: [ '(2 lbs) napa cabbage' ],
                step: 'Rinse, dry, cut into strips'
            }, {
                range: [ '(2 lbs) napa cabbage', -1 ],
                step: 'Add to bowl'
            }, {
                range: [ 'carrots' ],
                step: 'Peel, grate/shred'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'uncooked ramen noodles' ],
                step: 'Crush (before opening)'
            }, {
                range: [ 'chicken' ],
                step: 'Pull from bones, chop'
            }
        ]
    },
    {
        title: 'Sweet Potato Avocado Tacos (4 servings)',
        image: './images/sweet-potato-avocado-tacos.jpg',
        url: 'http://www.loveandlemons.com/2015/01/29/sweet-potato-avocado-tacos/',
        ingredients: [
            '1 med. sweet potato',
            '1 Tsp olive oil',
            '1/2 Tsp chile powder',
            'Salt & Pepper',
            '1 cup black beans',
            '1 sm. avocado',
            '2 scallions',
            '1/4 cup feta/cotija cheese',
            '1 sm roasted jalapeno',
            '4-6 corn tortillas',
            '1/2 cup greek yogurt',
            '1 sm. avocado',
            '1/2 clove garlic',
            'Juice of 1 lime',
            'Salt & Pepper'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cube, Preheat Oven 400deg'
            }, {
                range: [ 0, 'salt & pepper' ],
                step: 'Toss, Bake on sheet 20min'
            }, {
                range: [ 0, -1 ],
                step: 'Combine, make tacos'
            }, {
                range: [ 'black beans' ],
                step: 'Cook'
            }, {
                range: [ 'avocado' ],
                step: 'Dice'
            }, {
                range: [ 'scallions' ],
                step: 'Diced'
            }, {
                range: [ 'roasted jalapeno' ],
                step: 'Dice'
            }, {
                range: [ 'greek yogurt', -1 ],
                step: 'Blend in food processor, add spice to taste'
            }
        ]
    },
    {
        title: 'Taco Salad Skillet (4 servings)',
        image: './images/taco-salad-skillet.jpg',
        url: 'http://www.budgetbytes.com/2015/07/taco-salad-skillet/',
        ingredients: [
            '1 Tbsp vegetable oil',
            '1/2 lb ground beef',
            '1 Tbsp chili powder',
            '1/2 tsp cumin',
            '1/2 tsp oregano',
            '1/4 tsp garlic powder',
            '1/8 tsp cayenne pepper',
            '1/8 tsp salt',
            '15 oz can black beans, drained',
            '1 cup frozen corn, thawed',
            '1 cup shredded cheddar',
            '2 cups broken tortilla chips',
            '1/2 head lettuce',
            '1 large tomato',
            '3 green onions',
            '8 oz sour cream'
        ],
        steps: [
            {
                range: [ 0, 'ground beef' ],
                step: 'Add to skillet, heat until browned'
            }, {
                range: [ 0, 'can black beans' ],
                step: 'Add, stir until coated, Heat 3-5min'
            }, {
                range: [ 0, 'shredded cheddar' ],
                step: 'Add on top, cover to melt (5min)'
            }, {
                range: [ 0, -1 ],
                step: 'Turn off heat, top with chips, veggies, then cream'
            }, {
                range: [ 'lettuce' ],
                step: 'Shred'
            }, {
                range: [ 'tomato' ],
                step: 'Dice'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }
        ]
    },
    {
        title: 'Peanut Butter S\'mores Pots (2-4 servings)',
        image: './images/peanut-butter-smores-pots.jpg',
        url: 'http://www.budgetbytes.com/2015/07/peanut-butter-smores-pots/',
        ingredients: [
            '3 graham crackers',
            '2 Tbsp butter',
            '1 Tbsp sugar',
            '2 Tbsp peanut butter',
            '3 Tbsp milk chocolate chips',
            '10 large marshmallows'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Preheat oven 350. Crush in plastic bag into crumbs.'
            }, {
                range: [ 0, 'sugar' ],
                step: 'Stir/Combine into "damp sand". Add into bottom of two 8oz<br/>ramekins to form base layer.'
            }, {
                range: [ 0, 'milk chocolate chips' ],
                step: 'Add in layers on top of crust to each bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Add in a single layer around the top -<br/>they will expand when baked. Bake 15min.'
            }, {
                range: [ 'butter' ],
                step: 'Melt in bowl'
            }
        ]
    },
    {
        title: 'Smoky Parmesan Roasted Cauliflower (4-6 servings)',
        image: './images/smoky-parmesan-roasted-cauliflower.jpg',
        url: 'http://www.budgetbytes.com/2015/08/smoky-parmesan-roasted-cauliflower/',
        ingredients: [
            '1 Tbsp paprika',
            '1/2 tsp oregano',
            '1/4 tsp garlic powder',
            '1/4 tsp salt',
            'Freshly cracked pepper',
            '1/4 cup grated parmesan',
            '1 head cauliflower',
            '1.5 Tbsp olive oil'
        ],
        steps: [
            {
                range: [ 0, 'grated parmesan' ],
                step: 'Preheat 400deg, cover baking sheet w/foil &amp; non-stick spray,<br/>combine in bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Toss cauliflower in oil, add 3/4 spices, put on pan,<br/>top with rest of spices.<br/><br/>Roast 40-45 mins'
            }, {
                range: [ 'cauliflower' ],
                step: 'Remove leaves, cut into small florets.'
            }
        ]
    },
    {
        title: 'Banana Bread (1 Loaf)',
        image: './images/banana-bread.jpg',
        url: 'http://www.simplyrecipes.com/recipes/banana_bread/',
        ingredients: [
            '2-3 very ripe bananas',
            '1/3 cup melted butter',
            '1 tsp baking soda',
            'Pinch Salt',
            '1 cup sugar',
            '1 egg, beaten',
            '1 tsp vanilla',
            '1.5 cups flour'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Mash bananas in mixing bowl, combine, stir'
            }, {
                range: [ 0, -1 ],
                step: 'Butter 4x8" pan, pour batter in. Bake 1hr to 1hr 10min at<br/><b>350&deg;F</b>. Cool.'
            }
        ]
    },
    {
        title: 'Roasted Red Pepper and Feta Frittata (4-6 Servings)',
        image: './images/roasted-red-pepper-feta-frittata.jpg',
        url: 'http://www.budgetbytes.com/2015/08/roasted-red-pepper-and-feta-frittata/',
        ingredients: [
            '1 Tbsp veg oil',
            '2 cloves garlic',
            '3-4 packed cups spinach',
            '6oz jar red pepper',
            'Salt & Pepper to taste',
            'Pinch crushed red pepper',
            '2 oz feta',
            '6 large eggs',
            '1/4 cup whole milk or half and half'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Mince in 10" oven skillet, saute 1-2m'
            }, {
                range: [ 0, 'packed cups spinach' ],
                step: 'Add, wilt 1‑2m'
            }, {
                range: [ 0, 'pinch crushed red pepper' ],
                step: 'Add, Saute 1‑2m'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from heat, add cheese &amp; egg. Bake 20-25min at<br/><b>350&deg;F</b>, or until browned (possibly broil at end).'
            }, {
                range: [ 'jar red pepper' ],
                step: 'Cut into strips'
            }, {
                range: [ 'eggs', -1 ],
                step: 'Whisk together, add pinch salt &amp; pepper'
            }
        ]
    },
    {
        title: 'Vegetable Enchilada Casserole (6 Servings)',
        image: './images/vegetable-enchilada-casserole.jpg',
        url: 'http://www.budgetbytes.com/2015/10/vegetable-enchilada-casserole/',
        ingredients: [
            '2 Tbsp olive oil',
            '2 Tbsp chili powder',
            '2 Tbsp flour',
            '2 cups water',
            '3 oz tomato paste',
            '1/2 tsp cumin',
            '1/2 tsp garlic powder',
            '1/4 tsp cayenne pepper',
            '3/4 tsp salt',
            '1 zucchini',
            '15 oz black beans',
            '3-4 green onions',
            '1/4 bunch cilantro',
            '1 cup frozen corn',
            '4 oz diced green chiles',
            '1/4 tsp salt',
            '12 small corn tortillas',
            '1.5 cups shredded cheese'
        ],
        steps: [
            {
                range: [ 0, 'flour' ],
                step: 'Combine/heat while whisking until 1m after bubbling starts'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, whisk until smooth, heat 3-5 minutes'
            }, {
                range: [ 0, -1 ],
                step: 'Preheat oven to 350. In 9x9 greased casserole dish add<br/>the following 3 times (layers):<br/><ol><br/><li>1/2 cup of sauce</li><br/><li>1/3 of tortillas</li><br/><li>1/3 of vegetable mix</li><br/><li>1/2 cup sauce</li><br/><li>1/2 cup cheese</li><br/></ol><br/>Bake 40-45 minutes. Top with fresh green onions.'
            }, {
                range: [ 'zucchini' ],
                step: 'Cut into cubes'
            }, {
                range: [ 'zucchini', 'salt' ],
                step: 'Stir in bowl'
            }, {
                range: [ 'black beans' ],
                step: 'Drain and rinse'
            }, {
                range: [ 'green onions' ],
                step: 'Cut into slices'
            }, {
                range: [ 'cilantro' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Garlic Parmesan Polenta (6 slices)',
        image: './images/garlic-parmesan-polenta.jpg',
        url: 'http://www.budgetbytes.com/2015/11/garlic-parmesan-polenta/',
        ingredients: [
            '3.5 cups water',
            '3/4 tsp salt',
            '1 cup yellow cornmeal',
            '2 Tbsp butter',
            '1/4 cup grated parmesan',
            '1/4 tsp garlic powder',
            '1 Tbsp olive oil'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Add to pot, boil on high'
            }, {
                range: [ 0, 'yellow cornmeal' ],
                step: 'Whisk in, turn heat to low and simmer until thick (~2 min)'
            }, {
                range: [ 0, 'garlic powder' ],
                step: 'Stir in heat until smooth, cool in fridge'
            }, {
                range: [ 0, -1 ],
                step: 'Just before eating a slice, fry slice in oil until golden<br/>on each side'
            }
        ]
    },
    {
        title: 'Eggplant Parmesan Pasta (4-6 servings)',
        image: './images/eggplant-parmesan-pasta.jpg',
        url: 'http://www.budgetbytes.com/2015/12/eggplant-parmesan-pasta/',
        ingredients: [
            '1 sm eggplant',
            '1/2 Tbsp salt',
            '1/3 cup flour',
            '1 large egg',
            '2 Tbsp milk',
            '1/2 cup plain breadcrumbs',
            '1/4 cup grated parmesan',
            '1/4 tsp garlic powder',
            '8oz rigatoni',
            '24 oz pasta sauce',
            '1 cup shredded mozzarella'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'slice into 1/2" slices, sprinkled with salt, leave in<br/>colander 45-60min, then pat with towel to soak water.'
            }, {
                range: [ 0, 'flour' ],
                step: 'Heat oven to 425. Shake slices in bag with flour.'
            }, {
                range: [ 0, 'garlic powder' ],
                step: 'Dip each slice into egg, then coat in breadcrumbs.<br/>Place on baking sheet on top oven shelf for 25min.'
            }, {
                range: [ 0, -1 ],
                step: 'Reserve a few slices for toppings, cut the rest into 1/2" squares.<br/>Stir into sauce, pour sauce / pasta / eggplant into casserole dish,<br/>top with cheese. Bake 10-15min.<br/>Top with the reserved slices and serve.'
            }, {
                range: [ '1 large egg', 'milk' ],
                step: 'Whisk together'
            }, {
                range: [ 'plain breadcrumbs', 'garlic powder' ],
                step: 'Mix in small bowl'
            }, {
                range: [ 'rigatoni' ],
                step: 'Cook according to instructions'
            }
        ]
    },
    {
        title: 'Chicken Stew (4-6 servings)',
        image: './images/chicken-stew.jpeg',
        url: 'http://www.foodnetwork.com/recipes/giada-de-laurentiis/chicken-stew-recipe.html',
        ingredients: [
            '2 Tbsp olive oil',
            '2 stalks celery, sliced',
            '1 carrot, peeled and sliced',
            '1 sm onion, chopped',
            'Salt and Pepper',
            '14.5 oz can chopped tomatoes',
            '14 oz can chicken broth',
            '1/2 cup basil leaves, torn',
            '1 Tbsp tomato paste',
            '1 bay leaf',
            '1/2 tsp dried thyme leaves',
            '2 chicken breasts with ribs (1.5 lbs)',
            '15 oz can kidney beans, drained/rinsed',
            'Bread'
        ],
        steps: [
            {
                range: [ 0, 'onion' ],
                step: 'Heat in saucepan, saute 5min'
            }, {
                range: [ 0, 'dried thyme leaves' ],
                step: 'Season to taste, stir in'
            }, {
                range: [ 0, 'chicken breasts with ribs' ],
                step: 'Press to submerge chicken.<br/>Simmer liquid while turning chicken until cooked (25 min).<br/>Remove chicken and bay leaf.'
            }, {
                range: [ 0, -1 ],
                step: 'Add beans, simmer until thickened (10min).<br/>Discard chicken skin and bones, shred chicken, return to stew.<br/>Simmer, add salt/pepper and serve with bread.'
            }
        ]
    },
    {
        title: 'Oreo Fudge',
        image: './images/oreo-fudge.jpg',
        url: 'http://allrecipes.com/recipe/230281/worlds-best-oreo-fudge/',
        ingredients: [
            '3 cups white sugar',
            '3/4 cup butter',
            '2/3 cups evaporated milk',
            '2 cups white chocolate chips',
            '7 oz jar marshmallow creme',
            '1 tsp vanilla extract',
            '1/2 cup crumbled oreo cookie',
            '1 cup crushed oreo cookie'
        ],
        steps: [
            {
                range: [ 0, 'evaporated milk' ],
                step: 'Bring to boil in saucepan until smooth 3-5min, stir constantly'
            }, {
                range: [ 0, 'vanilla extract' ],
                step: 'Remove from heat, stir in until melted (vanilla after melted).'
            }, {
                range: [ 0, 'crumbled oreo cookie' ],
                step: 'Fold into mix, spread into 13x9" parchment-paper lined pan.'
            }, {
                range: [ 0, -1 ],
                step: 'Top. Cool at room temperature until set.'
            }
        ]
    },
    {
        title: 'Turkey Chili Baked Sweet Potatoes (4 servings)',
        image: './images/turkey-chili-baked-sweet-potatoes.jpg',
        url: 'http://www.budgetbytes.com/2015/12/turkey-chili-smothered-sweet-potatoes/',
        ingredients: [
            '4 small sweet potatoes',
            '1 Tbsp olive oil',
            '1/2 lb ground turkey',
            '1 yellow onion',
            '2 cloves garlic',
            '15oz. can kidney/black beans',
            '8oz. can tomato sauce',
            '1 Tbsp tomato paste',
            '1 Tbsp chili powder',
            '1/2 tsp oregano',
            '1/2 tsp cumin',
            '1/2 cup water',
            'Salt to taste',
            '1/2 cup shredded cheddar',
            'Cilantro & green onions'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Preheat to <b>400&deg;</b>, clean potatoes, prick skin w/fork.<br/>Bake on foil-lined sheet for <b>60min</b>'
            }, {
                range: [ 0, 'shredded cheddar' ],
                step: 'Slice open lengthwise, slightly mash insides.<br/>Scoop 3/4 cup mix over each potato, top with 2 Tbsp cheese.<br/>Return to oven for a few minutes to melt cheese.'
            }, {
                range: [ 0, -1 ],
                step: 'Top, serve'
            }, {
                range: [ 'olive oil', 'ground turkey' ],
                step: 'Saute 5min in pot'
            }, {
                range: [ 'olive oil', 'garlic' ],
                step: 'Add, saute 3-5min'
            }, {
                range: [ 'olive oil', 'salt to taste' ],
                step: 'Stir into pot, heat on high, then simmer on low for 15min.<br/>Salt to taste.'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'can kidney/black beans' ],
                step: 'Drain'
            }
        ]
    },
    {
        title: 'Cheesy Gnocchi Skillet (4 servings)',
        image: './images/cheesy-gnocchi-skillet.jpg',
        url: 'http://www.budgetbytes.com/2015/12/cheesy-gnocchi-skillet/',
        ingredients: [
            '1 lb. gnocchi',
            '2 cloves garlic',
            '1 Tbsp olive oil',
            '1/2 lb frozen chopped greens',
            '24oz jar pasta sauce',
            '2 Tbsp grated parmesan',
            '1 cup shredded mozzarella'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Boil large pot, add gnocchi for 3min, drain in colander'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Add to skillet, brown/crisp gnocchi (don\'t stir too often)'
            }, {
                range: [ 0, 'jar pasta sauce' ],
                step: 'Add, stir/combine and heat through (5min)'
            }, {
                range: [ 0, -1 ],
                step: 'Sprinkle parmesan, then add mozzarella,<br/>place lid on pan until melted.'
            }, {
                range: [ 'garlic', 'olive oil' ],
                step: 'Mince, add to skillet, saute on med 1min.'
            }
        ]
    },
    {
        title: 'Nam Sod (4 Servings)',
        image: './images/nam-sod.jpg',
        url: 'http://www.budgetbytes.com/2016/01/nam-sod-thai-pork-salad/',
        ingredients: [
            '1/4 cup lime juice',
            '1 Tbsp fish sauce',
            '1.5 Tbsp grated ginger',
            '1/2 Tbsp chili garlic sauce',
            '1 lb ground pork/turkey',
            '1 clove minced garlic',
            '1/2 Tbsp olive oil',
            '1/2 sm red onion',
            '1 carrot',
            '1/4 bunch cilantro',
            '1/2 cup unsalted peanuts',
            '4 cups cooked rice'
        ],
        steps: [
            {
                range: [ 0, 'chili garlic sauce' ],
                step: 'Combine, adjust to liking'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Combine, stir.'
            }, {
                range: [ 0, 'unsalted peanuts' ],
                step: 'Combine in bowl, stir.'
            }, {
                range: [ 0, -1 ],
                step: 'Serve over rice or greens'
            }, {
                range: [ 'ground pork/turkey', 'olive oil' ],
                step: 'Combine in large skillet, cook 5m, drain excess fat, cool'
            }, {
                range: [ 'red onion' ],
                step: 'Slice very thin'
            }, {
                range: [ 'carrot' ],
                step: 'Peel / Shred'
            }, {
                range: [ 'cilantro' ],
                step: 'Pull leaves'
            }
        ]
    },
    {
        title: 'Spicy Vegan Potato Curry (6 Servings)',
        image: './images/spicy-vegan-potato-curry.jpg',
        url: 'http://allrecipes.com/recipe/165190/spicy-vegan-potato-curry/',
        ingredients: [
            '4 Potatoes',
            '2 Tbsp Olive Oil',
            '1 yellow onion',
            '3 cloves garlic',
            '2 tsp ground cumin',
            '1.5 tsp cayenne',
            '4 tsp curry powder',
            '4 tsp garam masala',
            '1in ginger',
            '2 tsp salt',
            '14.5oz diced tomatoes',
            '15oz chickpeas',
            '15oz can peas',
            '14oz coconut milk'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Peel and Cube'
            }, {
                range: [ 0 ],
                step: 'Put in large pot, cover w/salted water.<br/>Boil on high, lower to med-low, cover, simmer 15min.<br/>Drain and steam dry for 1-2min.'
            }, {
                range: [ 0, -1 ],
                step: 'Mix into skillet, simmer 5-10min'
            }, {
                range: [ 'olive oil', 'garlic' ],
                step: 'Heat in large skillet 5min'
            }, {
                range: [ 'olive oil', 'salt' ],
                step: 'Season, cook 2min'
            }, {
                range: [ 'onion' ],
                step: 'Diced'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Peel/Mince'
            }, {
                range: [ 'chickpeas' ],
                step: 'Rinse, drain'
            }, {
                range: [ 'can peas' ],
                step: 'Drain'
            }
        ]
    },
    {
        title: 'Weeknight Enchiladas (4 Servings)',
        image: './images/weeknight-enchiladas.jpg',
        url: 'http://www.budgetbytes.com/2016/01/weeknight-enchiladas/',
        ingredients: [
            '2 tbsp olive oil',
            '2 tbsp chili powder',
            '2 tbsp flour',
            '2 cups water',
            '3oz tomato paste',
            '1/2 tsp cumin',
            '1/2 tsp garlic powder',
            '1/4 tsp cayenne',
            '3/4 tsp salt',
            '16 sm corn tortillas',
            '4 cups refried beans',
            '8oz (2 cups) shredded pepper jack',
            '1/2 large avocado',
            '1/4 bunch cilantro or green onions'
        ],
        steps: [
            {
                range: [ 0, 'flour' ],
                step: 'Combine in sm. pot, heat med 2-4min to toast spices/flour'
            }, {
                range: [ 0, 'salt' ],
                step: 'Whisk in, simmer until thick enough to coat a spoon.<br/>Salt to taste.'
            }, {
                range: [ 0, '(2 cups) shredded pepper jack' ],
                step: 'Coat casserole dish in non-stick spray, spread a sauce layer on<br/>bottom (1/2-1 cup). Preheat oven to <b>350&deg;</b>.<br/>Place rolled tortillas in dish on sauce.<br/>Pour 1/2-1 cup sauce on top, but leave some exposed tortilla<br/>to crisp. Top with remaining cheese. Bake 25-30 min.'
            }, {
                range: [ 0, -1 ],
                step: 'Top.'
            }, {
                range: [ 'corn tortillas' ],
                step: 'Toast to brown'
            }, {
                range: [ 'corn tortillas', '(2 cups) shredded pepper jack' ],
                step: 'Add 1/4 cup beans to each tortilla and a bit of cheese. Roll.'
            }, {
                range: [ 'avocado' ],
                step: 'Slice thin'
            }, {
                range: [ 'cilantro or green onions' ],
                step: 'Roughly chop'
            }
        ]
    },
    {
        title: 'Chana Aloo Masala (4 Servings)',
        image: './images/chana-aloo-masala.jpg',
        url: 'http://www.budgetbytes.com/2016/02/chana-aloo-masala-chickpea-and-potato-masala/',
        ingredients: [
            '1 lb. russet potato',
            '2 Tbsp olive oil',
            '1 yellow onion',
            '2 cloves garlic',
            '2 Tbsp ginger',
            '1 Tbsp garam masala',
            '28oz can crushed tomatoes',
            '2 Tbsp tomato paste',
            '1/2 tsp salt',
            '15oz. can chickpeas',
            '1/4 bunch cilantro',
            'Rice & Yogurt (optional)'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Peel and cut into 1 in<sup>3</sup>,<br/>Boil in large pot covered in water for 5-7min.<br/>Drain, set aside.'
            }, {
                range: [ 0, -1 ],
                step: 'Add all, heat through, serve.<br/>Optionally serve over rice under yogurt.'
            }, {
                range: [ 'olive oil', 'ginger' ],
                step: 'Add to deep skillet, saute med heat 3-5min.'
            }, {
                range: [ 'olive oil', 'garam masala' ],
                step: 'Add, saute 1min to toast'
            }, {
                range: [ 'olive oil', 'salt' ],
                step: 'Add, stir to dissolve, heat through (5min)'
            }, {
                range: [ 'onion' ],
                step: 'Dice'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }, {
                range: [ 'can chickpeas' ],
                step: 'Drain'
            }, {
                range: [ 'cilantro' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Stir Fry Beef Noodles (4 Servings)',
        image: './images/stir-fry-beef-noodles.jpg',
        url: 'http://www.budgetbytes.com/2016/01/stir-fry-beef-noodles/',
        ingredients: [
            '3 Tbsp soy sauce',
            '1 Tbsp water',
            '1 Tbsp brown sugar',
            '1-2 Tbsp chili garlic sauce',
            '1 tsp sesame oil',
            '8 oz. rice noodles',
            '1 Tbsp vegetable oil',
            '2 cloves garlic',
            '1 Tbsp ginger',
            '1/2 lb ground beef',
            '3-4 sliced green onions (whites)',
            '1 carrot',
            '3-4 sliced green onions (greens)',
            'Handful fresh cilantro'
        ],
        steps: [
            {
                range: [ 0, 'sesame oil' ],
                step: 'Mix, set aside.'
            }, {
                range: [ 0, 'carrot' ],
                step: 'Stir in until coated / sauce absorbed.'
            }, {
                range: [ 0, -1 ],
                step: 'Top'
            }, {
                range: [ 'rice noodles' ],
                step: 'Cook according to package (al dente to fry). Drain, set aside.'
            }, {
                range: [ 'vegetable oil' ],
                step: 'Heat'
            }, {
                range: [ 'vegetable oil', 'ground beef' ],
                step: 'Add, saute until beef cooked'
            }, {
                range: [ 'vegetable oil', 'sliced green onions' ],
                step: 'Add, cook 1min'
            }, {
                range: [ 'vegetable oil', 'carrot' ],
                step: 'Add, cook 1min'
            }, {
                range: [ '2 cloves garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }, {
                range: [ 'carrot' ],
                step: 'Grate (large holed)'
            }
        ]
    },
    {
        title: 'Blackened Shrimp Pasta (4 Servings)',
        image: './images/blackened-shrimp-pasta.jpg',
        url: 'http://www.budgetbytes.com/2016/03/blackened-shrimp-pasta/',
        ingredients: [
            '1 Tbsp smoked paprika',
            '1 tsp thyme',
            '1 tsp oregano',
            '1/2 tsp cumin',
            '1/4 tsp cayenne pepper',
            '1/4 tsp garlic powder',
            '1/4 tsp onion powder',
            '1/4 tsp salt',
            'Freshly cracked pepper',
            '1/2 lb shrimp',
            '2 Tbsp butter',
            '2 cloves garlic',
            '15 oz. can petite diced tomatoes',
            '1/4 tsp salt',
            '1/2 lb pasta',
            '2-3 green onions',
            'Handful fresh parsley',
            '1 lemon'
        ],
        steps: [
            {
                range: [ 0, 'freshly cracked pepper' ],
                step: 'Combine'
            }, {
                range: [ 0, 'shrimp' ],
                step: 'Sprinkle, stir to coat'
            }, {
                range: [ 0, '2 cloves garlic' ],
                step: 'Add, heat 3-5min (until opaque), remove from skillet.'
            }, {
                range: [ 0, 'pasta' ],
                step: 'Add all, stir to combine.'
            }, {
                range: [ 0, -1 ],
                step: 'Top, squeeze lemon over top'
            }, {
                range: [ 'shrimp' ],
                step: 'Rinse, drain, pat dry.'
            }, {
                range: [ 'butter', 'garlic' ],
                step: 'Heat on med. until foam + 1min.'
            }, {
                range: [ '2 cloves garlic' ],
                step: 'Mince'
            }, {
                range: [ 'can petite diced tomatoes', 'salt' ],
                step: 'Add to skillet (after shrimp) with 1/2 cup pasta water.<br/>Stir over med, dissolve browned bits.<br/>Simmer 5-10min. Add salt if needed.'
            }, {
                range: [ 'pasta' ],
                step: 'Cook 7-10min in boiling water. Reserve 1 cup pasta water'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'fresh parsley' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Crispy Baked Honey Sriracha Drumsticks (4 Servings)',
        image: './images/crispy-baked-honey-sriracha-drumsticks.jpg',
        url: 'http://www.budgetbytes.com/2016/03/crispy-baked-honey-sriracha-chicken-drumsticks/',
        ingredients: [
            '6 chicken drumsticks',
            'Pinch of salt and pepper',
            '2 Tbsp cornstarch',
            '1/4 cup sriracha',
            '2 Tbsp butter',
            '2 Tbsp honey'
        ],
        steps: [
            {
                range: [ 0, 'cornstarch' ],
                step: 'Place in bowl, mix to coat.<br><br/>Preheat oven <b>400&deg;</b>, prepare pan with foil and<br/>(use non-stick spray on) wire cooling rack to keep chicken off<br/>pan.<br><br/>Bake for 50min, or until golden &amp; crispy'
            }, {
                range: [ 0, -1 ],
                step: 'Coat chicken in sauce.'
            }, {
                range: [ 'sriracha', -1 ],
                step: 'Combine in small sauce pot, heat to smooth'
            }
        ]
    },
    {
        title: 'Thai Curry Vegetable Soup (4 Servings)',
        image: './images/thai-curry-vegetable-soup.jpg',
        url: 'http://www.budgetbytes.com/2016/03/thai-curry-vegetable-soup/',
        ingredients: [
            '2 Tbsp oil',
            '2 cloves garlic',
            '1 Tbsp ginger',
            '2 Tbsp Thai red curry paste',
            '1 1lb sweet potato',
            '1 bunch baby bok choy',
            '4 cups vegetable/chicken broth',
            '13oz can coconut milk',
            '1/2 Tbsp fish sauce',
            '1/2 Tbsp brown sugar',
            '3.5oz rice vermicelli noodles',
            '1/2 red onion',
            '1 lime',
            'Handful fresh cilantro',
            'Sriracha to taste'
        ],
        steps: [
            {
                range: [ 0, 'thai red curry paste' ],
                step: 'Add to large soup pot, saute on med 1-2min'
            }, {
                range: [ 0, 'vegetable/chicken broth' ],
                step: 'Add to pot, boil on med-high, then reduce to simmer 5-7min'
            }, {
                range: [ 0, 'brown sugar' ],
                step: 'Add, stir &amp; adjust sugar/sauce to taste.<br/>Add bok choy greens (leaves), heat until wilted.'
            }, {
                range: [ 0, -1 ],
                step: 'Add noodles and garnish'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }, {
                range: [ '1lb sweet potato' ],
                step: 'Peel &amp; cut into 1in<sup>3</sup>'
            }, {
                range: [ 'baby bok choy' ],
                step: 'Wash, chop into 1in strips, remove leaves'
            }, {
                range: [ 'rice vermicelli noodles' ],
                step: 'Boil in water 2-3min, drain, set aside'
            }, {
                range: [ 'red onion' ],
                step: 'Thinly slice'
            }, {
                range: [ 'lime' ],
                step: 'Cut into wedges'
            }, {
                range: [ 'fresh cilantro' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Hoisin Stir Fry with Peanut Sauce (4 Servings)',
        image: './images/hoisin-stir-fry-peanut-sauce.jpg',
        url: 'http://www.budgetbytes.com/2016/04/hoisin-stir-fry-bowls-spicy-peanut-sauce/',
        ingredients: [
            '1/4 cup peanut butter',
            '1 Tbsp sriracha',
            '1 tsp soy sauce',
            '1 tsp ginger, grated',
            '1 tsp brown sugar',
            '3 Tbsp hot water',
            '1/2 Tbsp oil',
            '2 cloves garlic, minced',
            '1 tsp ginger, grated',
            '1/2 lb ground pork/chicken/turkey',
            '8oz button mushrooms',
            '1 large carrot',
            '1 red bell pepper',
            '1/3 cup hoisin sauce',
            '1 Tbsp soy sauce',
            '1 tsp sesame oil',
            '4 cups cooked rice',
            '1/4 cup peanuts',
            '2-3 green onions'
        ],
        steps: [
            {
                range: [ 0, 'hot water' ],
                step: 'Combine in bowl, stirring in hot water (and grating ginger)'
            }, {
                range: [ 0, -1 ],
                step: 'Make bowls with rice, add stir fry, add onions/peanuts,<br/>and drizzle sauce from bowl on top.'
            }, {
                range: [ 'oil', 'ginger' ],
                step: 'Heat on med, saute 1min'
            }, {
                range: [ 'oil', 'ground pork/chicken/turkey' ],
                step: 'Add, saute until cooked through (5min)'
            }, {
                range: [ 'oil', 'button mushrooms' ],
                step: 'Add, saute 5min'
            }, {
                range: [ 'oil', 'sesame oil' ],
                step: 'Add, stir until coated, remove from heat.'
            }, {
                range: [ 'button mushrooms' ],
                step: 'Rinse, chop into sm pieces'
            }, {
                range: [ 'carrot' ],
                step: 'Peel and shred'
            }, {
                range: [ 'red bell pepper' ],
                step: 'Finely dice'
            }, {
                range: [ 'peanuts' ],
                step: 'Chop'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }
        ]
    },
    {
        title: 'Chicken Marsala (4 servings)',
        image: './images/chicken-marsala.jpeg',
        url: 'http://www.foodnetwork.com/recipes/tyler-florence/chicken-marsala-recipe.html',
        ingredients: [
            '4 chicken breasts (1.5lb)',
            'Flour',
            'Salt and Pepper',
            '1/4 cup olive oil',
            '4 ounces prosciutto',
            '8 ounces crimini/porcini mushrooms',
            '1/2 cup sweet marsala',
            '1/2 cup chicken stock',
            '2 tbsp butter',
            '1/4 cup chopped parsley'
        ],
        steps: [
            {
                range: [ 0, 'salt and pepper' ],
                step: 'Hammer chicken to 1/4" flat. Coat with flour/salt/pepper.'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Heat oil on med-high, fry 5min (until each side golden),<br/>remove from pan.'
            }, {
                range: [ 0, -1 ],
                step: 'Add chicken back to pan, cook 1min.<br/>Season with parsley, salt and pepper before serving'
            }, {
                range: [ 'prosciutto' ],
                step: 'Add to pan after chicken removed on med heat, saute 1min.'
            }, {
                range: [ 'prosciutto', 'crimini/porcini mushrooms' ],
                step: 'Add, heat 5min, season w/salt &amp; pepper'
            }, {
                range: [ 'prosciutto', 'sweet marsala' ],
                step: 'Add, boil for a few seconds'
            }, {
                range: [ 'prosciutto', 'butter' ],
                step: 'Add, simmer (stir butter in)'
            }
        ]
    },
    {
        title: 'Smoky White Bean Shakshuka (4 Servings)',
        image: './images/smoky-white-bean-shakshuka.jpg',
        url: 'http://www.budgetbytes.com/2016/04/smoky-white-bean-shakshuka/',
        ingredients: [
            '2 Tbsp olive oil',
            '4 cloves garlic',
            '1 yellow onion',
            '28oz can whole peeled tomatoes',
            '1/2 Tbsp paprika',
            '1 tsp cumin',
            '1/2 tsp dried oregano',
            '1/8 tsp red pepper flakes',
            'Freshly cracked pepper',
            '1/4 tsp salt',
            '15oz can cannellini beans',
            '4 large eggs',
            'Parsley, chopped',
            '2oz feta, crumbled'
        ],
        steps: [
            {
                range: [ 0, 'onion' ],
                step: 'Cook on med 5min'
            }, {
                range: [ 0, 'freshly cracked pepper' ],
                step: 'Add, crushing tomatoes, stir'
            }, {
                range: [ 0, 'salt' ],
                step: 'Simmer &amp; stir 5-7min, add salt'
            }, {
                range: [ 0, 'can cannellini beans' ],
                step: 'Add, simmer 2-3min'
            }, {
                range: [ 0, 'eggs' ],
                step: 'Crack into skillet, add lid, simmer 5-min'
            }, {
                range: [ 0, -1 ],
                step: 'Top, serve'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'onion' ],
                step: 'Finely dice'
            }, {
                range: [ 'can cannellini beans' ],
                step: 'Drain'
            }
        ]
    },
    {
        title: 'Lemon Berry Cobbler (4 Servings)',
        image: './images/lemon-berry-cobbler.jpg',
        url: 'http://www.budgetbytes.com/2016/04/lemon-berry-cobbler/',
        ingredients: [
            '12oz frozen mixed berries, thawed',
            '1/4 cup sugar',
            '1.5 Tbsp cornstarch',
            '1 lemon',
            '1 cup flour',
            '1 tsp baking powder',
            '1/4 cup sugar',
            '1/8 tsp salt',
            '4 Tbsp cold butter',
            '5 Tbsp milk'
        ],
        steps: [
            {
                range: [ 0, 'lemon' ],
                step: 'Stir to combine (use 1/2 zest) in casserole dish'
            }, {
                range: [ 0, -1 ],
                step: 'Add dough on top in small pieces<br><br/>Bake <b>425&deg;F</b> 20-25 min, on pan to catch any spillage'
            }, {
                range: [ 'lemon' ],
                step: 'Zest with grater'
            }, {
                range: [ 'flour', 'salt' ],
                step: 'Stir together in med. bowl + 1/2 zest'
            }, {
                range: [ 'flour', 'cold butter' ],
                step: 'Use hands to mix until damp sand'
            }, {
                range: [ 'flour', -1 ],
                step: 'Add, stir until sticky dough'
            }, {
                range: [ 'cold butter' ],
                step: 'Cut into small pieces'
            }
        ]
    },
    {
        title: 'Warm Corn and Avocado Salad (4 Servings)',
        image: './images/warm-corn-avocado-salad.jpg',
        url: 'http://www.budgetbytes.com/2016/05/warm-corn-avocado-salad/',
        ingredients: [
            '2 Tbsp oil',
            '1 lb frozen corn, thawed',
            'Salt & Pepper to taste',
            '1/4 tsp cumin',
            '1/4 red onion',
            '1 avocado',
            '1/4 bunch cilantro',
            'Juice of 1/2 lime'
        ],
        steps: [
            {
                range: [ 0, 'frozen corn' ],
                step: 'Heat oil on med-high, saute corn to golden brown/blistered'
            }, {
                range: [ 0, 'cumin' ],
                step: 'combine in bowl, cool'
            }, {
                range: [ 0, -1 ],
                step: 'combine in bowl, stir'
            }, {
                range: [ 'red onion' ],
                step: 'Dice'
            }, {
                range: [ 'avocado' ],
                step: 'Cube'
            }, {
                range: [ 'cilantro' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Kale Salad w/Cajun Spiced Chickpeas and Buttermilk Dressing (4 Servings)',
        image: './images/kale-salad-cajun-spiced-chickpeas-buttermilk-dressing.jpg',
        url: 'http://www.budgetbytes.com/2016/06/kale-salad-cajun-spiced-chickpeas-buttermilk-dressing/',
        ingredients: [
            '1/2 cup buttermilk',
            '1/3 cup mayo',
            '1 Tbsp lemon juice',
            '1/4 tsp salt',
            '1/4 tsp garlic powder',
            '1/4 tsp oregano',
            'Fresh cracked pepper',
            '15oz can chickpeas',
            '1 Tbsp olive oil',
            '1/4 tsp salt',
            '1/2 tsp smoked paprika',
            '1/4 tsp garlic powder',
            '1/8 tsp onion powder',
            '1/4 tsp oregano',
            '1/8 tsp cayenne',
            '1/8 tsp thyme',
            'Freshly cracked pepper',
            '1/2 lb kale',
            '1/4 red onion',
            '1.5 Tbsp grated parmesan'
        ],
        steps: [
            {
                range: [ 0, 'fresh cracked pepper' ],
                step: 'Whisk together, refrigerate'
            }, {
                range: [ 0, -1 ],
                step: 'Combine into salads'
            }, {
                range: [ 'can chickpeas', 'freshly cracked pepper' ],
                step: 'Drain/rinse chickpeas, heat in skillet on med 5min<br/>or until toasted'
            }, {
                range: [ 'red onion' ],
                step: 'Thinly slice'
            }
        ]
    },
    {
        title: 'Sticky Ginger Soy Glazed Chicken (8 servings)',
        image: './images/sticky-ginger-soy-glazed-chicken.jpg',
        url: 'http://www.budgetbytes.com/2016/07/sticky-ginger-soy-glazed-chicken/',
        ingredients: [
            '1/4 cup brown sugar',
            '3 Tbsp soy sauce',
            '2 cloves garlic',
            '1 Tbsp fresh ginger',
            'Freshly cracked pepper (15 cranks)',
            '1 Tbsp cooking oil',
            '8 boneless, skinless chicken thighs',
            '1/2 Tbsp cooking oil',
            '2 green onions',
            '1 tsp sesame seeds'
        ],
        steps: [
            {
                range: [ 0, 'cooking oil' ],
                step: 'Combine in bowl'
            }, {
                range: [ 0, 'boneless' ],
                step: 'Pour over chicken into ziplock bags, marinate for 30 mins<br/>or up to a day'
            }, {
                range: [ 0, '1/2 tbsp cooking oil' ],
                step: 'Heat pan on med. Add oil once hot, swirl to coat pan.<br/>Add half the chicken and cook until all sides browned.<br/>Remove chicken, repeat with second batch.<br/>Remove chicken, pour leftover marinade into pan and heat<br/>until thick glaze. Pour glaze over chicken.'
            }, {
                range: [ 0, -1 ],
                step: 'Garnish.'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'fresh ginger' ],
                step: 'Grate'
            }
        ]
    },
    {
        title: 'Cowboy Caviar (5 servings)',
        image: './images/cowboy-caviar.jpg',
        url: 'http://www.budgetbytes.com/2016/07/cowboy-caviar/',
        ingredients: [
            '15oz can black beans',
            '15oz can black eyed peas',
            '1 bell pepper',
            '2 Roma tomatoes',
            '1 jalapeno',
            '1/4 red onion',
            '1/4 bunch cilantro',
            '2 Tbsp olive oil',
            '1 fresh lime',
            '1/2 Tbsp balsamic vinegar',
            '1/2 tsp chili powder',
            '1 tsp cumin',
            '1/2 tsp salt',
            '1/2 tsp sugar'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Rinse &amp; drain'
            }, {
                range: [ 0, 'cilantro' ],
                step: 'place in bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Mix sauce in, serve or refrigerate'
            }, {
                range: [ 'can black eyed peas' ],
                step: 'Rinse &amp; drain'
            }, {
                range: [ 'bell pepper', 'red onion' ],
                step: 'Finely dice into bean-sized pieces,<br/>scrape seeds from jalapeno.'
            }, {
                range: [ 'cilantro' ],
                step: 'Rough chop'
            }, {
                range: [ 'olive oil', -1 ],
                step: 'whisk together'
            }
        ]
    },
    {
        title: 'Oreo Krispie Treats',
        image: './images/oreo-krispie-treats.png',
        url: 'http://www.highheelsandgrills.com/oreo-krispie-treats/',
        ingredients: [
            '6 cups regular oreos, crushed',
            '4 cups mini (or 40 large) marshmallows',
            '4 Tbsp butter'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Pour into large bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Combine in 8x8 pan, let sit until cool.<br/>Cut into squares and serve.'
            }, {
                range: [ 'mini (or 40 large) marshmallows', -1 ],
                step: 'Heat on med. until few lumps of mallows left'
            }
        ]
    },
    {
        title: 'Okonomiyaki (6 servings)',
        image: './images/okonomiyaki.jpg',
        url: 'http://www.budgetbytes.com/2016/08/savory-cabbage-pancakes-okonomiyaki/',
        ingredients: [
            '2 extra large eggs',
            '1/2 cup water',
            '1.5 Tbsp soy sauce',
            '1 Tbsp sesame oil',
            '3/4 to 1 cup flour',
            '4-5 cups cabbage',
            '1 carrot',
            '3 green onions',
            '2 tbsp oil',
            '1/4 cup mayo',
            '2 tbsp sriracha',
            '1/2 tbsp sesame seeds',
            '2 green onions'
        ],
        steps: [
            {
                range: [ 0, 'sesame oil' ],
                step: 'Whisk in large bowl to smooth'
            }, {
                range: [ 0, 'to 1 cup flour' ],
                step: 'Whisk 1/4 cup at a time until thick batter'
            }, {
                range: [ 0, 'green onions' ],
                step: 'Add, stir until even'
            }, {
                range: [ 0, '2 tbsp oil' ],
                step: 'Heat oil in pan, add 3/4 cup batter, press into 6" diameter<br/>pancake. Cover to cook in steam.<br/>Cook each 3-5 min (to brown), flip, repeat.'
            }, {
                range: [ 0, -1 ],
                step: 'Top, serve.'
            }, {
                range: [ 'cabbage' ],
                step: 'Remove wilted leaves, core, thinly slice'
            }, {
                range: [ 'carrot' ],
                step: 'Peel &amp; shred/grate'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'mayo', 'sriracha' ],
                step: 'Mix together'
            }
        ]
    },
    {
        title: 'Balsamic Chicken Skillet (6 Servings)',
        image: './images/balsamic-chicken-skillet.jpg',
        url: 'http://www.budgetbytes.com/2016/08/balsamic-chicken-skillet/',
        ingredients: [
            '2 Tbsp olive oil',
            '2 Tbsp brown sugar',
            '1/4 cup balsamic vinegar',
            '1 Tbsp soy sauce',
            '2 cloves garlic, minced',
            'Black Pepper',
            '6 chicken thighs',
            '4 oz mozzarella',
            '2 roma tomatoes',
            '1/4 bunch parsley'
        ],
        steps: [
            {
                range: [ 0, 'chicken thighs' ],
                step: 'Mix (10-15 cranks pepper), pour over chicken in bowl, marinate<br/>30min - 8hrs, turning occasionally.<br/><br/><br/>Cook just chicken (no marinade) on med until brown<br/>(5 min per side). Remove chicken, pour marinade into pan and<br/>heat until glaze.'
            }, {
                range: [ 0, -1 ],
                step: 'Add chicken to pan, top with cheese and tomatoes,<br/>cover to melt cheese. Top with parsley and serve.'
            }, {
                range: [ 'mozzarella' ],
                step: 'Slice into 6 pieces'
            }, {
                range: [ 'tomatoes' ],
                step: 'Slice (at least 12 slices)'
            }, {
                range: [ 'parsley' ],
                step: 'Rough chop'
            }
        ]
    },
    {
        title: 'Raspberry Cream Sandwich-Cookies',
        image: './images/raspberry-cream-sandwich-cookies.jpg',
        url: 'http://www.marthastewart.com/318287/raspberry-cream-sandwich-cookies',
        ingredients: [
            '1.75 cups flour',
            '1 tsp baking soda',
            '1/2 tsp salt',
            '1.25 sticks (10 tbsp) softened butter',
            '1.5 cups',
            '1 large eggs',
            '2 tsp vanilla extract',
            '1 vanilla bean, halved and scraped',
            '6 ounce raspberries',
            '2 tsp sugar',
            '7.5 ounce white chocolate, coarse chop',
            '1/3 cup heavy cream'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Preheat oven <b>350&deg;</b>, whisk together'
            }, {
                range: [ 0, 'vanilla bean' ],
                step: 'Gradually mix in on low speed. Scoop with 1" scoop spaced 2"<br/>apart on baking sheet w/parchment paper. Bake 4min.<br/>Remove oven, gently tap sheet on counter to flatten,<br/>bake 4-6 min more. Let cool.'
            }, {
                range: [ 0, -1 ],
                step: 'Spread 1 teaspoon cream between each pair of cookies.'
            }, {
                range: [ 'sticks (10 tbsp) softened butter', 'cups' ],
                step: 'Mix on med-high speed until pale and fluffy, 2-3min'
            }, {
                range: [ 'sticks (10 tbsp) softened butter', 'vanilla bean' ],
                step: 'Mix until smooth'
            }, {
                range: [ 'raspberries', 'sugar' ],
                step: 'Puree, pour mix through sieve into bowl, discard seeds<br/>/ skins.'
            }, {
                range: [ 'raspberries', -1 ],
                step: 'Slowly whisk together. Refrigerate 30 mins.'
            }, {
                range: [ 'white chocolate' ],
                step: 'Melt in heatproof bowl over pan of simmering water'
            }, {
                range: [ 'white chocolate', -1 ],
                step: 'Whisk in slow stream.'
            }
        ]
    },
    {
        title: 'Butternut Squash Mac No-Cheese',
        image: './images/butternut-squash-mac-no-cheese.jpg',
        url: 'http://www.eatyourbeets.com/vegetables/butternut-squash-macaroni-and-no-cheese/',
        ingredients: [
            '2 Tbsp olive oil',
            '1/4 cups shallots, diced',
            '2 cloves garlic, minced',
            '2 lbs Butternut Squash, peeled & diced',
            '2 Tbsp sage, chopped',
            '1 cup coconut milk',
            '1 cup reserved pasta water',
            '8 oz box of Elbow noodles',
            'Salt & Pepper',
            'Parmesan'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Preheat oven to <b>400&deg;</b> Saute in skilet until fragrent'
            }, {
                range: [ 0, 'sage' ],
                step: 'Add, toss until coated in oil.<br/>Place skillet in oven 25-30 mins until soft'
            }, {
                range: [ 0, 'reserved pasta water' ],
                step: 'Combine and blend'
            }, {
                range: [ 0, -1 ],
                step: 'Mix pasta in, season, top with cheese'
            }, {
                range: [ 'box of elbow noodles' ],
                step: 'Cook according to box directions, reserve pasta water'
            }
        ]
    },
    {
        title: 'Spring Rolls (6 Servings)',
        image: './images/spring-rolls.jpg',
        url: 'http://www.epicurious.com/recipes/food/views/spicy-summer-rolls-with-peanut-dipping-sauce-51137600',
        ingredients: [
            '2/3 cup hoisin sauce',
            '1/3 cup creamy peanut butter',
            '1/3 cup water',
            '3 Tbsp lime juice',
            '1.5 Tbsp soy sauce',
            '12 rice-paper rounds',
            '3 ounces rice-stick noodles',
            '2.75 cup shredded carrots',
            '1 cup coarse chopped peanuts',
            '4 cups lettuce',
            '1 cup mint leaves',
            '1 cup Thai basil',
            '30 pre-cooked shrimp'
        ],
        steps: [
            {
                range: [ 0, 'soy sauce' ],
                step: 'Whisk together'
            }, {
                range: [ 0, -1 ],
                step: 'Make a roll by dipping the round in nearly boiling water to soften,<br/>then topping with all ingredients and sauce. Finally, roll up.<br/>Make each roll just prior to eating.'
            }, {
                range: [ 'rice-stick noodles' ],
                step: 'Cook according to package'
            }
        ]
    },
    {
        title: 'Pao de Quejo',
        image: './images/pao-de-quejo.jpg',
        url: 'http://allrecipes.com/recipe/98554/brazilian-cheese-bread-pao-de-queijo/',
        ingredients: [
            '1/2 cup olive oil / butter',
            '1/3 cup water',
            '1/3 cup milk',
            '1 tsp salt',
            '2 cups tapioca flour',
            '2/3 cup grated Parmesan',
            '2 beaten eggs'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: '<b>Preheat to 375&deg;F</b><br><br/>Add to saucepan, heat on high until boils'
            }, {
                range: [ 0, 'tapioca flour' ],
                step: 'Remove from heat immediately, stir in until smooth,<br/>set aside 10 to 15 mins'
            }, {
                range: [ 0, -1 ],
                step: 'Stir in until well combined, mix will be chunky.<br/>Drop 1/4 cub balls onto ungreased baking sheet,<br/>bake 15-20 minutes.'
            }
        ]
    },
    {
        title: 'Ham and Cheese Quiche (8 Servings)',
        image: './images/ham-and-cheese-quiche.jpg',
        url: 'https://www.whattheforkfoodblog.com/2015/08/13/ham-and-cheese-quiche/',
        ingredients: [
            '9" Pie Crust, Par Baked',
            '1 Cup Cure 81 Ham, diced',
            '4 slices bacon, cooked & crumbled',
            '1.5 Cup shredded cheddar cheese',
            '1 Tbsp flour',
            '3 eggs',
            '1.5 Cup milk',
            '1/8 tsp black pepper'
        ],
        steps: [
            {
                range: [ 0, 'bacon' ],
                step: '<b>Preheat oven to 350&deg;F.</b><br><br/>Add to pie crust, spread evenly.'
            }, {
                range: [ 0, 'flour' ],
                step: 'Add to pie crust over meat'
            }, {
                range: [ 0, -1 ],
                step: 'Pour over, bake 40-55 mins, let rest 15 mins'
            }, {
                range: [ 'shredded cheddar cheese', 'flour' ],
                step: 'Toss together to coat'
            }, {
                range: [ 'eggs', -1 ],
                step: 'Whisk together in large measuring cup'
            }
        ]
    },
    {
        title: 'Heirloom Cherry Tomato Tart',
        image: './images/heirloom-cherry-tomato-tart.JPG',
        url: 'https://theviewfromgreatisland.com/minimal-monday-heirloom-cherry-tomato-tart/',
        ingredients: [
            '1 sheet thawed puff pastry',
            '4 oz mascarpone cheese',
            'Juice & zest of 1/2 lemon',
            'Salt and Fresh Pepper to taste',
            '1 lb heirloom cherry tomatoes, halved',
            '1 or 2 ounces goat cheese',
            'Basil, cut to ribbons'
        ],
        steps: [
            {
                range: [ 0 ],
                step: '<b>Preheat to 425&deg;F</b><br><br/>Put sheet on parchment-lined baking sheet.<br/>Score edge around pastry with knife (1/2" from edge).'
            }, {
                range: [ 0, 'salt and fresh pepper to taste' ],
                step: 'Spread evenly over pastry'
            }, {
                range: [ 0, 'or 2 ounces goat cheese' ],
                step: 'Add tomatoes inside-down, use cheese to fill gaps<br><br/>Bake for 20-25 mins'
            }, {
                range: [ 0, -1 ],
                step: 'Garnish and serve.'
            }, {
                range: [ 'mascarpone cheese', 'salt and fresh pepper to taste' ],
                step: 'Mix, Stir until smooth'
            }
        ]
    },
    {
        title: 'Belgian Waffles',
        image: './images/belgian-waffles.jpg',
        url: 'http://www.geniuskitchen.com/recipe/the-best-belgian-waffles-63071',
        ingredients: [
            '2 cups flour',
            '4 tsp baking powder',
            '1/2 tsp salt',
            '1/4 cup sugar',
            '2 egg whites',
            '2 egg yolks',
            '1/2 cup veg oil',
            '2 cups milk',
            '1 tsp vanilla'
        ],
        steps: [
            {
                range: [ 0, 'sugar' ],
                step: 'Sift all into large bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Add wet ingredients to dry ones, fold in egg whites.<br/>Cook in waffle iron on med-high 5-10 minutes.'
            }, {
                range: [ 'egg whites' ],
                step: 'Beat until stiff peaks.'
            }, {
                range: [ 'egg yolks', -1 ],
                step: 'Mix all, stir slightly'
            }
        ]
    },
    {
        title: 'Cloud Eggs',
        image: './images/cloud-eggs.jpg',
        url: 'http://www.delish.com/cooking/recipe-ideas/recipes/a52748/cloud-eggs-recipe/',
        ingredients: [
            '4 large eggs whites',
            'Salt',
            'Black Pepper',
            '1/2 c. grated parmesan',
            '1/4 lb. deli ham, chopped',
            '3 tbsp finely chopped chives',
            '4 large egg yolks'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: '<b>Preheat to 450&deg;F</b><br><br/>Line large baking sheet with parchment paper.<br/>Season egg whites, beat to stiff peaks.'
            }, {
                range: [ 0, 'finely chopped chives' ],
                step: 'Fold all in. Create 4 mounds on sheet with indents in middle<br/>of each. Bake 3 minutes.'
            }, {
                range: [ 0, -1 ],
                step: 'Add yolk to middle of each, season yolks with salt and pepper.<br/>Bake 3 more minutes.'
            }
        ]
    },
    {
        title: 'Japchae',
        image: './images/japchae.jpg',
        url: 'https://mykoreankitchen.com/korean-glass-noodle-stir-fry-japchae/',
        ingredients: [
            '100 g rib eye fillet',
            '1 Tbsp soy sauce',
            '1 tsp rice wine (mirin)',
            '1/2 tsp minced garlic',
            '1/4 tsp black pepper',
            '1 tsp sesame oil',
            '100 g shiitake',
            '110 g baby spinach,<br/>rinsed and drained',
            '1/4 tsp salt',
            '1/2 tsp minced garlic',
            '1 tsp sesame oil',
            '250 g Korean sweet<br/>potato noodles<br/>(dangmyeon)',
            '4 Tbsp soy sauce',
            '1 Tbsp honey',
            '1 Tbsp brown sugar',
            '1 Tbsp sesame oil',
            '1/8 tsp black pepper',
            '1/2 large yellow onion',
            '1 med carrot, julienned',
            '1/4 red bell pepper',
            '1 egg',
            '1 Tbsp sesame seeds',
            '1 Tbsp sesame oil'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Thinly slice'
            }, {
                range: [ 0, 'sesame oil' ],
                step: 'Add marinade, soak 30mins'
            }, {
                range: [ 0, 'sesame oil' ],
                step: 'Cook in oiled pan 2-3min on med'
            }, {
                range: [ 0, -1 ],
                step: 'Mix all together in bowl.'
            }, {
                range: [ 'soy sauce', 'sesame oil' ],
                step: 'Mix'
            }, {
                range: [ 'shiitake' ],
                step: 'Coat in 1 Tbsp Marinade #2 for 20mins'
            }, {
                range: [ 'shiitake' ],
                step: 'Cook in oiled pan 1-2min. on low-med heat.'
            }, {
                range: [ 'baby spinach,<br/>rinsed and drained' ],
                step: 'Boil water, dip spinach 5-10 sec, rince in cold water,<br/>squeeze spinach to remove water'
            }, {
                range: [ 'baby spinach,<br/>rinsed and drained', 'sesame oil' ],
                step: 'Add seasoning to spinach'
            }, {
                range: [ 'korean sweet<br/>potato noodles' ],
                step: 'Boil, add noodles 7min, drain. Rinse in cool water, drain 1-2min.<br/>Cut noodles w/scissors.'
            }, {
                range: [ 'korean sweet<br/>potato noodles', 'black pepper' ],
                step: 'Add remainder of Marinade #2 for 10 min.'
            }, {
                range: [ 'korean sweet<br/>potato noodles', 'black pepper' ],
                step: 'Cook in oiled pan 2-3 min on low-med.'
            }, {
                range: [ '4 tbsp soy sauce', 'black pepper' ],
                step: 'Mix to create Marinade #2'
            }, {
                range: [ 'yellow onion' ],
                step: 'Cook in oiled pan w/pinch of salt 1-2 min on med.'
            }, {
                range: [ 'carrot' ],
                step: 'Cook in oiled pan w/pinch of salt 1-2min on med.'
            }, {
                range: [ 'red bell pepper' ],
                step: 'Cook in oiled pan w/pinch of salt 1-2min on low-med.'
            }, {
                range: [ 'egg' ],
                step: 'Beat, Cook with 1 tsp oil 1-2 mins. Cut into sticks.'
            }
        ]
    },
    {
        title: 'Seared Chicken & Tomatillo Salsa (4 Servings)',
        image: './images/seared-chicken-tomatillo-salsa.jpg',
        url: 'https://www.blueapron.com/recipes/oven-baked-chicken-in-tomatillo-sauce-with-rice-corn-golden-raisin-salad',
        ingredients: [
            '1 cup long grain white rice',
            '6 Tbsps Golden Raisins',
            '2 Tbsps Rice Vinegar',
            '8 oz Tomatillos',
            '2 Tbsp sugar',
            '2 Tbsps Rice Vinegar',
            '4 Chicken Breasts',
            '4 ears corn',
            '4 scallions',
            '2 Cubanelle Peppers',
            '2 Summer Squash'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Add to 2 cups boiling water &amp; salt, boil on high, cover,<br/>cook 12-14 mins on low.'
            }, {
                range: [ 0, 'tbsps rice vinegar' ],
                step: 'Add with 1 Tbsp olive oil, season with S&amp;P, mix'
            }, {
                range: [ 0, -1 ],
                step: 'Slice chicken and put on top of rice, with veggies on side.'
            }, {
                range: [ 'tomatillos' ],
                step: 'Dice'
            }, {
                range: [ 'tomatillos', 'tbsps rice vinegar' ],
                step: 'Combine, add salt, pepper &amp; olive oil drizzle,<br/>stir occasionally for 10 mins.'
            }, {
                range: [ 'chicken breasts' ],
                step: 'Dry, cover both sides with salt &amp; pepper.<br/>Heat 3 Tbsp olive oil on med-high, then add chicken,<br/>cook 4-6 min per side. Remove from pan.'
            }, {
                range: [ 'chicken breasts', -1 ],
                step: 'Season with S&amp;P, Cook med-high 3-4min.'
            }, {
                range: [ 'corn' ],
                step: 'Remove kernels'
            }, {
                range: [ 'scallions' ],
                step: 'Slice, remove greens.'
            }, {
                range: [ 'cubanelle peppers' ],
                step: 'Remove seeds, dice'
            }, {
                range: [ 'summer squash' ],
                step: 'medium dice'
            }
        ]
    },
    {
        title: 'Seared Salmon & Roasted Potatoes (4 Servings)',
        image: './images/seared-salmon-roasted-potatoes.jpg',
        url: 'https://www.blueapron.com/recipes/seared-salmon-with-roasted-potatoes-two-bean-saute',
        ingredients: [
            '1.5 lbs red potatoes',
            '3/4 lb green beans',
            '2 cloves garlic',
            '1 shallot',
            '1/2 lb cherry tomatoes',
            '1 bunch thyme',
            '2 Tbsps sliced almonds',
            '2 Tbsps red wine vinegar',
            '1 Tbsp butter',
            '4 Skin-on Salmon Fillets',
            '1 Tbsp butter'
        ],
        steps: [
            {
                range: [ 0 ],
                step: '<b>Preheat oven 475&deg;F</b>, Quarter'
            }, {
                range: [ 0 ],
                step: 'Add to sheet pan, drizzle olive oil and add S&amp;P and<br/>half bunch thyme, toss to coat. Bake 26-28min.'
            }, {
                range: [ 0, -1 ],
                step: 'Serve fish over veggies with potatoes on the side.'
            }, {
                range: [ 'green beans' ],
                step: 'Trim off ends'
            }, {
                range: [ 'green beans' ],
                step: 'Heat 1 Tbsp olive oil on med high, then add beans with S&amp;P.<br/>Cook 4-6min.'
            }, {
                range: [ 'green beans', 'shallot' ],
                step: 'Add with S&amp;P, cook 30sec-1min.'
            }, {
                range: [ 'green beans', 'thyme' ],
                step: 'Add with 1/4 cup water, season w/S&amp;P. Cook 4-6min<br/>(tomatoes soft &amp; water evaporated).'
            }, {
                range: [ 'green beans', 'butter' ],
                step: 'Add, season with S&amp;P, cook 1-2min.<br/>Put in bowl, wipe out pan.'
            }, {
                range: [ 'shallot' ],
                step: 'Peel, thinly slice'
            }, {
                range: [ 'cherry tomatoes' ],
                step: 'Halve'
            }, {
                range: [ 'thyme' ],
                step: 'Pick leaves off, discard stems'
            }, {
                range: [ 'skin-on salmon fillets', -1 ],
                step: 'Season with S&amp;P on both sides.<br/>Heat 1Tbsp olive oil on med-high until hot.<br/>Cook skin side down 3-5 min.'
            }, {
                range: [ 'skin-on salmon fillets', -1 ],
                step: 'Flip, add butter.<br/>Cook 2-4 min, occasionally spooning butter over meat.'
            }
        ]
    },
    {
        title: 'Pork Chops & Peach Sauce (4 Servings)',
        image: './images/pork-chops-peach-sauce.jpg',
        url: 'https://www.blueapron.com/recipes/pork-chops-peach-sauce-with-corn-summer-squash-succotash',
        ingredients: [
            '2 Peaches',
            '1.5 Tbsp Verjus Blanc',
            '1 Summer Squash',
            '2 Cubanelle Peppers',
            '2 ears of corn',
            '2 Scallions',
            '1/4 cup roasted pistachios',
            '1/2 bunch Basil',
            '2 Tbsps Verjus Blanc',
            '4 Pork Chops',
            '1 bunch Basil',
            '4 Tbsp Butter'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Pit &amp; Small Dice'
            }, {
                range: [ 0, 'verjus blanc' ],
                step: 'Combine with S&amp;P, stir occasionally for 10 min'
            }, {
                range: [ 0, -1 ],
                step: 'Add peaches to pork pan with 1/4 cup water.<br/>Cook med-high, stir frequently, scrape pan, 3-4min.<br/>Turn off heat, add butter and basil, stir until melted.<br/>Add S&amp;P.<br/><br/><br/>Serve veggies on side of pork chop, top pork chop with peaches and<br/>garnish with greens of scallions.'
            }, {
                range: [ 'summer squash' ],
                step: 'Medium Dice'
            }, {
                range: [ 'summer squash', 'cubanelle peppers' ],
                step: 'Heat 1 Tbsp olive oil med-high until hot, cook veggies 2-3min<br/>(no stirring). Add S&amp;P. Cook 2-3min w/stirring.'
            }, {
                range: [ 'summer squash', 'scallions' ],
                step: 'Add corn, whites of scallions, S&amp;P. Cook 2-4min.'
            }, {
                range: [ 'summer squash', 'tbsps verjus blanc' ],
                step: 'Add (tearing basil leaves). Stir, add S&amp;P,<br/>remove from pan, wipe pan.'
            }, {
                range: [ 'cubanelle peppers' ],
                step: 'Remove seeds, medium dice'
            }, {
                range: [ 'of corn' ],
                step: 'Cut kernels off corn'
            }, {
                range: [ 'scallions' ],
                step: 'Thin slice'
            }, {
                range: [ 'roasted pistachios' ],
                step: 'Rough chop'
            }, {
                range: [ 'pork chops' ],
                step: 'Season S&amp;P. Heat 1Tbsp olive oil med-high until hot,<br/>add pork chops, cook 4-5min per side. Remove to plate.'
            }
        ]
    },
    {
        title: 'Gai Pad Krapow (4 Servings)',
        image: './images/gai-pad-krapow.jpg',
        url: 'http://thewoksoflife.com/2016/06/thai-basil-chicken-pad-krapow/',
        ingredients: [
            '3-4 Tbsp oil',
            '3 Thai bird / holland chillies, de-seeded and thinly sliced',
            '3 shallots, thinly sliced',
            '5 cloves garlic, sliced',
            '1 pound ground chicken',
            '2 tsp sugar / honey',
            '2 Tbsps soy sauce',
            '1 Tbsp fish sauce',
            '1/3 cup chicken broth',
            '1 bunch Thai basil'
        ],
        steps: [
            {
                range: [ 0, 'garlic' ],
                step: 'Add to wok on high heat, fry 1-2min.'
            }, {
                range: [ 0, 'pound ground chicken' ],
                step: 'Add, fry 2min, breaking up chicken.'
            }, {
                range: [ 0, 'chicken broth' ],
                step: 'Add, fry, and deglaze pan w/broth.<br/>Liquid should cook off quickly.'
            }, {
                range: [ 0, -1 ],
                step: 'Add, fry until wilted. Serve over rice.'
            }
        ]
    },
    {
        title: 'Roasted Corn Quesadillas (7 tortillas)',
        image: './images/roasted-corn-quesadillas.jpg',
        url: 'https://www.budgetbytes.com/2017/06/roasted-corn-quesadillas/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+BudgetBytes+%28Budget+Bytes%29',
        ingredients: [
            '1.5 cups chopped cooked chicken',
            '1 cup roasted corn kernels',
            '2 green onions, sliced',
            '4 oz diced green chiles (drained)',
            '4 oz shredded cheese',
            '1/4 tsp cumin',
            '1/4 tsp salt',
            '7 8" tortillas'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Combine, stir until even.'
            }, {
                range: [ 0, -1 ],
                step: 'Add 1/2 cup mix to each tortilla, fold each tortilla in half.<br/>Heat in dry skillet over med-low heat until brown and crispy<br/>(and inside melted).'
            }
        ]
    },
    {
        title: 'Blackened Shrimp Tacos (6 tortillas)',
        image: './images/blackened-shrimp-tacos.jpg',
        url: 'https://www.budgetbytes.com/2017/06/blackened-shrimp-tacos/',
        ingredients: [
            '1/3 cup mayonnaise',
            '1/2 Tbsp honey',
            '1 tsp Dijon mustard',
            '1 tsp red wine vinegar',
            '1/4 tsp salt',
            'Black Pepper',
            '1/2 bag coleslaw mix (carrots & cabbage)',
            '3 green onions, sliced',
            '1/3c mayonnaise',
            '1/8 tsp garlic powder',
            '1/4 tsp smoked paprika',
            '1/8 tsp salt',
            '1 lime (1 Tbsp juice)',
            '6 small corn tortillas',
            '1 Tbsp smoked paprika',
            '1 tsp dried thyme',
            '1 tsp dried oregano',
            '1/2 tsp cumin',
            '1/4 tsp cayenne',
            '1/4 tsp garlic powder',
            '1/4 tsp onion powder',
            '1/4 tsp salt',
            'Black Pepper',
            '1/2 lb shrimp',
            '1 Tbsp butter',
            '1 clove garlic, minced',
            '3 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: 'Combine, stir.'
            }, {
                range: [ 0, 'green onions' ],
                step: 'Add 3/4 of dressing, add more if needed,<br/>toss to coat, refrigerate'
            }, {
                range: [ 0, -1 ],
                step: 'Top tortillas with 1/4 cup coleslaw, 3 shrimp, drizzle sauce,<br/>add sliced green onions. Add squeeze of lime.'
            }, {
                range: [ '1/3c mayonnaise', 'lime' ],
                step: 'Mix into sauce in small bowl'
            }, {
                range: [ 'corn tortillas' ],
                step: 'Toast in dry pan until browned'
            }, {
                range: [ '1 tbsp smoked paprika', 'shrimp' ],
                step: 'Mix spices, toss to coat shrimp'
            }, {
                range: [ '1 tbsp smoked paprika', '1 clove garlic, minced' ],
                step: 'Add butter &amp; garlic to skillet, cook med for 1min.<br/>Add shrimp, cook 3-5min.'
            }
        ]
    },
    {
        title: 'Streuseled Sweet Potatoes (4 servings)',
        image: './images/streuseled-sweet-potatoes.jpg',
        url: 'https://www.budgetbytes.com/2017/10/streuseled-sweet-potatoes/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+BudgetBytes+%28Budget+Bytes%29',
        ingredients: [
            '2 Sweet Potatoes',
            '1 Tbsp olive oil',
            '2 Tbsp flour',
            '2 Tbsp rolled oats',
            '1/4 cup brown sugar',
            '1/4 cup chopped walnuts',
            '2 Tbsp butter',
            '1/2 tsp cinnamon',
            '4 tsp maple syrup'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: '<b>Preheat 400&deg;F.</b><br><br/>Wash, slice in half, place cut-face up on baking sheet.<br/>Drizzle and then rub oil onto cut-side of potatoes.<br/>Flip over, roast cut-side-down 30min.'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from oven, flip potatoes.<br/>Cut crosshatch into potato faces, drizzle 1tsp syrup over potato.<br/>Pile combined streusel over potato, bake 10 minutes.'
            }, {
                range: [ 'flour', 'cinnamon' ],
                step: 'Combine in bowl, mix until crumbly mix w/pea sized pieces.<br/>Refrigerate.'
            }
        ]
    },
    {
        title: 'Moroccan Spiced Sweet Potatoes (4 Servings)',
        image: './images/moroccan-spiced-sweet-potatoes.jpg',
        url: 'https://www.budgetbytes.com/2018/01/moroccan-spiced-sweet-potatoes/',
        ingredients: [
            '1/2 Tbsp cumin',
            '1 tsp turmeric',
            '1 tsp cinnamon',
            '1/4 tsp cayenne',
            '1 tsp paprika',
            '1/4 tsp salt',
            '2 Tbsp olive oil',
            '2 lbs sweet potatoes',
            '1/4 bunch cilantro'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: '<b>Preheat 400&deg;F</b><br> Combine in small bowl.'
            }, {
                range: [ 0, 'sweet potatoes' ],
                step: 'Stir with spoon until well coated. Spread on baking sheet<br/>in single layer, roast 15min, stir, roast 15min.'
            }, {
                range: [ 0, -1 ],
                step: 'Add more salt if needed, add cilantro.'
            }, {
                range: [ 'sweet potatoes' ],
                step: 'Peel, cut into 3/4" cubes.'
            }, {
                range: [ 'cilantro' ],
                step: 'Rough Chop'
            }
        ]
    },
    {
        title: 'Salt & Vinegar Roasted Potatoes with Smoky Garlic Mayo',
        image: './images/salt-vinegar-roasted-potatoes-smoky-garlic-mayo.jpg',
        url: 'https://www.budgetbytes.com/2016/12/salt-vinegar-roasted-potatoes-with-smoky-garlic-mayo/',
        ingredients: [
            '2 lbs small red potatoes',
            '1 cup white vinegar',
            '2 tsp salt',
            '1 Tbsp olive oil',
            'Black Pepper',
            '1 Tbsp chopped chives',
            '1/3 cup mayonnaise',
            '1 small clove garlic, Minced',
            '1/4 tsp smoked paprika',
            '1/8 tsp salt'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: '<b>Preheat 400&deg;F</b><br><br/>Wash potatoes, add in pot w/vinegar, 2-3 cups water<br/>(just cover potatoes), salt. Cover, bring to boil on high.<br/>Boil 10-15min. Drain, let cool slightly.'
            }, {
                range: [ 0, 'chopped chives' ],
                step: 'Cut potatoes into 1/4-1/2" thick rounds, toss in oil with salt<br/>and pepper. Roast in oven 30min (stir halfway through).'
            }, {
                range: [ 0, -1 ],
                step: 'Add chives, a bit more S&amp;P, serve with<br/>mayo on side for dipping.'
            }, {
                range: [ 'mayonnaise', -1 ],
                step: 'Combine, stir, refrigerate.'
            }
        ]
    },
    {
        title: 'Chorizo Breakfast Hash',
        image: './images/chorizo-breakfast-hash.jpg',
        url: 'https://www.budgetbytes.com/2017/04/chorizo-breakfast-hash/',
        ingredients: [
            '1 lb baby red potatoes',
            '1 Tbsp cooking oil',
            '1/2 lb Mexican chorizo',
            '1 yellow onion',
            '1 green bell pepper',
            'Pinch of S&P',
            '1 Tbsp cooking oil',
            '1/2 tsp chili powder',
            '3 green onions, sliced',
            '4 large eggs, fried (optional)',
            '4 Tbsp sour cream (optional)',
            '4 Tbsp salsa'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Wash, put in pot covered in water.<br/>Cover, bring to boil, boil 7-10mins.<br/>Drain, cool slightly. Dice into 1/4" cubes.'
            }, {
                range: [ 0, 'chili powder' ],
                step: 'Add to ex-veggie pan w/chili powder and 1 Tbsp oil.<br/>Cook until crispy (10 min), rarely stirring.<br><br>'
            }, {
                range: [ 0, -1 ],
                step: 'Combine all cooked things, top with green onion, fried egg,<br/>sour cream and salsa.'
            }, {
                range: [ 'cooking oil', 'mexican chorizo' ],
                step: 'Heat oil in large skillet on med, add chorizo, cook and break<br/>up 5-7min. Remove from pan to clean bowl.'
            }, {
                range: [ 'onion' ],
                step: 'Finely Dice'
            }, {
                range: [ 'onion', 'pinch of s&p' ],
                step: 'Add to ex-chorizo skillet, saute 5-7min.<br/>Remove, add to chorizo bowl.'
            }, {
                range: [ 'green bell pepper' ],
                step: 'Finely Dice'
            }
        ]
    },
    {
        title: 'African Peanut Stew',
        image: './images/african-peanut-stew.jpg',
        url: 'http://makingthymeforhealth.com/one-pot-african-peanut-stew/',
        ingredients: [
            '1 Tbsp Olive Oil',
            '1 Onion (Chopped)',
            '4 garlic cloves (minced)',
            '1 Jalapeno (cored & chopped)',
            '2 inch ginger (minced)',
            '2 tsp cumin',
            '1/4 teaspoon cayenne',
            '3 Tbsp tomato paste',
            '1 lb sweet potato (peeled, cut into 1" cubes)',
            '1/2 cup peanut butter',
            '4 cups veg broth',
            '1 cup water',
            '1 bunch collard greens (stems removed, chopped)',
            'Cilantro',
            'Brown Rice',
            'Roasted Peanuts',
            'Lime Juice'
        ],
        steps: [
            {
                range: [ 0, 'onion' ],
                step: 'Heat (med heat) oil, add onion &amp; pinch of salt, cook 3 min'
            }, {
                range: [ 0, 'teaspoon cayenne' ],
                step: 'Mix, cook 2min'
            }, {
                range: [ 0, 'water' ],
                step: 'Stir together, boil, reduce med-low, cover &amp; cook 15min'
            }, {
                range: [ 0, 'collard greens' ],
                step: 'Add, cook another 15 minutes<br><br/>Mash some sweet potatoes with spoon to thicken, boil<br/>uncovered 5min'
            }, {
                range: [ 0, -1 ],
                step: 'Serve on rice with garnishes'
            }
        ]
    },
    {
        title: 'Pad Kee Mao',
        image: './images/pad-kee-mao.jpg',
        url: 'https://cooking.nytimes.com/recipes/1016835-pad-kee-mao',
        ingredients: [
            '3 Tbsp veg oil',
            '3 bird\'s eye chilies (roughly chopped)',
            '6 cloves garlic (chopped)',
            '1/2 cup sliced onion',
            '1 pound ground pork',
            '4 Tbsp fish sauce',
            '2 Tbsp dark sweet soy sauce',
            '1 tsp rice vinegar',
            '1/2 cup sliced bell peppers',
            '12 ounces fresh rice noodles',
            '2 bird\'s eye chilies (smashed w/flat of knife)',
            '2 handfuls holy basil'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Heat over med-high'
            }, {
                range: [ 0, 'sliced onion' ],
                step: 'Add, cook 30 seconds'
            }, {
                range: [ 0, 'rice vinegar' ],
                step: 'Add pork with a little sauce, cook 5 min'
            }, {
                range: [ 0, 'fresh rice noodles' ],
                step: 'Add, high heat, all but a spoonful of sauce'
            }, {
                range: [ 0, -1 ],
                step: 'Add, toss, serve immediately'
            }, {
                range: [ 'fish sauce', 'rice vinegar' ],
                step: 'Whisk together'
            }
        ]
    },
    {
        title: 'Roast Summer Vegetables & Chickpeas',
        image: './images/roast-summer-vegetables-chickpeas.jpg',
        url: 'https://www.reddit.com/r/veganrecipes/comments/9gngpz/roast_summer_vegetables_chickpeas/',
        ingredients: [
            '3 Small Zucchini, thinly sliced',
            '1 egg plant, cut into thick fingers',
            '3 garlic cloves, chopped',
            '2 red peppers, chopped into chunks',
            '2 large potatoes, peeled, bite-sized cubes',
            '1 onion, chopped',
            '1 tbsp coriander seeds',
            '4 tbsp olive oil',
            '14oz can chopped tomatoes',
            '14oz can chickpeas, rinsed & drained',
            'Small coriander bunch, roughly chopped'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: '<b>Heat to 400&deg;F</b><br><br/>Add all to roasting tin, toss with coriander seeds<br><br/>Spread into single layer, roast 45 minutes<br><br/>Toss once or twice during roasting'
            }, {
                range: [ 0, -1 ],
                step: 'Add to pan on low heat, adding two cans.<br><br/>Bring to simmer, stir, drizzle w/olive oil.<br><br/>Season to taste w/olive oil, s&amp;p, serve with bread over<br/>pile of coriander.'
            }
        ]
    },
    {
        title: 'Hoisin Tofu Lettuce Cups',
        image: './images/hoisin-tofu-lettuce-cups.jpg',
        url: 'https://www.budgetbytes.com/hoisin-tofu-lettuce-cups/',
        ingredients: [
            '14oz extra firm tofu',
            '1/4 tsp salt',
            '2 Tbsp cornstarch',
            '2 Tbsp cooking oil',
            '1/2 cup hoisin sauce',
            '2 green onions',
            '1 carrot',
            '1/4 cup peanuts',
            '1 cup cooked rice',
            '1 head lettuce'
        ],
        steps: [
            {
                range: [ 0, 'cornstarch' ],
                step: 'Place between two plates or rimmed baking sheets, place<br/>something heavy on top, press 30 minutes.<br/>Pour off liquid and pat dry w/paper towel.<br/><br/>Chop into small pieces, sprinkle w/salt and half of the<br/>corn starch. Fold until coated, then add remaining corn starch<br/>and fold again.'
            }, {
                range: [ 0, 'cooking oil' ],
                step: 'Heat oil on med. Add coated tofu.<br/>Cook to golden brown on all sides (10 min).'
            }, {
                range: [ 0, 'hoisin sauce' ],
                step: 'Add, stir to coat.'
            }, {
                range: [ 0, -1 ],
                step: 'Build: Leaf + 1-2 Tbsp rice + 1-2 Tbsp hoisin tofu'
            }, {
                range: [ 'green onions' ],
                step: 'Slice'
            }, {
                range: [ 'carrot' ],
                step: 'Shred'
            }, {
                range: [ 'peanuts' ],
                step: 'Rough Chop'
            }
        ]
    },
    {
        title: 'Cauliflower and Chickpea Masala (4 servings)',
        image: './images/cauliflower-chickpea-masala.jpg',
        url: 'https://www.budgetbytes.com/easy-cauliflower-and-chickpea-masala/',
        ingredients: [
            '2 Tbsp Garam Masala',
            '1/2 tsp Cumin',
            '1/2 tsp Turmeric',
            '1/2 tsp Paprika',
            '1/4 tsp Cayenne',
            '1/2 tsp Salt',
            'Freshly Cracked Pepper',
            '1 Yellow Onion',
            '3 Cloves Garlic',
            '1/2 Tbsp Ginger',
            '2 Tbsp Olive Oil',
            '12 oz Frozen Cauliflower',
            '15oz Chickpeas (drained)',
            '15oz Tomato Sauce',
            '1/4 cup water',
            '1/3 cup heavy cream',
            'Salt to Taste'
        ],
        steps: [
            {
                range: [ 0, 'freshly cracked pepper' ],
                step: 'Combine in small bowl'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Add, saute 1min'
            }, {
                range: [ 0, 'frozen cauliflower' ],
                step: 'Add, saute 5min'
            }, {
                range: [ 0, 'water' ],
                step: 'Add, simmer med-low 15min'
            }, {
                range: [ 0, -1 ],
                step: 'Turn off Heat, stir in cream'
            }, {
                range: [ 'onion' ],
                step: 'Finely Dice'
            }, {
                range: [ 'onion', 'olive oil' ],
                step: 'Saute med heat (3min)'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'ginger' ],
                step: 'Grate'
            }
        ]
    },
    {
        title: 'Chicken & Dumplings (Instant Pot) (6-8 servings)',
        image: './images/chicken-dumplings.jpg',
        url: 'https://www.pressurecookrecipes.com/instant-pot-chicken-and-dumplings/',
        ingredients: [
            '8 (2.5lb) bone-in<br/>chicken thighs',
            '1 Tbsp butter or olive oil',
            '1 large onion',
            '3 cloves garlic',
            '3 carrots',
            '2 Celery ribs',
            '2 bay leaves',
            'Pinch Dried Thyme',
            '5 cups unsalted chicken stock',
            '1 large russet potato',
            '2 cups flour',
            '1 Tbsp baking powder',
            '1 tsp salt',
            '3/4 cup milk',
            '2 Tbsp butter',
            '1 Tbsp olive oil',
            '0.5-1 cup frozen green peas',
            'Salt & Pepper / Fish sauce',
            '1/2 cup flour'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Instant pot: saute, wait until "HOT", pat w/S&amp;P'
            }, {
                range: [ 0, 'butter or olive oil' ],
                step: 'Brown 4 thighs 3.5m, flip, brown 2m, set aside,<br/>repeat for other thighs'
            }, {
                range: [ 0, 'onion' ],
                step: 'Add, saute 2.5m.'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Add, saute 30s.'
            }, {
                range: [ 0, 'celery ribs' ],
                step: 'Add, saute 2m.'
            }, {
                range: [ 0, 'pinch dried thyme' ],
                step: 'Add, saute 1m.'
            }, {
                range: [ 0, 'russet potato' ],
                step: 'Add, scrub bottom of pan, add thighs.'
            }, {
                range: [ 0, '1 tbsp olive oil' ],
                step: 'Top with dumplings, pressure high 3m + 15m natural release.<br><br/>Remove chicken, shred. Simmer pot on saute.'
            }, {
                range: [ 0, -1 ],
                step: 'Add peas, season w/S&amp;P or fish sauce.<br/><br/>Thicken soup: Add 1/2cup soup to flour, add flour/soup mix<br/>back to soup in thirds until thick to taste.'
            }, {
                range: [ 'onion' ],
                step: 'Chop'
            }, {
                range: [ 'garlic' ],
                step: 'Mince'
            }, {
                range: [ 'carrots' ],
                step: 'Cut rounds'
            }, {
                range: [ 'celery ribs' ],
                step: 'Chop'
            }, {
                range: [ 'russet potato' ],
                step: 'Cut chunks'
            }, {
                range: [ 'flour', 'baking powder' ],
                step: 'Mix'
            }, {
                range: [ 'flour', 'olive oil' ],
                step: 'Mix into dough, do not overmix.'
            }, {
                range: [ '1 tsp salt', 'olive oil' ],
                step: 'Mix'
            }, {
                range: [ '2 tbsp butter' ],
                step: 'Melt'
            }
        ]
    },
    {
        title: 'Beef Stew (Instant Pot) (4 servings)',
        image: './images/beef-stew.jpg',
        url: 'https://www.jessicagavin.com/instant-pot-beef-stew/#wprm-recipe-container-38070',
        ingredients: [
            '1.5lbs beef chuck eye<br/><br/>roll / chuck tender roast',
            '1/2 tsp salt',
            '1/2 tsp black pepper',
            '1 Tbsp soy sauce',
            '2 Tbsp olive oil',
            '1 Tbsp olive oil',
            '1.5 cup red onion (1" dice)',
            '1 Tbsp minced garlic',
            '1/4 cup balsamic vinegar',
            '1lb yukon gold potatoes, 1.5" dice',
            '2 cups carrots, 1" rounds',
            '1 cup celery (0.5" dice)',
            '3 cup beef stock',
            '1 Tbsp soy sauce, 1/2 tsp salt',
            '2 Tbsp cornstarch',
            '1/4 cup water',
            '1/2 cup peas',
            '1/4 cup cilantro leaves',
            'Rice or Mashed Potatoes'
        ],
        steps: [
            {
                range: [ 0 ],
                step: '1.5" Cubes'
            }, {
                range: [ 0, 'soy sauce' ],
                step: 'Combine in bowl<br><br>Pot: Saute until "HOT"'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Add to pot, cook each side 2m,<br/>remove beef (not fully cooked)'
            }, {
                range: [ 0, 'red onion' ],
                step: 'Add, saute 1m.'
            }, {
                range: [ 0, 'minced garlic' ],
                step: 'Add, saute 30s.'
            }, {
                range: [ 0, 'balsamic vinegar' ],
                step: 'Add, de-glaze 3m (stir/scrape)'
            }, {
                range: [ 0, '1 tbsp soy sauce, 1/2 tsp salt' ],
                step: 'Add beef back + others.<br/><br/>Pot: High pressure, 20m + 15m NR.'
            }, {
                range: [ 0, 'water' ],
                step: 'Pot: Saute. Wait until boil, add slurry.<br/>Cook 1-1.5m.'
            }, {
                range: [ 0, -1 ],
                step: 'Add peas, cook 2-4m. Garnish/serve.'
            }, {
                range: [ 'cornstarch', 'water' ],
                step: 'Combine to slurry.'
            }
        ]
    },
    {
        title: 'Aloo Gobi (Instant Pot) (4 servings)',
        image: './images/aloo-gobi.jpg',
        url: 'https://www.veganricha.com/2017/08/instant-pot-aloo-gobi-curried-potato-cauliflower.html',
        ingredients: [
            '1/2 small onion',
            '2 tomatoes',
            '6-7 cloves garlic',
            '1" Ginger',
            '1/2 hot green chile',
            '1 tsp oil',
            '1/2 tsp cumin',
            '1/2 tsp turmeric',
            '1/2 tsp cumin',
            '1/2-1 tsp garam masala',
            '3/4-1 tsp salt',
            '1/2 tsp paprika',
            '2 med potatoes (small cubes)',
            '1 sm cauliflower (large florets)',
            'Cayenne/pepper flakes,<br/>garam masala, cilantro, lemon,<br/>Rice / Daal / Naan'
        ],
        steps: [
            {
                range: [ 0, 'hot green chile' ],
                step: 'Blend until smooth.<br/><br/>Pot: Saute until "HOT"'
            }, {
                range: [ 0, 'cumin' ],
                step: 'Add cumin until dark, add puree.<br/>Rinse blender w/1-2 Tbsp water, add to pot.'
            }, {
                range: [ 0, 'potatoes' ],
                step: 'Add, mix well. Cook w/glass lid 4-5m.'
            }, {
                range: [ 0, 'cauliflower' ],
                step: 'Add, mix, Pot: Low pressure 2min + QR.'
            }, {
                range: [ 0, -1 ],
                step: 'Garnish with extras.'
            }, {
                range: [ 'turmeric', 'paprika' ],
                step: 'Add in small bowl'
            }
        ]
    },
    {
        title: 'Dal (Instant Pot) (4 Servings)',
        image: './images/dal-instant-pot.jpg',
        url: 'https://www.platingsandpairings.com/instant-pot-dal/',
        ingredients: [
            '2 Tbsp Veg Oil',
            '1 Onion (chopped)',
            '1 pinch salt',
            '3 garlic cloves (grated)',
            '2" ginger piece (grated)',
            '2 tsp ground coriander',
            '1 tsp turmeric',
            '1 tsp cumin',
            '1/2 tsp cayenne',
            '1.5 cups dried split peas (rinsed)',
            '3 cups water',
            '2 tomatoes (chopped)',
            '1/2 tsp salt',
            '1/4 cup cilantro (chopped)',
            'Salt & Pepper to taste',
            '1/2 cup plain Greek yogurt',
            'Cooked basmati rice',
            '1 small red onion (thinly sliced in rounds)',
            '1 lime (zested & juiced)',
            '1 pinch sugar',
            '1 large pinch salt'
        ],
        steps: [
            {
                range: [ 0, 'pinch salt' ],
                step: 'Set Saute, add all, 5-7min'
            }, {
                range: [ 0, 'cayenne' ],
                step: 'Add, cook until fragrant'
            }, {
                range: [ 0, '1/2 tsp salt' ],
                step: 'Hit CANCEL, add, stir, scrape bottom<br><br/>Set on HIGH 10m, 10m NR.'
            }, {
                range: [ 0, 'salt & pepper to taste' ],
                step: 'Add, stir'
            }, {
                range: [ 0, -1 ],
                step: 'Serve on rice with yogurt, onions'
            }, {
                range: [ 'red onion', -1 ],
                step: 'Combine, massage for 1min, let sit 10min'
            }
        ]
    },
    {
        title: 'Beef Stroganoff (Instant Pot) (6-8 servings)',
        image: './images/beef-stroganoff-instant-pot.jpg',
        url: 'http://www.chewoutloud.com/2018/04/05/instant-pot-beef-stroganoff-recipe/',
        ingredients: [
            '2 Tbsp olive oil',
            '1 onion (chopped)',
            '7 cloves garlic (chopped)',
            '1/2 tsp salt & 1/4 tsp pepper',
            '2.5 lbs beef chuck (1" pieces)',
            '1/2 tsp salt, 1/4 tsp pepper',
            '2 Tbsp Worcestershire sauce',
            '2 Tbsp soy sauce',
            '4 cups beef broth',
            '2/3 cup water',
            '3 Tbsp flour',
            '0.5 tsp salt, 0.25 tsp pepper',
            '16 oz dry wide egg noodles',
            '8 oz sliced mushrooms',
            '1 cup Greek yogurt/sour cream'
        ],
        steps: [
            {
                range: [ 0, 'salt & 1/4 tsp pepper' ],
                step: 'Add oil, Saute until "HOT", add all, cook 2-3m'
            }, {
                range: [ 0, '1/2 tsp salt, 1/4 tsp pepper' ],
                step: 'Add, brown on all sides (2-3m).'
            }, {
                range: [ 0, '0.5 tsp salt, 0.25 tsp pepper' ],
                step: 'Add liquids, stir in flour.<br><br/>Pot: High 20m, 10m NR.'
            }, {
                range: [ 0, 'sliced mushrooms' ],
                step: 'Stir into liquid. Pot: High 5m, 5m NR.'
            }, {
                range: [ 0, -1 ],
                step: 'Serve.'
            }, {
                range: [ 'beef chuck', 'salt' ],
                step: 'Pat beef dry w/paper towel, add S&amp;P.'
            }
        ]
    },
    {
        title: 'Spicy Coconut Stir Fry (4 servings)',
        image: './images/spicy-coconut-stir-fry.jpg',
        url: 'https://www.budgetbytes.com/spicy-coconut-vegetable-stir-fry/',
        ingredients: [
            '13.5oz can full-fat coconut milk',
            '1/4 cup peanut butter',
            '2 Tbsp sriracha',
            '1 tsp brown sugar',
            '1 Tbsp soy sauce',
            '2 Tbsp lime juice (1 lime)',
            '1 clove garlic (minced)',
            '1 tsp grated ginger',
            '4-6 cups mixed vegetables',
            '1 Tbsp cooking oil',
            '4 cups cooked rice (or 8oz noodles)',
            '1/4 cup chopped peanuts',
            '1/4 cup chopped cilantro',
            '1 lime (cut into wedges)'
        ],
        steps: [
            {
                range: [ 0, 'grated ginger' ],
                step: 'Whisk in bowl,<br/>maybe heat in microwave to melt peanut butter/coconut milk'
            }, {
                range: [ 0, 'cooking oil' ],
                step: 'Pour over vegetables, stir, heat 2m'
            }, {
                range: [ 0, -1 ],
                step: 'Add over rice, top with peanuts/cilantro/lime.'
            }, {
                range: [ 'mixed vegetables', 'cooking oil' ],
                step: 'Chop if needed, heat oil, add vegetables in order<br/>of hardest to softest, 1-2min.'
            }
        ]
    },
    {
        title: 'Jambalaya (Instant Pot) (6 servings)',
        image: './images/jambalaya.jpg',
        url: 'https://boulderlocavore.com/instant-pot-jambalaya/',
        ingredients: [
            '2 Tbsp olive oil',
            '12 ounces Andouille<br/>Sausage<br/>(in 1/4" slices)',
            '1 med onion (chopped)',
            '1 med green bell pepper (chopped)',
            '1 med stalk celery (chopped)',
            '3 garlic cloves (diced)',
            '2 tsp cajun seasoning',
            '1/4 tsp ground thyme',
            '1 cup long grain white rice',
            '14.5oz can diced tomatoes',
            '1/2 cup chicken stock',
            '1/2 tsp salt',
            '12oz cooked shrimp (41-60 count)',
            '4 scallions (thinly sliced)'
        ],
        steps: [
            {
                range: [ 0, 'andouille<br/>sausage' ],
                step: 'Saute oil to "HOT", cook sausage 2m per side,<br/>move meat to paper-towel'
            }, {
                range: [ 0, 'garlic cloves' ],
                step: 'Add, cook 3m'
            }, {
                range: [ 0, 'long grain white rice' ],
                step: 'Add, stir to coat, press CANCEL'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, stir, lock, cook High 8m, 5m NR.'
            }, {
                range: [ 0, -1 ],
                step: 'Add shrimp, reserved sausage, scallions, stir.<br/>Heat 5m w/residual heat.'
            }
        ]
    },
    {
        title: 'Mexican Chicken, Sweet Potato, Black Bean Skillet (4 servings)',
        image: './images/mexican-chicken-sweet-potato-black-bean-skillet.jpg',
        url: 'https://reciperunner.com/mexican-chicken-sweet-potato-black-bean-skillet/',
        ingredients: [
            '2 tsp olive oil',
            '1lb chicken breasts (bite size pieces)',
            '1 tsp cumin',
            '1 tsp chili powder',
            '1 tsp dried oregano',
            '3/4 tsp salt',
            '1/4 tsp garlic powder',
            '1/4 tsp black pepper',
            '1/2 cup yellow onion (diced)',
            '1 sweet potato (peeled, par-cooked, diced)',
            '1 cup cherry tomatoes (halved)',
            '15oz black beans (rinsed & drained)',
            '4oz can diced green chiles',
            '1/3 cup salsa or red enchilada sauce',
            '1/2 cup shredded cheese',
            '1/2 lime, juiced',
            '1 Tbsp chopped cilantro',
            'Cooked Rice, tortillas, etc'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: 'Heat oil, add chicken and half spices, cook 2m'
            }, {
                range: [ 0, 'yellow onion' ],
                step: 'Add, cook until chicken cooked'
            }, {
                range: [ 0, 'salsa or red enchilada sauce' ],
                step: 'Add remaining spices,<br/>stir all together, cook 2-3m'
            }, {
                range: [ 0, -1 ],
                step: 'Add lime &amp; cheese, cover with lid,<br/>cook until cheese melts, finish w/cilantro and carbs'
            }, {
                range: [ 'cumin', 'black pepper' ],
                step: 'Combine in small bowl'
            }
        ]
    },
    {
        title: 'Honey Hoisin Garlic Chicken (Slow Cooker) (4 servings)',
        image: './images/honey-hoisin-garlic-chicken.jpg',
        url: 'https://www.budgetbytes.com/jessica-gavins-honey-hoisin-garlic-chicken/',
        ingredients: [
            '2 lbs bone-in,<br/>skin-on chicken thighs',
            'Pinch salt & pepper',
            '2 Tbsp vegetable oil',
            '1/3 cup hoisin sauce',
            '1/3 cup soy sauce',
            '1/3 cup honey',
            '2 Tbsp hot water',
            '1 tsp minced ginger',
            '4 cloves garlic (minced)',
            'Sesame seeds',
            'Cooked Rice',
            '1/4 cup fresh cilantro'
        ],
        steps: [
            {
                range: [ 0, 'vegetable oil' ],
                step: 'Pat both sides w/S&amp;P<br><br/>Heat skillet, add oil, add chicken (skin down), saute 5-6m, flip,<br/>2m (golden brown).'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Add all to slow cooker,<br/>cook 3-4hr on high, or 5-6hr on low.<br/>Flip halfway through (re-cover w/sauce).'
            }, {
                range: [ 0, -1 ],
                step: 'Serve over rice, top w/sesame seeds &amp;<br/>cilantro'
            }, {
                range: [ 'hoisin sauce', 'garlic' ],
                step: 'Whisk together in bowl'
            }
        ]
    },
    {
        title: 'Mini Dark Chocolate Pecan Pies',
        image: './images/mini-dark-chocolate-pecan-pies.jpg',
        url: 'https://www.budgetbytes.com/mini-dark-chocolate-pecan-pies/',
        ingredients: [
            '8 Tbsp butter<br/>(room temp)',
            '4 oz cream cheese<br/>(room temp)',
            '1 cup + 2Tbsp flour',
            '1 Tbsp sugar',
            '75g dark chocolate, divided',
            '1 lg egg, lightly beaten',
            '3/4 cup brown sugar',
            '1 Tbsp melted butter',
            '1 tsp vanilla extract',
            '2/3 cup pecan pieces'
        ],
        steps: [
            {
                range: [ 0, 'sugar' ],
                step: '<b>Preheat 350&deg;F</b><br><br/>Beat butter + cheese, add 1cup flour &amp; 1 Tbsp sugar, beat.<br><br/>Form into ball, add 1 or 2Tbsp flour if too sticky<br/><br/><br/>Divide into 12 pieces (4 pieces, then 3 each), roll each into ball,<br/>add each ball to regular-sized ungreased muffin tin.<br><br>'
            }, {
                range: [ 0, 'dark chocolate' ],
                step: 'Add dime-sized chocolate into each crust'
            }, {
                range: [ 0, -1 ],
                step: 'Add mix into each crust, bake 30m.<br/><br/>Heat up remaining chocolate w/microwave, drizzle on top.<br><br/>Let cool, use knife to pull out of tin.'
            }, {
                range: [ 'egg', -1 ],
                step: 'Stir to combine, don\'t beat (avoid bubbles)'
            }
        ]
    },
    {
        title: 'Vietnamese Noodle Bowls (4 Servings)',
        image: './images/vietnamese-noodle-bowl.jpg',
        url: 'https://www.recipetineats.com/vietnamese-chicken-noodle-bowl/',
        ingredients: [
            '1.2-1.6 lbs chicken thigh fillets',
            '2 garlic cloves (minced)',
            '2 Tbsp lime juice',
            '2 Tbsp fish sauce',
            '1 Tbsp soy sauce',
            '2 Tbsp brown sugar',
            '1 Tbsp vegetable oil',
            '1 stalk lemongrass',
            '1/2 Tbsp oil',
            '7oz vermicelli noodles',
            '2 carrots (juilienned)',
            '2 cucumbers (juilienned)',
            '5 cups iceberg lettuce (finely sliced)',
            '3 cups bean sprouts',
            'Mint Leaves (plucked)',
            'Cilantro leaves (plucked)',
            'Basil leaves (plucked)',
            '1/4 cup fish sauce',
            '4 Tbsp rice vinegar',
            '2 Tbsp white sugar',
            '1/2 cup water',
            '2 garlic cloves (minced)',
            '1 red birdseye chilli (finely chopped)',
            '3 Tbsp lime juice'
        ],
        steps: [
            {
                range: [ 0, 'stalk lemongrass' ],
                step: 'For lemongrass: Remove outer layer, bruise with butt of knife, chop into large chunks<br/><br/>Combine all in bag, marinate 1 to 24 hrs.'
            }, {
                range: [ 0, '1/2 tbsp oil' ],
                step: 'Heat oil med, add chicken (remove all lemongrass),<br/>cook 6-8 min'
            }, {
                range: [ 0, -1 ],
                step: 'Make bowls with noodles + vegetables +<br/>1/4 of sliced chicken + 4 Tbsp sauce per bowl.'
            }, {
                range: [ 'vermicelli noodles' ],
                step: 'Cook according to instructions'
            }, {
                range: [ '1/4 cup fish sauce', -1 ],
                step: 'Combine into sauce, stir sugar in'
            }
        ]
    },
    {
        title: 'Pasta with Carmelized Sweet Potatoes & Kale',
        image: './images/pasta-carmelized-sweet-potatoes.jpg',
        url: 'https://www.gimmesomeoven.com/pasta-caramelized-sweet-potatoes-kale/',
        ingredients: [
            '12 oz orecchiette pasta',
            '2 Tbsp butter or olive oil',
            '1 lb sweet potatoes (cut to 1/2" cubes)',
            'Salt & Pepper',
            '2 Tbsp butter or olive oil',
            '1/2 med red onion (sliced)',
            '5 garlic cloves',
            '2 cups roughly-chopped kale (no stems)',
            '1/4 cup dry white wine or chicken stock',
            '2 Tbsp white (or black) balsamic vinegar',
            '1/2 cup toasted pine nuts',
            'Freshly grated parmesan',
            'Chopped Fresh Basil',
            'Diced cooked bacon'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cook in salted water'
            }, {
                range: [ 0, -1 ],
                step: 'Add pasta, potatoes, pine nuts, and kale, toss,<br/>top w/cheese &amp; meat'
            }, {
                range: [ 'butter or olive oil', 'salt & pepper' ],
                step: 'Heat oil, add all, saute 7-9min, remove to plate'
            }, {
                range: [ 'butter or olive oil', 'garlic cloves' ],
                step: 'Add all to empty pan, saute 2m'
            }, {
                range: [ 'butter or olive oil', 'white (or black) balsamic vinegar' ],
                step: 'Add, saute 3m'
            }
        ]
    },
    {
        title: 'Kitsune Udon (2 Servings)',
        image: './images/kitsune-udon.jpg',
        url: '#',
        ingredients: [
            '1 cup water',
            '2g Dashi (1/3 packet)',
            '3 Tbsp Sugar',
            '3 Tbsp soy sauce',
            'Abura Age (4-8pc, cut into triangles)',
            '2 cups water',
            '4g Dashi (2/3 packet)',
            '1 Tbsp sugar',
            '1 Tbsp soy sauce',
            '1 Tbsp mirin',
            '2 packs Sanuki udon noodles (frozen)',
            'fish cakes'
        ],
        steps: [
            {
                range: [ 0, 'soy sauce' ],
                step: 'Boil water, then mix all'
            }, {
                range: [ 0, 'abura age' ],
                step: 'Add, stir, simmer on low'
            }, {
                range: [ 0, -1 ],
                step: 'Mix all, serve'
            }, {
                range: [ '2 cups water', 'mirin' ],
                step: 'Boil, then mix all'
            }, {
                range: [ '2 cups water', 'packs sanuki udon noodles' ],
                step: 'Add, bring back to boil'
            }
        ]
    },
    {
        title: 'Ground Beef and Green Beans (4 Servings)',
        image: './images/beef-green-beans.jpg',
        url: '#',
        ingredients: [
            '2 tsp corn starch',
            '1/3 cup broth (or water)',
            '1 Tbsp soy sauce',
            '1 Tbsp dry sherry',
            '1 tsp cider vinegar',
            '1 Tbsp oil',
            '1 lb Green Beans (Trimmed/sliced to 2")',
            '2 tsp grated ginger',
            '2 tsp minced garlic',
            '1/4 tsp red pepper flakes (opt)',
            '1/2 lb ground beef'
        ],
        steps: [
            {
                range: [ 0, 'cider vinegar' ],
                step: 'Combine, set aside.'
            }, {
                range: [ 0, -1 ],
                step: 'Combine, fold in beans.'
            }, {
                range: [ 'oil', 'green beans' ],
                step: 'Heat oil on high 30s, combine, heat 4m.<br/>Beans should be tender/crisp &amp; lightly charred in spots.<br/>Remove beans.'
            }, {
                range: [ 'oil', -1 ],
                step: 'Add ginger/garlic, cook 30s.<br/>Add pepper &amp; beef, cook to brown.'
            }
        ]
    },
    {
        title: 'Migas (2 Servings)',
        image: './images/migas.jpg',
        url: 'https://pinchofyum.com/migas-day-every-day',
        ingredients: [
            '1.5 Tbsp Butter',
            '1.5 Tbsp oil',
            '5-6 sm corn tortillas, cut into strips',
            '1 jalapeno, minced',
            '1 clove garlic, minced',
            '5 eggs, beaten',
            '0.5c shredded Pepperjack cheese',
            'Salt (to taste)',
            'Black beans',
            'Cotija Cheese',
            'Salt & Pepper',
            'Avocado',
            'Tomato Salsa'
        ],
        steps: [
            {
                range: [ 0, 'corn tortillas' ],
                step: 'Heat oil &amp; butter, add tortillas, fry'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Let cool a bit, add, fry'
            }, {
                range: [ 0, 'salt' ],
                step: 'Cook Eggs'
            }, {
                range: [ 0, -1 ],
                step: 'Serve with other things on side'
            }
        ]
    },
    {
        title: 'Fried Rice Vermicelli (6 Servings)',
        image: './images/fried-rice-vermicelli.jpg',
        url: 'https://rasamalaysia.com/recipe-fried-rice-vermicelli/',
        ingredients: [
            '8oz rice vermicelli',
            '8oz Chicken Breast',
            '1 tsp cornstarch',
            '4 Tbsp cooking oil',
            '3 cloves garlic, minced',
            '4 Tbsp soy sauce',
            '1 Tbsp sweet soy sauce',
            '4 Tbsp water',
            '1 Tbsp sugar',
            '3 dashes white pepper',
            '1 handful fresh bean sprouts',
            '3 scallions, 2" length'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cook according to package'
            }, {
                range: [ 0, -1 ],
                step: 'Add sauce, stir, finish with sprouts and scallions'
            }, {
                range: [ 'chicken breast', 'cornstarch' ],
                step: 'Coat chicken'
            }, {
                range: [ 'chicken breast', 'garlic' ],
                step: 'Heat oil, add garlic, fry chicken until cooked'
            }, {
                range: [ 'soy sauce', 'dashes white pepper' ],
                step: 'Mix'
            }, {
                range: [ 'fresh bean sprouts' ],
                step: 'Rinse'
            }
        ]
    },
    {
        title: 'Cacio e Pepe (4 Servings)',
        image: './images/cacio-e-pepe.jpg',
        url: 'https://cooking.nytimes.com/recipes/1017304-cacio-e-pepe',
        ingredients: [
            '1.5c Pecorino Romano, finely grated',
            '1c Parmigiano-Reggiano, finely grated',
            '1 Tbsp black pepper',
            '3/4 lb Tonnarelli or other long pasta',
            '1 or 2 tsp Good Olive Oil'
        ],
        steps: [
            {
                range: [ 0, 'black pepper' ],
                step: 'Combine in bowl, mash w/just enough water to make paste, spread<br/>evenly in bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Add pasta to bowl (reserve 1c water),<br/>stir vigorously to coat, add olive oil if needed to thin.<br/><br/><br/>Plate, top with additional pecorino &amp; pepper'
            }, {
                range: [ 'tonnarelli or other long pasta' ],
                step: 'Boil salted water, cook pasta until almost done'
            }
        ]
    },
    {
        title: 'Pork Carnitas (6 Servings)',
        image: './images/instant-pot-carnitas.jpg',
        url: 'https://www.delish.com/cooking/recipe-ideas/a30142746/instant-pot-pork-carnitas-recipe/',
        ingredients: [
            '3lb skinless, boneless pork shoulder, cut into 2" pieces',
            '1.5c orange juice',
            '2 tsp ancho chili powder',
            '1 lg onion, quartered',
            '3 jalapenos, halved lengthwise',
            '6 cloves garlic',
            '2 tsp black pepper',
            '1 tsp ground cumin',
            '1 cinnamon stick',
            '1 Tbsp dried oregano',
            '1/2 tsp ground cloves',
            '2.5 tsp salt',
            'Tortillas',
            'Hot Sauce',
            '1 lg red onion, thinly sliced',
            '1.25c apple cider vinegar',
            '0.5c water',
            '3 Tbsp granulated sugar',
            '1 Tbsp salt',
            'Pinch crushed red pepper flakes'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Add to instant pot, toss with hands until combined, seal,<br/>cook on high for 35min, immediately quick release.<br/><br/><br/>Remove pork, discard peppers/spices. Shred meat w/two forks,<br/>transfer to pan with walls. Pour 3/4 cup cooking liquid,<br/>toss, broil until crisp and brown.'
            }, {
                range: [ 0, -1 ],
                step: 'Combine to make tacos'
            }, {
                range: [ 'red onion' ],
                step: 'Put in large mason jar'
            }, {
                range: [ 'red onion', -1 ],
                step: 'Combine in jar, adding pepper flakes, let cool to room temp,<br/>then refrigerate for 2hrs'
            }, {
                range: [ 'apple cider vinegar', 'salt' ],
                step: 'Boil together, stir to dissolve sugar/salt'
            }
        ]
    },
    {
        title: 'Instant Pot Chicken & Rice (6 Servings)',
        image: './images/instant-pot-chicken-and-rice.jpg',
        url: 'https://www.delish.com/cooking/recipe-ideas/a19677130/instant-pot-chicken-and-rice-recipe/',
        ingredients: [
            '1 Tbsp olive oil',
            '1/2 yellow onion, chopped',
            '2 cloves garlic, minced',
            '1 tsp dried oregano',
            '1 tsp smoked paprika',
            '1c white rice',
            'Salt & Pepper to taste',
            '1.25c chicken broth or water',
            '2 med carrots, diced',
            '1 red bell pepper, chopped',
            '3 chicken breasts'
        ],
        steps: [
            {
                range: [ 0, 'onion' ],
                step: 'Saute in instant pot, 3-4m'
            }, {
                range: [ 0, 'smoked paprika' ],
                step: 'Add, cook 1m'
            }, {
                range: [ 0, -1 ],
                step: 'Stir in, chicken (seasoned w/S&amp;P) on top.<br/>Pressure cook on high for 8m.<br/>NR for 10m. Remove chicken, shred, add back, serve.'
            }
        ]
    },
    {
        title: 'Louisiana Style Red Beans and Rice (6 Servings)',
        image: './images/louisiana-style-red-beans-and-rice.jpg',
        url: 'https://www.budgetbytes.com/louisiana-red-beans-rice/',
        ingredients: [
            '1 lb dry red beans',
            '2 Tbsp cooking oil',
            '14 oz Andouille sausage, sliced into rounds',
            '1 yellow onion, diced',
            '1 green bell pepper, diced',
            '3 ribs celery, diced',
            '4 cloves garlic, minced',
            '2 tsp smoked paprika',
            '1 tsp dried oregano',
            '1 tsp dried thyme',
            '0.5 tsp garlic powder',
            '0.5 tsp onion powder',
            '0.25 tsp cayenne pepper',
            '0.25 tsp black pepper',
            '2 bay leaves',
            '6c water',
            '0.25c chopped parsley',
            '1 Tbsp salt',
            '1.5c long grain white rice',
            '3 green onions'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Soak overnight in double volume of water'
            }, {
                range: [ 0, 'water' ],
                step: 'Drain and rinse beans, add w/water, add lid,<br/>boil on med-high, simmer on med-low for 1hr<br/>(stirring occasionally).<br/><br/>Smash beans w/spoon, let simmer. Repeat occasionally for 30min.'
            }, {
                range: [ 0, -1 ],
                step: 'Add salt and sausage back to pot.<br/>Serve on top of rice, topped w/green onions.'
            }, {
                range: [ 'cooking oil', 'andouille sausage' ],
                step: 'Cook until browned in large pot, remove'
            }, {
                range: [ 'cooking oil', 'garlic' ],
                step: 'Saute on med, scrape off brown bits'
            }, {
                range: [ 'cooking oil', 'bay leaves' ],
                step: 'Combine, cook 1m'
            }, {
                range: [ 'long grain white rice' ],
                step: 'Make Rice'
            }
        ]
    },
    {
        title: 'Vegetable Fritters w/Garlic Herb Sauce (9 fritters)',
        image: './images/vegetable-fritters.jpg',
        url: 'https://www.budgetbytes.com/vegetable-fritters-with-garlic-herb-sauce/',
        ingredients: [
            '1/2c sour cream',
            '1/2 tsp dried parsley',
            '1/4 tsp dried oregano',
            '1/4 tsp dried basil',
            '1/8 tsp garlic powder',
            '1/8 tsp onion powder',
            '1/8 tsp salt',
            '1/8 tsp pepper',
            '1/2 lb frozen broccoli, thawed & finely chopped',
            '1c frozen corn, thawed',
            '1 carrot, peeled & grated (large holed)',
            '3 green onions, sliced',
            '1/4 tsp garlic powder',
            '1 tsp salt',
            '1/2c all purpose flour',
            '2 lg eggs',
            '3 Tbsp oil'
        ],
        steps: [
            {
                range: [ 0, 'pepper' ],
                step: 'Stir together, refrigerate to let blend'
            }, {
                range: [ 'frozen broccoli', 'eggs' ],
                step: 'Add to large bowl, stir to combine'
            }, {
                range: [ 'frozen broccoli', -1 ],
                step: 'Heat on med, add batter in 1/4c dollops, press to flatten.<br/>Cook for 3m per side, cook 3-4 fritters at a time (adding<br/>1 Tbsp oil when adding new batter)'
            }
        ]
    },
    {
        title: 'Instant Pot Cajun Pasta (4 servings)',
        image: './images/instant-pot-cajun-pasta.jpg',
        url: 'https://tastesbetterfromscratch.com/instant-pot-cajun-pasta/',
        ingredients: [
            '1 Tbsp olive oil',
            '12 oz smoked andouille sausages, cut into rounds',
            '1 bell pepper, chopped',
            '2 ribs celery, chopped',
            '3 green onions, chopped',
            '3 cloves garlic, minced',
            '2-3 tsp cajun seasoning',
            '1.25 cups chicken broth',
            '3/4c milk',
            '8oz farfalle pasta',
            '1/2c grated parmesan cheese',
            '2 tsp cornstarch',
            '1/4c milk'
        ],
        steps: [
            {
                range: [ 0, 'smoked andouille sausages' ],
                step: 'Saute in instant pot, until brown'
            }, {
                range: [ 0, 'cajun seasoning' ],
                step: 'Add, saute 1min'
            }, {
                range: [ 0, 'farfalle pasta' ],
                step: 'Add, press pasta down to submerge. Cook on high 4min.<br/>Quick release immediately.'
            }, {
                range: [ 0, -1 ],
                step: 'Turn to saute, add, stir until thickened, 1-2m.'
            }
        ]
    },
    {
        title: 'Spicy-Sweet Sambal Pork Noodles (6-8 servings)',
        image: './images/spicy-sweet-sambal-pork-noodles.jpg',
        url: 'https://www.bonappetit.com/recipe/spicy-sweet-sambal-pork-noodles',
        ingredients: [
            '2 Tbsp olive oil',
            '1 lb ground pork',
            '2" Ginger, peeled, cut into thin sticks',
            '8 garlic cloves, thinly sliced',
            '2 Tbsp sugar',
            '1 lb ground pork',
            '2 Tbsp tomato paste',
            '2 sprigs basil',
            '1/3 cup hot chili paste',
            '1/4 cup soy sauce',
            '1/4 cup unseasoned rice vinegar',
            '2c water',
            '1.5 fresh ramen noodles or 16 oz dried spaghetti',
            'Salt',
            '2 Tbsp unsalted',
            'Basil (Torn)'
        ],
        steps: [
            {
                range: [ 0, 'ground pork' ],
                step: 'Heat oil on med-high, add pork, break into 6-8<br/>chunks, cook until browned (5m).'
            }, {
                range: [ 0, 'sprigs basil' ],
                step: 'Add, break pork into small clumps until<br/>cooked through (5m).'
            }, {
                range: [ 0, 'soy sauce' ],
                step: 'Cook until paste darkens (2m).'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, simmer, set heat to low, cook until flavors<br/>melded (30-45m).'
            }, {
                range: [ 0, -1 ],
                step: 'Add, simmer, toss for 1m. Remove basil sprigs.<br/>Top w/new torn basil.'
            }, {
                range: [ 'fresh ramen noodles or 16 oz dried spaghetti' ],
                step: 'Cook in large pot of salted water, until 1m before<br/>al dente.'
            }
        ]
    },
    {
        title: 'Thai Red Curry (6-8 servings)',
        image: './images/thai-red-curry-with-vegetables.jpg',
        url: 'https://cookieandkate.com/thai-red-curry-recipe/',
        ingredients: [
            '1 Tbsp coconut oil or olive oil',
            '1 sm white onion, chopped',
            'Pinch of salt',
            '1 Tbsp ginger (finely grated)',
            '2 cloves garlic, pressed or minced',
            '1 red bell pepper (sliced into 2" strips)',
            '1 yellow/orange/green bell pepper (sliced into 2" strips)',
            '3 carrots, peeled and sliced into 1/4" thick rounds',
            '2 Tbsp thai red curry paste',
            '14oz regular coconut milk',
            '1/2 cup water',
            '1.5 cup packed thinly sliced dino kale',
            '1.5 tsp coconut/brown sugar',
            '1.25c brown rice',
            '2 tsp rice vinegar or fresh lime juice',
            '1 Tbsp Tamari or Soy Sauce',
            'Cilantro',
            'Red Pepper Flakes',
            'Chili Garlic Sauce'
        ],
        steps: [
            {
                range: [ 0, 'pinch of salt' ],
                step: 'Heat to med, add all, cook 5m'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Add, cook 30s while stirring'
            }, {
                range: [ 0, 'carrots' ],
                step: 'Add, cook 3-5m, stirring'
            }, {
                range: [ 0, 'thai red curry paste' ],
                step: 'Add, stir often for 2m'
            }, {
                range: [ 0, 'coconut/brown sugar' ],
                step: 'Add, stir, simmer on med, then reduce to low, simmer<br/>5-10m, stirring.'
            }, {
                range: [ 0, -1 ],
                step: 'Combine all, serve'
            }, {
                range: [ 'brown rice', 'tamari or soy sauce' ],
                step: 'Cook Rice, then season with tamari/vinegar'
            }
        ]
    },
    {
        title: 'Instant Pot Pulled Pork (6 servings)',
        image: './images/instant-pot-pulled-pork.jpg',
        url: 'https://thesaltymarshmallow.com/instant-pot-pulled-pork/',
        ingredients: [
            '3lb boneless pork roast, cut to 3-4" cubes',
            '1 Tbsp packed brown sugar',
            '2 tsp paprika',
            '2 tsp garlic powder',
            '2 tsp onion powder',
            '1 tsp salt',
            '1 tsp pepper',
            '1/2 tsp cumin',
            '1/4 tsp cayenne',
            '2 Tbsp olive oil',
            '0.25c chicken or beef broth',
            '1/3 cup apple cider vinegar',
            '1c barbecue sauce',
            '1 tsp hot pepper sauce (optional)',
            '1c chicken or beef broth',
            '1c barbecue sauce',
            'Buns',
            'Cole Slaw'
        ],
        steps: [
            {
                range: [ 0, 'cayenne' ],
                step: 'Mix spices together in small bowl, season meat'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Set IP to saute, heat oil. Add half pork, saute 5m, brown<br/>all sides. Remove, repeat with other half of pork.'
            }, {
                range: [ 0, 'chicken or beef broth' ],
                step: 'Remove all pork, deglaze pan w/broth.'
            }, {
                range: [ 0, '1c chicken or beef broth' ],
                step: 'Add all to IP, cook on high 40m, NR 10m.'
            }, {
                range: [ 0, -1 ],
                step: 'Remove meat, shred, add bbq sauce, serve.'
            }, {
                range: [ 'apple cider vinegar', 'chicken or beef broth' ],
                step: 'Whisk together'
            }
        ]
    },
    {
        title: 'Instant Pot Salmon with Garlic Potatoes and Greens (4 servings)',
        image: './images/instant-pot-salmon-and-garlic-potatoes.jpg',
        url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/instant-pot-salmon-with-garlic-potatoes-and-greens-3894814',
        ingredients: [
            '1.25 lb small red potatoes, halved or quartered',
            '1 cup water',
            '2 tbsp unsalted butter',
            '1/2 tsp Salt and Pepper',
            'Four Salmon fillets (5-6 oz)',
            '1/4 tsp paprika',
            '1/2 tsp grated lemon zest',
            'Salt and Pepper (S&P)',
            '4 cloves garlic, minced',
            '2 tbsp butter (unsalted)',
            '4 cups packed mixed baby spinach and arugula',
            'Lemon wedges'
        ],
        steps: [
            {
                range: [ 0, 'salt and pepper' ],
                step: 'Add all to the bottom of instant pot,<br/>add steam rack on top.'
            }, {
                range: [ 0, 'salt and pepper (s&p)' ],
                step: 'Add salmon on top of potatoes, skin-side-down on rack.<br/>Cook on high 3m, 0m NR. Remove salmon and rack, set<br/>to saute.'
            }, {
                range: [ 0, 'garlic' ],
                step: 'When potatoes sizzle, add garlic, cook 1-2m'
            }, {
                range: [ 0, '2 tbsp butter (unsalted)' ],
                step: 'Add butter and S&amp;P, melt, smash with fork until chunky'
            }, {
                range: [ 0, -1 ],
                step: 'Turn off cooker, add greens to potatoes, stir<br/>1-2m until wilted. Season w/S&amp;P, serve with lemon<br/>wedges on top.'
            }, {
                range: [ 'four salmon fillets', 'salt and pepper' ],
                step: 'Rub onto salmon'
            }
        ]
    },
    {
        title: 'Kale and Pear Green Smoothie (2 servings)',
        image: './images/kale-and-pear-green-smoothie.jpg',
        url: 'https://www.vitamix.com/us/en_us/recipes/kale-and-pear-green-smoothie',
        ingredients: [
            '1c water',
            '1c green grapes',
            '1 lg orange, peeled, halved',
            '1/2 pear, seeded, halved',
            '1 banana, peeled, halved',
            '1c kale',
            '2c ice cubes'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Add all ingredients to blender, variable 1, slowly<br/>move to variable 10, then high. Blend 45 seconds.'
            }
        ]
    },
    {
        title: 'Cold Peanut Noodle Salad (4 servings)',
        image: './images/cold-peanut-noodle-salad.jpg',
        url: 'https://www.budgetbytes.com/cold-peanut-noodle-salad/',
        ingredients: [
            '3 Tbsp natural-style peanut butter',
            '1 Tbsp brown sugar',
            '1 clove garlic, minced',
            '1/2 tsp ginger, grated',
            '1 med lime, juiced (2 Tbsp)',
            '2 tsp soy sauce',
            '1/4 cup neutral oil',
            '8oz whole wheat spaghetti',
            '4c finely shredded red cabbage',
            '2 carrots, shredded w/grater',
            '1/2 bunch cilantro, chopped (1/2c)',
            '4 green onions, sliced (1/2c)',
            '1/2c peanuts, chopped'
        ],
        steps: [
            {
                range: [ 0, 'neutral oil' ],
                step: 'Add all in bowl or blender, blend or whisk into sauce'
            }, {
                range: [ 0, -1 ],
                step: 'Combine to serve (or store separately)'
            }, {
                range: [ 'whole wheat spaghetti' ],
                step: 'Break spaghetti in half, boil until tender, drain, rinse<br/>with cold water'
            }, {
                range: [ 'whole wheat spaghetti', -1 ],
                step: 'Combine, toss until evenly combined'
            }
        ]
    },
    {
        title: 'Fruit Tart (1 Pie)',
        image: './images/fruit-tart.jpg',
        url: 'https://www.yummly.com/recipe/Fruit-Tart-1123548?prm-v1=#directions',
        ingredients: [
            '2 cups half-and-half',
            '6 Tbsp cup sugar',
            '1/8 tsp salt',
            '5 egg yolks',
            '2 Tbsp cup sugar',
            '3 Tbsp cornstarch + 3 Tbsp flour',
            '4 Tbsp cold unsalted butter, cut in 4',
            '1.5 tsp vanilla extract',
            '1/2 cup butter',
            '1.25 cups flour',
            '1.5 Tbsp sugar',
            '1 egg yolk',
            '1/8c ice water',
            'Strawberries, kiwis, blueberries, raspberries',
            '3/4 cup apricot jam'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Heat in saucepan until simmering / dissolved'
            }, {
                range: [ 0, 'cornstarch + 3 tbsp flour' ],
                step: 'Temper half-and-half into yolk mix by slowly whisking it in a<br/>little at a time. Return all mix to saucepan, stir constantly,<br/>return to simmer, stir until glossy.'
            }, {
                range: [ 0, 'vanilla extract' ],
                step: 'Remove from heat, mix in, refrigerate (3+ hrs) with plastic wrap<br/>on top to keep a skin from forming.'
            }, {
                range: [ 0, -1 ],
                step: 'Spread cream over crust, add fruit on top, top with glaze.'
            }, {
                range: [ 'egg yolks', 'cup sugar' ],
                step: 'Whisk eggs, add sugar, whisk until creamy (15s)'
            }, {
                range: [ 'egg yolks', 'cornstarch + 3 tbsp flour' ],
                step: 'Add, whisk until mix is pale yellow and thick (30s)'
            }, {
                range: [ '1/2 cup butter', 'sugar' ],
                step: 'Preheat to <b>375&deg;</b>, mix until coarse crumbs.'
            }, {
                range: [ '1/2 cup butter', 'ice water' ],
                step: 'Mix with hand mixer until dough forms<br><br/>Wrap dough w/plastic wrap, chill for 1hr.<br><br/>Spray 9" tart pan w/cooking spray, roll out dough into<br/>13" circle, and fit into pan. Put foil over crust, fill<br/>with dry beans, bake for 20-25m. Remove foil and beans, bake<br/>again for 5m. Cool completely.'
            }, {
                range: [ 'apricot jam' ],
                step: 'Cook for 2m, strain'
            }
        ]
    },
    {
        title: 'Moussaka (6 servings)',
        image: './images/moussaka.jpg',
        url: 'https://www.allrecipes.com/recipe/19644/moussaka/',
        ingredients: [
            '2-3 Eggplants (peeled, 1/2" thick slices)',
            '1 pinch salt',
            '1/4c olive oil',
            '1 Tbsp butter',
            '1lb ground beef',
            '1 pinch salt',
            '1 pinch black pepper',
            '2 onions, chopped',
            '1 clove garlic, minced',
            '1/4 tsp ground cinnamon',
            '1/4 tsp ground nutmeg',
            '1/2 tsp fines herbs',
            '2 Tbsp dried parsley',
            '8oz can tomato sauce',
            '1/2c red wine',
            '1 egg, beaten',
            '4c milk',
            '1/2c butter',
            '6 Tbsp all-purpose flour',
            '1 pinch salt',
            '1 pinch white pepper',
            '1.5c freshly grated Parmesan',
            '1/4 tsp ground nutmeg'
        ],
        steps: [
            {
                range: [ 0, 'pinch salt' ],
                step: 'Lay slices on paper towels, sprinkle salt, set aside for 30m'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Heat oil in skillet on high, fry eggplant until browned, set aside<br/>on paper towels to drain (alt: broil in oven)'
            }, {
                range: [ 0, -1 ],
                step: 'Grease 9x13 baking dish, layer:<br/><br/>1/2 eggplant<br><br/>meat mix<br><br/>1/2c Parmesan<br><br/>remaining eggplant<br><br/>1/2c Parmesan<br><br/>bechamel sauce<br><br/>sprinkle nutmeg &amp; Parmesan<br/><br/>Bake <b>350&deg;</b> for 1hr.'
            }, {
                range: [ 'butter', 'garlic' ],
                step: 'Melt in skillet on med, add all'
            }, {
                range: [ 'butter', 'red wine' ],
                step: 'After meat browns, add all, mix, simmer 20m'
            }, {
                range: [ 'butter', 'egg' ],
                step: 'Allow to cool, stir in egg'
            }, {
                range: [ 'milk', 'pinch white pepper' ],
                step: 'Bechamel Sauce: Scald milk in saucepan, melt butter in skillet,<br/>whisk flour into butter until smooth. Low heat, gradually pour<br/>in milk, whisking constantly until thick. Add spices.'
            }
        ]
    },
    {
        title: 'Homemade Bagels (8 bagels)',
        image: './images/bagels.jpg',
        url: 'https://sallysbakingaddiction.com/homemade-bagels/',
        ingredients: [
            '1.5c warm water (100-110°F)',
            '2.75 tsp instant/active dry yeast',
            '4c bread  flour (spoon & leveled)',
            '1 Tbsp sugar or brown sugar',
            '2 tsp salt',
            'Nonstick spray or 2 tsp olive oil',
            '2 quarts water',
            '1/4c honey',
            '1 egg white beaten w/1 Tbsp water'
        ],
        steps: [
            {
                range: [ 0, 'instant/active dry yeast' ],
                step: 'Whisk together, cover, sit for 5m'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, beat on low for 2m, dough will look stiff/dry<br><br/>Turn dough out onto floured surface, knead w/flour hands<br/>for 4-5m.'
            }, {
                range: [ 0, 'nonstick spray or 2 tsp olive oil' ],
                step: 'Grease bowl, place dough in bowl, turning it to coat all<br/>sides in oil. Cover bowl w/foil, plastic wrap, or towel,<br/>let rise at room temp for 60-90m (double in size).'
            }, {
                range: [ 0, 'honey' ],
                step: 'Punch dough down, divide into 8, shape each into ball and<br/>press middle to make hole. Cover w/towel, preheat oven to<br/><b>425&deg;F</b> and prepare bath: Mix water and honey, boil,<br/>drop bagels in 2-4 at a time, cook for 1m on each side.'
            }, {
                range: [ 0, -1 ],
                step: 'Use pastry brush to apply egg wash, bake 20-25m (rotating pan<br/>halfway through). Remove, cool 20m, transfer to wire rack.'
            }
        ]
    },
    {
        title: 'Roasted Sweet Potatoes (6 side servings)',
        image: './images/roasted-sweet-potatoes.jpg',
        url: 'https://www.chelseasmessyapron.com/roasted-sweet-potatoes/',
        ingredients: [
            '2 lbs (3 large) sweet potatoes, peeled, cut 1/2" pieces',
            '2 Tbsp olive oil',
            '3/4 tsp fine sea salt (less if table salt)',
            '1/4 tsp black pepper',
            '1/2 tsp ground chili powder',
            '1/2 tsp paprika',
            '1/2 tsp cumin',
            '1/2 tsp garlic powder'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Preheat to <b>425&deg;F</b>, toss potatoes in oil and spices,<br/>spread onto pan in even layer, cook 30m (flipping every 10m).'
            }
        ]
    },
    {
        title: 'Cajun Shrimp Étouffée (6 servings)',
        image: './images/cajun-shrimp-etouffee.jpg',
        url: 'https://www.yummly.com/recipe/Cajun-Shrimp-Etouffee-2514914?prm-v1=#directions',
        ingredients: [
            '1/2c high heat oil',
            '1/2c flour',
            '1.25c Onions (minced)',
            '1.25c Green Bell Peppers (Minced)',
            '3/4c celery, minced',
            '2 jalapenos, minced (seeds removed)',
            '6 green onions (sliced)',
            '12 cloves garlic (minced)',
            '1.5c shrimp stock',
            '1/2 tsp dried thyme',
            '1/2 tsp oregano',
            '1/2 tsp garlic powder',
            '1/2 tsp onion powder',
            '1/4 tsp cayenne pepper',
            '1/4 tsp black pepper',
            '1/4 tsp white pepper',
            '1 tsp sweet paprika',
            '2 Tbsp hot sauce',
            '2 bay leaves',
            '2 lb shrimp, peeled & deveined',
            '2 Tbsp cold butter',
            'Cooked Rice'
        ],
        steps: [
            {
                range: [ 0, 'flour' ],
                step: 'Heat oil med-high, whisk flour in until smooth, lower heat to<br/>med if roux cooks to fast. Stir w/wooden spoon 20-27m until<br/>roux darkens just beyond peanut butter.'
            }, {
                range: [ 0, 'green onions' ],
                step: 'Add all (only whites of green onions), cook 5-7m'
            }, {
                range: [ 0, 'garlic' ],
                step: 'Add, cook 1m'
            }, {
                range: [ 0, 'bay leaves' ],
                step: 'Add, boil, then low heat, simmer 15m'
            }, {
                range: [ 0, -1 ],
                step: 'Add shrimp, cook 3-5m, add butter, melt, remove bay leaves,<br/>serve over rice w/green onion greens on top'
            }
        ]
    },
    {
        title: 'Snickerdoodles (12 servings)',
        image: './images/snickerdoodles.jpg',
        url: 'https://www.food.com/recipe/snickerdoodle-cookies-super-easy-version-271023',
        ingredients: [
            '1/2c butter',
            '3/4c sugar',
            '1.25c flour',
            '1/4 tsp salt',
            '1.5 tsp baking powder',
            '1 egg',
            '1 Tbsp sugar',
            '1 tsp cinnamon'
        ],
        steps: [
            {
                range: [ 0, 'sugar' ],
                step: 'Preheat to <b>375&deg;F</b> for non-stick, 400&deg;F for other.<br/>Cream butter, then add sugar.'
            }, {
                range: [ 0, 'egg' ],
                step: 'Sift in / add egg. Possibly freeze 15m if dough too sticky'
            }, {
                range: [ 0, -1 ],
                step: 'Shape into walnut-size balls, roll in topping, place 2"<br/>apart on sheet, bake 8-10m'
            }, {
                range: [ '1 tbsp sugar', -1 ],
                step: 'Mix both in bowl'
            }
        ]
    },
    {
        title: 'Banana Bread with Chocolate Chips & Walnuts (8 servings)',
        image: './images/banana-bread-chocolate-chips.jpg',
        url: 'https://theviewfromgreatisland.com/one-banana-banana-bread-with-chocolate-chips-and-walnuts-recipe/',
        ingredients: [
            '1 ripe banana',
            '1 stick butter',
            '1 egg & milk to make 1c',
            '1.5 tsp vanilla',
            '1.5c flour',
            '1c sugar',
            '1 tsp baking soda',
            '1 pinch salt',
            '1/2c dark chocolate chips (opt)',
            '1/2c roughly chopped walnuts (opt)'
        ],
        steps: [
            {
                range: [ 0, 'stick butter' ],
                step: 'Preheat to <b>350&deg;F</b>, Add both to bowl, mix until blended'
            }, {
                range: [ 0, 'pinch salt' ],
                step: 'Add, mix until no lumps'
            }, {
                range: [ 0, -1 ],
                step: 'Fold in until even, pour into greased loaf pan, bake 40-45m,<br/>or until knife comes out clean'
            }
        ]
    },
    {
        title: 'Instant Pot Lentil Soup (4 Servings)',
        image: './images/lentil-soup.jpg',
        url: 'https://www.delish.com/cooking/recipe-ideas/a25240121/instant-pot-lentil-soup/',
        ingredients: [
            '1 lg onion, chopped',
            '1 med carrot, peeled & chopped',
            '2 stalks celery, chopped',
            '3 cloves garlic, minced',
            '1.5c green lentils',
            '14.5oz can diced tomatoes',
            '2 tsp fresh thyme',
            '1 tsp Italian seasoning',
            'Salt',
            'Black pepper',
            '4c chicken stock',
            '4c baby spinach',
            'Parmesan, freshly grated'
        ],
        steps: [
            {
                range: [ 0, 'chicken stock' ],
                step: 'Add to instant pot, set to high pressure for 18m'
            }, {
                range: [ 0, -1 ],
                step: 'Quick release, stir in spinach. Serve garnished with Parmesan'
            }
        ]
    },
    {
        title: 'Instant Pot Ratatouille w/Polenta (6 servings)',
        image: './images/ratatouille-polenta.jpg',
        url: 'https://www.williams-sonoma.com/m/recipe/instant-pot-ratatouille-with-polenta.html',
        ingredients: [
            '4c water',
            '1 tsp salt',
            '1c polenta (corn meal)',
            '2 Tbsp olive oil',
            '1 yellow onion, diced',
            'Salt & Pepper',
            '2 cloves garlic, minced',
            '1 tsp dried oregano',
            '1 Tbsp tomato paste',
            '28oz can diced tomatoes',
            '1 zucchini, 1/4" half-moon slices',
            '1 yellow squash, 1/4" half-moon slices',
            '1 Asian eggplant, 1/2" half-moon slices',
            '2 Tbsp chopped capers',
            '1/4c fresh basil, chopped'
        ],
        steps: [
            {
                range: [ 0, 'polenta' ],
                step: 'Boil water, add salt, add polenta slowly, stir to prevent lumps.<br/>Reduce heat, cook 35-40m'
            }, {
                range: [ 0, -1 ],
                step: 'Quick release, serve on polenta, garnished w/capers and basil'
            }, {
                range: [ 'olive oil', 'salt & pepper' ],
                step: 'Heat oil in instant pot on saute, add, cook 5m'
            }, {
                range: [ 'olive oil', 'tomato paste' ],
                step: 'Add, cook 1m'
            }, {
                range: [ 'olive oil', 'can diced tomatoes' ],
                step: 'Add, cook 5m'
            }, {
                range: [ 'olive oil', 'asian eggplant' ],
                step: 'Add, close lid, set instant pot to high, cook 3m'
            }
        ]
    },
    {
        title: 'Kaya Toast and Half-Boiled Eggs (2 Servings)',
        image: './images/kaya-toast.jpg',
        url: 'https://www.malaysianchinesekitchen.com/half-boiled-eggs/',
        ingredients: [
            '3c water in pot',
            '2 eggs',
            'Soy Sauce',
            'White Pepper (Ground)',
            'Bread (4 Slices)',
            'Kaya Jam',
            'Butter'
        ],
        steps: [
            {
                range: [ 0, 'eggs' ],
                step: 'Boil water, remove from heat, add eggs, cover, let sit <b>7m</b>.'
            }, {
                range: [ 0, -1 ],
                step: 'Mix egg, soy sauce, and pepper in bowl. Dip toast.'
            }, {
                range: [ 'bread', -1 ],
                step: 'Toast bread, add butter and kaya.'
            }
        ]
    },
    {
        title: 'Asian Rice Salad with Shrimp (4 Servings)',
        image: './images/asian-rice-salad-shrimp.jpg',
        url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/asian-rice-salad-with-shrimp-recipe-1973406',
        ingredients: [
            '2 cloves garlic, minced',
            '2" piece ginger (peeled/grated)',
            '3 Tbsp toasted sesame oil',
            '1/4c rice vinegar',
            '2 Tbsp soy sauce',
            'Pinch sugar',
            '3/4 lb shrimp (deveined, halved lengthwise)',
            '2 tsp vegetable oil',
            '2c cooked rice',
            '1 tsp vegetable oil',
            '1 lg carrot, shredded',
            '2 stalks celery, thinly sliced',
            '2c snow peas, thinly sliced',
            '1 bunch scallions, thinly sliced',
            '1/4 head lettuce/cabbage, shredded',
            '1c mung bean sprouts',
            '1/2c chow mein noodles and/or chopped peanuts'
        ],
        steps: [
            {
                range: [ 0, 'pinch sugar' ],
                step: 'Whisk together into dressing. Transfer 2 Tbsp to shrimp to fry with.'
            }, {
                range: [ 0, -1 ],
                step: 'Combine (vegetables &amp; dressing tossed first), mix, serve<br/>(topped with sprouts and noodles or peanuts).'
            }, {
                range: [ 'shrimp', 'vegetable oil' ],
                step: 'Fry shrimp (w/2 Tbsp dressing) in oil, 3-4m'
            }, {
                range: [ 'cooked rice', 'vegetable oil' ],
                step: 'Fry rice for 2m (after removing shrimp from pan), scrape up bits'
            }
        ]
    },
    {
        title: 'Gourmet Mushroom Risotto',
        image: './images/mushroom-risotto.jpg',
        url: 'https://www.allrecipes.com/recipe/85389/gourmet-mushroom-risotto/',
        ingredients: [
            '2 Tbsp Olive Oil',
            '1 lb Portebellos (thinly sliced)',
            '1 lb white mushrooms (thinly sliced)',
            '1 Tbsp Olive Oil',
            '2 Shallots, diced',
            '1.5c Arborio rice',
            '0.5c dry white wine',
            '6c chicken broth (warmed)',
            '4 Tbsp butter',
            '1/3c grated Parmesan',
            '3 Tbsp finely chopped chives',
            'Salt & Pepper to taste'
        ],
        steps: [
            {
                range: [ 0, 'white mushrooms' ],
                step: 'Heat (med-high) 3m (until soft). Reserve liquid.'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from heat, stir to combine.'
            }, {
                range: [ '1 tbsp olive oil', 'shallots' ],
                step: 'Heat (med-high) 1m'
            }, {
                range: [ '1 tbsp olive oil', 'arborio rice' ],
                step: 'Add, Heat 2m'
            }, {
                range: [ '1 tbsp olive oil', 'chicken broth' ],
                step: 'Add wine, stir until absorbed. Then add broth, 1/2c at a time,<br/>stirring until absorbed until rice is al dente, 15-20m.'
            }
        ]
    },
    {
        title: 'Instant Pot Chicken Tagine',
        image: './images/chicken-tagine.jpg',
        url: 'https://themodernproper.com/instant-pot-chicken-tagine',
        ingredients: [
            '8 Chicken Thighs (~3lbs)',
            '1 tsp salt',
            '1 Tbsp olive oil',
            '3 Lg shallots, sliced',
            '4 Lg cloves garlic, roughly chopped',
            '1 Tbsp ginger (grated)',
            '1 tsp ground cumin',
            '1 tsp ground turmeric',
            '1 tsp cinnamon',
            '2 Tbsp tomato paste',
            '1/2c Dried apricots (halved)',
            '1/3c pistachios (roughly chopped)',
            '1 Tbsp brown sugar',
            '14oz can diced tomatoes',
            '1c chicken stock',
            '14oz can chickpeas, (drained/rinsed)',
            '1/2c pistachios (roughly chopped)',
            '1/4c chopped mint',
            '1/4c small red onion, thinly sliced',
            '1/2 lemon'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: 'Season chicken, saute in instant pot on high until browned (work<br/>in batches, ~10m). Remove, leave on plate.'
            }, {
                range: [ 0, 'chicken stock' ],
                step: 'Return chicken to pot, stir, pressure-cook on high for 8m, 10m NR.<br/>Open pot, remove and shred chicken, return chicken.'
            }, {
                range: [ 0, -1 ],
                step: 'Add chickpeas, stir. Serve topped with all remaining ingredients'
            }, {
                range: [ 'shallots', 'cinnamon' ],
                step: 'Saute in instant pot on med, ~5m, deglaze with stock if needed'
            }, {
                range: [ 'shallots', 'chicken stock' ],
                step: 'Stir all in, until even, turn off pot'
            }
        ]
    },
    {
        title: 'Avocado Tomato Corn Salad',
        image: './images/avocado-corn-salad.jpg',
        url: 'https://cafedelites.com/avocado-corn-tomato-salad/',
        ingredients: [
            '1c shredded Romaine lettuce',
            '2 ears cooked corn',
            '2 lg avocados, diced',
            '9oz grape tomatoes, halved',
            '1/8 red onion, thinly sliced',
            '2 Tbsp lime juice',
            '2 Tbsp olive oil',
            '1-2 Tbsp cilantro (chopped)',
            '1/2 tsp salt',
            '1/3 tsp red chili flakes',
            '1 pinch cumin',
            '1 clove garlic (minced)'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Combine to make salad'
            }, {
                range: [ 'lime juice', -1 ],
                step: 'Combine. Store aside (as dressing)'
            }
        ]
    },
    {
        title: 'Instant Pot Cilantro Lime Rice',
        image: './images/cilantro-lime-rice.jpg',
        url: 'https://www.skinnytaste.com/instant-pot-cilantro-lime-rice/',
        ingredients: [
            '1c long grain white rice',
            '1.25c water',
            '1 tsp olive oil',
            '1 tsp salt',
            '1 tsp oil (olive)',
            '1/2 lime, juiced',
            '1/4c cilantro (chopped)'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Add to instant pot, stir, cook high 3m, 10m NR.'
            }, {
                range: [ 0, -1 ],
                step: 'Fluff rice, combine, stir until mixed.'
            }, {
                range: [ '1 tsp oil (olive)', -1 ],
                step: 'Combine, stir'
            }
        ]
    },
    {
        title: 'Garlic Butter Shrimp',
        image: './images/garlic-butter-shrimp.jpg',
        url: 'https://www.acouplecooks.com/garlic-butter-shrimp/',
        ingredients: [
            '1lb large shrimp',
            '3 cloves garlic, minced',
            '1/2 tsp kosher salt',
            '3 Tbsp butter',
            '2 lemon wedges',
            'Cilantro or parsley'
        ],
        steps: [
            {
                range: [ 0, 'kosher salt' ],
                step: 'Pat shrimp dry, mix in bowl'
            }, {
                range: [ 0, 'butter' ],
                step: 'Cook on med-high 1-2m per side'
            }, {
                range: [ 0, -1 ],
                step: 'Spritz with lemon, cover with cilantro/parsley'
            }
        ]
    },
    {
        title: 'Cajun Sausage and Rice Skillet',
        image: './images/cajun-sausage-rice-skillet.jpg',
        url: 'https://www.budgetbytes.com/cajun-sausage-and-rice-skillet/',
        ingredients: [
            '14oz Andouille sausage, 1/3" thick slices',
            '1 Tbsp cooking oil',
            '1 bell pepper',
            '1 tsp smoked paprika',
            '1/2 tsp dried oregano',
            '1/2 tsp dried thyme',
            '1/4 tsp garlic powder',
            '1/4 tsp onion powder',
            '1/8 tsp cayenne pepper',
            '1/8 tsp black pepper',
            '15oz fire roasted diced tomatoes',
            '1c long grain white rice',
            '1.5c chicken broth',
            '2 green onions, sliced'
        ],
        steps: [
            {
                range: [ 0, 'cooking oil' ],
                step: 'Cook on med in skillet/dutch oven until well browned'
            }, {
                range: [ 0, 'bell pepper' ],
                step: 'Saute 1m'
            }, {
                range: [ 0, 'black pepper' ],
                step: 'Saute 1m'
            }, {
                range: [ 0, 'chicken broth' ],
                step: 'Add, bring to boil on high, simmer on low 20m w/lid on.<br/>Remove from heat, let rest (w/lid) 5m.'
            }, {
                range: [ 0, -1 ],
                step: 'Fluff/mix. Top with onions.'
            }, {
                range: [ 'bell pepper' ],
                step: 'Dice'
            }
        ]
    },
    {
        title: 'Instant Pot Chicken Gyros',
        image: './images/chicken-gyros.jpg',
        url: 'https://www.365daysofcrockpot.com/instant-pot-chicken-gyros/',
        ingredients: [
            '3 lbs chicken thighs',
            '1 lg onion, thinly sliced',
            '9 cloves garlic, minced',
            '3 Tbsp olive oil',
            '1 Tbsp dried oregano',
            '1/4 tsp allspice',
            '1 Tbsp lemon pepper seasoning',
            '1 Lg lemon (juiced)',
            '1/4c red wine vinegar',
            '1/4c chicken broth',
            'Pita bread',
            'Lettuce',
            'Cherry tomatoes',
            'Feta cheese crumbles',
            '1c greek yogurt (full fat)',
            '1 cucumber (peeled, seeded, diced)',
            '1 Tbsp dried dill',
            '1/4 tsp salt',
            '1/2 tsp garlic powder',
            'Salt & Pepper to taste'
        ],
        steps: [
            {
                range: [ 0, 'chicken broth' ],
                step: 'Cook in instant pot for 20m, 10-15m NR. Remove chicken, shred,<br/>replace.'
            }, {
                range: [ 0, -1 ],
                step: 'Make gyros with pita base, topped with meat, lettuce, tomatoes,<br/>cheese, and sauce.'
            }, {
                range: [ 'greek yogurt', 'garlic powder' ],
                step: 'Combine to make tzatziki sauce'
            }
        ]
    },
    {
        title: 'Broccoli Spoon Salad with Warm Vinaigrette (4 servings)',
        image: './images/broccoli-spoon-salad.jpg',
        url: 'https://www.bonappetit.com/recipe/broccoli-and-date-salad',
        ingredients: [
            '6 Tbsp neutral oil',
            '2 tsp ras-el-hanout, garam masala, baharat, or curry powder',
            '1 garlic clove, finely grated',
            '2 Tbsp lemon juice',
            '2 Tbsp white balsamic (or white wine) vinegar',
            '1 Tbsp honey',
            'Salt, freshly ground pepper',
            '1/4c raw pistachios, toasted 4m in skillet (until brown), finely chopped',
            '1 sm shallot, finely chopped',
            '1 med jalapeno, finely chopped',
            '6c broccoli florets (~1 bunch), finely chopped',
            '1c cilantro, finely chopped',
            '1/3c dates, pitted, finely chopped'
        ],
        steps: [
            {
                range: [ 0, 'garlic clove' ],
                step: 'Heat med high, 2m. Remove from heat.'
            }, {
                range: [ 0, 'salt' ],
                step: 'Whisk in, set aside'
            }, {
                range: [ 0, -1 ],
                step: 'Toss in med bowl, coat w/dressing, add S&amp;P if needed.'
            }
        ]
    },
    {
        title: 'Sweet Potato Chickpea Buddha Bowl (3 servings)',
        image: './images/buddha-bowl.jpg',
        url: 'https://minimalistbaker.com/sweet-potato-chickpea-buddha-bowl/',
        ingredients: [
            '2 Tbsp oil',
            '1/2 med red onion, sliced into wedges',
            '2 sm sweet potatoes, halved',
            '1/4 tsp each S&P',
            '1 bundle broccolini, chopped',
            '2 handfuls kale, stems removed',
            '15oz chickpeas',
            '1 tsp cumin',
            '3/4 tsp chili powder',
            '3/4 tsp garlic powder',
            '1/4 tsp each S&P',
            '1/2 tsp oregano',
            '1/4 tsp turmeric',
            '1/4c tahini',
            '1 Tbsp maple syrup',
            '1/2 med lemon, juiced',
            '2-4 Tbsp hot water, to thin'
        ],
        steps: [
            {
                range: [ 0, 'sweet potatoes' ],
                step: 'Add all to baking sheet (toss w/oil, potatoes skin-side down),<br/>bake at <b>400&deg;F</b> for 10m'
            }, {
                range: [ 0, 'bundle broccolini' ],
                step: 'Flip potatoes, add broccolini (drizzled w/oil + S&amp;P),<br/>bake 8-10m'
            }, {
                range: [ 0, 'handfuls kale' ],
                step: 'Add kale (drizzled w/oil + pinch S&amp;P), bake 4-5m'
            }, {
                range: [ 0, -1 ],
                step: 'Cut sweet potatoes into chunks, add all to 3 bowls bowl'
            }, {
                range: [ 'chickpeas', 'turmeric' ],
                step: 'Toss in bowl, add 1Tbsp oil to pan, saute on med 10m (until brown)'
            }, {
                range: [ 'tahini', -1 ],
                step: 'Mix, using water to thin mixture'
            }
        ]
    },
    {
        title: 'Buttery Kimchi Chicken (6-8 Servings)',
        image: './images/buttery-kimchi-chicken.jpg',
        url: 'https://www.bonappetit.com/recipe/buttery-kimchi-chicken',
        ingredients: [
            '1c greek yogurt',
            '4 cloves garlic (finely chopped)',
            '2" piece ginger (peeled & finely chopped)',
            '3 Tbsp gochugaru (Korean red pepper powder)',
            '1 Tbsp fish sauce',
            '1 Tbsp salt',
            '1 tsp black pepper (freshly ground)',
            '2 lb skinless, boneless chicken thighs',
            '2 Tbsp vegetable oil',
            '1 onion, sliced 1/2" thick',
            '2c drained kimchi, cut into 2" pieces',
            '2 Tbsp 1.5 tsp tomato paste',
            '1.5c chicken broth',
            '4 Tbsp unsalted butter',
            '0.5c dried soybeans, boiled in 2c water, drain,<br/>rinse in cold water, add 1c water, boil, cool',
            'Cooked white rice',
            '3 scallions, thinly sliced',
            '1 red chile (ex: Fresno), thinly sliced',
            'Pickles (optional)'
        ],
        steps: [
            {
                range: [ 0, 'skinless' ],
                step: 'Cut chicken crosswise into 1/3s, add all to bowl, massage.<br/>Cover, <b>chill 1-3 hrs</b>.'
            }, {
                range: [ 0, 'vegetable oil' ],
                step: 'Heat oil on med-high in large dutch oven, cook chicken in 2<br/>batches, 5-7m each (until browned). Remove all chicken.'
            }, {
                range: [ 0, 'tsp tomato paste' ],
                step: 'Add to pot, cook on med ~10m (until dark red).'
            }, {
                range: [ 0, 'dried soybeans, boiled in 2c water, drain,<br/>rinse in cold water' ],
                step: 'Add all and chicken back to pot, bring to simmer 10-15m.'
            }, {
                range: [ 0, -1 ],
                step: 'Serve over rice topped w/scallions, chile, pickles.'
            }, {
                range: [ 'dried soybeans, boiled in 2c water, drain,<br/>rinse in cold water' ],
                step: 'Blend w/1c of water until thick puree'
            }
        ]
    },
    {
        title: 'Chicken and Rice Soup w/Garlicky Chile Oil (4-6 servings)',
        image: './images/garlic-rice-chicken-soup.jpg',
        url: 'https://www.bonappetit.com/recipe/chicken-and-rice-soup-with-garlicky-chile-oil',
        ingredients: [
            '1/4c + 2 Tbsp<br/>vegetable oil',
            '6 garlic cloves<br/>peeled, thinly sliced',
            '2 tsp crushed red pepper flakes',
            '1 sm onion, peeled, finly chopped',
            '8c water',
            '1 tsp salt',
            '2/3c white rice (short grain), rinsed',
            '1 lb skinless, boneless chicken thighs',
            '1 lg bunch Tuscan kale, stems removed, shreds',
            '1 lemon',
            '2 tsp salt',
            '3 sprigs dill',
            'black pepper, freshly ground'
        ],
        steps: [
            {
                range: [ 0, 'garlic cloves<br/>peeled' ],
                step: 'Dutch oven, med heat, 3-5m<br/>(stir, remove early).'
            }, {
                range: [ 0, 'crushed red pepper flakes' ],
                step: 'Remove to bowl, add, stir'
            }, {
                range: [ 0, 'onion' ],
                step: 'Cook onion in 1 Tbsp remaining oil 5m (browning)'
            }, {
                range: [ 0, 'bunch tuscan kale' ],
                step: 'Add, boil, low heat simmer 20m<br/><br/><br/>remove chicken, shred<br/><br/><br/>Add back chicken &amp; kale, simmer 4m'
            }, {
                range: [ 0, '2 tsp salt' ],
                step: 'Add, stir'
            }, {
                range: [ 0, -1 ],
                step: 'Serve topped w/dill, black pepper, and garlic crisps / oil'
            }
        ]
    },
    {
        title: 'Tortellini Soup (6 servings)',
        image: './images/tortellini-soup.jpg',
        url: 'https://www.tasteofhome.com/recipes/rustic-italian-tortellini-soup/',
        ingredients: [
            '3/4 lb turkey sausage',
            '1 med onion, chopped',
            '6 garlic cloves, minced',
            '29oz chicken broth',
            '1.75c water',
            '14.5oz diced tomatoes',
            '9oz refrigerated tortellini',
            '6oz baby spinach, coarsely chopped',
            '2.25 tsp minced basil',
            '1/4 tsp pepper',
            'Dash crushed red pepper flakes',
            'Shredded Parmesan cheese'
        ],
        steps: [
            {
                range: [ 0, 'garlic cloves' ],
                step: 'Cook sausage + onion to done, add garlic, cook 1m'
            }, {
                range: [ 0, 'diced tomatoes' ],
                step: 'Add, bring to boil'
            }, {
                range: [ 0, 'refrigerated tortellini' ],
                step: 'Add, bring to boil, cook 5-8m'
            }, {
                range: [ 0, -1 ],
                step: 'Add all but cheese, cook 2-3m, top with cheese'
            }
        ]
    },
    {
        title: 'Paprika Shrimp (4 servings)',
        image: './images/paprika-shrimp.jpg',
        url: 'https://www.bonappetit.com/recipe/paprika-shrimp-with-buttery-v8-sauce',
        ingredients: [
            '3 Tbsp olive oil',
            '4 garlic cloves, thinly sliced',
            '1.25 lb shrimp (peeled, deveined)',
            '1 tsp paprika',
            '1/2 tsp mild red pepper flakes<br/>(Maras, Urfa, or Aleppo)',
            'Pinch salt',
            '1/3c V8 Vegetable Juice',
            '2 Tbsp butter',
            '1/2 lemon',
            '1/2 cup parsley, coarsely chopped'
        ],
        steps: [
            {
                range: [ 0, 'garlic cloves' ],
                step: 'Heat on med until soft, but no color (2-3m)'
            }, {
                range: [ 0, 'pinch salt' ],
                step: 'Add, heat med-high 2m'
            }, {
                range: [ 0, 'butter' ],
                step: 'Add, heat 2m until reduced'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from heat, top with lemon zest,<br/>1 tbsp lemon juice, and parsley'
            }
        ]
    },
    {
        title: 'Cucumber, Tomato, and Green Bean Salad (4-6 servings)',
        image: './images/cucumber-tomato-bean-salad.jpg',
        url: 'https://www.bonappetit.com/recipe/cucumber-tomato-and-green-bean-salad',
        ingredients: [
            '1 lb cucumbers, halved lengthwise,<br/>sliced on steep diagonal 1/4" thick',
            '6 oz cherry/grape tomatoes, halved or quartered',
            '4 oz green beans, trimmed, sliced on steep diagonal 1/8" thick',
            '3 lg garlic cloves, finely chopped',
            '1 Fresno chile, no seeds, finely chopped',
            '1/2 c unsalted roasted peanuts, finely chopped',
            '1/4 c unsalted roasted peanuts',
            '3 Tbsp fresh lime juice',
            '1 Tbsp light brown sugar',
            '1 Tbsp fish sauce'
        ],
        steps: [
            {
                range: [ 0, 'unsalted roasted peanuts' ],
                step: 'Add to bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Pour dressing, toss and squeeze 30s. Top w/remaining peanuts<br/>(coarsely chopped)'
            }, {
                range: [ 'fresh lime juice', -1 ],
                step: 'Whisk until dissolved'
            }
        ]
    },
    {
        title: 'Spicy Braised Eggplant Noodles (4 servings)',
        image: './images/eggplant-noodles.jpg',
        url: 'https://www.bonappetit.com/recipe/spicy-braised-eggplant-noodles',
        ingredients: [
            '12oz dried wide rice noodles, cooked (1c water reserved)',
            '3 Tbsp gochujang',
            '1 Tbsp white or yellow miso',
            '3 Tbsp olive oil',
            '1.5 lb medium Japanese eggplant, sliced 3/4"',
            '6 garlic cloves, thinly sliced',
            '1" piece ginger, peeled, finely chopped',
            '2 Tbsp double-concentrated tomato paste',
            '2 Tbsp butter',
            '3 scallions, thinly sliced',
            '1/4 c chopped salted dry-roasted peanuts'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Add noodles, butter, &amp; pasta water (as needed) until glossy,<br/>season w/salt, top w/scallions &amp; peanuts'
            }, {
                range: [ 'gochujang', 'white or yellow miso' ],
                step: 'Mix, add up to 1.5c warm water until smooth'
            }, {
                range: [ 'gochujang', 'double-concentrated tomato paste' ],
                step: 'Add, return eggplant, cook 6-8m'
            }, {
                range: [ 'olive oil', 'medium japanese eggplant' ],
                step: 'Heat on med-high, add eggplant, add 2 Tbsp extra oil, cook<br/>undisturbed until golden brown (3m), toss, cook until tender (5m),<br/>remove'
            }, {
                range: [ 'olive oil', 'double-concentrated tomato paste' ],
                step: 'Cook veggies on med (2m), add tomato, cook 1m'
            }
        ]
    },
    {
        title: 'Chicken and Corn Stir-Fry (4 servings)',
        image: './images/chicken-corn-stir-fry.jpg',
        url: 'https://www.bonappetit.com/recipe/chicken-and-corn-stir-fry',
        ingredients: [
            '3 Tbsp oyster sauce',
            '1 Tbsp rice vinegar',
            '1 tsp toasted sesame oil',
            '2 Tbsp water',
            '4 chicken thighs (1 lb), cut 1"',
            'salt',
            '2 Tbsp cornstarch',
            '2 Tbsp veg oil',
            '2 Tbsp veg oil',
            '1/2 sm red onion, sliced',
            '4 garlic cloves, sliced',
            '1" ginger, peeled, finely chopped',
            '1/2 tsp Aleppo pepper (or similar)',
            '3 ears corn, kernels cut from cob',
            'Steamed cilantro rice'
        ],
        steps: [
            {
                range: [ 0, 'water' ],
                step: 'Combine in bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Add, cook, tossing, 2m. Serve on rice.'
            }, {
                range: [ 'chicken thighs (1 lb)', 'cornstarch' ],
                step: 'Coat, toss'
            }, {
                range: [ 'chicken thighs (1 lb)', 'veg oil' ],
                step: 'Cook 6-8m'
            }, {
                range: [ 'chicken thighs (1 lb)', '3 ears corn, kernels cut from cob' ],
                step: 'Cook 2m w/o corn. Add corn, cook 3m.'
            }, {
                range: [ 'veg oil' ],
                step: 'Heat med-high'
            }
        ]
    },
    {
        title: 'Tomato Jam',
        image: './images/tomato-jam.jpg',
        url: 'https://cooking.nytimes.com/recipes/1017532-tomato-jam',
        ingredients: [
            '1.5 lb ripe tomatoes (roma), cored, coarsely chopped',
            '1c sugar',
            '2 Tbsp lime juice',
            '1 Tbsp grated ginger',
            '1 tsp cumin',
            '1/4 tsp cinnamon',
            '1/8 tsp cloves',
            '1 tsp salt',
            '1 jalapeno or other pepper (stemmed, seeded, minced)'
        ],
        steps: [
            {
                range: [ 0, -1 ],
                step: 'Combine in saucepan, boil over medium, reduce heat, simmer until<br/>thick jam (1 hr 15m, or less on gas stove). Cool and refigerate<br/>until ready to use.'
            }
        ]
    },
    {
        title: 'Peperoncini Chicken (4 Servings)',
        image: './images/peperoncini-chicken.jpg',
        url: 'https://www.bonappetit.com/recipe/peperoncini-chicken',
        ingredients: [
            '2 lb skin-on, bone-in chicken thighs (6-8)',
            '1/2 tsp salt',
            '1/2 tsp ground pepper',
            '1 Tbsp olive oil',
            '2 Tbsp olive oil',
            '1/4 tsp salt',
            '1/4 tsp ground pepper',
            '1 lb fingerling potatoes, halved lengthwise',
            '10 peperoncini + 1/2c brine',
            '2 garlic cloves, finely grated',
            '1 tsp dried oregano',
            '1/2 med red onion, thinly sliced',
            '3 celery stalks, thinly sliced',
            '2 Tbsp chopped parsley'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: 'Salt &amp; Pepper chicken, oil pan, cook at <b>425 &deg;</b> 14-16m.'
            }, {
                range: [ 0, 'garlic cloves' ],
                step: 'Turn chicken over. Add all to pan, add brine around edges,<br/>shake to distribute. Roast in oven 40-45m'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from oven, remove chicken and peperoncini, heat remaining<br/>potatoes on stove 4m on high. Remove from heat, add all, serve.'
            }, {
                range: [ '2 tbsp olive oil', 'garlic cloves' ],
                step: 'Toss'
            }
        ]
    },
    {
        title: 'Garlic and Parmesan Braised Greens (4 Servings)',
        image: './images/garlic-parmesan-greens.jpg',
        url: 'https://www.bonappetit.com/recipe/garlic-and-parmesan-braised-greens',
        ingredients: [
            '1/3c olive oil',
            '1 head garlic, halved crosswise',
            '1 lg onion, thinly sliced',
            'Salt & Pepper',
            '2 bunches Tuscan kale, ribs/stems removed, torn',
            '2 oz Parmesan, finely grated'
        ],
        steps: [
            {
                range: [ 0, 'salt & pepper' ],
                step: 'Heat oil on med in Dutch oven, garlic cut-side down, scatter onion,<br/>season with S&amp;P. Cook 6-8m.'
            }, {
                range: [ 0, 'bunches tuscan kale' ],
                step: 'Add by handful, letting wilt before adding more. Season w/S&amp;P.<br/>Cook 3m. Add 1.5c water, cover, cook 12-15m.'
            }, {
                range: [ 0, -1 ],
                step: 'Add, cook 5m. Add S&amp;P to taste.'
            }
        ]
    },
    {
        title: 'Caramelized Pork & Cucumber Stir-Fry (4 Servings)',
        image: './images/carmelized-pork-cucumber.jpg',
        url: 'https://www.bonappetit.com/recipe/caramelized-pork-and-cucumber-stir-fry',
        ingredients: [
            '1 lg cucumber, peeled alternating strips,<br/><br/>halved lengthwise, remove seeds,<br/><br/>halves sliced crosswise on diagonal 1/2"',
            '1 tsp salt',
            '1 Tbsp veg oil',
            '1 lb ground pork, formed into 5-6 sm. patties, seasoned w/salt.',
            '2 Tbsp veg oil',
            '1 Fresno chile, remove seeds, finely grated',
            '1" ginger, peeled, finely grated',
            '2 garlic cloves, finely grated',
            '1/2 tsp ground white or black pepper',
            '2 Tbsp oyster sauce',
            '2 Tbsp soy sauce',
            '2 Tbsp shaoxing wine or med-dry sherry',
            'Steamed rice (for serving)'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Toss, rest 10m, then dry w/towel'
            }, {
                range: [ 0, 'veg oil' ],
                step: 'Heat med-high, cook until crisp (1m)'
            }, {
                range: [ 0, '2 tbsp veg oil' ],
                step: 'Remove, wipe w/towel, heat new oil, add patties, brown 4m.<br/>Flip, brown 4m. Break pork, cook 1m until not pink.'
            }, {
                range: [ 0, 'ground white or black pepper' ],
                step: 'Add, cook 30s until fragrant.'
            }, {
                range: [ 0, -1 ],
                step: 'Re-add cucumbers, sauce, fry 1m. Serve on rice.'
            }, {
                range: [ 'oyster sauce', 'shaoxing wine or med-dry sherry' ],
                step: 'Mix'
            }
        ]
    },
    {
        title: 'Cold Noodles w/Sichuan Peppercorn Dressing (4 Servings)',
        image: './images/cold-noodles-sichuan-peppercorn.jpg',
        url: 'https://www.bonappetit.com/recipe/cold-sichuan-peppercorn-noodles',
        ingredients: [
            '1 tsp Sichuan peppercorns',
            '4 scallions, thinly sliced',
            '4 garlic cloves, finely chopped',
            '2 Tbsp sesame seeds',
            '1.5 tsp crushed red pepper flakes',
            '1c veg oil',
            '1/2c tamari soy sauce',
            '3 Tbsp balsamic vinegar',
            'Salt',
            '2 ears corn, kernels removed',
            '12 oz green beans, trimmed, sliced diagonal',
            '8 oz dried udon or soba noodles'
        ],
        steps: [
            {
                range: [ 0, 'crushed red pepper flakes' ],
                step: 'Crush peppercorns w/knife, mix all'
            }, {
                range: [ 0, 'salt' ],
                step: 'Heat oil until almost smoke, pour into bowl w/peppercorn mix,<br/>add others, stir, let cool.'
            }, {
                range: [ 0, -1 ],
                step: 'Mix all, serve (Keep dressing separate for storage)'
            }, {
                range: [ '2 ears corn, kernels removed', -1 ],
                step: 'Boil water, add salt, corn, cook 30s.<br/>Remove, add beans instead, cook 1m. Remove, add to corn.<br/>Cook noodles (same water) according to package.'
            }
        ]
    },
    {
        title: 'Eggplant w/Basil & Chili Paste Stir-Fry',
        image: './images/eggplant-basil-chile.jpg',
        url: 'https://hot-thai-kitchen.com/eggplant-chili-paste-stir-fry/',
        ingredients: [
            '2 Tbsp Thai chili paste',
            '1 Tbsp soy sauce',
            '2 tsp fish sauce',
            '2 tsp oyster sauce',
            '2 Tbsp water',
            'Oil (little bit)',
            '275g Chinese/Japanese eggplant (1 lg or 2 sm), halved lengthwise, sliced diagonally 1/2" thick',
            'Oil (bit)',
            'Red Thai chilies (at least 3 lg, seeds removed)',
            '4 cloves garlic',
            '200g ground chicken',
            '1c Thai basil leaves'
        ],
        steps: [
            {
                range: [ 0, 'water' ],
                step: 'Combine, whisk'
            }, {
                range: [ 0, -1 ],
                step: 'Add sauce and eggplant to pan, toss 2-3m, add basil, turn off heat,<br/>toss 30s with residual heat.'
            }, {
                range: [ 'oil', 'chinese/japanese eggplant (1 lg or 2 sm),<br/><br/>halved lengthwise' ],
                step: 'Heat oil in pan just before smoking, add eggplant in one layer,<br/>sear, flip, sear, remove. Repeat in batches for all eggplant.<br/>Remove all.'
            }, {
                range: [ 'oil (bit)', 'garlic' ],
                step: 'Chop or pound until small, Heat oil, saute 1m'
            }, {
                range: [ 'oil (bit)', 'ground chicken' ],
                step: 'Cook until 80% done'
            }
        ]
    },
    {
        title: 'Thai Basil Sauce Noodles w/Jammy Eggs (4 Servings)',
        image: './images/thai-basil-sauce-noodles.jpg',
        url: 'https://www.bonappetit.com/recipe/thai-basil-sauce-noodles-with-jammy-egg',
        ingredients: [
            '4 lg eggs',
            '1 head garlic, peeled',
            '3c Thai basil',
            '1/2c veg oil',
            '1/4c veg oil',
            '1/4c michiu tou or other rice wine',
            '1 tsp sugar',
            '1/2 tsp salt',
            '4 garlic chives, cut 1/2"',
            '2c mung bean sprouts',
            '4 servings dried wide sliced noodles<br/><br/>(Hsin Tung Yang, 8oz) &<br/><br/>store-bought fried garlic and chili crisp'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Gentle boil, add eggs, cook 6.5m. Ice water for 2m. Peel. Halve.'
            }, {
                range: [ 0, -1 ],
                step: 'Add noodles to pan, toss, top w/sprouts, chives, garlic,<br/>eggs, drizzle w/chili crisp'
            }, {
                range: [ 'garlic', 'veg oil' ],
                step: 'Blend to smooth paste'
            }, {
                range: [ 'garlic', 'salt' ],
                step: 'Heat oil in lg skillet on med, add all, cook 1m'
            }, {
                range: [ 'garlic chives', 'mung bean sprouts' ],
                step: 'Boil water (egg water), add, cook 1m, remove'
            }, {
                range: [ 'servings dried wide sliced noodles<br/><br/>(hsin tung yang, 8oz) &<br/><br/>store-bought fried garlic and chili crisp' ],
                step: 'Boil in egg water, 5m, drain.'
            }
        ]
    },
    {
        title: 'Creamy Cashew Udon With Crispy Mushrooms',
        image: './images/cashew-udon.jpg',
        url: 'https://www.bonappetit.com/recipe/creamy-cashew-udon-with-crispy-mushrooms',
        ingredients: [
            '1 cup raw cashews',
            '1 garlic clove, coarsely chopped',
            '1 Tbsp olive oil',
            '1/4 tsp salt',
            '28oz fresh/frozen udon noodles',
            'Freshly ground black pepper and Salt',
            '2 Tbsp black (Chinkiang) vinegar',
            '2 Tbsp chili crisp or chili oil',
            '2 Tbsp soy sauce',
            '1 Tbsp toasted sesame oil',
            '1 scallion, thinly sliced',
            '2 Tbsp olive oil',
            '1 lb oyster, shiitake, crimini, or button mushrooms<br/><br/>torn or cut to bite-size',
            '1 garlic clove, finely chopped',
            '1/4 tsp salt',
            '2 scallions, thinly sliced, divided'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Boil, remove from heat, add cashews, sit 30-60m'
            }, {
                range: [ 0, 'salt' ],
                step: 'Drain, add all + 1/2c water, blend to smooth'
            }, {
                range: [ 0, 'freshly ground black pepper and salt' ],
                step: 'Mix, add reserved liquid so cream coats noodles. Season w/S&amp;P.'
            }, {
                range: [ 0, -1 ],
                step: 'Top noodles with soy-vinegar and extra scallions'
            }, {
                range: [ 'fresh/frozen udon noodles' ],
                step: 'Cook, reserve 1c liquid'
            }, {
                range: [ 'black (chinkiang) vinegar', 'scallion' ],
                step: 'Combine in bowl'
            }, {
                range: [ '2 tbsp olive oil', 'oyster, shiitake, crimini, or button mushrooms<br/><br/>torn or cut to bite-size' ],
                step: 'Heat oil on med-high, add, cook 5-8m (toss every 1m)'
            }, {
                range: [ '2 tbsp olive oil', 'salt' ],
                step: 'Add, stir, cook 1m (add extra 1Tbsp olive oil if dry)'
            }
        ]
    },
    {
        title: 'Vermicelli Noodle Bowl (2 Servings)',
        image: './images/vermicelli-noodle-bowl.jpg',
        url: 'https://www.allrecipes.com/recipe/223529/vermicelli-noodle-bowl/',
        ingredients: [
            '1/4c white vinegar',
            '1/4c fish sauce',
            '2 Tbsp white sugar',
            '2 Tbsp lime juice',
            '1 clove garlic, minced',
            '1/4 tsp red pepper flakes',
            '1/2 tsp canola oil',
            '2 Tbsp chopped shallots',
            '2 skewers',
            '8 med shrimp, w/shells',
            '1 (8oz) package rice vermicelli noodles',
            '1c finely chopped lettuce',
            '1c bean sprouts',
            '1 cucumber, cut into 2" matchsticks',
            '1/4c finely chopped pickled carrots',
            '1/4c finely chopped daikon',
            '3 Tbsp chopped cilantro',
            '3 Tbsp finely chopped Thai basil',
            '3 Tbsp chopped fresh mint',
            '1/4c crushed peanuts'
        ],
        steps: [
            {
                range: [ 0, 'red pepper flakes' ],
                step: 'Whisk together into sauce'
            }, {
                range: [ 0, -1 ],
                step: 'Bowl: Cooked noodles, lettuce, sprouts, topped w/cucumbers,<br/>carrots, daikon, cilantro, basil, mint, peanuts, caramelized<br/>shallots. Shrimp on the side, toss w/sauce.'
            }, {
                range: [ 'canola oil', 'chopped shallots' ],
                step: 'Heat oil, cook 8m'
            }, {
                range: [ 'skewers', 'shrimp' ],
                step: 'Grill on skewer 1-2m per side to lightly char'
            }, {
                range: [ '(8oz) package rice vermicelli noodles' ],
                step: 'Boil water, cook 12m, drain and rinse w/cold water'
            }
        ]
    },
    {
        title: 'Spicy Kimchi-Sweet Potato Fritters (25 Fritters)',
        image: './images/kimchi-sweet-potato-fritters.jpg',
        url: 'https://www.bonappetit.com/recipe/spicy-kimchi-sweet-potato-fritters',
        ingredients: [
            '1 lb sweet potatoes (2lg or 3med), peeled',
            '2 lg eggs',
            '3/4c drained finely chopped kimchi',
            '1/2c all-purpose flour',
            '1/2 tsp salt & pepper',
            '1c Oil (for frying)',
            '1/2c plain whole-milk Greek yogurt',
            '1 Tbsp gochujang'
        ],
        steps: [
            {
                range: [ 0, 'salt & pepper' ],
                step: 'Grate potato in large holes of box grater or food processor,<br/>wring in towel to squeeze liquid out.<br/>Combine, mix w/fork.'
            }, {
                range: [ 0, -1 ],
                step: 'Heat oil, fry heaping Tbsp of batter, flatten, brown 2m, flip,<br/>brown 2m. Remove to wire rack. Repeat for all batter.<br/><br/>Serve w/gochujang-yogurt sauce on top.'
            }, {
                range: [ 'plain whole-milk greek yogurt', -1 ],
                step: 'Mix, season w/salt'
            }
        ]
    },
    {
        title: 'Kimchi-Lentil Stew w/Poached Eggs (4 Servings)',
        image: './images/kimchi-lentil-stew.jpg',
        url: 'https://www.bonappetit.com/recipe/kimchi-lentil-stew-with-poached-eggs',
        ingredients: [
            '1 Tbsp veg oil',
            '2 scallions, thinly sliced',
            '1 sm onion, thinly sliced',
            '3 garlic cloves, thinly sliced',
            '1 Tbsp. gochujang',
            '1c chopped kimchi w/liquid',
            '1 Tbsp gochugaru (Korean red pepper powder)',
            '2 tsp sugar',
            '1c French green or brown lentils',
            '4c low-sodium chicken/veg broth',
            '1/2 tsp salt',
            '4 lg eggs'
        ],
        steps: [
            {
                range: [ 0, 'garlic cloves' ],
                step: 'Heat, cook scallion (non-green only) + others 4m'
            }, {
                range: [ 0, 'gochujang' ],
                step: 'Add, reduce heat, cook 2m'
            }, {
                range: [ 0, 'sugar' ],
                step: 'Add, cook 2m'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, stir, boil, cover, reduce heat, simmer 20-25m'
            }, {
                range: [ 0, -1 ],
                step: 'Crack egg into bowl, slide into stew (repeat x3),<br/>cover and simmer 3m, serve w/scallion greens'
            }
        ]
    },
    {
        title: 'Winter Squash and Kale Pasta w/Pecan Breadcrumbs (4 Servings)',
        image: './images/squash-kale-pasta.jpg',
        url: 'https://www.bonappetit.com/recipe/winter-squash-and-kale-pasta',
        ingredients: [
            '1/2c finely chopped pecans',
            '1/2c panko',
            '2 tsp finely grated lemon zest',
            '1 tsp olive oil',
            'Pinch of salt',
            '1 lg butternut squash (3 lb), peeled,<br/><br/>halved, seeds removed, cut into 1" cubes',
            '2 Tbsp olive oil',
            '2 tsp dried oregano',
            'Salt & Black Pepper',
            '12 oz spaghetti or long pasta',
            '1 Tbsp olive oil',
            '6 garlic cloves, thinly sliced',
            'Kale bunch, ribs removed, torn 2" pieces',
            '1/2c (1 stick) unsalted butter, cut to pieces',
            '1 oz Parmesan, finely grated',
            '1/4c chopped parsley',
            '1/4c fresh lemon juice'
        ],
        steps: [
            {
                range: [ 0, 'panko' ],
                step: 'Toast on upper rack at <b>350&deg;</b>, toss halfway, 7-9m'
            }, {
                range: [ 0, 'pinch of salt' ],
                step: 'Cool, mix w/others, set aside'
            }, {
                range: [ 0, -1 ],
                step: 'Mix squash, parsley, lemon juice in skillet.<br/>Serve: Top pasta w/skillet mix and pecan/panko crumbs.<br/>Season w/pepper.'
            }, {
                range: [ 'butternut squash (3 lb), peeled,<br/><br/>halved', 'salt & black pepper' ],
                step: 'Toss, divide into 2 pans, bake <b>400&deg;</b> 25-30m'
            }, {
                range: [ 'spaghetti or long pasta' ],
                step: 'Cook 2m less than instructions, drain, reserve 1.5c liquid'
            }, {
                range: [ 'spaghetti or long pasta', 'parmesan' ],
                step: 'Add, toss, melt 2m'
            }, {
                range: [ '1 tbsp olive oil', 'kale bunch' ],
                step: 'Heat in med Dutch oven on med, cook garlic 1m, add kale, wilt 2m,<br/>add 1c pasta liquid, cover, cook 4m'
            }
        ]
    },
    {
        title: 'Garlicky Smashed Chickpeas With Corn (4 Servings)',
        image: './images/garlic-chickpeas-corn.jpg',
        url: 'https://www.bonappetit.com/recipe/garlicky-smashed-chickpeas-with-corn',
        ingredients: [
            '3 Tbsp olive oil',
            '1 sm onion, finely chopped',
            '1/2 poblano chile, thinly sliced',
            '3 ears corn, kernels removed',
            'Salt',
            '1/4c oil',
            '2 15oz cans chickpeas, rinsed',
            'Large pinch Salt',
            '4 garlic cloves, finely chopped',
            '4 lg eggs',
            'Coarsely chopped dill or cilantro'
        ],
        steps: [
            {
                range: [ 0, 'poblano chile' ],
                step: 'Heat oil over med, cook all 6-8m'
            }, {
                range: [ 0, 'salt' ],
                step: 'Add, cook 4m, remove all, wipe clean'
            }, {
                range: [ 0, 'garlic cloves' ],
                step: 'Heat oil over med, add chickpeas,<br/>smash w/spoon until evenly chunky, cook 7-9m, add garlic, cook 3m'
            }, {
                range: [ 0, -1 ],
                step: 'Make bowl: Chickpeas, then corn, then egg &amp; dill/cilantro'
            }, {
                range: [ 'eggs' ],
                step: 'Cook sunny-side up'
            }
        ]
    },
    {
        title: 'Dutch Oven No Mai Fan (8 Servings)',
        image: './images/no-mai-fan.jpg',
        url: 'https://www.bonappetit.com/recipe/dutch-oven-no-mai-fan',
        ingredients: [
            '1.5c glutinous rice',
            '1.5c jasmine rice',
            '3 lg shallots, thinly sliced',
            '4 garlic cloves, finely chopped',
            '3 Tbsp veg or grapeseed oil',
            '4 lap cheong (sausage, Kam Yen Jan), chopped',
            '1 lb shiitake mushroom, stem removed, finely chopped',
            '1/4c dark soy sauce (or 4 Tbsp regular soy sauce + 1/2 tsp sugar)',
            '2 Tbsp oyster sauce',
            '3c low sodium chicken broth + salt to taste',
            '1c thawed frozen peas',
            '1/2c packed cliantro leaves',
            '1/2c sliced scallions'
        ],
        steps: [
            {
                range: [ 0, 'jasmine rice' ],
                step: 'Rinse until water runs clear, drain'
            }, {
                range: [ 0, 'low sodium chicken broth + salt to taste' ],
                step: 'Add, stir, boil, simmer on low covered 20-25m'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from heat, stir in, top with more'
            }, {
                range: [ 'shallots', 'shiitake mushroom' ],
                step: 'Combine shallots/garlic/oil in sm dutch oven,<br/>cook med-high, stirring, 3m, add others, cook 3m'
            }
        ]
    },
    {
        title: 'Roasted Brussels Sprouts With Gochujang Brown Butter (8 Servings)',
        image: './images/brussels-sprouts-gochujang.jpg',
        url: 'https://www.bonappetit.com/recipe/roasted-brussels-sprouts-with-gochujang-brown-butter',
        ingredients: [
            '3 lb brussels sprouts, trimmed, halved',
            '2 Tbsp olive oil',
            'Salt & Pepper',
            '1/2c coarsely chopped walnuts',
            '6 Tbsp unsalted butter',
            '1/3c gochujang',
            '2 Tbsp maple syrup',
            'Salt & Pepper',
            '3 scallions, thinly sliced',
            '1/2 lemon',
            'Flaky sea salt'
        ],
        steps: [
            {
                range: [ 0, 'salt & pepper' ],
                step: 'Roast in pan at <b>500&deg;</b> 16-18m, rotating pans<br/>(top/bottom/back/front)'
            }, {
                range: [ 0, -1 ],
                step: 'Combine sprouts, half of walnuts, half scallions, add butter mix,<br/>toss, top w/remaining walnuts/scallions. Finely grate lemon zest<br/>on top and sprinkle w/salt.'
            }, {
                range: [ 'coarsely chopped walnuts' ],
                step: 'Toast in skillet on med, toss often, 4m'
            }, {
                range: [ 'unsalted butter', 'salt & pepper' ],
                step: 'Cook butter in small saucepan on med-low until amber color &amp;<br/>nutty smell, 5-8m, remove from heat, stir in all'
            }
        ]
    },
    {
        title: 'Sheet-Pan Hazelnut Breakfast Tart (9-12 servings)',
        image: './images/hazelnut-breakfast-tart.jpg',
        url: 'https://www.bonappetit.com/recipe/sheet-pan-hazelnut-breakfast-tart',
        ingredients: [
            '17.3oz package frozen puff pastry (2 sheets), thawed',
            '1 lg egg',
            '2c skin-on hazelnuts',
            '6 Tbsp unsalted butter, melted, slightly cooled',
            '1.25c granulated sugar',
            '2 lg egg yolks',
            '2 lg eggs',
            '2 Tbsp unsweetened cocoa powder',
            '1 tsp salt'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Separate, roll 1 into 14x10" on parchment paper, prick in<br/>several places, add to 13x9" pan (using rim to make crust).<br/>Chill, Roll out other sheet to 13x9" size, cool.'
            }, {
                range: [ 0, -1 ],
                step: 'Brush egg onto crust-edges, add mix to middle, place remaining<br/>pastry to top (press sides to seal). Trim &amp; crimp edges. Chill<br/>in freezer 15m. Remove, brush top with egg, cut 1" slits<br/>for venting, bake 30-35m, cool 10m, sprinkle w/sugar.'
            }, {
                range: [ 'egg' ],
                step: 'Beat in small bowl.'
            }, {
                range: [ 'skin-on hazelnuts' ],
                step: 'Toast on pan in <b>350&deg;</b> oven, tossing once, 8-10m, cool,<br/>rub in towel to remove skins. Pulse in food processor to coarse<br/>bits.'
            }, {
                range: [ 'skin-on hazelnuts', -1 ],
                step: 'Add eggs to butter/sugar, whisk 1m, combine all.<br/>Mix into thick paste w/rubber spatula.'
            }, {
                range: [ 'unsalted butter', 'granulated sugar' ],
                step: 'Whisk until slightly fluffy (2m).'
            }
        ]
    },
    {
        title: 'Mango and Avocado Salad (6 Servings)',
        image: './images/mango-avocado-salad.jpg',
        url: 'https://www.bonappetit.com/recipe/mango-and-avocado-salad',
        ingredients: [
            '1/3c olive oil',
            '1/3c fresh blood orange juice',
            '1/4c fresh lime juice',
            '1 Tbsp honey',
            '1.75 tsp salt',
            '1/2 tsp black pepper',
            '1 shallot, finely chopped',
            '2 Tbsp finely chopped cilantro',
            '4 Blood oranges, peel and pith removed, sliced into irregular pieces',
            '2 mangoes, peeled, sliced',
            '2 avocados, peeled, sliced',
            '1c halved cherry tomatoes'
        ],
        steps: [
            {
                range: [ 0, 'finely chopped cilantro' ],
                step: 'Whisk liquids, mix shallot + cilantro in'
            }, {
                range: [ 0, -1 ],
                step: 'Arrange solids, top with dressing'
            }
        ]
    },
    {
        title: 'Creamy Curry Egg Noodle Soup (4 servings)',
        image: './images/curry-egg-noodle-soup.jpg',
        url: 'https://www.bonappetit.com/recipe/creamy-curry-egg-noodle-soup',
        ingredients: [
            '1 lg leek (or 2 med)',
            '2 Tbsp veg oil',
            '5 lg garlic cloves, finely grated',
            '1/4c Thai red curry paste',
            '1 Tbsp 1/2tsp salt',
            '4c low-sodium veg broth',
            '1/3c tahini (ex: Soom)',
            '3 Tbsp honey',
            '1 Tbsp soy sauce',
            '1 Tbsp unseasoned rice vinegar',
            '2c water',
            '1 sm bunch Tuscan kale (de-stemmed and torn)',
            '2 Tbsp unsalted butter',
            '12 oz wide egg noodles'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Trim dark green top, discard, slice whites 1/2" thick, clean<br/>all dirt, dry.'
            }, {
                range: [ 0, '1/2tsp salt' ],
                step: 'Heat oil in pot on med. Cook half the leek 2m (stirring), add all,<br/>stir, cook 2m.'
            }, {
                range: [ 0, 'water' ],
                step: 'Add all, heat high, boil, reduce, cover, simmer 20m.'
            }, {
                range: [ 0, -1 ],
                step: 'Add kale, butter, all leek to pot, simmer 5-7m. Serve by pouring<br/>soup over noodles.'
            }, {
                range: [ 'wide egg noodles' ],
                step: 'Cook to instructions, drain.'
            }
        ]
    },
    {
        title: 'Shrimp and Crispy Rice With Citrus (4 Servings)',
        image: './images/shrimp-crispy-rice-citrus.jpg',
        url: 'https://www.bonappetit.com/recipe/shrimp-and-crispy-rice-with-citrus',
        ingredients: [
            '1c med/long grain white rice',
            '1/4 tsp salt',
            '1 Tbsp olive oil',
            '12 oz mixed citrus (cara cara oranges, blood oranges, grapefruit)',
            '2 garlic cloves, finely grated',
            '2 Tbsp fresh lime juice',
            '2 Tbsp olive oil',
            '1/2 tsp mild chile flakes',
            '1 lb shrimp, peeled, deveined, tails removed',
            '1 Tbsp oil',
            '1 avocado, sliced',
            '1 sm red onion, thinly sliced',
            '3c arugula'
        ],
        steps: [
            {
                range: [ 0, 'salt' ],
                step: 'Rinse, cook rice w/salt and 1.25c water - bring to boil,<br/>cover, heat to low, simmer 15m, turn off heat, fluff'
            }, {
                range: [ 0, 'olive oil' ],
                step: 'Heat oil med-high, add rice, press into even layer,<br/>cook until golden crisp (6-8m)'
            }, {
                range: [ 0, -1 ],
                step: 'Base: rice, add all, top w/dressing and sprinkle w/chile flakes'
            }, {
                range: [ 'mixed citrus', 'mild chile flakes' ],
                step: 'Slice orange in half, grate zest from 1 half to bowl, juice same<br/>half, discard seeds. Slice all other citrus into 1/4" rounds.<br/>Whisk juice with other ingredients.'
            }, {
                range: [ 'shrimp', 'oil' ],
                step: 'Pat dry, season w/salt, heat oil, cook 3m'
            }
        ]
    },
    {
        title: 'Basic Mashed Potatoes (4 Servings)',
        image: './images/mashed-potatoes.jpg',
        url: 'https://www.allrecipes.com/recipe/24771/basic-mashed-potatoes/',
        ingredients: [
            '2 lb potatoes, peeled, quartered',
            '2 Tbsp butter',
            '1c milk',
            'Salt & Pepper to taste'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Boil water, add potatoes, cook 15m until tender'
            }, {
                range: [ 0, -1 ],
                step: 'Whisk together with electric beater until smooth'
            }, {
                range: [ 'butter' ],
                step: 'Melt'
            }
        ]
    },
    {
        title: 'Pad Krapow Gai 2 (2 Servings)',
        image: './images/pad-krapow-gai-2.jpg',
        url: 'https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/',
        ingredients: [
            '1/3c chicken broth',
            '1 Tbsp oyster sauce',
            '1 Tbsp soy sauce',
            '2 tsp fish sauce',
            '1 tsp white sugar',
            '1 tsp brown sugar',
            '2 Tbsp veg oil',
            '1 lb skinless, boneless chicken thighs, coarsely chopped',
            '1/4c sliced shallots',
            '4 cloves garlic, minced',
            '2 Tbsp minced Thai chilies (or Serrano)',
            '1c thinly sliced Thai basil leaves',
            '2c hot cooked rice'
        ],
        steps: [
            {
                range: [ 0, 'brown sugar' ],
                step: 'Whisk'
            }, {
                range: [ 0, 'minced thai chilies' ],
                step: 'Add, cook 1-2m'
            }, {
                range: [ 0, -1 ],
                step: 'Remove from heat, add basil, cook 20s, serve on rice'
            }, {
                range: [ 'veg oil', 'minced thai chilies' ],
                step: 'Heat oil on high, add chicken, cook 2-3m, add all, cook 2-3m,<br/>add 1 Tbsp of sauce mix, cook 1m'
            }
        ]
    },
    {
        title: 'Biscuits and Gravy (8 servings)',
        image: './images/biscuits-and-gravy.jpg',
        url: 'https://www.allrecipes.com/recipe/216391/easy-sausage-gravy-and-biscuits/',
        ingredients: [
            '16oz can biscuits',
            '9.6oz package sausage',
            '1/4c flour',
            '2.5c milk',
            'Salt & Pepper'
        ],
        steps: [
            {
                range: [ 0 ],
                step: 'Cook to package'
            }, {
                range: [ 0, -1 ],
                step: 'Top biscuits w/mix, season w/S&amp;P'
            }, {
                range: [ 'package sausage', 'milk' ],
                step: 'Cook sausage 5-6m, add flour, gradually add milk, cook to boil,<br/>lower heat, simmer 2m.'
            }
        ]
    },
    {
        title: 'Roast Salmon w/Citrus and Coconut-Chile Crunch (4 Servings)',
        image: './images/salmon-citrus-coconut-chile.jpg',
        url: 'https://www.bonappetit.com/recipe/roast-salmon-with-citrus-and-coconut-chile-crunch',
        ingredients: [
            '1.5 lb boneless salmon fillet, skinless',
            'Salt',
            '1 Tbsp olive oil',
            '2 fresno chiles (or other), thinly sliced',
            '1" piece ginger, peeled, finely chopped',
            '1c unsweetened coconut flakes',
            '1/2c unsalted roasted peanuts',
            '5 Tbsp olive oil',
            '2.25 lb citrus (grapefruit, oranges, etc)',
            '3 Tbsp white balsamic vinegar / rice vinegar',
            'Flaky sea salt'
        ],
        steps: [
            {
                range: [ 0, 'olive oil' ],
                step: 'Dry salmon, season w/salt, heat oil, cook salmon (skin down)<br/>6-8m, transfer to oven at <b>350&deg;</b> 8-12m'
            }, {
                range: [ 0, -1 ],
                step: 'Add vinegar and salt to chile/coconut mix<br><br/>Base: Salmon, topped with citrus, drizzled with chile mix'
            }, {
                range: [ 'fresno chiles (or other)', 'olive oil' ],
                step: 'Cook in saucepan on med, stir, 8-10m, cool'
            }, {
                range: [ 'citrus' ],
                step: 'Cut skin/pith away, cut into irregular wedges'
            }
        ]
    },
    {
        title: 'Stir-Fried Garlic Green Beans (4 servings)',
        image: './images/garlic-green-beans.jpg',
        url: 'https://cooking.nytimes.com/recipes/1019217-stir-fried-garlic-green-beans',
        ingredients: [
            '1 lb green beans, trimmed',
            'Salt (to taste)',
            '1 Tbsp soy sauce',
            '1 Tbsp chinese rice wine or dry sherry',
            '1 Tbsp minced garlic',
            '1 Tbsp minced fresh ginger',
            '1/4 tsp red pepper flakes',
            '1 Tbsp peanut or canola oil'
        ],
        steps: [
            {
                range: [ 'beans', 'salt' ],
                step: 'Boil water, season w/S&amp;P, add beans. Boil 1m, drain/rinse, dry w/towel.'
            }, {
                range: [ 'soy', 'wine' ],
                step: 'Combine'
            }, {
                range: [ 'garlic', 'pepper' ],
                step: 'Combine'
            }, {
                range: [ 0, -1 ],
                step: 'Heat 14&quot; wok w/high-heated oil, swirl, add garlic/ginger 10s, toss, add soy/wine, fry 1-2m.'
            }
        ]
    },
    {
        title: 'Sheet Pan Chow Mein (4 Servings)',
        image: './images/sheet-pan-chow-mein.jpg',
        url: 'https://www.washingtonpost.com/food/2022/01/12/sheet-pan-chow-mein-recipe/',
        ingredients: [
            '1 bell pepper, thinly sliced',
            '1 carrot, scrubbed, thinly diagonally sliced',
            '1 broccoli head, cut to florets',
            '1 Tbsp toasted sesame oil',
            'Splash Olive Oil',
            'Fine salt',
            '9 oz dried thin egg noodles',
            '8.8 oz can cut baby corn, drained',
            '5 oz asparagus, trimmed, cut into 2" pieces',
            '1 scallion, thinly sliced',
            'Handful fresh cilantro leaves',
            '2 Tbsp toasted white sesame seeds',
            '1 Tbsp toasted sesame oil',
            '1/4c soy sauce',
            '1 Tbsp vegetarian stir-fry sauce (optional)',
            '1/4 tsp ground white pepper',
            '1 sm garlic clove, minced/grated'
        ],
        steps: [
            {
                range: ['bell pepper', 'salt'],
                step: 'Toss on pan, cook <b>400&deg;</b> 10m'
            }, {
                range: ['egg noodles'],
                step: 'Cook until al dente, 4-5m'
            }, {
                range: [-5, -1],
                step: 'Whisk together'
            }, {
                range: ['bell pepper', 'asparagus'],
                step: 'Move veggies to side of pan, add all to other side. Roast 15-18m.'
            }, {
                range: [0, -1],
                step: 'Top with sauce, scatter scallion / cilantro / sesame seeds on top.'
            }
        ]
    },
    {
        title: 'Green Chile Shrimp Scampi With Spaghetti (4 servings)',
        image: 'images/green-chile-shrimp-scampi.jpg',
        url: 'https://www.bonappetit.com/recipe/green-chile-shrimp-scampi-with-spaghetti',
        ingredients: [
            '10 oz spaghetti',
            'Salt',
            '1 lb shrimp, peeled, deveined, tails on',
            'Salt',
            '2 Tbsp olive oil',
            '2 Tbsp extra olive oil',
            '1 jalapeno, seeds (maybe) removed, thinly sliced',
            '4 garlic cloves, thinly sliced',
            '3 4oz cans diced green chiles',
            'Salt and freshly ground black pepper',
            '1/3c fresh lemon juice',
            '2 tsp finely grated lemon zest',
            '6 Tbsp unsalted butter',
            'Chopped Parsley',
            'Extra Lemon Zest'
        ],
        steps: [
            {
                range: [ 'spaghetti', 'salt' ],
                step: 'Cook, drain, reserve 1/4 c pasta water'
            }, {
                range: [ 'shrimp', 'oil' ],
                step: 'Pat dry, season w/salt, heat oil, cook 1m per side, remove'
            }, {
                range: [ 'extra olive oil', 'lemon juice' ],
                step: 'Add oil to shrimp skillet,<br/>cook jalapeno/garlic 1m,<br/>add chiles/salt/pepper, cook 2m,<br/>Add juice, cook 1m'
            }, {
                range: [ 'spaghetti', 'butter' ],
                step: 'Add all and pasta water, melt butter, cook 2m'
            }, {
                range: [ 0, -1 ],
                step: 'Season w/salt and pepper, top w/parsley and zest'
            }
        ]
    },
    {
        title: 'Roasted Roots With Green Salsa (4 servings)',
        image: './images/roasted-roots-green-salsa.jpg',
        url: 'https://www.bonappetit.com/recipe/roasted-root-vegetables-with-green-salsa',
        ingredients: [
            '3 med sweet potatoes (~2lb), scrubbed, cut to 1/2" wedges',
            '8 sm carrots (w/tops) (~1lb), scrubbed',
            '5 scallions, roots trimmed',
            'Drizzle of Olive Oil',
            'Salt and Pepper',
            '1 Tbsp Olive Oil',
            'Salt and Pepper',
            '8 sm carrot tops, coarsely chopped (~1/2c)',
            '8 oz tomatillos (~5), husks removed, rinsed, coarsely chopped (~2c)',
            '1-2 green chiles (ex: serrano/jalapeno), finely chopped',
            '1/4 c fresh lime juice',
            'Cotija cheese, ricotta salata, or feta'
        ],
        steps: [
            {
                range: [ 'potatoes', 'pepper' ],
                step: 'Toss on pan, roast <b>450&deg;</b> 15-25m (to brown)'
            }, {
                range: [ '1 tbsp olive oil', 'lime juice' ],
                step: 'Toss in bowl'
            }, {
                range: [ 0, -1 ],
                step: 'Cut charred scallion to sm pieces, add to salsa, stir. Serve: Potatoes/carrots, topped w/salsa and cheese.'
            }
        ]
    },
    {
        title: 'Red Lentil Soup With Preserved Lemon and Crispy Garlic (4-6 servings)',
        image: 'images/lentil-soup-lemon-garlic.jpg',
        url: 'https://www.bonappetit.com/recipe/red-lentil-soup-with-preserved-lemon',
        ingredients: [
            '2 Tbsp extra-virgin olive oil',
            '2 med onions, chopped',
            '4 garlic cloves, finely chopped',
            '2" piece ginger, scrubbed, finely chopped',
            '2 tsp ground cumin',
            '0.75 tsp ground turmeric',
            'Ground black pepper',
            '0.5 preserved lemon, rinsed, seeds removed, finely chopped',
            '3 Tbsp double-concentrated tomato paste',
            '8c veg or chicken broth',
            '2c red lentils, rinsed',
            '2 Tbsp olive oil',
            '4 garlic cloves, thinly sliced',
            'Kosher salt',
            '1 tsp Aleppo-style pepper',
            '1c torn mixed tender herbs (basil, dill, cilantro, and/or parsley)',
            '1/2 preserved lemon, rinsed, seeds removed, finely chopped'
        ],
        steps: [
            {
                range: ['olive oil', 'ginger'],
                step: 'Heat oil, add, stir, cook 6-8m'
            }, {
                range: ['olive oil', 'paste'],
                step: 'Add all, stir to coat, heat until darkened (4m)'
            }, {
                range: ['olive oil', 'lentils'],
                step: 'Add, boil, med-low heat, partially cover, simmer 35-45m.'
            }, {
                range: ['2 Tbsp olive oil', 'aleppo'],
                step: 'Heat oil, fry garlic 3m, remove garlic (but not oil), season garlic w/pepper'
            }, {
                range: ['olive oil', -1],
                step: 'Add herbs, lemon, top w/garlic chips and drizzle oil'
            }
        ]
    },
    {
        title: 'Buttered Potatoes With Salted Lemon (4 servings)',
        image: 'images/potato-lemon.jpg',
        url: 'https://www.bonappetit.com/recipe/buttered-potatoes-with-salted-lemon',
        ingredients: [
            '2 lb small waxy potatoes',
            'Kosher salt',
            '1 preserved lemon, seeds removed, finely shopped + 2 Tbsp+ brine',
            '1/2c (1 stick) butter, cut to pieces',
            '1 sm bunch chives / 3 scallions, thinly silced',
            '1c coarsely chopped dill',
            'Freshly ground black pepper'
        ],
        steps: [
            {
                range: ['potatoes', 'salt'],
                step: 'Boil salted water, add potatoes for 10-15m. Drain, cool 10m. Crush potatoes w/hands, transfer to bowl.'
            }, {
                range: ['potatoes', 'black pepper'],
                step: 'Toss all together in a bowl.'
            }
        ]
    },
    {
        title: 'Big Shell With Spicy Lamb Sausage and Pistachios (4 servings)',
        image: 'images/shells-lamb-pistachios.jpg',
        url: 'https://www.bonappetit.com/recipe/big-shells-with-spicy-lamb-sausage-and-pistachios',
        ingredients: [
            '3 Tbsp olive oil',
            '1 lb spicy lamb / hot italian pork sausage (casings removed)',
            '1 bunch broccoli rabe, stems trimmed/removed, rest coarsley chopped',
            'Kosher salt',
            '4 garlic cloves, thinly sliced',
            'Freshly ground black pepper',
            '12 oz jumbo shells or paccheri (Cook 1m less than package instructions, drain, reserve 1.5c liquid)',
            '4 Tbsp unsalted butter, cut',
            '1 tsp finely grated lemon zest',
            '2 Tbsp fresh lemon juice',
            '1/3c coarsely chopped raw pistachios',
            'Finely grated Parmesan (for serving)'
        ],
        steps: [
            {
                range: ['oil', 'lamb'],
                step: 'Add golf-ball sized clumps to med-high oiled dutch oven. Cook to golden, 4m each. Remove each to plate. Leave at least 2 Tbsp oil in pan.'
            }, {
                range: ['oil', 'black pepper'],
                step: 'Add garlic, cook 2m, add broccoli (season w/S&amp;P) 4m (to wilted). Return sausage to pot, break up.'
            }, {
                range: ['oil', 'butter'],
                step: 'Add, toss, add 3/4c pasta cooking liquid (more if needed slowly), cook 3m.'
            }, {
                range: [0, -1],
                step: 'Remove from heat, add lemon zest, juice, toss. Top w/pistachios &amp; Parmesan'
            }
        ]
    },
    {
        title: 'Fried Lemon and Radish Salad (6 servings)',
        image: 'images/lemon-radish-salad.jpg',
        url: 'https://www.bonappetit.com/recipe/fried-lemon-and-radish-salad',
        ingredients: [
            '2 med. shallots, thinly sliced',
            '1/4c sherry vinegar or red wine vinegar',
            '2 Tbsp fresh lemon juice',
            '1 Tbsp + 1.5 tsp finely chopped drained capers',
            '1 Tbsp dijon mustard',
            '1 tsp honey',
            '3/4c olive oil',
            'Salt and Ground Pepper',
            '1/2c raw pistachios (Toast 4m, coarsely chop.)',
            '1 lg lemon',
            'Salt',
            '1/4c olive oil',
            'Flaky sea salt',
            '3 oz tender salad greens',
            '2c coarsely chopped parsley leaves w/tender stems',
            '1c mint leaves, torn if large',
            '1 bunch red radishes, trimmed, thinly sliced'
        ],
        steps: [
            {
                range: ['shallots', 'ground pepper'],
                step: 'Whisk all but oil/S&amp;P, wait 10m-1hr, whisk the rest. Store up to 2 days in fridge.'
            }, {
                range: ['lg lemon', 'salt'],
                step: 'Thinly slice, remove seeds, cook slices in med saucepan of boiling salted water 2m, remove, pat dry.'
            }, {
                range: ['lg lemon', 'flaky sea salt'],
                step: 'Heat oil, fry each slice 5m, move to towel, add sea salt. Set a few aside, chop the rest.'
            }, {
                range: [0, -1],
                step: 'Add greens, some dressing, chopped lemon, toss. Top w/pistachios and lemon slices. Serve remaining dressing on side.'
            }
        ]
    },
    {
        title: 'Charred Asparagus and Dates with Goat Cheese (4 servings)',
        image: 'images/asparagus-dates.jpg',
        url: 'https://www.bonappetit.com/recipe/charred-asparagus-and-dates-with-goat-cheese',
        ingredients: [
            '2 watermelon radshes or 3 red radishes, trimmed, thinly sliced',
            'Zest and juice of 1 lemon',
            '1/2 tsp salt',
            '1 Tbsp olive oil',
            '1 bunch asparagus (~1lb), trimmed',
            '1 tsp black pepper',
            '1/4 tsp crushed red pepper flakes',
            '1 Tbsp olive oil (remaining)',
            '8 Medjool dates, pitted, halved lengthwise',
            '3 oz fresh goat cheese',
            '2 Tbsp coarsely chopped mint'
        ],
        steps: [
            {
                range: ['radishes', 'salt'],
                step: 'Toss, set aside.'
            }, {
                range: ['oil', 'red pepper flakes'],
                step: 'Cook in single layer (batches) to char unerside (~2m per asparagus), shake, continue (4m). Top w/seasoning, transfer to plate.'
            },  {
                range: ['(remaining)', 'dates'],
                step: 'Cook in same pan after asparagus, until charred (~3m).'
            }, {
                range: [0, -1],
                step: 'Top asparagus w/dates, crumbled cheese, mint, radishes, drizzle oil and liquid from radish bowl.'
            }
        ]
    },
    {
        title: 'Gochujang-Sesame Noodles (4 servings)',
        image: 'images/gochujang-sesame-noodles.jpg',
        url: 'https://www.bonappetit.com/recipe/gochujang-sesame-noodles',
        ingredients: [
            '8-10oz fresh/dried wheat noodles (lo mein/udon/ramen/etc)',
            'Kosher salt',
            '1/4c gochujang',
            '3 Tbsp soy sauce',
            '2 Tbsp light or dark brown sugar',
            '2 Tbsp tahini',
            '2 tsp toasted sesame oil',
            '2 Tbsp water',
            '2 Tbsp veg oil',
            '1 bunch broccoli rabe, coarsely choppd',
            '4 garlic cloves, finely chopped',
            'Salt and Black Pepper',
            'Handful torn basil leaves, plus sprigs for serving',
            'Toasted sesame seeds and lime wedges (for serving)'
        ],
        steps: [
            {
                range: ['noodles', 'salt'],
                step: 'Cook to package, drain and rinse.'
            }, {
                range: ['gochujang', 'water'],
                step: 'Whisk, set aside.'
            }, {
                range: ['veg oil', 'pepper'],
                step: 'Heat oil, fry all ~2m'
            }, {
                range: [0, -1],
                step: 'Add sauce, cook to thicken (~2m), add noodles, cook ~1m, top w/sesame seeds, basil, lime'
            }
        ]
    },
    {
        title: 'Stir-Fried Udon Noodles with Pork and Scallions (4 servings)',
        image: 'images/udon-pork-scallions.jpg',
        url: 'https://www.bonappetit.com/recipe/stir-fried-udon-with-pork',
        ingredients: [
            '1 Tbsp veg oil',
            '4c coarsely chopped green cabbage (from 1/4 med head)',
            '2 7oz package instant udon noodles, flavor packs discarded',
            '2 tsp toasted sesame oil',
            '1 Tbsp veg oil',
            '8 oz ground pork',
            '5 scallions, white/green parts coarsely chopped, dark-green parts thinly sliced',
            '2 tsp finely grated fresh ginger (from 1" knob)',
            '1 tsp crushed red pepper flakes',
            '1/3c mirin',
            '1/3c soy sauce',
            '1 Tbsp toasted sesame seeds, plus more for serving'
        ],
        steps: [
            {
                range: ['oil', 'cabbage'],
                step: 'Heat oil, cook med-high ~4m (to browned), cook on low ~4m (to tender), remove.'
            }, {
                range: ['oil', 'sesame oil'],
                step: 'Add noodles to pot w/6c boiling water. Sit 1m. Stir, drain, add back to pot and toss w/oil. Add cabbages.'
            }, {
                range: [4, 'red pepper'],
                step: 'Heat oil med-high, add pork, spread evenly, cook UNTOUCHED ~3m. Break up, cook until no pink. Add whites of scallions, ginger, pepper, cook ~1m.'
            }, {
                range: [0, -1],
                step: 'Add all (but sesame seeds), toss, cook ~45s. Remove from heat, add scallion greens and sesame seeds, mix.'
            }
        ]
    },
    {
        title: 'Salmon (From Frozen) (2 Servings)',
        image: 'images/frozen-salmon.jpg',
        url: 'https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-to-cook-salmon-from-frozen',
        ingredients: [
            '2 Frozen Salmon filets',
            'Spray veg oil',
            'Salt and Pepper',
            'Lemon Juice',
            '4 Lemon slices'
        ],
        steps: [
            {
                range: ['salmon', 'veg'],
                step: 'Add foil to smallest pan. Spray foil w/oil. Add salmon. Heat <b>450&deg;F</b> for 8m.'
            }, {
                range: ['salmon', -1],
                step: 'Remove from oven, spray salmon w/oil. Drip some lemon juice on each, top w/S&amp;P. Add 2 lemon slices per filet. Put back in oven 12m.'
            }
        ]
    },
    {
        title: 'Kimchi Fried Rice With Broccoli (4 servings)',
        image: 'images/kimchi-fried-rice.jpg',
        url: 'https://www.bonappetit.com/recipe/kimchi-fried-rice-with-broccoli',
        ingredients: [
            '1 lg head of broccoli (~1lb): chopped 1" florets, 1" stem coins.',
            '1 Tbsp veg oil',
            'Salt',
            '6 scallions: dark greens (1" pieces)',
            '6 scallions: whites (thinly sliced)',
            '1c (packed) Napa cabbage kimchi (+serving) (squeezed dry, coarsely chopped)',
            '1 Tbsp veg oil',
            '4 garlic cloves, finely chopped',
            '2" piece ginger, scrubbed, finely chopped',
            '4c chilled cooked rice (jasmine)',
            '1 Tbsp veg oil',
            '1 Tbsp toasted sesame oil',
            '1/4c soy sauce/tamari (+serving)',
            '4 lg eggs, fried',
            'Sesame seeds (serving)',
            'Freshly ground black pepper'
        ],
        steps: [
            {
                range: ['broccoli', 'scalions: dark'],
                step: 'Heat med-high, add, cook unti char, ~5m, stir, cook ~1m. Transfer to plate.'
            }, {
                range: ['scallions: whites', 'ginger'],
                step: 'Fry until aromatic, ~2m. Push to side of pan.'
            }, {
                range: ['scallions: whites', 'soy'],
                step: 'Add to pan w/aromatics. Toss together, press into even layer. Cook, undisturbed, until crip, ~5m.'
            }, {
                range: [0, -1],
                step: 'Add reserved broccoli mix, heat through, ~2m. Season w/salt. Top w/fried egg, sesame seeds, more kimchi, pepper. Season egg w/soy sauce.'
            }
        ]
    },
    {
        title: 'Nutty Umami Noodles With Scallion Brown Butter and Snow Peas (4-6 servings)',
        image: 'images/nutty-umami-noodles.jpg',
        url: 'https://www.bonappetit.com/recipe/nutty-umami-noodles-with-scallion-brown-butter-and-snow-peas',
        ingredients: [
            '16oz fresh or dried wheat noodles (ex: lo mein, udon, ramen)',
            '1/3c oyster sauce',
            '1/3c+ soy sauce',
            '1 Tbsp + 1.5tsp unseasoned rice vinegar',
            '1 Tbsp sugar',
            '1/2c (1 stick) unsalted butter',
            '6 scallions: whites (thinly sliced)',
            '4 garlic cloves (finely chopped)',
            '8oz snow peas',
            '3/4 tsp mild chile flakes (+serving)',
            '6 scallions: dark greens (thinly slilced)'
        ],
        steps: [
            {
                range: ['noodles'],
                step: 'Cook to package. Drain, reserve 1c liquid.'
            }, {
                range: ['oyster', 'sugar'],
                step: 'Whisk, set aside'
            }, {
                range: ['butter', 'scallions: whites'],
                step: 'Cook on med-high until browning, ~4m'
            }, {
                range: ['butter', 'chile flakes'],
                step: 'Add all, cook til butter is amber, ~1m'
            }, {
                range: [0, -1],
                step: 'Combine (except scallion greens), including 1/4c noodle liquid, cook, tossing, add more liquid if needed, ~1m. Top w/scallion tops and chile flakes.'
            }
        ]
    },
    {
        title: 'Instant Pot Chicken Cacciatore',
        image: 'images/chicken-cacciatore.jpg',
        url: 'https://www.washingtonpost.com/recipes/instant-pot-chicken-cacciatore/',
        ingredients: [
            '6 bone-in, skin-on chicken thighs (3-4lbs)',
            'Salt',
            'Black Pepper',
            '2 Tbsp olive oil',
            '1 med yellow onion, (thinly sliced)',
            '1 yellow/red bell pepper (thinly sliced)',
            '2 cloves garlic, thinly sliced',
            '1/3c dry white wine (or low-sodium broth)',
            '14.5oz can whole peeled tomatoes (coarsely chopped)'
        ],
        steps: [
            {
                range: ['chicken', 'oil'],
                step: 'Pat dry, season both sides. SAUTE oil 3m, cook chicken skin-down to brown (5-7m, in batches)'
            }, {
                range: ['chicken', 'tomatoes'],
                step: 'Remove chicken, stir in onions, cook 5m. Add bell pepper & garlic, cook 1-2m. Stir in wine, return chicken (skin up), top w/tomatoes. Cook high-pressure 9m, 0m NR. Remove chicken, maybe SAUTE sauce to thicken, add S&P. Top chicken w/sauce.'
            }
        ]
    },
    {
        title: 'Chicken and Herb Salad with Nuoc Cham (4 Servings)',
        image: 'images/chicken-herb-salad-nuoc-cham.jpg',
        url: 'https://cooking.nytimes.com/recipes/1022445-chicken-and-herb-salad-with-nuoc-cham',
        ingredients: [
            '2 Tbsp sugar',
            '1 garlic clove (minced)',
            '1 bird\'s eye chile, minced w/seeds',
            '1/4c lime juice (2 limes)',
            '3 Tbsp fish sauce',
            '3c rotisserie chicken (chopped)',
            '2c red/green cabbage (thinly slice)',
            '1 sm English cucumber (thinly slice)',
            '1 med bell pepper (thinly sliced)',
            '1.5c arugula (or other)',
            '1c Thai basil leaves',
            '1c mint leaves',
            '1/2c fried shallots/onions'
        ],
        steps: [
            {
                range: ['sugar', 'fish sauce'],
                step: 'In bowl, whisk sugar + water. Add remaining, stir.'
            }, { 
                range: ['chicken', 'mint leaves'],
                step: 'Mix in large bowl'
            }, {
                range: [0, -1],
                step: 'Toss to coat, garnish w/shallots'
            }
        ]
    },
    {
        title: 'Jammy Onion and Miso Pasta (4 Servings)',
        image: 'images/jammy-onion-miso-pasta.jpg',
        url: 'https://www.bonappetit.com/recipe/jammy-onion-and-miso-pasta',
        ingredients: [
            '2 Tbsp olive oil',
            '2 Tbsp butter',
            '2 lg onions, thinly sliced',
            'salt',
            '4 garlic cloves, thinly sliced',
            '1 Tbsp white miso',
            '1c beef/chicken broth (or water)',
            'Ground black pepper',
            '12oz spaghetti, cooked al dente (1m less than package says)',
            '1/2c pasta cooking liquid',
            '1 Tbsp butter',
            '2.5oz Parmesan (fine grated)',
            '0.25c 1.5"-long chives'
        ],
        steps: [
            {
                range: ['oil', 'salt'],
                step: 'Heat oil/butter, add onions/salt, cook 10-14m'
            }, {
                range: ['oil', 'garlic'],
                step: 'Cook 1m'
            }, {
                range: ['oil', 'miso'],
                step: 'Add, cook until brown (1-2m)'
            }, {
                range: ['oil', 'pepper'],
                step: 'Add, cook until miso dissolves (1-2m), add pepper, heat on low'
            }, {
                range: [0, -1],
                step: 'Combine, cook 2m, top with chives, more parmesan, salt+pepper'
            }
        ]
    },
    {
        title: 'Cheesy Pork and Tomatillo Skillet (4 Servings)',
        image: 'images/cheesy-pork-tomatillo-skillet.jpg',
        url: 'https://www.bonappetit.com/recipe/cheesy-pork-tomatillo-skillet',
        ingredients: [
            '1lb ground pork',
            '1tsp salt',
            '1 tsp ground cumin',
            '1 tsp smoked paprika',
            '2 Tbsp olive oil',
            '1 sm red onion, thin-sliced',
            '4 garlic cloves, thin-sliced',
            '1 lg poblano chile, ribs/seeds removed, thin-sliced',
            '3 med tomatillos, husks removed, rinsed, coarse-chopped',
            '2 4oz cans diced green chiles',
            '1c water',
            '8 oz pepper jack cheese, coarse-grated',
            'cliantro leaves and tortilla chils (for topping/serving)'
        ],
        steps: [
            {
                range: ['pork', 'paprika'],
                step: 'Mix in bowl w/hands'
            }, {
                range: ['pork', 'oil'],
                step: 'Cook 3m undisturbed (browning bottom). Stir while cooking 2m more. Remove meat.'
            }, {
                range: ['pork', 'garlic'],
                step: 'Cook in empty pan 3m'
            }, {
                range: ['pork', 'tomatillos'],
                step: 'Add, Cook 1m'
            }, {
                range: ['pork', 'water'],
                step: 'Add, stir up brown bits, cook 7-9m (until soft). Remove pan from heat.'
            }, {
                range: [0, -1],
                step: 'Add all cooked to skillet, top w/cheese, broil 3m. Top w/cilantro, serve w/chips.'
            }
        ]
    },
    {
        title: 'Stir-Fried Eggplant with Basil & Chiles (2 servings)',
        image: 'images/fried-eggplant-basil-chiles.jpg',
        url: 'https://www.bonappetit.com/recipe/stir-fried-eggplant-with-pork',
        ingredients: [
            '3 med Japanese/Chinese eggplants (~12oz)',
            '2 Tbsp olive oil',
            '1 Tbsp olive oil',
            '1/4 lb ground pork/chicken/tempeh/tofu',
            '3 garlic cloves, thin-sliced',
            '1 tsp toasted sesame seeds',
            '1/2c basil leaves + more for serving',
            '2 red chiles (cayenne, fresno, jalapeno), fine-chopped',
            '1 Tbsp honey',
            'Pinch salt',
            '2 Tbsp unseasoned rice vinegar',
            '2 tsp tamari/soy sauce'
        ],
        steps: [
            {
                range: ['chiles', 'tamari'],
                step: 'mix'
            }, {
                range: ['eggplants', 'oil'],
                step: 'Slice into 3" rounds, quarter-lengthwise, cook 6-8m, move to plate'
            }, {
                range: ['eggplants', 'pork'],
                step: 'Add extra oil to pan, cook pork 2m'
            }, {
                range: ['eggplants', 'sesame'],
                step: 'Add, cook 1m'
            }, {
                range: ['eggplants', 'basil'],
                step: 'Add, cook 2-3 min to wilt'
            }, {
                range: ['eggplants', 'tamari'],
                step: 'Add eggplant back, add 1/2 chile sauce, cook 1-2m. Turn off heat, add remaining sauce, top w/more basil.'
            }
        ]
    }, {
        title: 'One-Pot Salmon and Shiitake Rice (4 Servings)',
        image: 'images/one-pot-salmon-shiitake.jpg',
        url: 'https://www.bonappetit.com/recipe/one-pot-salmon-and-shiitake-rice',
        ingredients: [
            '2c white rice (rinsed)',
            '1/4c quinoa',
            '1 Tbsp mirin or sake',
            '2.5c water',
            '2 tsp soy sauce',
            '5oz Shiitake mushrooms (thin sliced)',
            '4-6oz skinless salmon fillets',
            'Salt',
            '2 Tbsp rice vinegar',
            '1 Tbsp toasted sesame oil',
            '2.5 scallions (thin sliced)',
            '3 Tbsp soy sauce',
            '2.5 scallions (thin sliced)'
        ],
        steps: [
            {
                range: ['rice', 'soy'],
                step: 'Stir in rice cooker'
            }, {
                range: ['rice', 'salt'],
                step: 'Add mushrooms on top, then salmon, season, ' +
                    'make rice (5m heat / 15m simmer / 20m off heat w/lid on).'
            }, {
                range: ['rice vinegar', 'soy sauce'],
                step: 'mix, set aside'
            }, {
                range: [0, -1],
                step: 'Mix scallions into rice, serve w/dressing on side'
            }
        ]
    }, {
        title: 'Basil Fried Rice (4 Servings)',
        image: 'images/basil-fried-rice-2024.jpg',
        url: 'https://www.bonappetit.com/recipe/basil-fried-rice',
        ingredients: [
            '1 large bunch basil',
            '4 lg eggs',
            'Salt',
            '2 Tbsp veg oil',
            '3 garlic cloves, finely grated',
            '2" ginger, finely grated',
            '1 Fresno/serrano chile, finely chopped',
            '1/3c crispy fried onions/shallots',
            '3c chilled day-old rice',
            '3 Tbsp soy sauce',
            '2 Tbsp sesame oil'
        ],
        steps: [
            {
                range: ['basil'],
                step: 'Pluck 2c leaves, chop 1 Tbsp stems'
            }, {
                range: ['basil', 'salt'],
                step: 'Beat eggs, add salt and 1c leaves'
            }, {
                range: ['oil', 'crispy'],
                step: 'Heat oil, mix all + basil stems, cook 1m'
            }, {
                range: ['oil', 'sesame oil'],
                step: 'Add rice, cook 3m, Add sauce/oil, cook 2m'
            }, {
                range: [0, -1],
                step: 'Add egg, cook 2m, add all remaining basil, serve'
            }
        ]
    }, {
        title: 'Five Spice Chicken (4 Servings)',
        image: 'images/five-spice-chicken.jpg',
        url: 'https://www.cooking-therapy.com/five-spice-chicken/',
        ingredients: [
            '2 lb chicken thighs',
            '1/2 tsp salt',
            '1 tsp five spice powder',
            '1 tbsp fish sauce',
            '1 tbsp rice wine vinegar',
            '1 tbsp soy sauce',
            '2 tsp coconut sugar',
            '1 tbsp brandy (optional)',
            '2 cloves garlic (minced)',
            'Cucumbers (sliced)'
        ],
        steps: [
            {
                range: ['salt', 'garlic'],
                step: 'Whisk together'
            }, {
                range: [0, 'garlic'],
                step: 'Add all to bag, shake, marinate 15m. ' +
                    'Sear chicken in pan on high, 5m. ' +
                    'Bake at <b>400&deg;F</b> 30-35m (to internal temp 165&deg;F)'
            }, {
                range: [0, -1],
                step: 'Serve on rice w/cucumbers.'
            }
        ]
    }, {
        title: 'The Amazing Pea Puree (4 Servings)',
        image: 'images/amazing-pea-puree.jpg',
        url: 'https://familymealblog.com/2014/04/02/the-amazing-pea-puree/',
        ingredients: [
            '6 cloves garlic, whole',
            'salt',
            '2.5c frozen peas',
            '4 Tbsp butter',
            'salt & pepper',
            '1/4c heavy cream',
        ],
        steps: [
            {
                range: ['garlic', 'salt'],
                step: 'Bring to boil water w/cloves, boil 5m'
            }, {
                range: [0, 'peas'],
                step: 'Add Peas, Boil until tender, transfer peas and garlic to food processor'
            }, {
                range: [0, -1],
                step: 'Add butter and S&amp;P, pulse to smooth, drizzle heavy cream while running'
            }
        ]
    }, {
        title: 'Elote-Style Corn Soup (4-6 servings)',
        image: 'images/elote-style-corn-soup.jpg',
        url: 'https://www.bonappetit.com/recipe/elote-style-corn-soup',
        ingredients: [
            '2 Tbsp olive oil',
            '2 Tbsp unsalted butter',
            '1/2 tsp chili powder',
            '1 med. onion, finely chopped',
            '5 garlic cloves, finely chopped',
            'Ground pepper',
            '1 lg potato, peeled, cut into 0.5" pieces',
            '4c chicken broth',
            '8oz fire-roasted frozen corn',
            '1c whole milk',
            '4oz fire-roasted frozen corn',
            '2 tsp small salt (or 1.25 tsp large)',
            'Crumbled cotija cheese',
            'Cilantro (chopped)',
            'Lime Wedges'
        ],
        steps: [
            {
                range: [0, 'butter'],
                step: 'Heat to melt'
            }, {
                range: [0, 'pepper'],
                step: 'Add chili powder, cook 30s, Add onion/garlic, cook ~3m. Add S&amp;P.'
            }, {
                range: [0, 'frozen corn'],
                step: 'Add all, bring to boil, simmer (partially covered) 12-14m'
            }, {
                range: [0, 'milk'],
                step: 'Add, ladle half soup into blender, blend to smooth, put back.'
            }, {
                range: [0, 'small salt'],
                step: 'Add corn/salt, season w/pepper, heat 5m'
            }, {
                range: [0, -1],
                step: 'Top w/cheese &amp; cilantro, serve w/lime'
            }
        ]
    }, {
        title: 'Shrimp Scampi with Linguini (4-6 servings)',
        image: 'images/shrimp-scampi-with-linguini.jpg',
        url: 'https://www.foodnetwork.com/recipes/tyler-florence/shrimp-scampi-with-linguini-recipe2-1946075',
        ingredients: [
            '1lb linguini',
            'salt',
            '2 Tbsp butter',
            '2 Tbsp olive oil',
            '1 lg shallot, finely diced',
            '5 cloves garlic, sliced',
            'Pinch red pepper flakes (optional)',
            '20 lg shrimp (~1lb), peeled/tail on, seasoned w/S&P',
            '1/2c dry white wine',
            '1 lemon, juiced',
            '2 Tbsp butter',
            '2 Tbsp olive oil',
            '1/4c finely chopped parsley'
        ],
        steps: [
            {
                range: [0, 'salt'],
                step: 'Boil salted water, add linguini, cook 6-8m, reserve 1c water'
            }, {
                range: ['butter', 'flakes'],
                step: 'Melt butter/oil, add all, cook 3-4m'
            }, {
                range: ['butter', 'shrimp'],
                step: 'Add S&amp;P seasoned shrimp, cook to pink (2-3m), remove from pan'
            }, {
                range: ['butter', -2],
                step: 'Add wine/juice, boil, add butter/oil, melt'
            }, {
                range: [0, -1],
                step: 'Add all (including pasta water and parsley) to pan, season w/S&amp;P, heat, serve'
            }
        ]
    }
];
