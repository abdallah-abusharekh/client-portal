import { FiLock, FiMail } from "react-icons/fi";

export default function BasicFields({
  setEmail,
  setPassword,
  email,
  password,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
}) {
  return (
    <>
      {" "}
      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Email Address</label>

        <div className="flex items-center bg-white px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary transition">
          <FiMail className="mr-2 text-gray-400" />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>
      {/* Password */}
      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Password</label>

        <div className="flex items-center bg-white px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary transition">
          <FiLock className="mr-2 text-gray-400" />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>
    </>
  );
}
