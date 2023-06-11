import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionService extends BaseService {
    public user: any;

    constructor(private base: BaseService) {
        super(base._httpClient);
    }


    public postQuestions(questionObj: any) {
        return this.postReq('/questions', questionObj);
    }

    public getQuestions() {
        return this.getReq('/questions');
    }

    public getQuestionById(id: any) {
        return this.getReq('/questions?id=' + id)
    }

}