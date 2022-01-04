export const COUNTER_NAMESPACE = 'counter';

export interface CounterState {
  value: number;
}

export default {
  value: 0,
} as CounterState;
