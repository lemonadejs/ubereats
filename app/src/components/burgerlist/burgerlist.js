import lemonade from 'lemonadejs';
import List from '@lemonadejs/list';

export default function Burgerlist() {
    var self = this;

    var template = `
    <>
        <div class="burgers-list">
            <List data={{self.data}} search="" pagination="100">
                <div>
                    <img src="{{self.img}}" />
                    <div>
                        {{self.title}}
                        {{self.rating}}
                    </div>
                    <div>
                        {{self.deliveryPrice}}
                    </div>
                </div>
            </List>
        </div>
    </>`;

    return lemonade.element(template, self, { List });
}