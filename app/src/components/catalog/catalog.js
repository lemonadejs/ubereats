import lemonade from 'lemonadejs';
import List from '@lemonadejs/list';

export default function Catalog() {
    // Initializing self
    var self = this;
    /**
     * Using the List component from lemonade we can create a list form a data array,
     * in this case "self.data" (defined in the controller and importing the data from burgers.js).
     * 
     * Inside the List component we create the structure to render the data
     */    
    var template = `
    <>
        <div class="catalog">
            <List @ref="self.list" data={{self.data}} search="false" pagination="100">
                <div class="catalog-content">
                    <img src="{{self.img}}" />
                    <div class="catalog-subcontent">
                        <span>{{self.title}}</span>
                        <span class="rating">{{self.rating}}</span>
                    </div>
                    <div class="catalog-subcontent">              
                        <span class="info">£{{self.deliveryPrice}} Delivery Free - {{self.deliveryTime}}</span>
                    </div>
                </div>
            </List>
        </div>
    </>`;

    //
    lemonade.set('search', function (s) {
        self.list.input = s;
    });

    return lemonade.element(template, self, { List });
}