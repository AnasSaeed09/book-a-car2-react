import React from 'react';

import Routers from './component/pages/router';
import Login from './component/pages/Login';
import SignUp from './component/pages/SignUp';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Routers/>
   <Login/>
   <SignUp/>
    </>
    
  );
}

export default App;
