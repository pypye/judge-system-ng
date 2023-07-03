import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemSubmitMainComponent } from './problem-submit-main.component';

describe('ProblemSubmitMainComponent', () => {
  let component: ProblemSubmitMainComponent;
  let fixture: ComponentFixture<ProblemSubmitMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemSubmitMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemSubmitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
