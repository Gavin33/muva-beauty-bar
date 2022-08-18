import React, { useState, createRef } from 'react';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';
import Sidebar from './SidebarComponent';
import Footer from './FooterComponent';
import Shop from './ShopComponent';
import NAILS from '../shared/Nails';

// Hook that measures element size
const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

function Main() {
  const height = createRef();
  // measures current page's main content (switch object)
  const dimensions = useRefDimensions(height);
  return (
    <React.Fragment>
      <Header />
      {/* Wrapper is for the sidebar (to keep on the side and above footer/below header) */}
      <div className="wrapper container">
        <div className="row">
          <div className="col-4 pl-0">
            <Sidebar height={dimensions.height} />
          </div>
          <div className="col-8">
            <div ref={height}>
              <Switch>
                <Route
                  path="/home"
                  render={() => (
                    <Home nails={NAILS.filter((nails) => !nails.featured)} />
                  )}
                />
                <Route
                  exact
                  path="/contactus"
                  render={() => (
                    <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                  )}
                />
                {/* Adjust about us with necessary props */}
                <Route exact path="/aboutus" render={() => <About />} />
                <Route path="/shop" render={() => <Shop />} />
                <Redirect to="/home" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Main;
