import React, { useMemo } from 'react'

import * as Card from '../Card'
import { Button } from '../Button'
import { Container } from './Container'
import { ITrivia } from '../../interface/ITrivia'

import { shuffle } from '../../utils'

interface IQuestion {
  value: ITrivia
  onResponse: (isCorrect: boolean) => void
}

interface IOptions {
  value: string
  correct: boolean
}

const Question = <P extends object>({
  value,
  onResponse,
  ...props
}: IQuestion & P) => {
  const options: IOptions[] = useMemo(() => {
    return shuffle([
      { value: value.correctAnswer, correct: true },
      ...value.incorrectAnswers.map((value) => {
        return { value, correct: false }
      })
    ])
  }, [value])

  return (
    <Container {...props}>
      <p className="question__category">{value.category}</p>
      <Card.Container>
        <p className="question__content">{value.question}</p>
        <div className="question__options">
          {options.map((option, index) => {
            return (
              <Button
                key={index}
                className="question__item"
                onClick={() => onResponse(option.correct)}
              >
                {option.value}
              </Button>
            )
          })}
        </div>
      </Card.Container>
    </Container>
  )
}

export default Question
