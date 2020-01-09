import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("reacthooks");

  useEffect(() => {
    getResults();
    
  }, [query])
 

const getResults = async  () =>{
  
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
}

  return (
   <> 
   <input type="text" onChange={event=>setQuery(event.target.value)}/>
    {results.map(result => (
      <li key={result.objectID}>
      <a href={result.url}>{result.title}</a>
      </li>
    ))}

   </>
  );
}

export default App;
