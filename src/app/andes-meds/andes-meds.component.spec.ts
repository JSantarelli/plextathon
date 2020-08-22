import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndesMedsComponent } from './andes-meds.component';

describe('AndesMedsComponent', () => {
  let component: AndesMedsComponent;
  let fixture: ComponentFixture<AndesMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndesMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndesMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
