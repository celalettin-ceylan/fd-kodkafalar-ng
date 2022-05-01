import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  first = 0;
  rows = 10;

  category: Category = {
    name: '',
    slug: '',
    description: '',
  }

  constructor(private categoryService: CategoryService, private router :  Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => this.categories = res.data.category);
  }

  save() {
    this.categoryService.postCategory(this.category).subscribe(data => console.log(data.data.category));
  }

  delete(id:string){
    this.categoryService.deleteCategoryById(id).subscribe(data => console.log(data));
  }

  getInfoToUI(category : Category){
    this.category.name = category.name;
    this.category.slug = category.slug;
    this.category.description = category.description;
    this.category.id = category.id;
  }

  clear(){
    this.category.name = '';
    this.category.slug = '';
    this.category.description = '';
    this.category.id = '';
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
}
