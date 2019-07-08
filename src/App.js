//REQUIRED IMPORTS
import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import './components/index';

//IMPORT COMONENTS
import User from './components/User/User';
import Search from './components/Search/Search';

const App = () => {
  /*HOOKS SELECTORS*/
  const users = useSelector(({users}) => users.users);
  const request = useSelector(({users}) => users.request);

  return (
    <div className="app">
      <Search />
      <br></br>
      { request.pending === true && <img src="http://jammer.hu/wp-content/uploads/2014/12/Preloader_10.gif"></img> }
      { request.success === false && <h1>Rodzaj błędu: {request.error}</h1> }
      { request.success === true && <ul className="contact-list">{users.map(user => <User key={user.login} {...user} />)}</ul> }
    </div>
  );
}

export default App;





