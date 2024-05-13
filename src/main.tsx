import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './globalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle/>
    <App />
  </>,
)
