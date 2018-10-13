import styled from 'src/styles/styled-components'

export const StyledTextButton = styled.button`
  border: 0;
  outline: none;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.textSecondary}
`