import {Component} from '@angular/core';

@Component({

  selector: `error`,
  template: `
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-uppercase text-secondary mb-0">Error !</h2>
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
    <div class="container xd-container"><h2>Something happened...</h2>
  <p>Expected: controller used to showcase what happens when an exception is thrown</p>
</div>`
})
export class ErrorComponent {

}
