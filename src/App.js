import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import TemporaryDrawer from './components/navbar';
import { Container } from "@material-ui/core";

class App extends React.Component {

  state = {
    currentPage: "/"
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    })
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "/") {
      return <LandingPage handlePageChange={this.handlePageChange} />;
    }
  };

  render() {
    let bgImage = require("./images/landingPageBackground.png");
    return (
      <span>
        {
          (this.state.currentPage === "/")
            ? (
              <span>
                <div style={{ height: '100vh', width: "100vw", backgroundImage: `url(${bgImage})`, filter: "blur(7.5px)" }}></div>
                <Container className="App" style={{ minHeight: '100vh', position: "absolute", top: 0 }}>
                  <Wrapper >
                    {this.renderPage()}
                  </Wrapper>
                </Container>
              </span>
            )
            : (
              <span>
                <Container className="App" style={{ minHeight: '100vh' }}>
                  <TemporaryDrawer handlePageChange={this.handlePageChange} />
                  <Wrapper >
                    {this.renderPage()}
                  </Wrapper>
                </Container>
              </span>
            )
        }
      </span>
    )
  }

};


export default App;