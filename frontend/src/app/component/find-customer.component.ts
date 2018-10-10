import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: `find-customer`,
  template: `
    <div class="container-fluid">
      <div class="container xd-container">

        <h2>Find Customers</h2>
        <form id="search-customer-form" class="form-horizontal">
          <div class="form-group">
            <div class="control-group" id="lastName">
              <label class="col-sm-2 control-label">Last name </label>
              <div class="col-sm-10">
                <input id="lastName" name="lastName" class="form-control" value="" size="30" maxlength="80"
                       type="text"><span class="help-inline"></span>

              </div>

            </div>

          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button (click)="goToCustomers()" class="btn btn-default">Find Customer</button>
            </div>
          </div>
        </form>
        <br>
        <a class="btn btn-default" href="/containerbank/customers/new">Add Customer</a>
      </div>

    </div>`
})
export class FindCustomerComponent {

  constructor(private router: Router) {}

  goToCustomers() {
    this.router.navigateByUrl(`/customers`);
  }

}
