 import { useState } from "react";

 const list = ['name1', 'name2', 'name3']
 
function App() {
  // declare list extension
  // after, set list in useState
  // List nay la mot list duoc map ra ben ngoai, voi list da duoc khoi tao san
  const [todo, setTodo] = useState(list);
  // mot string khi minh khoi tao de lay duoc thong tin nguoi dung nhap tu the input ra ngoai
  // setToDo de thay doi cai useState ban dau. 
  const [newTodo, setNewToDo] = useState('');
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  // use arrow fucntion 
  const counter = () => setCount((count) => count + 1); 

  function decreaseValue() {
    setCount((count) => count - 1);
    if (count == 0) setCount(0);
  }

  function addTodoList() {
    setTodo([...todo, newTodo]);
    setNewToDo('')
  }

   const handleRemoveItem = (value) => {
    console.log(value)
    setTodo(prev => (prev.filter((item) => item !== value)));
   }
   
   const toggleSetTheme = () => {
    setTheme((theme) =>  theme === 'light' ? 'dark' : 'light');
   }

   const themeStyles = {
    backgroundColor: theme === 'light' ? 'light' : 'dark' ,
    color:  theme === 'light' ? '#FF0000' : '#FFFF00',
   }

  return (
  <div>
  <h1> Homework 1:  Add To do list </h1>
   <form>
   <label for='name'>Enter new to do </label> <br></br>
   {/* cho nay thuc hien lay ra du lieu cua cai textfield nhap ben trong de set vao trong setNewToDo */}
    <input type="text" id='name' value= {newTodo} onChange={(e) => setNewToDo(e.target.value)} 
    placeholder="Enter your todo"></input>
   </form>
  {/* nhu nay la sang thuc hien viec nhung jsx vao web cua minh */}
   <button onClick={addTodoList}>submit</button>
   <h2>My list to do </h2>  
   <ul>
   {/* cho nay la thuc hien viec map ra ui ben ngoai lay tu du lieu, cu phap nay la jsx, vua co react, vua co javascript */}
    {todo.map((item, index) => <li key={index-item}>{item} 
    {/* cho nay la do ham set cho cai onClick bi sai, => tim hieu ve syntax nay */}
    <button onClick={() => handleRemoveItem(item)}>X</button>
     </li>)}
    </ul>
    <br></br>
    <hr></hr>
    <h1>Homework2: Counter </h1>

    <p>Press times {count} button </p>
    <button onClick={counter}>Plus button</button>
    <button onClick={() => setCount(0)}>Reset button</button>
    <button onClick={() => decreaseValue()}>Minus button</button>

    <br></br>
    <hr></hr>
    <h1>Homework3: Set theme for page</h1>

    <h1 style={themeStyles}> Button set theme for page </h1>
      <button onClick={() => toggleSetTheme()}>Toggle Theme</button>
  </div>
  
  );
}

export default App;
