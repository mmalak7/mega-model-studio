import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import Models from './pages/models';
import Header from './components/header';

import { CSSTransition } from 'react-transition-group';
import { gsap } from "gsap";


const routes = [
  { path: "/", name: 'Home', Component: Home },
  { path: "/models", name: 'models', Component: Models },
  { path: "/contact", name: 'Contact', Component: Contact },
]

function App() {

  const onEnter = node => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };


  return (
    <>
      <Header />
      <div className='container'>
        {routes.map(({ name, path, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit
                >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
