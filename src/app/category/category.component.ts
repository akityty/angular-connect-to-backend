import {Component, OnInit} from '@angular/core';
import {Category} from '../category.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../category.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = [];
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(next => (this.categoryList = next), error => (this.categoryList = []));
  }
}
