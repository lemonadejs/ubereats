import lemonade from 'lemonadejs';
import List from '@lemonadejs/list';

export default function Burgerlist() {
    var self = this;

    var template = `
    <>
        <div class="burgers-list">
            <List @ref="self.list" data={{self.data}} search="false" pagination="100">
                <div class="burgers-list-content">
                    <img src="{{self.img}}" />
                    <div class="burgers-list-subcontent">
                        <span>{{self.title}}</span>
                        <span class="rating">{{self.rating}}</span>
                    </div>
                    <div class="burgers-list-subcontent">              
                        <span class="info">£{{self.deliveryPrice}} Delivery Free - {{self.deliveryTime}}</span>
                    </div>
                </div>
            </List>
        </div>
    </>`;

    lemonade.set('search', function (s) {
        self.list.input = s;
    });

    return lemonade.element(template, self, { List });
}