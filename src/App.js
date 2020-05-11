import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Models from './pages/models';
import Header from './components/header';

const routes = [
  { path: "/", name: 'Home', Component: Home },
  { path: "/about", name: 'About', Component: About },
  { path: "/models", name: 'models', Component: Models },
  { path: "/contact", name: 'Contact', Component: Contact },
]


function App() {
  return (
    <>
      <Header />
      <div className='container'>
        {routes.map(({name, path, Component }) => (
          <Route key={name} path={path} exact>
            <div className='page'>
            <Component />
            </div>
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
