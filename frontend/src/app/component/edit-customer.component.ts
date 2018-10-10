import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: `edit-customer`,
  template: `
    <div class="container-fluid" *ngIf="!isLoading">
      <div class="container xd-container">

        <h2>
          Customer
        </h2>
        <form id="add-customer-form" class="form-horizontal">
          <div class="form-group has-feedback">


            <div class="form-group ">
              <label class="col-sm-2 control-label">First Name</label>
    
              <div class="col-sm-10">
                <input id="firstName" name="firstName" class="form-control" type="text" [(ngModel)]="client.firstName">

                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>

              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Last Name</label>

              <div class="col-sm-10">
                <input id="lastName" name="lastName" class="form-control" type="text" [(ngModel)]="client.lastName">

                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Address</label>

              <div class="col-sm-10">
                <input id="address" name="address" class="form-control" type="text" [(ngModel)]="client.address">

                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">City</label>

              <div class="col-sm-10">
                <input id="city" name="city" class="form-control" type="text" [(ngModel)]="client.city">

                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Telephone</label>

              <div class="col-sm-10">
                <input id="telephone" name="telephone" class="form-control" type="text" [(ngModel)]="client.telephone">

                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>


              </div>
            </div>

          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" (click)="updateCustomer()">Update Customer</button>
            </div>
          </div>
        </form>
      </div>
    </div>`
})
export class EditCustomerComponent implements OnInit {

  id: string;
  isLoading: boolean = true;
  client: Customer;

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8090/api/customers/${this.id}`).subscribe((value: Customer) => {
      console.info(value);
      this.isLoading = false;
      this.client = value;
    });
  }

  updateCustomer() {
    console.info(this.client);
  }

}
