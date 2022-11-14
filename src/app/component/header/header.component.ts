import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerItems = [
    {
      path: '/planner',
      title: 'Planner',
    },
    {
      path: '/users',
      title: 'Users',
    },
    {
      path: '/register',
      title: 'Register',
    },
    {
      path: '/login',
      title: 'Login',
    },
  ];
}
