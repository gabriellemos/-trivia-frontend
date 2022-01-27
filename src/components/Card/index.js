import styled from 'styled-components'

export const Container = styled.article`
  background: var(--background-paper);
  border-radius: 16px;
  box-shadow: var(--shadow);
  padding: 1.4rem;

  &.noPaddingX {
    padding-left: 0;
    padding-right: 0;
  }
`

export const Header = styled.header`
  margin: 1.6rem 0;
`

export const Body = styled.div`
  margin: 3.4rem 0;
`

export const Footer = styled.footer`
  margin: 1.6rem 0 0.6rem;
`
