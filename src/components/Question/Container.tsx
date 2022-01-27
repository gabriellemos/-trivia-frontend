import styled from 'styled-components'

export const Container = styled.div`
  width: min(98vw, 450px);

  .question__category {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }

  .question__content {
    margin: 1rem 0 2rem;
    text-align: center;
    font-size: 1.2rem;
    color: var(--text-primary);
  }

  .question__options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .question__item {
    flex-grow: 1;
  }
`
