import { Pipe, PipeTransform } from '@angular/core';
import { iProducts } from './Interfaces';

@Pipe({
  name: 'category',
  standalone: true,
  pure:false
})
export class CategoryPipe implements PipeTransform {

  transform(value: iProducts[], catString:string): iProducts[] {
    //console.log(value);
    
    if(value.length === 0 || catString == ''){
      return value
    }
    let filteredvals = []
    for(let pr of value){
      if(pr.PCATEGORY.toLocaleLowerCase().includes(catString.toLocaleLowerCase())){
        filteredvals.push(pr)
      }
    }
    return filteredvals
  }

}
