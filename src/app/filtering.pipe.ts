import { Pipe, PipeTransform } from '@angular/core';
import { iProducts } from './Interfaces';

@Pipe({
  name: 'filtering',
  standalone: true
})
export class FilteringPipe implements PipeTransform {

  transform(value: iProducts[], searchString:string): iProducts[] {
    if(value.length === 0 && searchString == ''){
      return value
    }
    let filteredvals = []
    for(let pr of value){
      if(pr.PNAME.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())){
        filteredvals.push(pr)
      }
    }
    return filteredvals
  }

}
