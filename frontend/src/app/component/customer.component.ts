import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../model/Customer";

@Component({
  selector: `customer`,
  template: `
    <div class="container-fluid">
      <div class="container xd-container">

        <h2>Customer Information</h2>


        <table class="table table-striped">
          <tbody>
          <tr>
            <th>Name</th>
            <td><b>Jean-Pierre Deshaies</b></td>
          </tr>
          <tr>
            <th>Address</th>
            <td>5 Boulevard Diderot</td>
          </tr>
          <tr>
            <th>City</th>
            <td>Paris</td>
          </tr>
          <tr>
            <th>Telephone</th>
            <td>0639283726</td>
          </tr>
          </tbody>
        </table>

        <a href="1/edit.html" class="btn btn-default">Edit Customer</a>

        <a href="1/cards/new.html" class="btn btn-default">Add New Card</a>

        <br>
        <br>
        <br>
        <h2>Cards and Payments</h2>

        <table class="table table-striped">
          <tbody>
          <tr>
            <td valign="top">
              <dl class="dl-horizontal">
                <dt>Name</dt>
                <dd>Professionnelle</dd>
                <dt>Birth Date</dt>
                <dd>2010-09-07</dd>
                <dt>Type</dt>
                <dd>credit</dd>
              </dl>
            </td>
            <td valign="top">
              <table class="table-condensed">
                <thead>
                <tr>
                  <th>Payment Date</th>
                  <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>2015-09-04</td>
                  <td>Monoprix</td>
                </tr>
                <tr>
                  <td>
                    <a href="/containerbank/component/1/cards/1/edit">Edit Card</a>
                  </td>
                  <td>
                    <a href="/containerbank/component/1/cards/1/payments/new">Add Payment</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>

          </tbody>
        </table>

      </div>
    </div>`
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    console.info("***id", id);
    this.http.get(`http://localhost:8090/api/customers/${id}`).subscribe((value: Customer) => {
      console.log("value", value, value.id, value.firstName);
    });
  }

}
