import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FC } from 'react';
import Container from '@mui/material/Container'
import './style.scss';

interface GlobalStyleProps {
  children: React.ReactNode
}

const GlobalStyle:FC<GlobalStyleProps> = (props) => {
  const { children } = props
  return(
    <>
      <Container maxWidth={'xl'} >
        { children }
      </Container>
    </>
  )
}

export default GlobalStyle;