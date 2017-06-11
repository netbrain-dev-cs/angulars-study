import { Component } from '@angular/core';

import {Hero} from './hero';

const HEROES:Hero[]=[
  {id:11,name:'Mr.Nice'},
  {id:12,name:'Narco'},
  {id:13,name:'Bombasto'},
  {id:14,name:'Celeriatas'},
  {id:15,name:'Magneta'},
  {id:16,name:'Rubberman'},
  {id:17,name:'Dynama'},
  {id:18,name:'Dr IQ'},
  {id:19,name:'Magma'},
  {id:20,name:'Tornado'}
];

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
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero; 

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
