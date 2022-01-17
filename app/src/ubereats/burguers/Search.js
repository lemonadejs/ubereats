import lemonade from "lemonadejs";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Leftmenu from '../../components/leftmenu/leftmenu';
import List from '@lemonadejs/list';
import Catalog from '../../components/catalog/catalog';
import Test from '../../../burgers';
import Map from '../../components/map/map'

export default function BurgersSearch(template) {
    var self = {
        data: []
    };

    self.data = Test;

    return lemonade.element(template, self, { Footer, Header, Leftmenu, List, Catalog, Map });
}