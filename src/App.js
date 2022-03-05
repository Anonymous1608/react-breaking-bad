import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Charactergrid from './components/characters/Charactergrid';
import Search from './components/ui/Search';

function App() {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')



  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      setChars(result.data);
      setIsLoading(false);
    }

    fetchChars();
  }, [query])




  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q) } />
      <Charactergrid isLoading = {isLoading} chars = {chars} />
    </div>
  );
}

export default App;
