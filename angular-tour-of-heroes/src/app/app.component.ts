import { Component } from '@angular/core';
import {OnInit} from '@angular/core'

import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
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
  styleUrls:['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero; 

  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
