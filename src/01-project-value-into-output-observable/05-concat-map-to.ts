// concatMapTo<T, R, O extends ObservableInput<unknown>>(
//     innerObservable: O,
//     resultSelector?: (   // DEPRECATED
//       outerValue: T,
//       innerValue: ObservedValueOf<O>,
//       outerIndex: number,
//       innerIndex: number) => R
// ): OperatorFunction<T, ObservedValueOf<O> | R>

// нет доступа к элементу внешнего потока

import { fromEvent, interval, concatMapTo, take } from 'rxjs';
import { run } from './../03-utils';

export function concatMapToDemo() {
  const outerObservable = fromEvent(document, 'click');
  const innerObservable = interval(1000).pipe(take(5));

  const stream$ = outerObservable.pipe(concatMapTo(innerObservable));

  // run(stream$);
}
