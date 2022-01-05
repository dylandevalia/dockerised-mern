import React from 'react';
import './index.scss';
import { reset } from '../../store/features/random';
import { getRandom } from '../../store/features/random/selectors';
import { fetchRandom } from '../../store/features/random/thunks';
import { dispatcher, selector } from '../../store/hooks';
import Button from '../Button';

export default function Random() {
  const dispatch = dispatcher();
  const randomValue = selector(getRandom);

  return (
    <div className="random">
      <h3>Fetching Random Number From Server</h3>
      <p>{randomValue}</p>

      <Button onClick={() => dispatch(reset())}>reset</Button>
      <Button onClick={() => dispatch(fetchRandom())}>fetch</Button>
    </div>
  );
}
