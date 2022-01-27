import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TriviaType } from '../model/TriviaType'

import * as TriviaService from '../services/Trivia'

const withTriviaQuestions = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const [questions, setQuestions] = useState([])
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const amount = useMemo(() => {
      try {
        return parseInt(searchParams.get('amount') || '5')
      } catch {
        return 5
      }
    }, [searchParams])

    useEffect(() => {
      // TODO: Update amount and type will come from URL
      TriviaService.getTrivia({ amount, type: TriviaType.MULTIPLE })
        .then(({ data }) => {
          setQuestions(data.results)
        })
        .catch((err) => {
          navigate('/?error')
        })
    }, [amount, navigate])

    return <Component questions={questions} {...(props as P)} />
  }
}

export default withTriviaQuestions
