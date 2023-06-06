import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyle.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalStyle>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStyle>
)
