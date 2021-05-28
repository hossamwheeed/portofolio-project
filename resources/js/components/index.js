import React ,{ useState, useEffect, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import GlobalStyle from './globalStyles';

import Navbar from './Navbar/Navbar';
import Dropdown from './Dropdown/Dropdown';
import Whatsapp from './Whatsapp/Whatsapp';
import Footer from './Footer/Footer';
import Loader from './loader/loader';
import ScrollToTop from './ScrollToTop/ScrollToTop';
const Home = React.lazy(() => import('./pages/Home'));
const About =React. lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Landscape =React. lazy(() => import('./pages/Landscape'));
const Pumps =React. lazy(() => import('./pages/Pumps'));
const Drilling =React. lazy(() => import('./pages/Drilling'));
const Irrigation = React.lazy(() => import('./pages/Irrigation'));
const WaterTreatment = React.lazy(() => import('./pages/WaterTreatment'));
const Infrastructure = React.lazy(() => import('./pages/Infrastructure'));
const Contact = React.lazy(() => import('./pages/Contact'));

function Index() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isColored, setIsColored] =React. useState(false);
    let [loading, setLoading] =React. useState(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    function changeColor() {
      if (window.scrollY >= 150) {
        setIsColored(true);

      } else {
        setIsColored(false);
      }
    }
    window.addEventListener('scroll', changeColor);
    // const toHome = () => {

    // }
    React.useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 10)
    }, [])
    return (
      <>
        {
          loading ?

            (<Loader />)
            :
            (
              <Router>
                <GlobalStyle />
                <ScrollToTop />
                <Navbar toggle={toggle} className={isColored ? 'navbar colorChange' : 'navbar'} />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path='/'>
                      <Home />
                    </Route>
                    <Route path='/about'>
                      <About />
                    </Route>
                    <Route path='/projects'>
                      <Projects />
                    </Route>
                    <Route path='/contact'>
                      <Contact />
                    </Route>
                    <Route path='/landscape'>
                      <Landscape />
                    </Route>
                    <Route path='/pumps'>
                      <Pumps />
                    </Route>
                    <Route path='/drilling'>
                      <Drilling />
                    </Route>
                    <Route path='/Irrigation'>
                      <Irrigation />
                    </Route>
                    <Route path='/waterTreatment'>
                      <WaterTreatment />
                    </Route>
                    <Route path='/infrastructure'>
                      <Infrastructure />
                    </Route>
                  </Switch>
                </Suspense>
                <Footer />
                <Whatsapp />
              </Router>
            )
        }
      </>
    );
  }

  export default Index;




