import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesByCategoryComponent } from './clothes-by-category.component';

describe('ClothesByCategoryComponent', () => {
  let component: ClothesByCategoryComponent;
  let fixture: ComponentFixture<ClothesByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
