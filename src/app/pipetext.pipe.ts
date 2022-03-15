import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetext'
})
export class PipetextPipe implements PipeTransform {
  transform(value?: string, limit?: number){
    if(!value){
      return null;
    }
    let firstLetter = value.substring(0, 1).toUpperCase();
    let otherLetters = value.substring(1).toLowerCase();
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();

  }
}
