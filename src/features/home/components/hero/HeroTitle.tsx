export function HeroTitle() {
  return (
    <>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:text-center leading-tight">
        <div className="line" style={{ animationDelay: "0s" }}>
          Where Clients and <span className="text-primary">Freelancers</span>
        </div>
        <div className="line" style={{ animationDelay: "0.15s" }}>
          Build Success Together
        </div>
      </h1>
    </>
  );
}
