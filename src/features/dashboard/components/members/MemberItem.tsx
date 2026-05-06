import Image from "next/image";

type Props = {
  name: string;
  avatar: string;
  role?: string;
  extra?: React.ReactNode;
};

export default function MemberItem({ name, avatar, role, extra }: Props) {
  return (
    <div className="flex justify-between items-center hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div>
          <p className="font-medium text-sm">{name}</p>

          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>

      {extra}
    </div>
  );
}
