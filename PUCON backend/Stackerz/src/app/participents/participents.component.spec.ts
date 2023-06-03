import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipentsComponent } from './participents.component';

describe('ParticipentsComponent', () => {
  let component: ParticipentsComponent;
  let fixture: ComponentFixture<ParticipentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
