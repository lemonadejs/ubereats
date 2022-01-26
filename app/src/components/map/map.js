import lemonade from 'lemonadejs';
// import { Loader } from 'google-maps';

export default function Map() {
    var self = this;

    self.map = function (o) {
        // Loader.load().then(function (google) {
        //     new google.maps.Map(o, {
        //         center: {lat: -34.397, lng: 150.644},
        //         zoom: 8,
        //     });
        // });
    };

    var template = `
    <>
        <div @ready="self.map(this)" class="map">
            Here is the map
        </div>
    </>`;

    return lemonade.element(template, self);
}