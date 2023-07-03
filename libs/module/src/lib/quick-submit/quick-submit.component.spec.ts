import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickSubmitComponent } from './quick-submit.component';

describe('QuickSubmitComponent', () => {
  let component: QuickSubmitComponent;
  let fixture: ComponentFixture<QuickSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickSubmitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
