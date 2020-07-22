import { HttpClient } from '@angular/common/http';
import { ApiFarmerSearchProvider } from './providers/api-farmer-search-provider';
import { FarmerSearchAbstractProviderService } from './services/farmer-search-abstract-provider.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmerSearchCardComponent } from './components/farmer-search-card/farmer-search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: FarmerSearchAbstractProviderService,
    useClass: ApiFarmerSearchProvider,
    deps: [HttpClient]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
