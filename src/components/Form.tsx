import { z } from "zod";
import categories from "./shared/Categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3).max(80),
  amount: z.number().min(1).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(() => console.log("form submission"))}>
      <div className="mb-3 w-[40%]">
        <label htmlFor="name">Description</label>
        <input
          {...register("description")}
          id="name"
          type="text"
          placeholder="Enter a name"
          className="block border-2 border-[#343434b7] rounded-md py-2 px-4 mt-2 w-full "
        />
        {errors.description && (
          <p className="text-red-400 font-bold text-sm">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-3 w-[40%]">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          placeholder="Enter age"
          className="block border-2 border-[#343434b7] rounded-md  py-2 px-4 mt-2 w-full "
        />
        {errors.amount && (
          <p className="text-red-400 font-bold text-sm">
            {errors.amount.message}
          </p>
        )}
      </div>
      <div className="mb-3 w-[40%]">
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          id="category"
          className="block border-2 border-[#343434b7] rounded-md  py-2 px-4 mt-2 w-full"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-400 font-bold text-sm">
            {errors.category.message}
          </p>
        )}
      </div>

      <button className="py-2 px-4 bg-slate-950 text-white rounded-lg shadow-md mt-4 mb-6">
        Add Expense
      </button>
    </form>
  );
}

export default Form;
