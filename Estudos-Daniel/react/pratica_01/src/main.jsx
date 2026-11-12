import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Espressoes from './expressoes'
import Saudacao from './saudacao'
import Cartao from './cartao'
import Contador from './contador'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Espressoes />
    <Saudacao />
    
    <Cartao titulo="teclado" preco={190} />
    <Cartao titulo="mouse" preco={200} />

    <Contador/>
  </StrictMode>,
)
