import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResividorComponent } from './resividor.component';

describe('ResividorComponent', () => {
  let component: ResividorComponent;
  let fixture: ComponentFixture<ResividorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResividorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResividorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
