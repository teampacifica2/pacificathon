import {Component} from '@angular/core';

@Component({
  selector: `navbar`,
  template: '<nav class="navbar navbar-default" role="navigation">\n' +
    '  <div class="container">\n' +
    '    <div class="navbar-header">\n' +
    '      <a class="navbar-brand" href="/containerbank/"><span></span></a>\n' +
    '    </div>\n' +
    '    <div class="navbar-collapse collapse" id="main-navbar">\n' +
    '      <ul class="nav navbar-nav navbar-right">\n' +
    '\n' +
    '\n' +
    '        <li class="active">\n' +
    '          <a href="/" title="home page">\n' +
    '\n' +
    '            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>\n' +
    '            <span>Home</span>\n' +
    '\n' +
    '          </a>\n' +
    '        </li>\n' +
    '\n' +
    '\n' +
    '        <li class="">\n' +
    '          <a href="/find-customer" title="find component">\n' +
    '\n' +
    '            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>\n' +
    '            <span>Find component</span>\n' +
    '\n' +
    '          </a>\n' +
    '        </li>\n' +
    '\n' +
    '\n' +
    '        <li class="">\n' +
    '          <a href="/advisors" title="advisors">\n' +
    '\n' +
    '            <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>\n' +
    '            <span>Advisors</span>\n' +
    '\n' +
    '          </a>\n' +
    '        </li>\n' +
    '\n' +
    '\n' +
    '        <li class="">\n' +
    '          <a href="/containerbank/oups.html" title="trigger a RuntimeException to see how it is handled">\n' +
    '\n' +
    '            <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>\n' +
    '            <span>Error</span>\n' +
    '\n' +
    '          </a>\n' +
    '        </li>\n' +
    '\n' +
    '\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</nav>'
})
export class NavbarComponent {

}
