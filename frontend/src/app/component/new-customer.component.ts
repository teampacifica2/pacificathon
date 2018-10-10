import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/Customer";

@Component({
  selector: `new-customer`,
  template: `
    <div class="container-fluid">
      <div class="container xd-container">

        <h2>
          New Customer
        </h2>
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

  constructor(private http: HttpClient) {
    this.client = new Customer();

  }

  addCustomer() {
    console.info(this.client);
    this.http.post("http://localhost:8090/api/customers/new", this.client).subscribe();
  }


}
