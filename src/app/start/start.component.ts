import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  readonly name = new FormControl('', [Validators.required]);

  onSubmit() {
    if (this.name.valid) {
      console.log(this.name.value);
    }
  }
}
