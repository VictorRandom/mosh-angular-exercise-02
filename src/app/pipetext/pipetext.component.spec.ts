import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipetextComponent } from './pipetext.component';

describe('PipetextComponent', () => {
  let component: PipetextComponent;
  let fixture: ComponentFixture<PipetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipetextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
