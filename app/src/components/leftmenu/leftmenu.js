import lemonade from "lemonadejs";

export default function Leftmenu() {
    var self = this;

    self.sortVisible = true;
    self.priceRangeVisible = true;
    self.deliveryFreeVisible = true;
    self.dietaryVisible = true;
    self.sortIcon = 'expand_less';
    self.priceRangeIcon = 'expand_less';
    self.deliveryFreeIcon = 'expand_less';
    self.dietaryIcon = 'expand_less';

    self.submenu = function(visibility, icon) {
        self[visibility] = !self[visibility];
        self[icon] = !self[visibility]?'expand_more':'expand_less';
    }

    var template = `
    <>
        <h2>"Burgers"</h2>
        <p>160+ Results for "Burgers"</p>

        <div class="sort-checkbox" onclick="self.submenu('sortVisible', 'sortIcon')" id="sortTitle">
            <input type="checkbox" @ref="self.sortCheckbox"/>
            <label>Sort</label>
            <i class="icon material-icons">{{self.sortIcon}}</i>
        </div><br>
        <div class='sort' style="{{!self.sortVisible?'display:none;':'display: block;'}}">
            <label for="sort1" class="radio">
                <input class="sort-input" type="radio" name="sort" id="sort1" checked="true"/>
                <div class="sort-div"></div>
                Picked for you (default)
            </label>
            <label for="sort2" class="radio"> 
                <input class="sort-input" type="radio" name="sort" id="sort2"/> 
                <div class="sort-div"></div> 
                Most popular
            </label>
            <label for="sort3" class="radio">
                <input class="sort-input" type="radio" name="sort" id="sort3"/>
                <div class="sort-div"></div>
                Rating
            </label>
            <label for="sort4" class="radio">
                <input class="sort-input" type="radio" name="sort" id="sort4"/>
                <div class="sort-div"></div>
                Delivery time
            </label>
        </div><br>

        <div class="sort-checkbox" onclick="self.submenu('priceRangeVisible', 'priceRangeIcon')">
            <input type="checkbox"/>
            <label>Price Range</label>
            <i class="icon material-icons">{{self.priceRangeIcon}}</i>
        </div><br>
        <div class='price-range' style="{{!self.priceRangeVisible?'display:none;':'display: block;'}}">
            <label>
                <input type="radio" name="price-range" class="price-range-input"/>
                <div class="price-range-div">£</div>
            </label>
            <label>
                <input type="radio" name="price-range" class="price-range-input"/>
                <div class="price-range-div">££</div>
            <label>
                <input type="radio" name="price-range" class="price-range-input"/>
                <div class="price-range-div">£££</div>
            </label>
            <label>
                <input type="radio" name="price-range" class="price-range-input"/>
                <div class="price-range-div">££££</div>
            </label><br>
        </div><br>

        <div class="sort-checkbox" onclick="self.submenu('deliveryFreeVisible', 'deliveryFreeIcon')">
            <input type="checkbox"/>
            <label>Max delivery free</label>
            <i class="icon material-icons">{{self.deliveryFreeIcon}}</i>
        </div>
        <div class='delivery-free' style="{{!self.deliveryFreeVisible?'display:none;':'display: block;'}}">
            <input type="range"/>
        </div><br>

        <div class="sort-checkbox" onclick="self.submenu('dietaryVisible', 'dietaryIcon')">
            <input type="checkbox"/>
            <label>Dietary</label>
            <i class="icon material-icons">{{self.dietaryIcon}}</i>
        </div><br>
        <div class='dietary' style="{{!self.dietaryVisible?'display:none;':'display: block;'}}">
            <label>
                <input type="checkbox" class="dietary-input" name="sort">
                <div class="dietary-div">
                    <i class="icon material-icons">favorite</i>
                    Vegetarian
                </div>
            </label>
            <label>
                <input type="checkbox" class="dietary-input" name="sort">
                <div class="dietary-div">
                    <i class="icon material-icons">favorite</i>
                    Vegan
                </div>    
            </label>
            <label>
                <input type="checkbox" class="dietary-input" name="sort">
                <div class="dietary-div">
                    <i class="icon material-icons">favorite</i>
                    Gluten-free
                </div>    
            </label>
            <label>
                <input type="checkbox" class="dietary-input" name="sort">
                <div class="dietary-div">
                    <i class="icon material-icons">favorite</i>
                    Halal
                </div>    
            </label>
            <label>
                <input type="checkbox" class="dietary-input" name="sort">
                <div class="dietary-div">
                    <i class="icon material-icons">favorite</i>
                    Allergy Friendly
                </div>    
            </label>
        </div><br>
    </>`;

    return lemonade.element(template, self);
}