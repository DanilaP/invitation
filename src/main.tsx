import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import UsersTable from './components/partials/users-table.tsx'
import Main from './components/partials/main.tsx'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/users/info/:pass' element={<UsersTable />}></Route>
        </Routes>
        <App />
      </StrictMode>
    </BrowserRouter>
)