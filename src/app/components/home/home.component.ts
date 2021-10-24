import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  brands = [
    {
      "src": "assets/24b.png"
    },
    {
      "src": "assets/bb.png"
    },
    {
      "src": "assets/cs.png"
    },
    {
      "src": "assets/b5.png"
    },
    {
      "src": "assets/bb.png"
    },
    {
      "src": "assets/lb.png"
    }
  ]

  icons = [
    {
      "src": "assets/about-us-icon.png",
      "header": "ABOUT US",
      "text": "Find out more about us!"
    },
    {
      "src": "assets/our-brands.png",
      "header": "OUR BRANDS",
      "text": "Get to know our 6 exceptional casino brands!"
    },
    {
      "src": "assets/join-us.png",
      "header": "JOIN US",
      "text": "Thinking of a career change? We got you covered. Check out our exciting open positions and become a part of our team!"
    },
    {
      "src": "assets/get-in-touch.png",
      "header": "GET IN TOUCH",
      "text": "Have questions? Let us know by contacting us!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
