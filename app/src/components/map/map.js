import lemonade from 'lemonadejs';
import google from 'google-maps';

export default function Map() {
    var self = this;

    console.log(google);
    self.map = function (o) {
        new google.maps.Map(o, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        })
    };


    var template = `
    <>
        <h3>My Google Maps Demo</h3>
        
        <div @ready="self.map(this)" style="width: 200px; height: 200px;"></div>
    </>`;

    return lemonade.element(template, self);
}