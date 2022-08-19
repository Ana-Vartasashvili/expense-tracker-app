import ShowExpenseForm from './ShowExpenseForm'
import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const [btnState, setBtnState] = useState(false)

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      date: new Date(enteredDate),
      amount: enteredAmount,
      title: enteredTitle,
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

    setBtnState(false)
  }

  return (
    <ShowExpenseForm
      onChangeTitle={titleChangeHandler}
      onChangeAmount={amountChangeHandler}
      onChangeDate={dateChangeHandler}
      onSubmit={submitHandler}
      title={enteredTitle}
      date={enteredDate}
      amount={enteredAmount}
      btnState={btnState}
      setBtnState={setBtnState}
    />
  )
}

export default ExpenseForm
