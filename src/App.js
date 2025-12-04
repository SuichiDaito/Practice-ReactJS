import { useEffect, useState } from "react";

function App() {
// syntax in useEffect (setup, [dependencies])
// dependencies in here, this is follow all item inside
// any item change, so useEffect call back and launch function inside and update result. 
const [value, setValue] = useState('');
const [list, setList] = useState([]);

// //=========== homework1: auto save value after 1s ===========
// // use Effect to check console.log(value) after 1s and observer. 
// // use State to declare initial value and use value in entire page
//   useEffect(() => {
//     setTimeout(() => {console.log(value)},1000);
//   }, [value]);

// =============homework2: fetch API data and show table info ==============
function getData() {
return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => (response.json()))
  .catch((error) => console.log(error));
}

  useEffect(() => {
    getData()
    .then(items => setList(items))
  },[]);

  //=====================homework3: handle window resize ================
  return (
    <div>
  <h1>Use Effect</h1>
  <p>Homework1: Auto save input</p>
    <form>
      <input
       value={value} 
       onChange={(e) => setValue(e.target.value)} 
       placeholder="Enter your name"></input>
       <p>Value after change: {value}</p>
    </form>
    <br></br>
    <hr></hr>

    <h1>Homework2: Fetch fake data from api</h1>
    <p>Daa from API</p>
    <ul>
    {/* {list.map((item) => <li key={item.id}>{item.id}-{item.title}- {item.body}</li>)} */}
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
       {list.map((item) =>
        <tr>
        <td>{item.id}</td> 
        <td>{item.title}</td>
        <td>{item.body}</td>
       </tr>)}
      </tbody>
    </table>
    </ul>
    </div>
  );
}

export default App;
