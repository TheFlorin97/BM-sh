import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-adv',
  templateUrl: './carousel-adv.component.html',
  styleUrls: ['./carousel-adv.component.css']
})
export class CarouselAdvComponent implements OnInit {

  constructor() { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }

}
