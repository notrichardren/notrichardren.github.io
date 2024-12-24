import PersonalWebsite from './components/PersonalWebsite'
import './App.css'

function App() {
  try {
    return <PersonalWebsite />
  } catch (error) {
    console.error('Error rendering app:', error)
    return <div>Something went wrong</div>
  }
}

export default App