import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksList } from './ebooks-list';

describe('EbooksList', () => {
  let component: EbooksList;
  let fixture: ComponentFixture<EbooksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbooksList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbooksList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
