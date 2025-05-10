import { StrictMode } from 'react'
import {HeroUIProvider} from "@heroui/system";
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <App className="bg-black"/>
    </HeroUIProvider>
  </StrictMode>,
)
