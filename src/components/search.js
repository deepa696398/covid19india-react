import React, {useState, useEffect} from 'react';
import * as Icon from 'react-feather';

function Search(props) {
  const [searchValue, setSearchValue] = useState('');
  const [expand, setExpand] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchValue === 'Karnataka')
      setResults([
        {name: 'Karnataka', type: 'State'},
        {name: 'Karnataka', type: 'Resources'},
      ]);
    else setResults([]);
  }, [searchValue]);

  return (
    <div className="Search">
      <label>Search your city, resources, etc</label>
      <input
        type="text"
        placeholder="Karnataka"
        value={searchValue}
        onFocus={() => {
          setExpand(true);
        }}
        onBlur={() => {
          setExpand(false);
        }}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <Icon.Search />
      {results.length > 0 && (
        <div className="results">
          {results.map((result, index) => {
            return (
              <div key={index} className="result">
                <div className="result-name">{result.name}</div>
                <div className="result-type">
                  Visit {result?.type?.toLowerCase()} page
                </div>
              </div>
            );
          })}
        </div>
      )}
      {expand && (
        <div className="expanded">
          <div className="expanded-left">
            <h3>Top Resources</h3>
            <h4> - DIY Face Masks</h4>
            <h4> - MOFHW Tips</h4>
            <h4> - Test Centers in Mumbai</h4>
            <h4> - Symptoms</h4>
            <h4> - Dave</h4>
          </div>
          <div className="expanded-right">
            <h3>Highly Searched</h3>
            <h4> - Hyderabad</h4>
            <h4> - Bengaluru</h4>
            <h4> - Test Centers</h4>
            <h4> - Lockdown</h4>
            <h4> - Also Dave</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
