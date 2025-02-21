import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
import './App.css'


function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
