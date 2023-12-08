import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 123, categories: "Utility" },
    { id: 2, description: "bbb", amount: 256, categories: "Shopping" },
    { id: 3, description: "ccc", amount: 353, categories: "Tecch" },
  ]);

  return (
    <div className="max-w-[1200px] mx-auto mt-12">
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
    </div>
  );
}

export default App;
