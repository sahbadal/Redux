import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counterSlice.js'

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)

    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+ Increment</button>{" "}
            <button onClick={() => dispatch(decrement())}>- Decrement</button>{" "}
            <button onClick={() => dispatch(incrementByAmount(5))}>Add (5)</button>
        </div>
    )
}

export default Counter