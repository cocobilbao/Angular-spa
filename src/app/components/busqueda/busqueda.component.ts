import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html"
})
export class BusquedaComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      this.termino = params["termino"];
    });
  }

  verDetalle(index: number) {
    this.router.navigate(["/heroe", index]);
  }

}
