import {Component} from "@angular/core";

@Component({
  selector: `new-customer`,
  template: `
    <div class="container-fluid">
      <div class="container xd-container">

        <h2>
          New Customer
        </h2>
        <form id="add-customer-form" class="form-horizontal" action="/containerbank/customers/new" method="post">
          <div class="form-group has-feedback">


            <div class="form-group ">
              <label class="col-sm-2 control-label">First Name</label>

              <div class="col-sm-10">
                <input id="firstName" name="firstName" class="form-control" value="" type="text">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Last Name</label>

              <div class="col-sm-10">
                <input id="lastName" name="lastName" class="form-control" value="" type="text">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Address</label>

              <div class="col-sm-10">
                <input id="address" name="address" class="form-control" value="" type="text">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">City</label>

              <div class="col-sm-10">
                <input id="city" name="city" class="form-control" value="" type="text">


              </div>
            </div>


            <div class="form-group ">
              <label class="col-sm-2 control-label">Telephone</label>

              <div class="col-sm-10">
                <input id="telephone" name="telephone" class="form-control" value="" type="text">


              </div>
            </div>

          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" type="submit">Add Customer</button>
            </div>
          </div>
        </form>
      </div>
    </div>`
})
export class NewCustomerComponent {

}
