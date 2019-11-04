import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
private readonly API_URL = 'http://localhost:8080/blogs/';

  constructor(private http: HttpClient) {}
  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.API_URL);
  }
}
