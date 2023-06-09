import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIButtonComponent } from './uibutton.component';

describe('UIButtonComponent', () => {
  let component: UIButtonComponent;
  let fixture: ComponentFixture<UIButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
