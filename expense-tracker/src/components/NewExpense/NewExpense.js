import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseHandler={props.addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
