import React, { Component } from 'react';
import { Nav, Collapse } from 'reactstrap';

function CategoryItems(props) {
    return (props.items.map(item => {
        return (
            <li id={String(item)}>
                {item}
            </li>
        )
    }
    ))
}

class ShopCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div className="dropdown-toggle" onClick={this.toggleNav}>
                <h5>{this.props.category}</h5>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <ul className="list-unstyled">
                        <CategoryItems items={this.props.items} />
                    </ul>
                </Collapse>
            </div>
        )
    }
}

class Sidebar extends Component {


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
                <Nav vertical className="sidebar">
                    <ul className="list-unstyled components">
                        <li id="ShopAll">
                            <h5>Shop All</h5>
                        </li>
                        <li id="ByStyle">
                            <ShopCategory category="By Style" items={["French Nails", "Solid Nails", "Ombre Nails", "Bling Nails"]} />
                        </li>
                        <li id="ByShape">
                            <ShopCategory category="By Shape" items={["Coffin", "Tapered Square", "Stiletto", "Almond"]} />
                        </li>
                        <li id="ByLength">
                            <ShopCategory category="By Length" items={["Short", "Medium", "Long", "Extra Long"]} />
                        </li>
                        <li id="OrderCustomSet">
                            <h5>Order Custom Set</h5>
                        </li>
                    </ul>
                </Nav>
        );
    }
}

export default Sidebar;