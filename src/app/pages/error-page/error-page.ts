import { Component, inject, model } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.html',
  styleUrls: ['./error-page.scss'],
  imports: [ RouterLink ]
})
export class ErrorPage {
  code = model<number>();
  message = model<string>();
  actionLabel = model<string>();
  actionRoute = model<string>();

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  /**
   * Initializes the component.
   */
  constructor() {
    this.route.data.subscribe(data => {
      if (data['code']) {
        this.code.set(data['code']);
      }
      if (data['message']) {
        this.message.set(data['message']);
      }
    });
  }
}
