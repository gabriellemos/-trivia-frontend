import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import * as Card from '../../components/Card'
import { Button } from '../../components/Button'
import { Container, Result } from './Styles'
import { ITrivia } from '../../interface/ITrivia'

interface IResults {
  questions: ITrivia[]
  results: boolean[]
}

const Results = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { questions, results } = useMemo(() => {
    return location.state as IResults
  }, [location.state])

  const score = useMemo(() => {
    return results.reduce((acc, isCorrect) => {
      if (isCorrect) {
        acc++
      }
      return acc
    }, 0)
  }, [results])

  return (
    <Container>
      <p className="score">
        You scored {score} / {questions.length}
      </p>
      <Card.Container className="noPaddingX">
        <table>
          <tbody>
            {questions.map((question, index) => {
              const answer = results[index] ? '✓' : '✗'
              return (
                <Result key={question._id} isCorrect={results[index]}>
                  <td className="result__answer">{answer}</td>
                  <td className="result__content">{question.question}</td>
                </Result>
              )
            })}
          </tbody>
        </table>
      </Card.Container>
      <Button onClick={() => navigate('/')}>PLAY AGAIN?</Button>
    </Container>
  )
}

export default Results
