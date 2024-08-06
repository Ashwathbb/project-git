import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule,HeroDetailComponent,RouterOutlet,RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}