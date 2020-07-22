import { HttpClient } from '@angular/common/http';
import { Farmer } from '../models/farmer.model';
import { FarmerSearchAbstractProviderService } from '../services/farmer-search-abstract-provider.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class ApiFarmerSearchProvider implements FarmerSearchAbstractProviderService {
  baseUrl = 'http://localhost:3000/farmers';

  constructor(private http: HttpClient) {}

  searchFarmers(params: string): Observable<Farmer[]> {
    const url = `${this.baseUrl}/${params}`;
    return this.http.get<Farmer[]>(url).pipe(
      map((obj) => obj),
      catchError(err => {
        throw err;
      })
    );
  }
}
