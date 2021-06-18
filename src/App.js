import React from 'react';
// import Typography from '@material-ui/core/Typography'; 
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { ItemCount } from './Components/ItemCount/ItemCount';
// import { makeStyles } from '@material-ui/core';

// const useStyle = makeStyles({
//   container: {
//     display: 'flex',
//     alignItems: 'center'
//   }
// });

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer text="Proximamente en mi proyecto"/> 
    </div>
  );
}

export default App;
