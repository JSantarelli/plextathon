import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndesRunComponent } from './andes-run.component';

describe('AndesRunComponent', () => {
  let component: AndesRunComponent;
  let fixture: ComponentFixture<AndesRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndesRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndesRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
