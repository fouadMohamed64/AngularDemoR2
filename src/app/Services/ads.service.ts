import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads:string[];

  constructor() { 
    this.ads = ['Ad Number One' , 'Ad Number x Two' , 'Ad Number Three' , 'Ad Number Four'];
  }

  getAds(){
    return new Observable<string>((observer)=>{
      let i = 0;
      let interval = setInterval(() => {
        console.log('Inside Interval')
        observer.next(this.ads[i]);
        i++;
        if (i == this.ads.length) {
          observer.complete();
        }
        if (this.ads[i] == '') {
          observer.error('Error Occurd');
        }
      }, 2000);
      // Un Subscribe
      return {
        unsubscribe: ()=>{
          console.log('from Un subscribe function')
          clearInterval(interval)
        }
      }
    })
  }

  // getAdsTwo(){
  //   return from(this.ads)
  // }

  getAdsThree(){
    return of(...this.ads)
  }

}
