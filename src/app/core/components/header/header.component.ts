import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();

  searchForm: FormGroup;
  showSearch = true;
  languages = ['EN', 'ES', 'FR'];
  currencies = ['USD', 'EUR', 'INR'];
  selectedLanguage = 'EN';
  selectedCurrency = 'USD';
  bookingsCount = 2; // placeholder for badge

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      from: [''],
      to: [''],
      depart: [null],
      passengers: [1]
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  onSearch() {
    if (this.searchForm.valid) {
      // Replace with navigation or emit event to parent
      console.log('Searching flights', this.searchForm.value);
    }
  }
}
