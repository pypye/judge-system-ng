import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemDetailMainComponent } from './problem-detail-main.component';

describe('ProblemDetailMainComponent', () => {
  let component: ProblemDetailMainComponent;
  let fixture: ComponentFixture<ProblemDetailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemDetailMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
