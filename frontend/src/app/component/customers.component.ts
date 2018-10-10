import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: `customers`,
  template: `
    <div class="container-fluid">
      <div class="container xd-container">

        <h2>Customers</h2>

        <table id="customersTable" class="table table-striped">
          <thead>
          <tr>
            <th style="width: 150px;">Name</th>
            <th style="width: 200px;">Address</th>
            <th>City</th>
            <th style="width: 120px">Telephone</th>
            <th>Cards</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let customer of customers">
            <td>
              <a href="/customerdetail?{{customer?.id}}">{{customer.lastName}}</a>
            </td>
            <td>
              {{customer?.address}}
            </td>
            <td>
              {{customer?.city}}
            </td>
            <td>
              {{customer?.telephone}}
            </td>
            <td >
              <div *ngFor="let card of customer.cards">{{card?.name}} /</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>`
})
export class CustomersComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8090/api/customers').subscribe((data: any) => this.customers = data);
  }

}
