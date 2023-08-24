import React, { ReactNode } from 'react'
import Header from './Header'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <main>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
`

