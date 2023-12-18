
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {count, show} from "./counterSlice";
const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="Counter border-black-3">
            <div className="mb-1">
                <div className="bg-light">{counterValue}</div>
            </div>
            <div className="mb-1">
                <button onClick={() => dispatch(show('+'))}>+</button>&nbsp;
                <button onClick={() => dispatch(show('-'))}>-</button>&nbsp;
                <button onClick={() => dispatch(show('*'))}>*</button>&nbsp;
                <button onClick={() => dispatch(show('/'))}>/</button>&nbsp;
            </div>
            <div className='mb-1'>
                <button onClick={()=> dispatch(show('1'))}>1</button>&nbsp;
                <button onClick={()=> dispatch(show('2'))}>2</button>&nbsp;
                <button onClick={()=> dispatch(show('3'))}>3</button>&nbsp;
                <button onClick={()=> dispatch(show('4'))}>4</button>&nbsp;
            </div>
            <div className="mb-1">
                <button onClick={()=> dispatch(show('5'))}>5</button>&nbsp;
                <button onClick={()=> dispatch(show('6'))}>6</button>&nbsp;
                <button onClick={()=> dispatch(show('7'))}>7</button>&nbsp;
                <button onClick={()=> dispatch(show('8'))}>8</button>&nbsp;
            </div>
            <div className='mb-1'>
                <button onClick={()=> dispatch(show('9'))}>9</button>&nbsp;
                <button onClick={()=> dispatch(show('0'))}>0</button>&nbsp;
                <button onClick={() => dispatch(count())}>=</button>
            </div>
        </div>
    );
};
export default Counter;