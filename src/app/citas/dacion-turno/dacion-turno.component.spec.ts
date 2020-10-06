import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DacionTurnoComponent } from './dacion-turno.component';

describe('DacionTurnoComponent', () => {
  let component: DacionTurnoComponent;
  let fixture: ComponentFixture<DacionTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DacionTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DacionTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
