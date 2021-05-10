import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueNumberBoardComponent } from './unique-number-board.component';

describe('UniqueNumberBoardComponent', () => {
  let component: UniqueNumberBoardComponent;
  let fixture: ComponentFixture<UniqueNumberBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueNumberBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueNumberBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
