import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
const dispatch = useDispatch();
  /// pour prendre un bout de ce qui est dans reducs
  const counter = useSelector(state => state.counter);
 
  const toggleCounterHandler = () => {};


  const incrementHandlerBy5 = (e) => {
    dispatch({ type: 'incrementBy5', amount: 5 });
  }


  const incrementHandler = (e) => {
    dispatch({ type: 'decrement' });
  }
  const decrementHandler = (e) => {
    console.log("test");
    dispatch({ type: 'increment' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
      <button onClick={(e) => incrementHandlerBy5(e)}>IncrementBy5</button>
      <button onClick={(e) => incrementHandler(e)}>Increment</button>
      <button onClick={(e) => decrementHandler(e)}>Decrement</button>
      </div>
 
    </main>
  );
};


// class Counter extends React.Component {
//   toggleCounterHandler(){};

//   incrementHandler = () => { 
//     this.props.increment();
//     console.log(this);
//   }
//   decrementHandler= () => {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//           {console.log(this)}
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
   
//       </main>
//     );
//   }
// }

export default Counter;

// /// remapper le store pour le récupérer dans le jsx 
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }


// /// dispatch les fonctions pour pouvoir les remapper sur les bouttons
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };


// // fonction connect qui permet de brancher le store et qui retournera la fonction "Counter"
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);



