interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: Props) {
  if (expenses.length == 0) return null;

  return (
    <table className="w-[80%] text-sm text-left rtl:text-right border text-gray-500 mt-8">
      <thead>
        <tr className="bg-purple-700 border text-white">
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className="bg-white border-b">
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="py-2 px-5 bg-red-300 text-white rounded-full"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td className="font-bold">
            ETB{" "}
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
