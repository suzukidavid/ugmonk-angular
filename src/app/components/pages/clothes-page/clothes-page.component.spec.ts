import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesPageComponent } from './clothes-page.component';

describe('ClothesPageComponent', () => {
  let component: ClothesPageComponent;
  let fixture: ComponentFixture<ClothesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
