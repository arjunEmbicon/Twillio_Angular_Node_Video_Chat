export interface ISurveyQuestions {
    questionName:any;
    description:string;
    category:string;
    updatedAt: Date,
  
}

 export interface IQusetions{
    question:string,
    answers:ISurveyQuestionAnswers[];
    isChecked:Boolean 
 }
export interface ISurveyQuestionAnswers {
    answer:string,
    isChecked:Boolean
}


