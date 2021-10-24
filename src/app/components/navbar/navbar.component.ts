import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.toggle('active');
    sideBar.classList.toggle('active');
  }

}
