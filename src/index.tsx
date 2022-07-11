
// import syntax in typescript: https://stackoverflow.com/questions/46748593/react-and-reactdom-undefined-but-installed
// import * as ReactDOM from 'react-dom';
// import * as React from "react";


// to use this style: [ "esModuleInterop": true ] into tsconfig.json
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import './index.scss';

import { decrement, increment } from './counterSlice'
import type { RootState } from './store'
import store from './store'


function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        LET'S TEST
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }

const AppView = () => {
    return <Provider store={store}>
        <Counter />
    </Provider>
}

ReactDOM.render(<AppView />, document.getElementById("app"));