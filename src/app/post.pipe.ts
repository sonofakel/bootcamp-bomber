import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'post',
  pure: false
})
export class PostPipe implements PipeTransform {

  transform(input: Post[], desiredBootcamp) {
    let output: Post[] = [];
    for(let i = 0; i < input.length; i++) {
      if(desiredBootcamp == input[i].bootcampId) {
        output.push(input[i])
      }
    }
    return output;
  }

}
