import React, {useState, useEffect} from 'react';
 
const CacheStorageHook = () => {
    const [query, setQuery] = useState('')
    const [hits, setHits] = useState([])
 
    const onChange = (e) => { setQuery(e.target.value )}
    const onSearch = (e) => {     
        e.preventDefault();
 
        if (query === '') {
            return;
        }
    
        const cachedHits = localStorage.getItem(query);

        if (cachedHits) {
            console.log(JSON.parse(cachedHits))
            setHits(JSON.parse(cachedHits));
        } else {
            fetch('https://hn.algolia.com/api/v1/search?query=' + query)
                .then(response => response.json())
                .then(result => {   
                    onSetResult(result, query)
                });
        }
    };
 
    const onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result.hits));
        setHits(result.hits);
        console.log(result.hits)
    };
 
    return (
      <div>
        <h1>Pesquise notícias de hackers com Local Storage</h1>
        
 
        {/* Search Input */}
        <form onSubmit={onSearch}>
          <input type="text" onChange={onChange} />
          <button type="submit">Search</button>
        </form>
 
        {/* Result */}
        {hits.map(item => (
          <div key={item.objectID}>{item.title}</div>
        ))}
      </div>
    );
}
 
export default CacheStorageHook;