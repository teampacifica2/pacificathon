import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/Customer";

@Component({
  selector: `customer`,
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">Customer Information</h2>
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
    <div class="container-fluid" *ngIf="!isLoading">
      <div class="container xd-container">
        <table class="table table-striped">
          <tbody>
          <tr>
            <th>Name</th>
            <td><b>{{client.firstName}} {{client.lastName}}</b></td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{{client.address}}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{{client.city}}</td>
          </tr>
          <tr>
            <th>Telephone</th>
            <td>{{client.telephone}}</td>
          </tr>
          </tbody>
        </table>

        <a (click)="editCustomer()" class="btn btn-default">Edit Customer</a>

        <a (click)="addNewCard()" class="btn btn-default">Add New Card</a>

        <br>
        <br>
        <br>
        <h2>Cards and Payments</h2>

        <table class="table table-striped">
          <tbody>
          <tr *ngFor="let card of client.cards">
            <td valign="top">
              <dl class="dl-horizontal">
                <dt>Name</dt>
                <dd>{{card.name}}</dd>
                <dt>Birth Date</dt>
                <dd>{{card.birthDate}}</dd>
                <dt>Type</dt>
                <dd>{{card.type.name}}</dd>
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
                    <a (click)="editCard()">Edit Card</a>
                  </td>
                  <td>
                    <a (click)="addPayment()">Add Payment</a>
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

  id: string;
  isLoading: boolean = true;
  client: Customer;

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`/api/customers/${this.id}`).subscribe((value: Customer) => {
      console.info(value);
      this.isLoading = false;
      this.client = value;
    });
  }

  editCustomer() {
    this.router.navigate([`/edit-customer/${this.id}`]);
  }

  addNewCard() {
    // TODO
  }

  editCard() {
    // TODO
  }

  addPayment() {
    // TODO
  }

}
