import  { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number) {

    limit = limit ? limit : 50
    return value ? value.substr(0, limit) + '...' : null;

  }

}
