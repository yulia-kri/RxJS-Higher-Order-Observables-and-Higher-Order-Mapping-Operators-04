// switchMap<T, R, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O,
//   resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R // DEPRECATED
// ): OperatorFunction<T, ObservedValueOf<O> | R>

// если во время обработки элемента внутреннего потока, придет элемент из внешнего,
// то обработка внутренного будет завершена
// перейдет к следующему элементу
// т.е. может завершить обработку элемента
// а может и не завершить
// зависит от внешнего потока

// имеет значение только последний
// GET request
// for POST concatMap()

import { fromEvent, interval, switchMap } from 'rxjs';
import { run } from './../03-utils';

export function switchMapDemo() {
  const clicks$ = fromEvent(document, 'click');
  const stream$ = clicks$.pipe(switchMap((event) => interval(1000)));

  // run(stream$);
}
