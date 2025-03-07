import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  readonly name = new FormControl('', [Validators.required]);
  private readonly router = inject(Router);

  onSubmit() {
    if (this.name.valid) {
      localStorage.setItem('name', this.name.value ?? '');
      this.router.navigate(['questions']);
    }
  }
}
