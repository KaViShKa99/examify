import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {

  question : Question[] = [
    new Question("question 1","description 1",["answer 1","answer 2","answer 3","answer 4"])
  ] 
 
}
