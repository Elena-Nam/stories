import * as React from 'react';
const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
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
const  App = () => (
  <div>
  <h1>My Hacker Stories</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
  <Search />
  <hr />
  <List />
  </div>
);
  

const Search = () => (
<div>
<label htmlFor="search">Search: </label>
<input id="search" type="text" />
</div>
);

const List = () => (
  <ul>
  {list.map((item) => (
  <li key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
  </li>
  ))}
  </ul>
  );
  
export default App;