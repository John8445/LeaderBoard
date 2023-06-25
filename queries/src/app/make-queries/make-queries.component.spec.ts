import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeQueriesComponent } from './make-queries.component';

describe('MakeQueriesComponent', () => {
  let component: MakeQueriesComponent;
  let fixture: ComponentFixture<MakeQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeQueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
