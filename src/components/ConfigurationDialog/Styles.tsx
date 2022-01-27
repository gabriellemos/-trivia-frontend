import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  
  position: fixed;
  left: 0;
  top: 0;

  .dialog__content {
    width: min(98vw, 450px);
  }
`
