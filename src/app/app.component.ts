import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoredComponent } from "./bored/bored/bored.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoredComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booredApp';
}
