import lemonade from 'lemonadejs';
import List from '@lemonadejs/list';

export default function Burgerlist() {
    var self = this;

    var template = `
    <>
    </>`;

    return lemonade.element(template, self, { List });
}