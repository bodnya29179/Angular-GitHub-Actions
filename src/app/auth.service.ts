import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat';

const TOKEN_KEY = 'token';
const PROVIDER = 'provider';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  loginViaGoogle(): Promise<firebase.auth.UserCredential> {
    return this.login(new GoogleAuthProvider());
  }

  loginViaFacebook(): Promise<firebase.auth.UserCredential> {
    return this.login(new FacebookAuthProvider());
  }

  async getUserData(): Promise<firebase.User | null> {
    const accessToken = localStorage.getItem(TOKEN_KEY);
    const provider = localStorage.getItem(PROVIDER);

    if (accessToken && provider) {
      let credential: firebase.auth.OAuthCredential;

      switch (provider) {
        case 'google.com':
          credential = GoogleAuthProvider.credential(undefined, accessToken);
          break;
        case 'facebook.com':
          credential = FacebookAuthProvider.credential(accessToken);
          break;
      }

      if (credential) {
        const userCredential = await this.firebaseAuth.signInWithCredential(credential);

        return userCredential.user;
      }
    }

    return null;
  }

  async logout(): Promise<void> {
    await this.firebaseAuth.signOut();
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(PROVIDER);
  }

  private async login(provider: firebase.auth.AuthProvider): Promise<firebase.auth.UserCredential> {
    const userCredential = await this.firebaseAuth.signInWithPopup(provider);

    localStorage.setItem(TOKEN_KEY, (userCredential.credential as any).accessToken);
    localStorage.setItem(PROVIDER, provider.providerId);

    return userCredential;
  }
}
