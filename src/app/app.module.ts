import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ApiFarmerSearchProvider } from './providers/api-farmer-search-provider';
import { FarmerSearchAbstractProvider } from './services/farmer-search-abstract-provider.service';
import { FarmerSearchCardComponent } from './components/farmer-search-card/farmer-search-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: FarmerSearchAbstractProvider,
    useClass: ApiFarmerSearchProvider,
    deps: [HttpClient]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
