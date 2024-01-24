import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  categoryForm: FormGroup;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryServiceService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value).subscribe({
        next: (res) => {
          this.categories.push(res);
          this.categoryForm.reset();
        },
        error: (err) => console.error(err)
      });
    }
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => console.error(err)
    });
  }
}
