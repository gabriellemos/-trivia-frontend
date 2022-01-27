import { TriviaType } from "../model/TriviaType";

export interface ITrivia {
  _id: string,
  category: string
  type: TriviaType
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
}
