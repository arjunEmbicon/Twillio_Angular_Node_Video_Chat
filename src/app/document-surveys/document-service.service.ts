import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDocuments } from './idocuments';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  private documents: IDocuments[]=[];
  private documentSubject = new Subject<{
    documents: IDocuments[];
  }>();

  constructor() { }

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
      
      category:'Recording Media',
      description:'SRECORDING VIDEOS & TAKING PHOTOS YOUR CHILD’S PROGRESS',
      updatedAt: new Date(),
      pdfURL:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    });
    return this.documents
    // this.documentSubject.next({
    //    documents:[...this.documents]
    // })
  }
}
