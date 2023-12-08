interface Props {
  onSelectedCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectedCategory }: Props) {
  return (
    <select
      className="w-[60%] py-4 px-3 border-2 rounded-lg border-slate-800"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertaiment">Entertaiment</option>
    </select>
  );
}

export default ExpenseFilter;
