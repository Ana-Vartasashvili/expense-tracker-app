import './ShowExpenseForm.css'
import './ExpenseForm.css'
import './ExpenseForm'

const ShowExpenseForm = (props) => {
  if (props.btnState) {
    return (
      <form onSubmit={props.onSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={props.title}
              onChange={props.onChangeTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={props.amount}
              min="0.01"
              step="0.01"
              onChange={props.onChangeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={props.date}
              min="2020-04-30"
              max="2022-12-31"
              onChange={props.onChangeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={() => props.setBtnState(!props.btnState)}>
            Cancel
          </button>
          <button type="submit">Add expense</button>
        </div>
      </form>
    )
  }

  return (
    <div className="new-expense__actions show-form-btn">
      <button type="submit" onClick={() => props.setBtnState(!props.btnState)}>
        Add expense
      </button>
    </div>
  )
}

export default ShowExpenseForm
