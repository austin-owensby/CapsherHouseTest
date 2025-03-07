import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'questions', component: QuestionsComponent }
];
