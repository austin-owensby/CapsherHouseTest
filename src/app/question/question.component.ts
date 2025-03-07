import { Component, Input } from '@angular/core';
import { Question } from '../models/question';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { EmojiRendererComponent } from "../emoji-renderer/emoji-renderer.component";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatRadioModule, FormsModule, EmojiRendererComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question: Question = {
    question: '',
    answers: []
  };
}
