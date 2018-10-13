import * as React from 'react'

import { StyledTextButton } from './styles'

interface TextButtonProps {
  children: string
  onClick: () => void
}

const TextButton: React.SFC<TextButtonProps> = ({ children, onClick }) => (
  <StyledTextButton onClick={onClick}>{children}</StyledTextButton>
)

export default TextButton