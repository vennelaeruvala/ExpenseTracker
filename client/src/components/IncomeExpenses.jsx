import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpenses = () => {
  const {transactions} =useContext(GlobalContext);
  
  const incomeAmount = transactions.map(transaction => (transaction.amount > 0 ? transaction.amount:0));
  const income = incomeAmount.reduce((ac,item)=> (ac+item),0).toFixed(2);

  const expenseAmount = transactions.map(transaction => (transaction.amount < 0 ? transaction.amount:0));
  const expense = Math.abs(expenseAmount.reduce((ac,item)=> (ac+item),0).toFixed(2))
;  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className='money plus'>$ {income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p id="money-minus" className='money minus'>$ {expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
