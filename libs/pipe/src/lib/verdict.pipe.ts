import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'verdict',
})
export class VerdictPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  html(value: string, color = 'black') {
    return this.domSanitizer.bypassSecurityTrustHtml(`<span style="color: ${color};">${value}</span>`);
  }

  transform(value: any, ...args: any[]): any {
    if (value.includes('Error') || value.includes('Wrong')) {
      return this.html(value, 'red');
    } else if (value.includes('Inqueue') || value.includes('Running') || value.includes('Judging')) {
      return this.html(value, 'gray');
    } else if (value.includes('Exceed')) {
      return this.html(value, 'orange');
    } else if (value.includes('Accepted')) {
      return this.html(value, 'green');
    } else {
      try {
        const val = value.split("/");
        if (val[0] == val[1]) {
          return this.html(value, 'green');
        } else {
          return this.html(value, 'orange');
        }
      } catch (e) {
        return this.html(value, 'black');
      }
    }


  }
}

``
