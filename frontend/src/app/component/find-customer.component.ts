import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: `find-customer`,
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">Find Customers</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div class="portfolio-item-caption-content my-auto w-100 text-white">
                <i class="fas fa-search-plus fa-3x"></i>
                <form id="search-customer-form" class="form-horizontal">
                  <div class="form-group">
                    <div class="control-group" id="lastName">
                      <label class="col-sm-2 control-label">Last name </label>
                        <input id="lastName" name="lastName" class="form-control" value="" size="30" maxlength="80"
                               type="text"><span class="help-inline"></span>
                    </div>
                  </div>
                  <div class="form-group">
                      <button (click)="goToCustomers()" class="btn btn-primary btn-lg rounded-pill">Find Customer</button>
                  </div>
                </form>
                <br>
                <a class="btn btn-primary btn-lg rounded-pill" (click)="addCustomer()">Add Customer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class FindCustomerComponent {

  constructor(private router: Router) {
  }

  goToCustomers() {
    this.router.navigate(["/customers"]);
  }

  addCustomer() {
    this.router.navigate(["/new-customer"]);
  }

}
