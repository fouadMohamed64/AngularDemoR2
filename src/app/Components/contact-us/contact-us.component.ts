import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdsService } from '../../Services/ads.service';
import { filter, first, last, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit, OnDestroy {

  adsSubscribtion!:Subscription;
  constructor(private adsService: AdsService) { }

  ngOnInit() {
    // this.adsSubscribtion = this.adsService.getAds().subscribe({
    //   next: (ad) => {
    //     console.log(ad)
    //   },
    //   complete: () => {
    //     console.log('Complete')
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })

    this.adsService.getAdsThree().pipe(
      // first()
      // last()
      // skip(1),
      // take(2)
      // filter((ad) => ad.includes('x'))
    ).subscribe((data)=>{
      console.log(data)
    })

  }

  ngOnDestroy() {
    // this.adsSubscribtion.unsubscribe()
  }

}
