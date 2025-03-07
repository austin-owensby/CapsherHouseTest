export interface Question {
    question: string;
    answers: Answer[];
    selectedAnswer?: HouseType | undefined;
}

export interface Answer {
    answer: string,
    type: HouseType | null
}

export enum HouseType {
    ChaosAndAffection = 'chaos-and-affection',
    FireForJustice = 'fire-for-justice',
    InTheBoxTruth = 'in-the-box-truth',
    LearnForever = 'learn-forever'
}