import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav
      class="navbar navbar-expand navbar-light c-header justify-content-between p-3"
    >
      <a class="navbar-brand" [routerLink]="['/']">{{ pageTitle }}</a>
    </nav>
    <main>
      <div class="container-fluid p-3 mt-5 pt-2">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle = 'Angular Sessions';
  // pageTitle = 'Our Logo';
}
