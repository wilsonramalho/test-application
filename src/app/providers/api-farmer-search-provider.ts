import { HttpClient } from '@angular/common/http';
import { Farmer } from '../models/farmer.model';
import { FarmerSearchAbstractProvider } from '../services/farmer-search-abstract-provider.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class ApiFarmerSearchProvider implements FarmerSearchAbstractProvider {
  baseUrl = 'http://localhost:3000/farmers';

  constructor(private http: HttpClient) {}

  searchFarmers(params: string): Observable<any[]> {
    const url = `${this.baseUrl}/${params}`;
    return this.http.get<any[]>(url).pipe(
      map((obj) => obj),
      catchError(err => {
        throw err;
      })
    );
  }
}
