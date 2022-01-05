import React from 'react';
import './index.scss';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../store/features/counter';
import { getCount } from '../../store/features/counter/selectors';
import { fetchWait } from '../../store/features/counter/thunks';
import { dispatcher, selector } from '../../store/hooks';
import Button from '../Button';

export default function Counter() {
  const dispatch = dispatcher();
  const count = selector(getCount);

  return (
    <div className="counter">
      <h3>Simple Counter with Async Increment</h3>
      <p>{count}</p>

      <div>
        <Button onClick={() => dispatch(incrementByAmount(-10))}>-10</Button>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
        <Button onClick={() => dispatch(increment())}>+1</Button>
        <Button onClick={() => dispatch(incrementByAmount(10))}>+10</Button>
      </div>
      <div>
        <Button onClick={() => dispatch(fetchWait(1000))}>+1 after 1s</Button>
        <Button onClick={() => dispatch(fetchWait(2000))}>+1 after 2s</Button>
      </div>
    </div>
  );
}
