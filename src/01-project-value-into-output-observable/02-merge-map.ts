// mergeMap<T, R, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
//   resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), // DEPRECATED
//   concurrent: number = Number.POSITIVE_INFINITY
// ): OperatorFunction<T, ObservedValueOf<O> | R>

import { fromEvent, interval, mergeMap, mapTo, scan } from 'rxjs';
import { run } from './../03-utils';

// Use Case: Nested streams in parallel
export function mergeMapDemo() {
  const clicks$ = fromEvent(document, 'click');
  const stream$ = clicks$.pipe(
    scan((acc, event) => ++acc, 0),
    mergeMap(count => interval(1000).pipe(mapTo(count)))
  );

  // run(stream$);
}
