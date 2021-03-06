import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Authenticate} from '../models/user';

@Component({
  selector: 'sign-in',
  template: `
    <div class="text-center">
      <div class="sign-in-container">
        <form class="form-signin" (ngSubmit)="authSubmit.next(userAuth)">
          <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label class="sr-only">Email address</label>
          <input type="email" class="form-control" name="username" placeholder="Email address" [(ngModel)]="userAuth.username" autofocus>
          <label class="sr-only">Password</label>
          <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="userAuth.password">
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .sign-in-container {
      display: -ms-flexbox;
      display: -webkit-box;
      display: flex;
      -ms-flex-align: center;
      -ms-flex-pack: center;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
    }

    .form-signin .checkbox {
      font-weight: 400;
    }

    .form-signin .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
    }

    .form-signin .form-control:focus {
      z-index: 2;
    }

    .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

  `]
})
export class SignInComponent  {

  @Output() authSubmit = new EventEmitter<Authenticate>();

  public userAuth: Authenticate = {
    username: '',
    password: ''
  };
}
