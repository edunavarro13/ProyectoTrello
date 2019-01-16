import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloPageComponent } from './trello-page.component';

describe('TrelloPageComponent', () => {
  let component: TrelloPageComponent;
  let fixture: ComponentFixture<TrelloPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
