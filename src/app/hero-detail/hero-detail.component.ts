import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router // Use Router instead of Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.router.navigate(['/heroes']); // Navigate back using Router
  }
}
