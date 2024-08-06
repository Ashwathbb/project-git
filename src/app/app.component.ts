import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroesComponent,FormsModule,CommonModule,MessagesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_First_Project';
}
