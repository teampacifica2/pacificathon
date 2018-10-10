import {Component} from '@angular/core';

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
          <tr>
            <td>
              <a href="/containerbank/component/1.html">Jean-Pierre Deshaies</a>
            </td>
            <td>
              5 Boulevard Diderot
            </td>
            <td>
              Paris
            </td>
            <td>
              0639283726
            </td>
            <td>
              Professionnelle /
            </td>
          </tr>
          <tr>
            <td>
              <a href="/containerbank/component/2.html">Alphonse Dubois</a>
            </td>
            <td>
              115 bis rue Ordener
            </td>
            <td>
              Paris
            </td>
            <td>
              0173243520
            </td>
            <td>
              Personnelle /
            </td>
          </tr>
          <tr>
            <td>
              <a href="/containerbank/component/3.html">Léon Vigouroux</a>
            </td>
            <td>
              18 rue des Batignolles
            </td>
            <td>
              Marseille
            </td>
            <td>
              0927115243
            </td>
            <td>
              Bouygues Telecom /
              Cadeau FNAC /
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>`
})
export class CustomersComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.info("*** test");
    this.http.get('http://localhost:8090/api/customers/1').subscribe((value: any) => console.log("***", value));
  }

}
