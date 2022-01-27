import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: min(98vw, 450px);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .title {
    font-size: 1.4rem;
  }

  .summary {
    font-size: 1.2rem;
  }

  .error {
    color: var(--wrong-answer)
  }
`
