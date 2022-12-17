import { useDispatch } from "react-redux";

function Buttons() {
  const dispatch = useDispatch();
  const plus = () => {
    dispatch({
      type: 'plus'
    })
  }
  const minus = () => {
    dispatch({
      type: 'minus'
    })
  }
  const reset = () => {
    dispatch({
      type: 'reset'
    })
  }
  const plus2 = () => {
    dispatch({
      type: '1000r',
      sum: 1000
    })
  }
  return (
    <div className="Buttons">
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={plus2}>Прибавим Косарь</button>
    </div>
  );
}

export default Buttons;
