import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemHistoryTableComponent } from './problem-history-table.component';

describe('ProblemHistoryTableComponent', () => {
  let component: ProblemHistoryTableComponent;
  let fixture: ComponentFixture<ProblemHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemHistoryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
