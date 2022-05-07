import React, { Component } from "react";
// react-router-dom docs: https://v5.reactrouter.com/web/guides/primary-components
// react-router-dom v6 docs: https://reactrouter.com/docs/en/v6/getting-started/overview
  // v6 not stable yet which is why there is a 2nd set of docs for it.
// source of all react-router-dom truth: https://github.com/remix-run/react-router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// At the core of every React Router application should be a router component. For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers. The main difference between the two is the way they store the URL and communicate with your web server.
// A <BrowserRouter> uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount = () => {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data }, () => document.title = `${this.state.sharedData.basic_info.name}`);
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      // This site has 2 pages, all of which are rendered dynamically in the browser (not server rendered).
      // Although the page does not ever refresh, notice how
      // React Router keeps the URL up to date as you navigate
      // through the site. This preserves the browser history,
      // making sure things like the back button and bookmarks
      // work properly.
      <Router>
         {/* To use a Router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level <App> element in a router. */}
        <Header sharedData={this.state.sharedData.basic_info} />
        {/* Routes replaced the Switch in v5 */}
         {/* V6 is a lot smarter and will pick the Route with the most specific match so you don't have to worry about ordering inside the Switch anymore */}
         {/* Routes is a parent element to hold all the app's nested <Route/>'s  */}
        <Routes>
          {/* A Route's job is to render some Component when its path matches the current URL. */}
          {/* You can think of this Home component as a "page" in your app. */}
          <Route 
            exact path="/" 
            element={<Home
              resumeData={this.state.resumeData}
              sharedData={this.state.sharedData}
            />}>
          </Route>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            {/* You can think of this About component as a "page" in your app. */}
          <Route 
            path="/about" 
            element={<About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />}>
          </Route>
          {/* Below is an example of how to add an additional "page". You will need to do more to build out and render a Snacks component. */}
          {/* <Route 
            path="/snacks"
            element={<Snacks 
            />}>
          </Route> */}
        </Routes>
        <Footer 
          sharedBasicInfo={this.state.sharedData.basic_info}
          applyPickedLanguage={this.applyPickedLanguage} 
        />  
      </Router>
    );
  }
}

export default App;
