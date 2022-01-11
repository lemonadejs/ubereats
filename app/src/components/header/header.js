;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Header = factory();
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

        var Localization = function() {
            var self = this;

            var template =`<>
                <div class='location'> 
                    <i class="icon material-icons" style="color: #000; font-size: 25px;">location_on</i>
                    <span>{{self.local}} - Now</span>
                </div>
            </>`;

            return lemonade.element(template, self);
        }

        var template = `<>
            <div class='icon'>
                <a href="/ecole/left" class="panel"><i class="icon material-icons" style="color: #000; font-size: 25px; margin-left: 25px;">menu</i></a>
            </div>

            <div class='title'>
                <img src="https://www.ubereats.com/_static/8b969d35d373b512664b78f912f19abc.svg">
            </div>

            <div class='delivery-toggle'>
                <label>Delivery</label>
                <label style="background-color: #dddddd;">Pickup</label>
            </div>

            <Localization local="{{self.local}}"/>

            <div class="">
            <i class="icon material-icons" style="position: absolute; color: #000; font-size: 25px; padding: 5px 0 0 5px;">search</i>
            <input type="text" placeholder="Food, groceries, drinks, etc"/>
            </div>

            <input type="button" value="cart"/>
            
            <a href="login" style="background-color: #dddddd;" >Sign in</a>
        </>`;

        return lemonade.element(template, self, { Localization });
    }

})));