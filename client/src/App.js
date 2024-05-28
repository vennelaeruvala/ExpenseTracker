import './App.css';
import AddTransaction from './components/AddTransaction.jsx';
import Balance from './components/Balance.jsx';
import Header from './components/Header.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import TransactionList from './components/TransactionList.jsx';
import {GlobalProvider} from './context/GlobalState.jsx';
function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>

      </div>
    </GlobalProvider>
  );
}

export default App;
