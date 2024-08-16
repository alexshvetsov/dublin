import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'poker management';
  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
