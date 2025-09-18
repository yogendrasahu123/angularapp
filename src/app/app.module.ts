import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    ReactiveformComponent,
    TemplateFormComponent,
    EmployeeDashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
