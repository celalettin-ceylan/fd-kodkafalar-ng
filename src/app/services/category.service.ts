import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = "http://localhost:8080/category"

  constructor(private http: HttpClient) { }

  postCategory(category: Category): Observable<any> {
    let body = new URLSearchParams();
    if (category.id != undefined)
      body.append("id", category.id.toString());
    body.append("name", category.name.toString());
    body.append('slug', category.slug.toString());
    body.append('description', category.description.toString());
    return this.http.post<Category>(`${this.BASE_URL + '/save'}`, body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL + '/find-all'}`, { headers: { 'Content-Type': 'application/json' } })
  }

  deleteCategoryById(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL + '/delete-id?id=' + id}`);
  }
}
