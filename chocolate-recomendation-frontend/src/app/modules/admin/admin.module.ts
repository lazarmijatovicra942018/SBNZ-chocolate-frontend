import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddChocolateComponent } from './add-chocolate/add-chocolate.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'add/chocolate', component: AddChocolateComponent },
      { path: 'chocolates', component: ChocolatesComponent },
      
      //{ path: 'register', component: RegisterComponent},
      //{ path: 'login', component: LoginComponent},
      //{ path: 'unauthorized', component: UnauthorComponent},

    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AddChocolateComponent,
    ChocolatesComponent,
    ChocolateDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class AdminModule { }
