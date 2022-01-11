import lemonade from "lemonadejs";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Leftmenu from '../../components/leftmenu/leftmenu';
import List from '@lemonadejs/list';
import Burgerlist from '../../components/burgerlist/burgerlist';
import Test from '../../../burgers';

export default function BurgersSearch(template) {
    var self = {
        data: []
    };

    console.log(Test);

    self.data = Test;

    return lemonade.element(template, self, { Footer, Header, Leftmenu, List, Burgerlist });
}