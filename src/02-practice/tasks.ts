import { run } from './../03-utils';
import { catchError, mergeMap, concatMap, delay, exhaustMap, switchMap, take } from 'rxjs/operators';
import { fromEvent, range, interval, of, from, Observable, NEVER, concat,  } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

// Task 1. concatMap()
// Реализуйте функцию, которая создает Observable, который выдает числа в диапазоне от 1 до 10 
// через случайное количество времени в диапазоне от 1с до 5с
// Используйте функцию randomDelay(), of(), concatMap(), delay()
// Проведите эксперимент заменяя метод concatMap на mergeMap, switchMap, exhaustMap
(function task1(): void {
    function randomDelay(min: number, max: number) {
        const pause = Math.floor( Math.random() * ( max - min ) ) + min;
        console.log(pause);
        return pause;
    }

    // const stream$ = 

    // run(stream$);
})();

// Task 2. mergeMap()
// Испольуя функцию emulateHttpCall и массив идентификаторов ids
// организуйте получение объектов в параллель.
(function task2(): void {
    function emulateHttpCall(id: number): Observable<any> {
        switch (id) {
          case 1:
            return of({ id: 1, name: 'Anna' }).pipe(delay(4000)); // <-- emulation of http call, which returns Observable after 4s
          case 2:
            return of({ id: 2, name: 'Boris' }).pipe(delay(3000)); // <-- pause 3s
          case 3:
            return of({ id: 3, name: 'Clara' }).pipe(delay(2000)); // <-- pause 2s
        }
    }

    const ids = [1, 3, 2, 2, 3, 3, 1, 2, 3];

    // const stream$ = 
    
    // run(stream$);
})();


// Task 3. switchMap()
// Создайте внешний поток, используя fromFetch('https://api.github.com/users?per_page=5')
// Создайте для результата внешнего потока внутренний поток response.json(), используя switchMap()
// Дополнительно фильтруйте элементы внешнего потока по условию response.ok === true
(function task3(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 4. exhaustMap()
// Создайте внешний поток из событий click по кнопке runBtn.
// Во время первого клика по кнопке создайте внутренний поток, используя interval(1000)
// Элементы внутреннего потока должны попасть в выходной поток. 
// Игнорируйте все последующие клики на кнопке
(function task4() {
    // const clicks$ = 
    // const stream$ = 

    // run(stream$);
})();


// Task 5. concatMapTo()
// Создайте внешний поток событий click по кнопке runBtn.
// Во время клика по кнопке, создайте внутренний поток из слов 
// 'Hello', 'World!', используя of() и объедините его с потоком NEVER
// Добавьте клова внутреннего потока в результирующий поток
// Обясните результат нескольких кликов по кнопке
(function task5() {
    // const stream$ =

    // run(stream$);
})();

// Task 6. mergeMapTo()
// Задание аналогично предыдущему, только теперь вместо concatNap используйте mergeMap
// Обясните результат нескольких кликов по кнопке
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. switchMapTo()
// Создайте внешний поток событий click по кнопке runBtn.
// Во время клика по кнопке, создайте внутренний поток, 
// который будет выдавать числа от 0 до 4 с интервалом в 1с.
// Каждый новый клик по кнопке должен начинать выдавать значения внутреннего потока 
// начииная с 0, недожидаясь завершения выдачи всех предыдущих чисел.
(function task7() {
    // const stream$ = 

    // run(stream$);
})();




export function runner() {}