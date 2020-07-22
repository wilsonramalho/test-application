import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from 'src/app/services/farmer-search-abstract-provider.service';
import { FormControl } from '@angular/forms';
import { Farmer } from 'src/app/models/farmer.model';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();

  private searchParam = new FormControl();

  private farmer: Farmer;
  private farmerAddress: string;

  constructor() { }

  ngOnInit() {

  }

  searchFarmer(): void {
    this.farmerSearchAbstractProvider.searchFarmers(this.searchParam.value).subscribe((farmers) => {
      if(farmers.length) {
        this.farmer = {
          name: farmers[0].name,
          document: {
            documentNumber: farmers[0].documentnumber,
            documentType: farmers[0].documenttype
          },
          address: {
            street: farmers[0].street,
            state: farmers[0].state,
            address: farmers[0].address,
            country: farmers[0].country
          }
        };
        this.farmerAddress = `${this.farmer.address.street} ${this.farmer.address.address} ${this.farmer.address.state}  ${this.farmer.address.country}`;
      } else {
        console.error("Sem resultados");
      }
    });
  }

}
