import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemListTableComponent } from './problem-list-table.component';

describe('ProblemListTableComponent', () => {
  let component: ProblemListTableComponent;
  let fixture: ComponentFixture<ProblemListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
