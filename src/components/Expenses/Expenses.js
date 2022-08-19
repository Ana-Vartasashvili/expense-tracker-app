import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

function Expenses(props) {
  const { expenses } = props;

  const [filteredYear, changeFilteredYear] = useState("2021");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const expenseYearHandler = (year) => {
    changeFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={expenseYearHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
