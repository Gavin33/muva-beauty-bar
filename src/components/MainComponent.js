import React, { Component } from 'react';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent'
import Sidebar from './SidebarComponent';
import Footer from './FooterComponent';
import Shop from './ShopComponent'
import NAILS from '../shared/Nails';


class Main extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* Wrapper is for the sidebar (to keep on the side and above footer/below header) */}
        <div className="wrapper">
          <Sidebar />
          <Switch>
            <Route path='/home' render={() => <Home nails={NAILS.filter(nails => !nails.featured)}/>} />
            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            {/* Adjust about us with necessary props */}
            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
            <Route path='/shop' render={() => <Shop />} />
            <Redirect to='/home' />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;