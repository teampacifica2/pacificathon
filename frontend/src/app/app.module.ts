import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomersComponent} from './component/customers.component';
import {FindCustomerComponent} from './component/find-customer.component';
import {CustomerComponent} from './component/customer.component';
import {EditCustomerComponent} from './component/edit-customer.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './component/navbar.component';
import {ErrorComponent} from './component/error.component';
import {HomeComponent} from './component/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {NewCustomerComponent} from "./component/new-customer.component";
import {AdvisorsComponent} from "./component/advisors.component";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'find-customer', component: FindCustomerComponent},
  {path: 'edit-customer/:id', component: EditCustomerComponent},
  {path: 'new-customer', component: NewCustomerComponent},
  {path: 'advisors', component: AdvisorsComponent},
  {path: '**', component: HomeComponent},
  {path: 'error', component: ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FindCustomerComponent,
    CustomerComponent,
    EditCustomerComponent,
    NavbarComponent,
    ErrorComponent,
    HomeComponent,
    NewCustomerComponent,
    AdvisorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
