import { decrement, incremment, incremmentByfive } from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import "./Counter.css";

export const ReduxCounter = () => {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div className="counter-container">
      <div className="counter-box">
        <button onClick={() => dispatch(decrement())}>-</button>
        <input type="text" value={count} readOnly />
        <button onClick={() => dispatch(incremment())}>+</button>
        <button onClick={() => dispatch(incremmentByfive(5))}>
          {Math.random().toFixed(1)}
        </button>
      </div>
    </div>
  );
};
