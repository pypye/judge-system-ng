import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'verdictFrExc',
})
export class VerdictFrExcPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 0:
        return 'Accepted';
      case 1:
        return 'Wrong Answer';
      case 4294967295:
        return 'Time Limit Exceeded';
      case 4294967294:
        return 'Memory Limit Exceeded';
    }
  }
}
