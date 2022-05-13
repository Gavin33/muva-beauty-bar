import React, { Component } from 'react';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent'
import Sidebar from './SidebarComponent';


class Main extends Component {

  render() {

    const HomePage = () => {
      return (
        <Home

        />
      );
    };
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper">
          <Sidebar />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
            <Redirect to='/home' />
          </Switch>
          {/* <Footer /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;