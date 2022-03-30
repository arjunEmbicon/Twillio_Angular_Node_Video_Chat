import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ISurveyQuestions,
  ISurveyQuestionAnswers,
  IQusetions,
} from './isurvey-questions';

@Injectable({
  providedIn: 'root',
})
export class ServayServiceService {
  private questions: ISurveyQuestions[] = [];
  private answers: ISurveyQuestionAnswers[] = [];
  private questionName: IQusetions[] = [];
  private questionSubject = new Subject<{
    questions: ISurveyQuestions[];
  }>();

  constructor() {}

  questiontUpdateListner() {
    this.questionSubject.asObservable();
  }
  getSurvey() {
    // Que 1
    this.answers.push({
      answer: 'Unanticipated additional harms',
      isChecked: false,
    });
    this.answers.push({
      answer: 'Invasiveness of procedures',
      isChecked: false,
    });
    this.questionName.push({
      question: 'Your Concerns in this study',
      answers: this.answers,
      isChecked: false,
    });

    this.questions.push({
      questionName: this.questionName,
      category: 'Parent Feedback',
      description: 'PARENT’s SURVEY NO. 12 - JUNE 2021',
      
      updatedAt: new Date(),
    });
     // Que 2
    this.answers = [];
    this.questionName=[];
  
    this.answers.push({
      answer: 'Visual explanation of the protocol',
      isChecked: false,
    });
    this.answers.push({
      answer: 'Face-to-face meetings with researchers',
      isChecked: false,
    });
    this.questionName.push({
      question: 'What could be done to alleviate your concerns?',
      answers: this.answers,
      isChecked: false,
    });
    this.questions.push({
      questionName: this.questionName,
      description: 'PARENT’s SURVEY NO. 11 - MAY 2021',
      category: 'Study Feedback',
      updatedAt: new Date(),
    });

    return this.questions;
  }
}
