import categories from "./shared/Categories";

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
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
