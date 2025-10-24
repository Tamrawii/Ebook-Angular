import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EbooksRoutingModule } from "./ebooks/ebooks-routing-module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EbooksRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ebooks');
}
