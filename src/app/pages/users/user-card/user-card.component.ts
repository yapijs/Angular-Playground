import { Component, Input } from '@angular/core';

import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input()
  user?: User;
  // users$ = this.userService.getUsers();
  //
  // constructor(private userService: UserService) {}
}
