import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.sass']
})
export class ReferencesComponent implements OnInit {

  brands_ref = [
    {
      "img": "assets/24b.png",
      "text": "24Bettle is a new brand which does not only provide the best in online casino games, live casino and sportsbook markets; but also gives players the chance to choose how they want to play and be rewarded."
    },
    {
      "img": "assets/bb.png",
      "text": "This is a masterpiece of its kind, featuring an innovative and exciting live auctions system, made from scratch."
    },
    {
      "img": "assets/b5.png",
      "text": "The concept behind Big5Casino revolves around the big 5 game – associated with the 5 most difficult animals to collect in Africa. The buffalo, leopard, rhino, elephant and the lion. Big5Casino takes the player on a journey in the skin of each of the Big5 animals."
    },
    {
      "img": "assets/cs.png",
      "text": "You’re correct if you think CasinoSieger has a German ring to it. Players who are in a strong winning mood and in search for victory have come to the right place."
    },
    {
      "img": "assets/rc.png",
      "text": "Rembrandt Casino with its recent overhaul is the pinnacle of taste and luxury in the casino industry. As Rembrandt was a grand master, with an eye for detail, Rembrandt Casino is our piece of art for European players."
    },
    {
      "img": "assets/lb.png",
      "text": "Lucky Bull Online Casino - the newest of our brands, coming soon!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
