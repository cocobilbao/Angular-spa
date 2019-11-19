import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from "../../services/heroes.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {}

  constructor( private _heroesService: HeroesService, private activatedRoute:ActivatedRoute, private router: Router ) { 

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id']);
    })
  }

  goBack() {
    this.router.navigate(["/heroes"]);
  }

  ngOnInit() {

  }

}
