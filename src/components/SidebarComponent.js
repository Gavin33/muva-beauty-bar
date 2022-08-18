import React, { Component, useState, useEffect } from 'react';
import { Nav, Collapse } from 'reactstrap';

// Simple function to add the category items to the list without having to type out each individual li element + key + text
function CategoryItems(props) {
  return props.items.map((item) => {
    return <li key={String(item)}>{item}</li>;
  });
}
// Handles the shop categories toggles and displays the shop categories.
function ShopCategory(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="dropdown-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
      <h5>{props.category}</h5>
      <Collapse isOpen={isNavOpen} navbar>
        <ul className="list-unstyled">
          <CategoryItems items={props.items} />
        </ul>
      </Collapse>
    </div>
  );
}
// Sidebar component.
function Sidebar(props) {
  // sets sidebar height based on height of page
  const [height, setHeight] = useState(props.height);
  useEffect(() => {
    if (props.height) {
      setHeight(props.height);
    }
  }, [props.height]);
  if (!height) {
    return <div></div>;
  }
  console.log(props.height)
  return (
    <Nav vertical className="sidebar" style={{ height: height }}>
      <ul className="list-unstyled components">
        <li key="ShopAll">
          <h5>Shop All</h5>
        </li>
        <li key="ByStyle">
          <ShopCategory
            category="By Style"
            items={[
              'French Nails',
              'Solid Nails',
              'Ombre Nails',
              'Bling Nails',
            ]}
          />
        </li>
        <li key="ByShape">
          <ShopCategory
            category="By Shape"
            items={['Coffin', 'Tapered Square', 'Stiletto', 'Almond']}
          />
        </li>
        <li key="ByLength">
          <ShopCategory
            category="By Length"
            items={['Short', 'Medium', 'Long', 'Extra Long']}
          />
        </li>
        <li key="OrderCustomSet">
          <h5>Order Custom Set</h5>
        </li>
      </ul>
    </Nav>
  );
}

export default Sidebar;
