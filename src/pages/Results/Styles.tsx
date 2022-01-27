import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: min(98vw, 450px);
  min-height: 100vh;
  margin: auto;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .score {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
`

interface ResultProps {
  isCorrect: boolean
}

export const Result = styled.tr<ResultProps>`
  .result__answer,
  .result__content {
    padding: 0.4rem;
    font-size: 1.2rem;
  }

  .result__content {
    padding-right: 1rem;
  }

  .result__answer {
    color: var(
      ${({ isCorrect }) => (isCorrect ? '--right-answer' : '--wrong-answer')}
    );
    text-align: center;
    font-weight: bold;
    font-size: 0;

    &:first-letter {
      font-size: 1.2rem;
    }
  }

  &:nth-child(2n) {
    background: var(--button-hover);
  }
`
