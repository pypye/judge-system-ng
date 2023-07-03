import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMainComponent } from './login-main.component';

describe('LoginComponentComponent', () => {
  let component: LoginMainComponent;
  let fixture: ComponentFixture<LoginMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
