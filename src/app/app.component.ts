import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-sandbox';
  constructor(public rest: RestService, private router: Router) {}

  goBack() {
    this.router.navigate(['/']); //agregar la ruta a la que quiere volver
  }
}
