import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit {

  showSplash: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      const container = document.getElementById('splash-screen-container');

      container.style.opacity = "0";

      setTimeout(() => {
        if (!this.showSplash) {
          container.style.display = "none";
        }
        this.showSplash = !this.showSplash;
      }, 1000);

    }, 2500);
  }

}
