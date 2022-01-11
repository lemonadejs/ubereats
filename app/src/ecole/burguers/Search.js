import lemonade from "lemonadejs";
import Header from '../../components/header';

export default function BurgersSearch(template) {
    var self = {};

    return lemonade.element(template, self, { Header });
}