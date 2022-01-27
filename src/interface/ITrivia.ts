import { TriviaType } from "../model/TriviaType";

export interface ITrivia {
  category: string
  type: TriviaType
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
}
