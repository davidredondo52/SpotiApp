import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinaudio'
})
export class SinaudioPipe implements PipeTransform {

  transform(value: any, args?: any): any {


   	let noaudio="";
  	if(!value){
  		return noaudio;
  	}

  	return (value!=null)?value:noaudio;
  
  }

}
