import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformedConsentPrintComponent } from './informed-consent-print.component';

describe('InformedConsentPrintComponent', () => {
  let component: InformedConsentPrintComponent;
  let fixture: ComponentFixture<InformedConsentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformedConsentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformedConsentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
