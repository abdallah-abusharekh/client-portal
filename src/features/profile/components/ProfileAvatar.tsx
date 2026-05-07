import Image from "next/image";

export default function ProfileAvatar({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className="mb-2 border-4 border-primary rounded-full w-24 h-24 object-cover"
      width={96}
      height={96}
    />
  );
}
