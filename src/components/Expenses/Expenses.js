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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense /* ako nemamo id stavimo pored parametra index*/) => (
      <ExpenseItem 
       key={expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
       />
       ));
  }

  return (
    <div>
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}
        />
       {expensesContent}
    </Card>
    </div>
  );
};
export default Expenses;