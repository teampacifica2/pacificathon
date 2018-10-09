import {Component} from '@angular/core';

@Component({
  selector: `customer`,
  template: '<div class="container-fluid">\n' +
    '    <div class="container xd-container">\n' +
    '\n' +
    '        <h2>Customer Information</h2>\n' +
    '\n' +
    '\n' +
    '    <table class="table table-striped">\n' +
    '        <tbody><tr>\n' +
    '            <th>Name</th>\n' +
    '            <td><b>Jean-Pierre Deshaies</b></td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <th>Address</th>\n' +
    '            <td>5 Boulevard Diderot</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <th>City</th>\n' +
    '            <td>Paris</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <th>Telephone</th>\n' +
    '            <td>0639283726</td>\n' +
    '        </tr>\n' +
    '    </tbody></table>\n' +
    '\n' +
    '    <a href="1/edit.html" class="btn btn-default">Edit Customer</a>\n' +
    '\n' +
    '    <a href="1/cards/new.html" class="btn btn-default">Add New Card</a>\n' +
    '\n' +
    '    <br>\n' +
    '    <br>\n' +
    '    <br>\n' +
    '    <h2>Cards and Payments</h2>\n' +
    '\n' +
    '    <table class="table table-striped">\n' +
    '        <tbody><tr>\n' +
    '                <td valign="top">\n' +
    '                    <dl class="dl-horizontal">\n' +
    '                        <dt>Name</dt>\n' +
    '                        <dd>Professionnelle</dd>\n' +
    '                        <dt>Birth Date</dt>\n' +
    '                        <dd>2010-09-07</dd>\n' +
    '                        <dt>Type</dt>\n' +
    '                        <dd>credit</dd>\n' +
    '                    </dl>\n' +
    '                </td>\n' +
    '                <td valign="top">\n' +
    '                    <table class="table-condensed">\n' +
    '                        <thead>\n' +
    '                        <tr>\n' +
    '                            <th>Payment Date</th>\n' +
    '                            <th>Description</th>\n' +
    '                        </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody><tr>\n' +
    '                                <td>2015-09-04</td>\n' +
    '                                <td>Monoprix</td>\n' +
    '                            </tr>\n' +
    '                        <tr>\n' +
    '                            <td>\n' +
    '                                <a href="/containerbank/component/1/cards/1/edit">Edit Card</a>\n' +
    '                            </td>\n' +
    '                            <td>\n' +
    '                                <a href="/containerbank/component/1/cards/1/payments/new">Add Payment</a>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody></table>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '\n' +
    '        </tbody></table>\n' +
    '\n' +
    '</div>\n' +
    '</div>'
})
export class CustomerComponent {

}
