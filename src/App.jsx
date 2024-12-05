import * as React from 'react';


const useStorageState = (key, initialState) => {
const [value, setValue] = React.useState (
  localStorage.getItem('key') || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
    }, [value, key]);

  return [value, setValue];
  };


const  App = () => {
  const stories = [
    {
    title: 'React',
    /*url: 'https://reactjs.org/',*/
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'me',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  ];
    
  const [searchTerm, setSearchTerm] = useStorageState(
    'search','React');
  /*
  const [searchTerm, setSearchTerm] = React.useState (
  localStorage.getItem('search') || 'React'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
    }, [searchTerm]);

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);

    localStorage.setItem('search', event.target.value);
  };
*/

  const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
  <div>
  <h1>My Hacker Stories</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>

  <Search onSearch = {handleSearch} search={searchTerm}/>
  <hr />

  <List list = {searchedStories}/>
  </div>
);
}

const List = ({list}) => (
  <ul>
  {list.map((item) => (
  <Item key={item.objectID} item = {item}/>
  ))}
  </ul>
  );
  const Item = ({item}) => (
    <li>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    </li>
  );

  const Search = ({search, onSearch}) => {
    
  return (
  <>
  <label htmlFor="search">Search: </label>
  <input id="search" type="text" value={search} onChange={onSearch} />

  <p>
  Searching for <strong>{search}</strong>
  </p>
  </>
  );
}
  
export default App;