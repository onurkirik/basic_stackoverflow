import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  question: string = "";
  questionList: Array<any> = [];

  constructor(public _questionService: QuestionService, public _userService: UserService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  public createQuestion() {
    this._questionService.postQuestions({
      username: this._userService.user.username,
      question: this.question,
      solutions: []
    }).subscribe((res) => {
      this.questionList.push(res);
    })
  }

  public getQuestions() {
    this._questionService.getQuestions().subscribe((res) => {
      this.questionList = res;
    });
  }

}
