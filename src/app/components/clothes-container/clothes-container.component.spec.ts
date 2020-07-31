import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesContainerComponent } from './clothes-container.component';

describe('ClothesContainerComponent', () => {
  let component: ClothesContainerComponent;
  let fixture: ComponentFixture<ClothesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
