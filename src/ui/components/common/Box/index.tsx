import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: var(--gray4);
  box-shadow: var(--shadow);
  border-radius: 15px;
`

type BoxProps = {
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

export const Box = (props: BoxProps): React.ReactElement => {
  const { className, children } = props

  return <Wrapper className={className}>{children}</Wrapper>
}
