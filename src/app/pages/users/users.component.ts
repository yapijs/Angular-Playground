import { Component, OnInit } from '@angular/core';

import { Subject, Subscription, takeUntil } from 'rxjs';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  //users: User[] = [];
  usersSubscription$?: Subscription;
  //ngDestroyed$ = new Subject<void>();

  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.usersSubscription$ = this.userService.getUsers().subscribe((users) => {
    //   this.users = users;
    // });
    // this.usersSubscription$ = this.userService
    //   .getUsers()
    //   .pipe(takeUntil(this.ngDestroyed$))
    //   .subscribe((users) => {
    //     this.users = users;
    //   });
  }

  // ngOnDestroy(): void {
  //   this.usersSubscription$?.unsubscribe();
  //   this.ngDestroyed$.next();
  //   this.ngDestroyed$.complete();
  // }
}
