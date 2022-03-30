import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { DocumentServiceService } from './document-service.service';
import { ServayServiceService } from './servay-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-document-surveys',
  templateUrl: './document-surveys.component.html',
  styleUrls: ['./document-surveys.component.css'],
  providers: [NgbCarouselConfig],
})
export class DocumentSurveysComponent implements OnInit, OnDestroy{
  div1: boolean = true;
  div2: boolean = false;
  documents:any;
  questions:any;
  selectedQuestion:any=[];
  pdfURL: SafeHtml=''
  constructor(private documentService: DocumentServiceService, private questionService: ServayServiceService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.documentService.getDocuments();
    this.questionService.getSurvey();
    this.documents=this.documentService['documents'];
    this.questions=this.questionService['questions'];
  // Initialize Data
    this.selectedQuestion=this.questions[0];
    this.pdfURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.documents[0]['pdfURL']+'#toolbar=0&navpanes=0');
  }

  div1Function() {
    this.div1 = true;
    this.div2 = false;
  }

  div2Function() {
    this.div2 = true;
    this.div1 = false;
  }
  changePDFSource(item:any){
      this.pdfURL=this.sanitizer.bypassSecurityTrustResourceUrl(item.pdfURL+'#toolbar=0&navpanes=0');
  }
  changesQuestions(questions:any){
    this.selectedQuestion=questions;
  }
  ngOnDestroy(){
    
  }
}
