import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { CompaniesService } from './services/companies.service';
import { CategoriesService } from './services/categories.service';
import { ViewsService } from './services/views.service';

import { AppComponent } from './components/app/app.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesCreateEditComponent } from './components/categories/categories-create-edit/categories-create-edit.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { CompaniesCreateEditComponent } from './components/companies/companies-create-edit/companies-create-edit.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/companies/company/company.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ViewsEffects } from './effects/views.effects';
import { CompaniesEffects } from './effects/companies.effects';
import { CategoriesEffects } from './effects/categories.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesListComponent,
    CategoriesCreateEditComponent,
    CompaniesListComponent,
    CompaniesCreateEditComponent,
    CompanyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ViewsEffects, CompaniesEffects, CategoriesEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    CategoriesService,
    CompaniesService,
    ViewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
