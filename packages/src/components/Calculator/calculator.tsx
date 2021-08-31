import React,{FC, useState,useEffect,useRef, InputHTMLAttributes} from 'react';
import ButtonCalc from '../ButtonCalc/ButtonCalc';

 export interface CalculatorProps extends InputHTMLAttributes<HTMLInputElement>{ 
   value?: string;
   onPress?: (value: string) => void;
   onChange?: (value) => void;
 }

 const Calculator: FC<CalculatorProps> = ({
  onPress,
  onChange,
  value,
}) => {
  
  const handlerCalculator = () => {
    const[result,setResult]=useState("");
    const inputRef=useRef(null);
    useEffect(()=>inputRef.current.focus());
    
    
    function handleClick(e){
      setResult(result+e.target.name);
    }
    function click(e){
      setResult(result+e.target.id);
    }
    
    function calculate(){
      try{
        setResult(eval(result).toString());
      }
      catch(error){
        setResult("Error");
        
      }
      
    }
    function clear(){
      setResult("");
    }
    function convert(){
      if(eval(result)>=0){
        setResult("-"+ eval(result))
        
        
      }
      else{
        setResult("+"+ eval(result))
      }
      
    }
    
    return (
    <div className="Calculator">
    
      <input type="text" onChange={value} value={result} ref={inputRef}/>
      
  
      <div className="keypad">
        <ButtonCalc background={'#ff6600'} color={'#fff'} label="AC" onClick={clear}/>
        <ButtonCalc background={'#ff6600'} color={'#fff'} label="+/-" onClick={convert}>+/-</ButtonCalc>
        <button className="Button" name="%"onClick={handleClick} >%</button>
        <button  className="Button1" name="/"onClick={handleClick}>/</button>
        <button className="Button" name="7"onClick={handleClick}>7</button>
        <button className="Button" name="8"onClick={handleClick}>8</button>
        <button  className="Button"name="9"onClick={handleClick}>9</button>
        <button  className="Button1" name="*"onClick={handleClick}>*</button>
        <button  className="Button"name="4"onClick={handleClick}>4</button>
        <button className="Button"name="5"onClick={handleClick}>5</button>
        <button className="Button" name="6"onClick={handleClick}>6</button>
        <button  className="Button1" name="-"onClick={handleClick}>-</button>
        <button className="Button" name="1"onClick={handleClick}>1</button>
        <button  className="Button"name="2"onClick={handleClick}>2</button>
        <button className="Button" name="3"onClick={handleClick}>3</button>
        <button   className="Button1"name="+"onClick={handleClick}>+</button>
        <button className="Button" id="long" name="0"onClick={handleClick} >0</button>
        <button className="Button" name="." onClick={handleClick}>.</button>
        <button className="Button1" onClick={calculate}>=</button>
        
      

      </div>
    </div>
  );
}

export default Calculator;
