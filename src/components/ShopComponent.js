import React from 'react';
import NAILS from '../shared/Nails';

// displays each nail image, name and price (tbd) in the featured list.
function RenderNail(props) {
    return (props.item.map(item => {
        return (
            <div className="col-6">
                <img src={item.src} alt={item.name} className="img-fluid d-block" />
                <div className="text-right">
                    <small>{item.name}</small>
                    <p className=" d-sm-none"></p>
                </div>
                <div className="d-none d-sm-block"></div>
                <div>$?</div>
            </div>
        )
    }
    ));
}
// Adds a row element to above
function Shop() {

    return (
            <div className="row justify-content-center">
                <RenderNail item={NAILS.filter(nail => nail.featured === true)} />
            </div>
)

}
export default Shop