import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter';

function Expenses(props) { //parent to child sa props 
  const [filteredYear, setFilteredYear] = useState('2020');  
   

  const filterChangedHandler = selectedYear => {
  setFilteredYear(selectedYear);
  }; 
  return (
    <div>
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
       {props.items.map((expense /* ako nemamo id stavimo pored parametra index*/) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
    </Card>
    </div>
  );
};
export default Expenses;