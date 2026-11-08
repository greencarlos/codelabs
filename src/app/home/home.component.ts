import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <main>
      <header></header>
      <section class="content">
        <p>home works!</p>
      </section>
    </main>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'homes';
}
