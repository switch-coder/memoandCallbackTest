import logo from './logo.svg';
import './App.css';
import Button from './button';
import React, {useCallback, useState, useEffect} from 'react';
function App() {
  const [display , setDisplay] = useState('0');
  // display input 으로 바꾼다 
  // 버튼 클릭시 input 에 넣는다 
  // 플러스 클릭시 저장된값 -> + display 값으로 하고 메모리에 저장 후 display 는 0 
  // 

  const onClickBtn = useCallback((event) => {
    const v = event.currentTarget.id
    setDisplay((d) => d !== '0' ?  v + d : v)
  },[])

  const onClickDelBtn =  useCallback((event) => {
    setDisplay((d) => d.length=== 1 ? '0' : d.slice(1))
  },[])
  console.log("render");

  return (
    <div className="App">
     <div className="display" id="display" > {display}</div>
     <Button className="bg-color-orange" n={"+"} />
     <Button id="delete" className="bg-color-orange"onClick={onClickDelBtn} n="del"/> 
     <div id="touch-buttons" >
     {React.Children.toArray( Array.from({length :9}, (value, index) => <Button id="bg-color-gray" className="bg-color-gray" onClick={onClickBtn} n={index + 1} />))}

     </div>
    </div>
  );
}

export default App;


