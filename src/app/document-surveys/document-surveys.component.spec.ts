import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSurveysComponent } from './document-surveys.component';

describe('DocumentSurveysComponent', () => {
  let component: DocumentSurveysComponent;
  let fixture: ComponentFixture<DocumentSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
