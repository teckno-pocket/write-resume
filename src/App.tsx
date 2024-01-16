import './App.css'
import ResumeGeneratorPage from './components/ResumeGenerator'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()
function App() {
    return (
    <ThemeProvider theme={theme}>
         <ResumeGeneratorPage />
    </ThemeProvider>
    )
}

export default App
