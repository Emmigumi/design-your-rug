import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFormRugComponent } from './choose-form-rug.component';

describe('ChooseFormRugComponent', () => {
  let component: ChooseFormRugComponent;
  let fixture: ComponentFixture<ChooseFormRugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFormRugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseFormRugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
