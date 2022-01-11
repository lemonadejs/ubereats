;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Leftmenu = factory();
}(this, (function () {

    // Load lemonadejs
    if (typeof(lemonade) == 'undefined') {
        if (typeof(require) === 'function') {
            var lemonade = require('lemonadejs');
        } else if (window.lemonade) {
            var lemonade = window.lemonade;
        }
    }

    return function() {
        var self = this;

        var template = `<>
            <h2>"Burgers"</h2>
            <p>160+ Results for "Burgers"</p>

            <input type="checkbox"/>
            <label>Sort</label>
            <div class='sort'>
                <input type="radio" name="sort"> <label>Picked for you (default)</label><br>
                <input type="radio" name="sort"> <label>Most popular)</label><br>
                <input type="radio" name="sort"> <label>Rating</label><br>
                <input type="radio" name="sort"> <label>Delivery time</label><br>
            </div><br>

            <input type="checkbox"/>
            <label>Price range</label>
            <div class='price-range'>
                <input type="radio" name="sort"> <label>£</label><br>
                <input type="radio" name="sort"> <label>££</label><br>
                <input type="radio" name="sort"> <label>£££</label><br>
                <input type="radio" name="sort"> <label>££££</label><br>
            </div><br>

            <input type="checkbox"/>
            <label>Max delivery free</label>
            <div class='delivery-free'>
                <input type="range"/>
            </div><br>

            <input type="checkbox"/>
            <label>Dietary</label>
            <div class='dietary'>
                <input type="checkbox" name="sort"> <label>Vegetarian</label><br>
                <input type="checkbox" name="sort"> <label>Vegan</label><br>
                <input type="checkbox" name="sort"> <label>Gluten-free</label><br>
                <input type="checkbox" name="sort"> <label>Halal</label><br>
                <input type="checkbox" name="sort"> <label>Allergy Friendly</label><br>
            </div><br>
        </>`;

        return lemonade.element(template, self);
    }

})));