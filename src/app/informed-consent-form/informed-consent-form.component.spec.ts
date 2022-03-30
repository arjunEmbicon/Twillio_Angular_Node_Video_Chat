import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformedConsentFormComponent } from './informed-consent-form.component';

describe('InformedConsentFormComponent', () => {
  let component: InformedConsentFormComponent;
  let fixture: ComponentFixture<InformedConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformedConsentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformedConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
