import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TriviaType } from '../model/TriviaType'

import * as TriviaService from '../services/Trivia'

const withTriviaQuestions = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      // TODO: Update amount and type will come from URL
      TriviaService.getTrivia({ amount: 5, type: TriviaType.MULTIPLE })
        .then(({ data }) => {
          setQuestions(data.results)
        })
        .catch((err) => {
          navigate('/?error')
        })
    }, [navigate])

    return <Component questions={questions} {...(props as P)} />
  }
}

export default withTriviaQuestions
