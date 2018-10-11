import {Component} from '@angular/core';

@Component({
  selector: `navbar`,
  template: `
    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase navbar-shrink" id="mainNav" role="navigation">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/containerbank/"><span>Container Bank</span></a>
        <div class="navbar-collapse collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">


            <li class="nav-item mx-0 mx-lg-1">
              <a routerLink="/home" title="home page" routerLinkActive="active"
                 class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">

                Home

              </a>
            </li>


            <li class="nav-item mx-0 mx-lg-1">
              <a routerLink="/find-customer" title="find customer" routerLinkActive="active"
                 class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">

                Find customer

              </a>
            </li>


            <li class="nav-item mx-0 mx-lg-1">
              <a routerLink="/advisors" title="advisors"  routerLinkActive="active"
                 class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
                Advisors

              </a>
            </li>


            <li class="nav-item mx-0 mx-lg-1">
              <a routerLink="/error" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" routerLinkActive="active"
                 title="trigger a RuntimeException to see how it is handled">
                Error
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>`
})
export class NavbarComponent {

}
