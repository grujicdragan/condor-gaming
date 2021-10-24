import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  brands_abt = [
    {
      "img": "assets/24b.png"
    },
    {
      "img": "assets/bb.png"
    },
    {
      "img": "assets/b5.png"
    },
    {
      "img": "assets/cs.png"
    },
    {
      "img": "assets/rc.png"
    },
    {
      "img": "../../../assets/lb.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
