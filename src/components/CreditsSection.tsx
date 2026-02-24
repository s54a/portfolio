import Link from "next/link";

export function CreditsSection() {
  return (
    <section className="text-muted-foreground mt-24 text-center text-sm">
      <p>
        Built using the{" "}
        <a
          href="https://magicui.design"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline"
        >
          Magic UI
        </a>{" "}
        portfolio template by{" "}
        <a
          href="https://github.com/dillionverma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline"
        >
          Dillion Verma
        </a>
        .
      </p>
    </section>
  );
}
