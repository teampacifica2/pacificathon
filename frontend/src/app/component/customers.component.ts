import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer';

@Component({
  selector: `customers`,
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">Customers</h2>
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
              <a routerLink="/customer/{{customer?.id}}">{{customer.lastName}}</a>
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

  customers: Customer[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/customers').subscribe((data: Customer[]) => this.customers = data);
  }

}
