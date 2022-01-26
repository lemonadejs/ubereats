import lemonade from "lemonadejs";
import Header from '../../components/header/header';
import Leftmenu from '../../components/leftmenu/leftmenu';
import List from '@lemonadejs/list';
import Catalog from '../../components/catalog/catalog';
import Test from '../../../burgers';
import Map from '../../components/map/map'

export default function BurgersSearch(template) {
    var self = this;

    self.data = [];

    self.data = Test;

    lemonade.set('container', self);

    return lemonade.element(template, self, { Header, Leftmenu, List, Catalog, Map });
}