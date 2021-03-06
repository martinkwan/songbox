import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../../styles/footer.scss';

import NavBar from '../NavBar/NavBar';

const App = ({ children }) =>
  <div>
    <NavBar />
    <h1>SongBox</h1>
    { children }
    <footer className={footer}>
      <Link to="/">SongBox</Link>
      <Link to="/about">About</Link>
    </footer>
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

export default App;
