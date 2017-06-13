import { Component ,OnInit} from '@angular/core';

import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  template:`  
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"     
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)" >
      <span class="badge">{{hero.id}}</span>{{hero.name}}
      <!-- each hero goes here -->
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  //templateUrl:'./app.component.html',
  styleUrls:['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit{
  heroes : Hero[];
  selectedHero: Hero; 

  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
