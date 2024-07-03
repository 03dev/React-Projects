import { Header, Balance, IncomeExpense, History, Form } from './components/index'
import './App.css'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <div className='container flex justify-center items-center flex-col'>
        <Header />
        <div className='mr-44'>
          <Balance />
        </div>
        <IncomeExpense />
        <History />
        <Form />
      </div>
    </GlobalProvider>
  )
}

export default App
