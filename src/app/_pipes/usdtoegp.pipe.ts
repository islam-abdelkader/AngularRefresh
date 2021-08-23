import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoegp'
})
export class UsdtoegpPipe implements PipeTransform {

  transform(value: number, exRate: number = 15.6): unknown {
    return value * exRate;
  }

}
