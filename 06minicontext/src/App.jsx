import UserContextProvider from './context/UserContextProvider'
import Login from '../../05passwordGenerator/src/components/Login'
import Profile from '../../05passwordGenerator/src/components/Profile'
import './App.css'


function App() {
 

  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
