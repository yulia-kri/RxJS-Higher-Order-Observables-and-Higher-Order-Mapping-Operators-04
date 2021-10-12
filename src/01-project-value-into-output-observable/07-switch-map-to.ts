// switchMapTo<T, R, O extends ObservableInput<unknown>>(
//     innerObservable: O, 
//     resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R // DEPRECATED
// ): OperatorFunction<T, ObservedValueOf<O> | R>

import { fromEvent, interval, switchMapTo, take } from 'rxjs';
import { run } from './../03-utils';


export function switchMapToDemo() {
    const outerObservable = fromEvent(document, 'click');
    const innerObservable = interval(1000).pipe(take(5));

    const stream$ = outerObservable.pipe(
        switchMapTo(innerObservable)
    );

    // run(stream$);
}