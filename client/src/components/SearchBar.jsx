import React, { useState ,useEffect } from 'react';

const SearchBar = ({ setResults }) => {
 
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    
    setSuggestions([]);
    setIsSuggestionSelected(true);
    
  };


  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        try {

          const backendurl = 'http://localhost:3000';
          const url = `${backendurl}/api/suggest?q=${query}`;

          const response = await fetch(url);
          const data = await response.json();
          setSuggestions(data);
        
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);


 

  

  const handleSearch = async () => {
    
   
    try {


      const backendurl = 'http://localhost:3000';
      const url = `${backendurl}/api/search?q=${query}`;

      const response = await fetch(url);
      const data = await response.json();
      setResults(data);

      setQuery(''); // Reset query after search
      setIsSuggestionSelected(false)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    

  };

 

  return (
<div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center w-72 border rounded-l-sm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="honda,toyota ,etc...."
          className="w-full font-quick py-2 px-4 rounded-l-sm"
        />
        <button onClick={handleSearch} className="bg-black text-white font-quick px-4 py-2 rounded-r-sm">
          Search
        </button>
      </div>
      {suggestions.length > 0 &&  !isSuggestionSelected && (
        <ul className="  mr-10 bg-white  rounded w-40  shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default SearchBar;
