import {Component} from '@angular/core';

@Component({
  selector: `navbar`,
  template: `
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/containerbank/"><span></span></a>
        </div>
        <div class="navbar-collapse" id="main-navbar">
          <ul class="nav navbar-nav navbar-right">


            <li class="active">
              <a href="/" title="home page">

                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                <span>Home</span>

              </a>
            </li>


            <li class="">
              <a href="/find-customer" title="find customer">

                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                <span>Find customer</span>

              </a>
            </li>


            <li class="">
              <a href="/advisors" title="advisors">

                <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                <span>Advisors</span>

              </a>
            </li>


            <li class="">
              <a href="/containerbank/oups.html" title="trigger a RuntimeException to see how it is handled">

                <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
                <span>Error</span>

              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>`
})
export class NavbarComponent {

}
