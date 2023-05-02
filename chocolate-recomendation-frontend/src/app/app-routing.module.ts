import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'regular',
    loadChildren: () => import('./modules/regular/regular.module').then(m => m.RegularModule),
    
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
