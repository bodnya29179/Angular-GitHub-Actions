import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentUnderTest: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    componentUnderTest = fixture.componentInstance;
    componentUnderTest.counter = 0;
  });

  it('should create an instance of the component', () => {
    // Arrange
    // Act
    // Assert
    expect(componentUnderTest).toBeTruthy();
  });

  describe('#increment', () => {
    it('should increment the counter', () => {
      // Arrange
      const previousCounter = componentUnderTest.counter;

      // Act
      componentUnderTest.increment();

      // Assert
      expect(componentUnderTest.counter).toBe(previousCounter + 1);
    });
  });

  describe('#decrement', () => {
    it('should decrement the counter', () => {
      // Arrange
      const previousCounter = componentUnderTest.counter;

      // Act
      componentUnderTest.decrement();

      // Assert
      expect(componentUnderTest.counter).toBe(previousCounter - 1);
    });
  });
});
