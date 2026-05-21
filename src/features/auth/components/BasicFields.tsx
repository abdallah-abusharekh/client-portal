import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export default function BasicFields<T extends FieldValues>({
  register,
  errors,
}: Props<T>) {
  return (
    <>
      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Email Address</label>

        <div className="flex items-center bg-white px-3 py-2 border border-gray-300 rounded-lg ring-1 ring-primary focus-within:ring-2 transition">
          <FiMail className="mr-2 text-gray-400" />

          <input
            type="email"
            placeholder="email@example.com"
            className="outline-none w-full"
            {...register("email" as any)}
          />
        </div>

        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Password</label>

        <div className="flex items-center bg-white px-3 py-2 border border-gray-300 rounded-lg ring-1 ring-primary focus-within:ring-2 transition">
          <FiLock className="mr-2 text-gray-400" />

          <input
            type="password"
            placeholder="Enter password"
            className="outline-none w-full"
            {...register("password" as any)}
          />
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message as string}
          </p>
        )}
      </div>
    </>
  );
}
