import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>housing-location works!</p>
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" />
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})

export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}

