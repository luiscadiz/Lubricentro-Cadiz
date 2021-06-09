import React from 'react';
// import Typography from '@material-ui/core/Typography'; 
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

// const useStyle = makeStyles({
//   myButton: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
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
