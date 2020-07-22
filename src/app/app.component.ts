import { FarmerSearchAbstractProvider } from 'src/app/services/farmer-search-abstract-provider.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myFarmerSearchProvider: FarmerSearchAbstractProvider) {}

}
