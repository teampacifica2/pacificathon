import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/Customer";
import {Router} from "@angular/router";
import {domainName} from "../domain-name";

@Component({
  selector: `new-customer`,
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">New Customers</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div class="portfolio-item-caption-content my-auto w-100 text-white">
                <i class="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <div class="container xd-container">
        <form id="add-customer-form" class="form-horizontal">
          <div class="form-group has-feedback">


            <div class="form-group ">
              <label class="col-sm-2 control-label">First Name</label>

              <div class="col-sm-10">
                <input id="firstName" name="firstName" class="form-control" type="text" [(ngModel)]="client.firstName">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Last Name</label>

              <div class="col-sm-10">
                <input id="lastName" name="lastName" class="form-control" type="text" [(ngModel)]="client.lastName">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Address</label>

              <div class="col-sm-10">
                <input id="address" name="address" class="form-control" type="text" [(ngModel)]="client.address">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">City</label>

              <div class="col-sm-10">
                <input id="city" name="city" class="form-control" type="text" [(ngModel)]="client.city">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Telephone</label>

              <div class="col-sm-10">
                <input id="telephone" name="telephone" class="form-control" type="text" [(ngModel)]="client.telephone">


              </div>
            </div>

          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" type="submit" (click)="addCustomer()">Add Customer</button>
            </div>
          </div>
        </form>
      </div>
    </div>`
})
export class NewCustomerComponent {

  client: Customer;

  constructor(private http: HttpClient, private router: Router) {
    this.client = new Customer();

  }

  addCustomer() {
    this.http.post(`${domainName}/api/customers/new`, this.client).subscribe(() => this.router.navigate(['/customers']));
  }


}
