import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Github Actions App</h1>

    <ng-container *ngIf="!isLoading; else loading">
      <div *ngIf="!user; else userInfo">
        <button (click)="loginViaGoogle()">Login with Google</button>
        <button (click)="loginViaFacebook()">Login with Facebook</button>
      </div>
    </ng-container>
    
    <ng-template #userInfo>
      <div>ID: {{ user.uid }}.</div>
      
      <div>Name: {{ user.displayName }}.</div>
      
      <div>Email: {{ user.email }}.</div>
      
      <div *ngIf="user.phoneNumber">Phone: {{ user.phoneNumber }}.</div>

      <div *ngIf="user.emailVerified">Email verification: {{ user.emailVerified }}.</div>

      <div *ngIf="user.photoURL">
        <p>Avatar:</p>
        <img [src]="user.photoURL" alt="Avatar"/>
      </div>
      
      <button (click)="logout()">Logout</button>
    </ng-template>

    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [`
    :host {
      background-color: darkcyan;
      display: block;
    }
  `],
})
export class AppComponent implements OnInit {
  user: firebase.User;
  isLoading = true;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.authService.getUserData();
    } catch {
      console.log('Something went wrong...');
    }

    this.isLoading = false;
  }

  async loginViaGoogle(): Promise<void> {
    const userCredentials = await this.authService.loginViaGoogle();
    this.user = userCredentials.user;
  }

  async loginViaFacebook(): Promise<void> {
    const userCredentials = await this.authService.loginViaFacebook();
    this.user = userCredentials.user;
  }

  logout(): void {
    this.authService.logout();
    this.user = null;
  }
}
