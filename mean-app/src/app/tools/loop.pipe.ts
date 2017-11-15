import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'loopNumber'
})
export class LoopPipe implements PipeTransform {

    transform(value: number, args?: any): any {
        let res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }

}
