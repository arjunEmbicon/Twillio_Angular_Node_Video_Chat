import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDocuments } from './idocuments';
import { ISurveyQuestions,ISurveyQuestionAnswers} from './isurvey-questions';
import { DocumentServiceService } from './document-service.service';

@Injectable({
  providedIn: 'root'
})


export class DocumentSurveysServiceService {

  private documents: IDocuments[]=[];
  private documentSubject = new Subject<{
    documents: IDocuments[];
  }>();

  constructor( ) { 
   
  }

  documentUpdateListner(){
    this.documentSubject.asObservable();
  }
  getDocuments(){
    this.documents.push({
     
      category:'Safety',
      description:'STUDY SAFETY MANUAL FOR PARENTS - REVISED IN JUNE 2021',
      updatedAt: new Date(),
      pdfURL:'https://www.clickdimensions.com/links/TestPDFfile.pdf',

    });
    this.documents.push({
      
      category:'Safety',
      description:'STUDY SAFETY MANUAL FOR PARENTS - REVISED IN JUNE 2021',
      updatedAt: new Date(),
      pdfURL:'https://www.clickdimensions.com/links/TestPDFfile.pdf'
    });
  }
}
