import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([])


  useEffect(() => {
    getResults();
    
  }, [])
 

const getResults = async  () =>{
  
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
    setResults(response.data.hits);
}

  return (
   <> 
    {results.map(result => (
      <li key={result.objectID}>
      <a href={result.url}>{result.title}</a>
      </li>
    ))}

   </>
  );
}

export default App;
