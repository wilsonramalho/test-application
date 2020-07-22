import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../models/farmer.model';

@Injectable({
  providedIn: 'root'
})
export abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(param: string): Observable <any[]>;
}
