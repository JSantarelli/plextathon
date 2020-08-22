import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndesTriageComponent } from './andes-triage.component';

describe('AndesTriageComponent', () => {
  let component: AndesTriageComponent;
  let fixture: ComponentFixture<AndesTriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndesTriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndesTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
