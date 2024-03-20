/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormDefault = ({ handleSubmit, handleInputChange, todo }: any) => {
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={todo.name}
            onChange={handleInputChange}
            placeholder="Add a new todo"
          />
        </div>
      </div>
    </form>
  );
};

export default FormDefault;
