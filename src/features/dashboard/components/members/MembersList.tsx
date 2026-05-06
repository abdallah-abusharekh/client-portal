import MemberItem from "./MemberItem";

type BaseMember = {
  id: string;
  name: string;
  avatar: string;
  role?: string;
};

type Props<T extends BaseMember> = {
  members: T[];
  renderExtra?: (member: T) => React.ReactNode;
};

export default function MembersList<T extends BaseMember>({
  members,
  renderExtra,
}: Props<T>) {
  return (
    <div className="space-y-6">
      {members.map((member) => (
        <MemberItem
          key={member.id}
          name={member.name}
          avatar={member.avatar}
          role={member.role}
          extra={renderExtra?.(member)}
        />
      ))}
    </div>
  );
}
