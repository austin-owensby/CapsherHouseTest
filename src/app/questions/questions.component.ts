import { Component } from '@angular/core';
import { HouseType, Question } from '../models/question';
import { QuestionComponent } from "../question/question.component";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from "../results/results.component";
import { MatButtonModule } from '@angular/material/button';
import { questionData } from '../models/question-data';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionComponent, MatButtonToggleModule, FormsModule, ResultsComponent, MatButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  currentQuestion = 0;
  readonly questions: Question[] = questionData;

  constructor() {
    const firstQuestion = this.questions.shift();
    this.shuffle(this.questions);

    for(const question of this.questions) {
      this.shuffle(question.answers);
    }

    if (firstQuestion) {
      this.questions.unshift(firstQuestion);
    }
  }

  allQuestionsAnswered() {
    return !this.questions.some(q => q.selectedAnswer === undefined);
  }

  shuffle(array: any[]) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }
}
