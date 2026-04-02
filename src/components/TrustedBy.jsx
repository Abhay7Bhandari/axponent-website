import FadeSection from "./FadeSection";

export default function TrustedBy() {
  return (
    <FadeSection>
      <section className="py-10 px-4 text-center">
        <p
          className="text-xl md:text-2xl font-display font-semibold text-white"
          style={{ fontSize: "60px" }}
        >
          Trusted by{" "}
          <span className="text-[#007BFF]">200+ Brand Partners.</span>
        </p>
      </section>
    </FadeSection>
  );
}
