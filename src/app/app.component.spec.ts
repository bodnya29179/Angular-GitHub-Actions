import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: AuthService, useValue: {} },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    componentUnderTest = fixture.componentInstance;

    authService = TestBed.inject(AuthService);
    authService.getUserData = jasmine.createSpy('getUserData').and.resolveTo();
  });

  it('should create an instance of the component', () => {
    // Arrange
    // Act
    // Assert
    expect(componentUnderTest).toBeTruthy();
  });
});
