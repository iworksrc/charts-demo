import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLineWidgetComponent } from './chat-line-widget.component';

describe('ChatLineWidgetComponent', () => {
  let component: ChatLineWidgetComponent;
  let fixture: ComponentFixture<ChatLineWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatLineWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLineWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
