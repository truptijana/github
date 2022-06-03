import React from 'react'
import Search from './search/Search';
import Drop from './search/Drop';
import ContextApi from './search/ContextApi';


function App() {
  return (
  
      <ContextApi>
      <Search/>
      <Drop/>
    </ContextApi>

    
    
  );
}

export default App;
