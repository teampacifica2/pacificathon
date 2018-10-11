import {Component, OnInit} from "@angular/core";
import {Advisor} from "../model/Advisor";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: "advisors",
  template: `
    <div class="container xd-container" *ngIf="!isLoading">

      <h2>Advisors</h2>

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
    this.http.get('/api/advisors').subscribe((values: Array<Advisor>) => {
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
