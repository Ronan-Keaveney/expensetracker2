import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSettingComponent } from './budget-setting.component';

describe('BudgetSettingComponent', () => {
  let component: BudgetSettingComponent;
  let fixture: ComponentFixture<BudgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
