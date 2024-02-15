import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-page',
  standalone: true,
  providers: [provideNativeDateAdapter(),{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
},
],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatTabsModule,
    MatDatepickerModule,MatRadioModule,MatIconModule,MatDividerModule,MatButtonModule,FormsModule, 
    ReactiveFormsModule,CommonModule],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.scss'
})
export class EmployeePageComponent {
  newTaskForm: FormGroup;
  submitted: Boolean = false;
  selected = 'Interests';
  state = 'State';
  company_information = 'company_information'
  
    constructor(fb: FormBuilder)
    {
        this.newTaskForm = fb.group({
          first_name: ["", Validators.required],
          last_name: ["", Validators.required],
          dob : ["", Validators.required],
          gender: ['', Validators.required],
        });
      }

    get f() {
      return this.newTaskForm.controls;
    }
// To save the data
    submit(){
      this.submitted = true;
      console.log(this.newTaskForm.value)
      console.log(this.selected)
      console.log(this.state)
      console.log(this.company_information)
        if((this.newTaskForm.value.first_name || this.newTaskForm.value.last_name  || this.newTaskForm.value.dob) != ""){
        alert("Data saved successfully")
        }else{
          alert("Please fill the form")
        }
    }
}
