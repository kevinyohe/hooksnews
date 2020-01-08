import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
    .then(response =>{console.log(response)})
  
  });
  
  return (
    <div >
      
    </div>
  );
}

export default App;
