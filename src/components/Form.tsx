import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

function Form({}: Props) {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form>
      <div className="mb-3 w-[40%]">
        <label htmlFor="name">Description</label>
        <input
          type="text"
          placeholder="Enter a name"
          className="block border-2 border-[#343434b7] rounded-md py-2 px-4 mt-2 w-full "
        />
      </div>
      <div className="mb-3 w-[40%]">
        <label htmlFor="name">Age</label>
        <input
          type="number"
          placeholder="Enter age"
          className="block border-2 border-[#343434b7] rounded-md  py-2 px-4 mt-2 w-full "
        />
      </div>

      <button className="py-2 px-4 bg-slate-950 text-white rounded-lg shadow-md mt-6">
        Submit
      </button>
    </form>
  );
}

export default Form;
