import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import GifList from './components/GifList/GifList';

export default function App() {
  const [gifs, setGifs] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${searchTerm}&limit=8`);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}