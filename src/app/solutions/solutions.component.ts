import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {

  paramValue: any;
  user: any;
  question: any;

  constructor(
    private _router: ActivatedRoute,
    private _questionService: QuestionService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getQuestion();
  }

  public getQuestion() {
    this._questionService.getQuestionById(this.paramValue).subscribe((res) => {
      console.log(res);
      this.question = res[0];
    });
  }

  public getParam() {
    this._router.params.subscribe(params => {
      this.paramValue = params['question-id'];
    });
  }

  public getUser() {
    this.user = this._userService.user.username;
  }

}
