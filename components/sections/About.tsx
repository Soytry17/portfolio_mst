import { profile, techStack } from "@/lib/data";

export default function About() {
  const [headingMain, headingRest] = splitAboutHeading(profile.aboutHeading);

  return (
    <section id="about" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          01 / About
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left — headline + bio */}
        <div className="flex flex-col gap-8">
          <h2
            className="font-serif font-bold text-[#f0ede6] leading-tight"
            style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
          >
            {headingMain}
            {headingRest && (
              <>
                <br />
                <em className="italic text-[#c8a96e]">{headingRest}</em>
              </>
            )}
          </h2>

          <p className="text-[16px] leading-[1.8] text-[#b0aea6] font-normal">
            {profile.aboutBody}
          </p>

          {/* Contact row */}
          <div className="flex items-center gap-6 pt-2 border-t border-white/[0.07]">
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-[12px] tracking-[0.08em] text-[#b0aea6] hover:text-[#c8a96e] transition-colors no-underline"
            >
              {profile.email} →
            </a>
            <span className="w-px h-3.5 bg-white/[0.07]" />
            <span className="font-mono text-[12px] tracking-[0.08em] text-[#b0aea6]">
              {profile.location}
            </span>
          </div>
        </div>

        {/* Right — tech stack */}
        <div className="flex flex-col gap-7">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#c8a96e]">
            Tech Stack
          </span>
          {techStack.map((cat) => (
            <div key={cat.category} className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#b0aea6]/70">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/20 px-2.5 py-1.5 rounded-sm hover:bg-[#c8a96e]/[0.14] transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function splitAboutHeading(heading: string): [string, string] {
  const parts = heading.split(", ");
  if (parts.length < 2) return [heading, ""];
  return [parts[0] + ",", parts.slice(1).join(", ")];
}
