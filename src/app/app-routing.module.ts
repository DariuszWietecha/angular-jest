import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesCreateEditComponent } from './components/categories/categories-create-edit/categories-create-edit.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { CompaniesCreateEditComponent } from './components/companies/companies-create-edit/companies-create-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'views/:categoryId', component: HomeComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:type', component: CategoriesCreateEditComponent },
  { path: 'categories/:type/:id', component: CategoriesCreateEditComponent },
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:type', component: CompaniesCreateEditComponent },
  { path: 'companies/:type/:id', component: CompaniesCreateEditComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
