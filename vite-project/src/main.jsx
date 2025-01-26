import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserCard } from './UserCard'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/*   Uncomment the line below to see the effect  Video 1 , Video 2, Video 3 */}
{/*     <App /> */}
<UserCard />
  </StrictMode>,
)
