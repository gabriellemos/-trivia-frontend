import styled from 'styled-components'

interface ContainerProps {
  isLoading: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'end')};

  .loader,
  .progress {
    text-align: center;
  }
`

export const QuestionContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ease-in-out 0.6s, opacity step-end 1s;

  width: 100vw;
  height: 100vh;

  &.status--pending {
    transform: translateX(-150vh);
  }

  &.status--resolved {
    transform: translateX(150vh);
    opacity: 0;
  }
`
