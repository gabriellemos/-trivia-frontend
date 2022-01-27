import styled from 'styled-components'

export const Container = styled.article`
  position: relative;
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

  .header__action {
    position: absolute;
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    top: 15px;
    right: 15px;
  }
`

export const Body = styled.div`
  margin: 3.4rem 0;
`

export const Footer = styled.footer`
  margin: 1.6rem 0 0.6rem;
`
