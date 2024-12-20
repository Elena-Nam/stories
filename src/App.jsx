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

  const initialStories = [
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
const  App = () => {
 
  const [searchTerm, setSearchTerm] = useStorageState(
    'search','React');
  
  const [stories, setStories] = useStorageState('stories',initialStories);

  const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleRemoveStory = (item) => {
      const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
      );

      setStories(newStories);
    }

  return (
  <div>
  <h1>My Hacker Stories</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>

  <InputWithLabel
  id = "search"
  value = {searchTerm}
  isFocused
  onInputChange = {handleSearch}>
  <strong> Search: </strong>
  </InputWithLabel>
  

  <hr/>

  <List list = {searchedStories} onRemoveItem={handleRemoveStory}/>
  </div>
);
}


const List = ({list, onRemoveItem}) => (
  <ul>
    {list.map((item) => (
    <Item key={item.objectID} item = {item} onRemoveItem ={onRemoveItem}/>
    ))}
    </ul>
    );
  const Item = ({item, onRemoveItem}) => {
    const handleRemoveItem = () => {
      onRemoveItem(item);
      };
    return (
    <li>
      <span>
      <a href = {item.url}> {item.title} </a>
      </span>
      <span> {item.author} </span>
      <span> {item.num_comments} </span>
      <span> {item.points} </span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}> Dismiss </button>
      </span>
    </li>
    );
  };
const InputWithLabel = ({
  id,
  value,
  type ='text',
  onInputChange,
  isFocused,
  children,
}) => {

  const inputRef = React.useRef();
  React.useEffect (() => {
    if (isFocused && inputRef.current) {
    inputRef.current.focus();
}
}, [isFocused]);

return (
<>
  <label htmlFor='id'> {children} </label>
  &nbsp;
  <input
  ref={inputRef}
  id = {id}
  type = {type}
  value = {value}
  onChange = {onInputChange}
  />
</>
);
};


  
export default App;