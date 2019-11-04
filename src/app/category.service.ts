import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category.interface';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly API_URL = 'http://localhost:8080/categorys/';

  constructor(private http: HttpClient) {
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }
}
