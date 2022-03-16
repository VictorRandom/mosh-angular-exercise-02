import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetext'
})
export class PipetextPipe implements PipeTransform {
  transform(value?: string, limit?: number){
    if(!value){
      return null;
    }



    let words = value.split(' ');
    for(var i = 0; i < words.length; i++){
      if( i> 0 && this.isPreposition(words[i].toLowerCase())){
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(words[i]);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string):string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean{
    let preposition = [
      "of",
      "the"
    ];

    return preposition.includes(word.toLowerCase(),)
  }

}
