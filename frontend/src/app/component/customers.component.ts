import {Component} from '@angular/core';

@Component({
  selector: `customers`,
  template: '<div class="container-fluid">\n' +
    '    <div class="container xd-container">\n' +
    '\n' +
    '        <h2>Customers</h2>\n' +
    '\n' +
    '        <table id="customersTable" class="table table-striped">\n' +
    '            <thead>\n' +
    '            <tr>\n' +
    '                <th style="width: 150px;">Name</th>\n' +
    '                <th style="width: 200px;">Address</th>\n' +
    '                <th>City</th>\n' +
    '                <th style="width: 120px">Telephone</th>\n' +
    '                <th>Cards</th>\n' +
    '            </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '            <tr>\n' +
    '                <td>\n' +
    '                    <a href="/containerbank/component/1.html">Jean-Pierre Deshaies</a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    5 Boulevard Diderot\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Paris\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    0639283726\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Professionnelle /\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>\n' +
    '                    <a href="/containerbank/component/2.html">Alphonse Dubois</a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    115 bis rue Ordener\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Paris\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    0173243520\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Personnelle /\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td>\n' +
    '                    <a href="/containerbank/component/3.html">Léon Vigouroux</a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    18 rue des Batignolles\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Marseille\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    0927115243\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                    Bouygues Telecom /\n' +
    '                    Cadeau FNAC /\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '</div>'
})
export class CustomersComponent {

}
