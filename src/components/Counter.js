import { Component } from "react";

import classes from "./Counter.module.css";
import { useSelector,useDispatch, connect } from "react-redux";

const Counter = () => {
  const dispatch=useDispatch()
  const counter = useSelector((state) => state.counter);

const incrementHandler=()=>{
  dispatch({type:'increment'})
}

const decrementHandler=()=>{
  dispatch({type:'decrement'})
}
const incrementHandler5=()=>{
  dispatch({type:'increment5'})
}

const decrementHandler5=()=>{
  dispatch({type:'decrement5'})
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler5}>Increment BY 5</button>
        <button onClick={decrementHandler5}>Decrement BY 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

// class Counter extends Component{

//   incrementHandler() {
//     this.props.increment();

//    }
//   decrementHandler() { 
//     this.props.decrement();
//   }
//   incrementHandler5() { 
//     this.props.increment5();
//   }
//   decrementHandler5() {
//     this.props.decrement5();
//    }
  
//   toggleCounterHandler() { }
  

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind}>Increment</button>
//           <button onClick={this.decrementHandler.bind}>Decrement</button>
//           <button onClick={this.incrementHandler5.bind}>Increment BY 5</button>
//           <button onClick={this.decrementHandler5.bind}>Decrement BY 5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
    

//   };
// }

// const mapDspatchToProps = dispatch => { 
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     increment5: () => dispatch({ type: 'increment5' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     decrement5: () => dispatch({ type: 'decrement5' }),



//   }
// };
// export default connect(mapStateToProps, mapDspatchToProps) (Counter);
