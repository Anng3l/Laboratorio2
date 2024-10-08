import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/main'
//import PokemonSearch from './components/PokemonSearch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>,
)
