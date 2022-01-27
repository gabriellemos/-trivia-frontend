import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './Container'
import withTriviaQuestions from '../../utils/withTriviaQuestions'
import { ITrivia } from '../../interface/ITrivia'

interface Props {
  questions?: ITrivia[]
}

const Challenge = ({ questions = [] }: Props) => {
  const [current, setCurrent] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const navigate = useNavigate()

  const questionAmount = useMemo(() => {
    return questions.length
  }, [questions])

  useEffect(() => {
    if (questionAmount > 0 && current === questionAmount) {
      navigate('/results', { state: { questions, results } })
    }
  }, [current, navigate, questionAmount, questions, results])

  return (
    <Container isLoading={questionAmount === 0}>
      {questionAmount === 0 && <p className="loader">Loading...</p>}
      {questionAmount > 0 && current < questionAmount && (
        <p className="progress">
          {current + 1} of {questionAmount}
        </p>
      )}
    </Container>
  )
}

export default withTriviaQuestions(Challenge)
