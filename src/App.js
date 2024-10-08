import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from './Component/Label';
import Form from './Component/Form';
import Reducer from './Component/Reducer';
import Home from './Component/Home';
import {Store} from './Store/index'
import {Provider} from 'react-redux'
import Navbar from './Component/Navbar';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import Saga from './Component/Saga';
import Products from './Component/Products';
import Cart from './Component/Cart';
import TanStack from './Component/TanStack';
import PostDetail from './Component/PostDetail';

console.log(Store.getState())
const Context = createContext({
  todo:[]
});
function App() {
  const[label,setLabel] = useState();
  const[count,setCount] = useState(0);
  const[data,setData] = useState(101);
  const[show,setShow] = useState(true);
  const[list,setList] = useState([]);
 
  const handleData = useCallback((data) => {
    console.log('Button clicked!');
    setLabel(data)
    setShow(false)
  }, [count]); 

  useEffect(() => { 
   let timer = setTimeout(() => {
    setCount(count + 1)
   },2000)


   fetch('https://jsonplaceholder.typicode.com/todos')
   .then((res) => res.json())
   .then((json) => setList(json))
   

   return () => {
    clearTimeout(timer);
    console.log("unmounted")
   }
  },[])

  
  const count1 = useRef(0);

  const subsetArr = list.slice(0,5);



  useEffect(() => {
    count1.current = count1.current + 1;
  });



  const Child = () => { 
    const data1 = useContext(Context)
    console.log(data1.todo)
    const memo = useMemo(() => {
      console.log(data1)
    },[data1])
   
    return(
      <>
      This is child {data1}
      <h1>Countr 1 =</h1>
      <div>
        <ul>
         {subsetArr.map((list) =><li key={list.id}>{list.title}</li>)} 
        </ul>
      </div>
      </>
    );
  }

  return (
   
    <div className="App">
      <Provider store={Store}>
       {/* <Context.Provider value={data}>
      <Label data={handleData} value="data"/>
      {label && <p>Received data: {label}</p>}
      {count && <p>Count: {count} {count1.current}</p>}

      <button onClick={()=>setCount(count+1)}>IncCount</button>

      <Child/>
      <div>
        <Form/>
      </div>
      <div>
      {show && <Reducer/>} 
      </div>
      </Context.Provider> */}
      <Router>
      <Navbar/>
        <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/saga' element={<Saga/>}/>
       <Route exact path='/store' element={<Products/>}/>
       <Route exact path='/cart' element={<Cart/>}/>
       <Route exact path='/tanstack' element={<TanStack/>}/>
       <Route exact path='/tanstack/:postId' element={<PostDetail/>}/>
        </Routes>
      </Router>
      
        </Provider>
     </div>
  );
}


export default App;
