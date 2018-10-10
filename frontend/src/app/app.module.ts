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

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'find-customer', component: FindCustomerComponent},
  {path: 'edit-customer', component: EditCustomerComponent},
  {path: '**', component: ErrorComponent}
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
