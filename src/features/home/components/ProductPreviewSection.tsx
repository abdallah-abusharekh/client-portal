import { Container } from "@/src/shared/components/Container";
import Image from "next/image";

export function ProductPreviewSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col items-center">
        <div className="relative w-full max-w-6xl">
          <div className="flex items-center bg-[#1e293b] px-4 rounded-t-xl h-10">
            <div className="flex gap-2">
              <span className="bg-red-400 rounded-full w-3 h-3"></span>
              <span className="bg-yellow-400 rounded-full w-3 h-3"></span>
              <span className="bg-green-400 rounded-full w-3 h-3"></span>
            </div>
          </div>
          <div className="relative rounded-b-xl overflow-hidden">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="Client Portal Dashboard"
              width={1600}
              height={900}
              className="w-full object-cover"
              priority
            />
            <div className="bottom-0 absolute inset-x-0 bg-linear-to-b from-transparent to-background h-40"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
