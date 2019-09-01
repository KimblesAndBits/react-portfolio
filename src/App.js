import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MainMenu from "./pages/MainMenu";
import LandingPage from "./pages/LandingPage";
import LandingPageBg from "./components/landingPageBg";
import TemporaryDrawer from './components/navbar';
import { Container, Grid } from "@material-ui/core";

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
    if (this.state.currentPage === "/") {
      return <LandingPage handlePageChange={this.handlePageChange} />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <MainMenu handlePageChange={this.handlePageChange} />
    }
  };

  render() {
    return (
      <span>
        {
          (this.state.currentPage === "/")
            ? (
              <span>
                <LandingPageBg />
                <Container
                  className="App"
                  style={{
                    minHeight: '100vh',
                    position: "absolute",
                    top: 0
                  }}>
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
                  <Wrapper style={{ height: '87vh', minHeight: "450px" }}>
                    {this.renderPage()}
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="flex-end">
                      <Grid item style={{color: "#f5f5f5"}}><p>Danny Kimble &copy;</p></Grid>
                    </Grid>
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