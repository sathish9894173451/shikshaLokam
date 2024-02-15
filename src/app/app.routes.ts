import { Routes } from '@angular/router';
import { EmployeePageComponent } from './employee-page/employee-page.component';

export const routes: Routes = [
    {path:"", redirectTo:"/employeePage", pathMatch:'full'},
    {path:"employeePage", component:EmployeePageComponent}
];
