import {Component, OnInit} from "@angular/core";
import {Advisor} from "../model/Advisor";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {domainName} from "../domain-name";

@Component({
  selector: "advisors",
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">Advisors</h2>
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
    <div class="container xd-container" *ngIf="!isLoading">
      <table id="advisorsTable" class="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Specialties</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let advisor of advisors">
          <td>{{advisor.firstName}} {{advisor.lastName}}</td>
          <td *ngIf="advisor.specialties.length === 0">none</td>
          <td *ngIf="advisor.specialties.length !== 0">{{advisor.specialties[0].name}}</td>
        </tr>
        </tbody>
      </table>

      <table class="table-buttons">
        <tbody>
        <tr>
          <td>
            <a (click)="viewAsXml()">View as XML</a>
          </td>
          <td>
            <a (click)="viewAsJson()">View as JSON</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  `
})
export class AdvisorsComponent implements OnInit {

  isLoading: boolean = true;
  advisors: Array<Advisor>;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.get(`${domainName}/api/advisors`).subscribe((values: Array<Advisor>) => {
      this.isLoading = false;
      this.advisors = values;
    })
  }

  viewAsXml() {
    window.open('/api/advisors');
  }

  viewAsJson() {
    window.open('/api/advisors');
  }

}
