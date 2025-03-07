import { Component } from '@angular/core';
import { HouseType, Question } from '../models/question';
import { QuestionComponent } from "../question/question.component";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionComponent, MatButtonToggleModule, FormsModule, ResultsComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
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

  readonly currentQuestion = 0;
  
  readonly questions: Question[] = [{
    question: 'Do you want to just guarantee a result instead of getting the result of the quiz?',
    answers: [
      {
        answer: ':chaos-and-affection:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':fire-for-justice:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':in-the-box-truth:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':learn-forever:',
        type: HouseType.LearnForever
      },
      {
        answer: 'No',
        type: null
      }
    ]
  },{
    question: 'You see your podmate has left their computer unlocked, what do you do?',
    answers: [
      {
        answer: 'Post something chaotic in Pods for them to find later',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Let your other podmates know, and mass swarm the computer to change the background before they get back',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Nothing',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Report them to Damian for failing to have proper cyber security/privacy practices',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'A :sleeping_parrot: emote chain has just started in the pods. What do you respond with?',
    answers: [
      {
        answer: ':sleeping_parrot:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':ultra_fast_parrot:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':peepo_juice:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'No response',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Which frog are you?',
    answers: [
      {
        answer: ':frog:<br>:drip:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':frog:<br>:the-shirt:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':frog:<br>:jeans:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':frog:<br>:shirt:',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'When adding/requesting a new emote to the workspace, what is most important to consider?',
    answers: [
      {
        answer: 'It is useful for creating murals',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'The Emote is Funny',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Me want emote',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'It fills an unoccupied communication niche',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Select your favorite of the following party parrots',
    answers: [
      {
        answer: ':right_parrot:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':parrot_shrug:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':quad_parrot:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':hmm_parrot:',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Select your favorite \'Josh\' Emoji from below',
    answers: [
      {
        answer: ':josh-popdart:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':josh-abhorred:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':josh-devious-plotting:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':josh:',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'A man approaches you carrying a pack of hot dogs in hand, muttering something about "going viral with this one". Do you',
    answers: [
      {
        answer: 'Ask if he can spare a hot dog',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Ask if he wants mustard for those dogs',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Avoid him, but watch with intrigue when clear',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Ask him what he\'s doing, but prepare an escape plan',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'You see a funny reaction on a message in #thepods, what do you do?',
    answers: [
      {
        answer: 'Click it and add more reactions to build on the joke',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Just click it, the joke doesn\'t need additions',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Click it and point it out to a friend',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Laugh to yourself',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'You notice a message from a new Slackbot in #thepods, do you',
    answers: [
      {
        answer: 'Thank someone for making it',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Start spamming emotes to see if you can trigger it',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Ask who made it and how to start it',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Pull up the workflow builder and start searching for it\'s source code',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'You see a message in #general, do you',
    answers: [
      {
        answer: ':slightly_smiling_face:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':thanks-grant-and-damian-for-letting-us-use-slack-gifs-they-are-very-cool:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':thanks-damian-ill-be-on-the-lookout-for-that-email-and-let-you-know-if-i-have-questions:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':thanks-for-letting-us-know-damian-ill-be-sure-to-take-care-of-the-new-ninjio-training-soon:',
        type: HouseType.LearnForever
      },
    ]
  },{
    question: 'The League of Brians is coming for you, do you',
    answers: [
      {
        answer: 'Use the element of surprise by turning around and giving purple Brian a big hug',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Summon the ghosts of podlings past to aid you in your battle',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Pull out your excellent work breakdown to distract them',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Not notice they are coming at all; you\'re too deep in documentation',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Josh is eating red velvet cake with queso cheese on top. Do you',
    answers: [
      {
        answer: 'Encourage other people to try this unique snack',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Shame him for the culinary monstrosity',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Try some. Fortune favors the brave',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Ask him what inspired such creativity',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Someone sends something terrible and stops thepods dead in its tracks, do you?',
    answers: [
      {
        answer: ':cooked:',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: ':overcooked:',
        type: HouseType.FireForJustice
      },
      {
        answer: ':really-now:',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: ':really-dead:',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'What is this emoji? :really-happy:',
    answers: [
      {
        answer: 'Really happy',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Really dead inside',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Happy',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Dead inside',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'Time to focus up! Do you',
    answers: [
      {
        answer: 'Listen to something you know every word to',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Random playlist',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Locally-sourced Ambient Office Sounds',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Soundtracks / Instrumental',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'You hear a lot of noise from the next pod over while your working, Do you:',
    answers: [
      {
        answer: 'Join in on the racket',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Ask them to please quiet down a little',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Just Ignore it and continue working',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Put Headphones on and continue working',
        type: HouseType.LearnForever
      }
    ]
  },{
    question: 'You\'re playing the hit game Magic The Gathering :tm: (of which we have the channel #mtg) and are about to lose! What do you do?',
    answers: [
      {
        answer: 'Try to cause as much trouble as possible in a final blaze of glory',
        type: HouseType.ChaosAndAffection
      },
      {
        answer: 'Get revenge on the person that did the most damage to you',
        type: HouseType.FireForJustice
      },
      {
        answer: 'Attempt to help one of your fellow players win in your stead',
        type: HouseType.InTheBoxTruth
      },
      {
        answer: 'Do everything you can in a last ditch attempt to win',
        type: HouseType.LearnForever
      }
    ]
  }];
}
