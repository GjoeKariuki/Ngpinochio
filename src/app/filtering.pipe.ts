import { Pipe, PipeTransform } from '@angular/core';
import { iProducts } from './Interfaces';

@Pipe({
  name: 'filtering',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {

  transform(value: iProducts[], searchString:string): iProducts[] {
    if(value.length === 0 || searchString == ''){
      return value
    }
    let filteredvals = []
    console.log(searchString);
    console.log(value);
    
    
    for(let pr of value){
      if(pr.PNAME.toLowerCase().includes(searchString.toLowerCase())){
        filteredvals.push(pr)
      }
     
    }
    return filteredvals
  }

}
