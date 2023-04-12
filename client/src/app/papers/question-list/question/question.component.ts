import { Component, Input } from '@angular/core';
import { Question } from '../question.model'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
 @Input() q:any;
 @Input() isLast: boolean = false;
 @Input() question: any[] =[];
 
 constructor(){
  if(this.question.length == 0){
    this.question.push(this.q)
  }
 }
 
 addQuestion(){
    this.question.push(new Question("question "+(this.question.length +1),"description "+(this.question.length +1),["answer 1","answer 2","answer 3","answer 4"]))
 }

}
