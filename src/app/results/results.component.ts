import { Component, Input } from '@angular/core';
import { HouseType, Question } from '../models/question';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  @Input() questions: Question[] = [];

  name = localStorage.getItem('name') ?? 'unknown employee';

  chaosAndAffectionCount = 0;
  fireForJusticeCount = 0;
  inTheBoxTruth = 0;
  learnForever = 0;
  result: HouseType | null = null;

  rigged = false;

  ngAfterContentInit() {
    this.result = this.getResult();
  }

  getResult() {
    if (this.questions.length == 0) {
      return null;
    }
    
    const answers = this.questions.slice(1).map(q => q.selectedAnswer);
    this.chaosAndAffectionCount = answers.filter(a => a == HouseType.ChaosAndAffection).length;
    this.fireForJusticeCount = answers.filter(a => a == HouseType.FireForJustice).length;
    this.inTheBoxTruth = answers.filter(a => a == HouseType.InTheBoxTruth).length;
    this.learnForever = answers.filter(a => a == HouseType.LearnForever).length;
    
    if (this.questions[0].selectedAnswer != null) {
      this.rigged = true;
      return this.questions[0].selectedAnswer;
    }

    const values = [
      {
        count: this.chaosAndAffectionCount,
        type: HouseType.ChaosAndAffection
      }, 
      {
        count: this.fireForJusticeCount,
        type: HouseType.FireForJustice
      },
      {
        count: this.inTheBoxTruth,
        type: HouseType.InTheBoxTruth
      },
      {
        count: this.learnForever,
        type: HouseType.LearnForever
      }
    ];

    const max = Math.max(...values.map(v => v.count));

    const results = values.filter(v => v.count == max).map(v => v.type);

    if (results.length == 1) {
      // There is a clear winner, select it
      return results[0];
    }

    // There's not a clear winner, randomly select one but do it in a repeatable way by seeding the user's name
    let seed = 0;
    for (let i = 0; i < this.name.length; i++) {
      seed += this.name.charCodeAt(i);
    }

    let index = seed % results.length;
    return results[index];
  }
}
