import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsHeaderComponent } from './incidents-header.component';

describe('IncidentsHeaderComponent', () => {
  let component: IncidentsHeaderComponent;
  let fixture: ComponentFixture<IncidentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
