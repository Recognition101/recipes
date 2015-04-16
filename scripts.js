var firstParentMatch = function(el, sel) {
    while(!!el && el.matches && !el.matches(sel)) { el = el.parentNode; }
    return el;
};

document.addEventListener("DOMContentLoaded", function() {
    var recipes = document.getElementsByClassName('recipe');
    for(var i=0; i < recipes.length; i+=1) {
        recipes[i].classList.add('hidden');
    }
    document.addEventListener('click', function(ev) {
        var toggle = ev.target.tagName !== 'A' && 
                     firstParentMatch(ev.target, '.recipe-toggle');
        if (toggle) {
            var nextRecipe = toggle.nextElementSibling;
            if (nextRecipe && nextRecipe.classList.contains('hidden')) {
                nextRecipe.classList.remove('hidden');
            } else if (nextRecipe) {
                nextRecipe.classList.add('hidden');
            }
        }
    });
});

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {
    var ac = window.applicationCache;
    if (ac) {
        ac.addEventListener('updateready', function(e) {
            if (ac.status === ac.UPDATEREADY) {
                window.location.reload();
            }
        }, false);
    }

}, false);
