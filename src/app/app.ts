import { Component, signal } from '@angular/core';
import { AuthPage } from './auth-page/auth-page';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [AuthPage, HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('projeto-webcommerce');
}
