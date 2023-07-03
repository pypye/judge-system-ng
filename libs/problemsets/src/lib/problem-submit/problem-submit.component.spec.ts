import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemSubmitComponent } from './problem-submit.component';

describe('ProblemSubmitComponent', () => {
  let component: ProblemSubmitComponent;
  let fixture: ComponentFixture<ProblemSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemSubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
