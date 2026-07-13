import Reveal from "../../components/Reveal";
import Pic from "../../components/Pic";
import Vid from "../../components/Vid";

export const metadata = {
  title: "Webrook × HCL Cyclothon — A Film, Not a Recap",
  description:
    "A cinematic film and a library of storytelling photographs for the HCL Cyclothon — shot like a movie, built to move people, ready for HCL to use everywhere.",
};

// storytelling stills — real frames from our race-day coverage (masonry)
const STILLS = [
  ["still-1.jpg", "The road through the hills", "misted tea estates, one rider"],
  ["still-2.jpg", "Blur and speed", "the pace, frozen"],
  ["still-3.jpg", "Grit, in black & white", "the face of the effort"],
  ["still-4.jpg", "In the bunch", "wheel to wheel"],
  ["still-5.jpg", "Speed on the bends", "the descent"],
  ["still-6.jpg", "Chasing the light", "afternoon shadows, long roads"],
  ["still-7.jpg", "The long road home", "alone with the climb"],
  ["still-8.jpg", "Off-road — Bir Billing", "the story goes to the trails"],
];

export default function HclPage() {
  return (
    <main>
      {/* ================= NAV ================= */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="nav-logo" href="#top">
            webrook<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#idea">The Idea</a>
            <a href="#film">The Film</a>
            <a href="#series">The Series</a>
            <a href="#culture">Culture</a>
            <a href="#photos">Photography</a>
            <a href="#work">Our Work</a>
            <a className="nav-cta" href="#contact">
              Talk to us
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="wrap">
          <Reveal>
            <p className="hero-eyebrow">A film pitch for the HCL Cyclothon</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="h1">
              Don’t cover the ride.{" "}
              <span style={{ color: "var(--saffron)" }}>Tell its story.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              A cinematic film and a library of storytelling photographs for the
              HCL Cyclothon — shot like a movie, built to move people, and ready
              for HCL to use everywhere. <strong>Emotion is what gets shared.</strong>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#film">
                See the vision
              </a>
              <a className="btn btn-ghost" href="#contact">
                Start the conversation
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-photo" style={{ marginBottom: 0 }}>
              <Vid className="video-cine" youtube="Mnty_Q-D_HM" label="Tour of Nilgiris 2025" />
              <p className="video-caption">
                Our work — Tour of Nilgiris 2025. This is the caliber we’d bring to the
                HCL Cyclothon.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="roadline" aria-hidden="true" />
      </header>

      {/* ================= 01 THE IDEA ================= */}
      <section className="stage" id="idea">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">01</span>
              <span className="plate-label">The idea</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Most brands film an event. We{" "}
              <span className="accent">tell its story</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              An HCL Cyclothon isn’t a race — it’s thousands of alarm clocks at
              4 AM, first-timers and veterans, a city closed to cars and opened
              to people. That deserves more than a recap reel. That deserves a
              film.
            </p>
          </Reveal>
          <div className="grid-3">
            <Reveal className="gap-card">
              <span className="gap-kicker">Why film</span>
              <h3>Every rider is a character</h3>
              <p>
                We find the human threads — the nervous first-timer, the veteran,
                the family cheering at km 20 — and weave them into one story
                with a beginning, a climb and a finish.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={100}>
              <span className="gap-kicker">Why it matters</span>
              <h3>Reels are forgotten. Films are remembered.</h3>
              <p>
                Emotion is what makes people share, what makes participants come
                back, and what makes sponsors renew. A film carries the HCL
                brand far beyond event day.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={200}>
              <span className="gap-kicker">The bonus</span>
              <h3>One shoot, a year of content</h3>
              <p>
                The film and the still library become HCL’s creative fuel for
                the whole year — social, brand, sponsor decks, print and next
                year’s campaign.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 02 THE FILM ================= */}
      <section className="stage dark" id="film">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">02</span>
              <span className="plate-label">The film</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Shot like a movie. Built to{" "}
              <span className="accent">move people</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              A 2–4 minute story film with a proper arc — cinematic camera work,
              sound design and a score — plus a punchy teaser to launch it.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 32 }}>
              <Vid className="video-cine" youtube="kGSGXaZM5Ew" label="Tour of Nilgiris 2024" />
              <p className="video-caption">
                The kind of story film we make — Tour of Nilgiris 2024, by Webrook × Man
                Made Machine. Your HCL Cyclothon film would be crafted the same way.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="cap-grid" style={{ marginTop: 44 }}>
              <div className="cap-col tech">
                <p className="cap-title">The story arc</p>
                <div className="cap-item" style={{ borderTop: "none" }}>
                  <h4>Before dawn</h4>
                  <p>The city asleep, the first lights, the nerves and the ritual of getting to the start.</p>
                </div>
                <div className="cap-item">
                  <h4>The flag drops</h4>
                  <p>Thousands move as one — the scale, the colour, the roar of the start.</p>
                </div>
                <div className="cap-item">
                  <h4>The middle miles</h4>
                  <p>Where the story lives — effort, doubt, the crowd, the small human moments.</p>
                </div>
                <div className="cap-item">
                  <h4>The finish</h4>
                  <p>Arms up, emotion, the first-timer’s tears — and the HCL brand at the heart of it.</p>
                </div>
              </div>
              <div className="cap-col media">
                <p className="cap-title">How we shoot it</p>
                <div className="cap-item" style={{ borderTop: "none" }}>
                  <h4>Cinematic, not corporate</h4>
                  <p>Cinema lenses, gimbals, drones and follow-vehicles — the same craft as a short film.</p>
                </div>
                <div className="cap-item">
                  <h4>Real characters</h4>
                  <p>We pre-scout a handful of riders to follow, so the film has faces to root for.</p>
                </div>
                <div className="cap-item">
                  <h4>Sound &amp; score</h4>
                  <p>Designed sound and a licensed score — the difference between a clip and a film.</p>
                </div>
                <div className="cap-item">
                  <h4>Brand, woven in</h4>
                  <p>HCL shows up as the enabler of the story, not as a logo bolted on the end.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 03 THE SERIES ================= */}
      <section className="stage dark" id="series">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">03</span>
              <span className="plate-label">The series</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Four cyclothons. Four films.{" "}
              <span className="accent">One journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              We pick a handful of{" "}
              <strong style={{ color: "var(--chalk)" }}>hero athletes</strong> and
              follow them across all four HCL Cyclothons — turning four separate
              events into one interlinked, four-part story series.
            </p>
          </Reveal>

          <div className="grid-3">
            <Reveal className="gap-card">
              <span className="gap-kicker">Hero athletes</span>
              <h3>Characters worth following</h3>
              <p>
                We select a few standout athletes — a first-timer, a veteran, a
                comeback story — and build their journeys as the spine of the
                series.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={100}>
              <span className="gap-kicker">Interlinked</span>
              <h3>Every edition, one arc</h3>
              <p>
                Because the same athletes recur across all four cyclothons, each
                film connects to the next — and audiences come back for the next
                episode.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={200}>
              <span className="gap-kicker">Amplified</span>
              <h3>The athletes share it too</h3>
              <p>
                Each athlete posts their own episode to their followers —
                multiplying HCL’s reach far beyond our channels, and authentically.
              </p>
            </Reveal>
          </div>

          <div className="episode-grid">
            {[
              ["01", "Episode 01", "Meet the hero athletes and their ‘why’."],
              ["02", "Episode 02", "The journey deepens — training, setbacks, comebacks."],
              ["03", "Episode 03", "A new city, a new culture, the same athletes rising."],
              ["04", "Episode 04", "The finale — where the four journeys converge."],
            ].map(([n, title, hook]) => (
              <Reveal className="episode-card" key={n}>
                <Vid label={`Episode ${n} — HCL Cyclothon`} />
                <span className="ep-badge">EP {n}</span>
                <h4>{title}</h4>
                <p>{hook}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="series-note">
              A four-part series turns four one-day events into a season of
              content — and gives sponsors a reason to stay in the story all year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 04 CULTURAL IDENTITY ================= */}
      <section className="stage dark" id="culture">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">04</span>
              <span className="plate-label">The unique ask</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              More than a race — the{" "}
              <span className="accent">soul of each city</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Our unique ask: we weave each host state’s cultural identity into
              the film. In Bengaluru, we capture what makes Bengaluru — its
              culture, its texture, its people — and let it live inside the
              documentary alongside the race.
            </p>
          </Reveal>

          <div className="grid-3">
            <Reveal className="gap-card">
              <span className="gap-kicker">A sense of place</span>
              <h3>Unmistakably its city</h3>
              <p>
                Landmarks, food, music, language, the small rituals — the things
                that make each edition feel rooted in where it happens.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={100}>
              <span className="gap-kicker">International feel</span>
              <h3>A documentary, not coverage</h3>
              <p>
                The cyclothon framed like a travel-and-sport documentary that
                could sit on a global stage — not just event footage.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={200}>
              <span className="gap-kicker">A cultural map</span>
              <h3>India, through cycling</h3>
              <p>
                Across four cities, the series becomes a portrait of India
                through the sport — distinct in every edition, never generic.
              </p>
            </Reveal>
          </div>

          <div className="culture-strip">
            {["Noida", "Chennai", "Hyderabad", "Bengaluru"].map((c, i) => (
              <Reveal key={c} delay={i * 80}>
                <Pic
                  src={`/images/hcl-culture/culture-${c.toLowerCase()}.jpg`}
                  alt={`Cultural identity — ${c}`}
                  label={`hcl-culture/culture-${c.toLowerCase()}.jpg`}
                />
                <p className="culture-cap">Culture · {c}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="series-note">
              Let’s start with one round — one cyclothon. If you love it, we take
              it across all four.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 05 PHOTOGRAPHY ================= */}
      <section className="stage" id="photos">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">05</span>
              <span className="plate-label">Storytelling photography</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Photographs that <span className="accent">tell the story</span> —
              not just document it.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Around <strong style={{ color: "var(--ink)" }}>100 storytelling
              frames</strong> per event — each shot as a still from a film,
              composed and timed for emotion. A full-resolution library, licensed
              for HCL to use across social, print, sponsor decks and next year’s
              campaign.
            </p>
          </Reveal>

          <div className="film-gallery">
            {STILLS.map(([file, title, sub], i) => (
              <Reveal className="film-still" delay={(i % 3) * 80} key={file}>
                <figure>
                  <Pic
                    src={`/images/hcl-film/${file}`}
                    alt={title}
                    label={`hcl-film/${file}`}
                  />
                  <figcaption className="still-cap">
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <span>
                      <strong style={{ color: "var(--ink)" }}>{title}</strong> — {sub}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="lede" style={{ marginTop: 30 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--slate)" }}>
                » Real frames from our race-day storytelling at the Tour of Nilgiris — the
                same eye we’d bring to the HCL Cyclothon.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 06 OUR WORK ================= */}
      <section className="stage dark" id="work">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">06</span>
              <span className="plate-label">Our work</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              We’ve told these stories before —{" "}
              <span className="accent">100M+ views</span> of proof.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Through our media partner <strong style={{ color: "var(--chalk)" }}>Man Made Machine</strong> —
              documentary-grade production with 100M+ views across sports clients — and Webrook’s
              race-day work at the Tour of Nilgiris, the Asian MTB Championship and BBCh.
            </p>
          </Reveal>

          <Reveal>
            <div className="reel-2">
              <div>
                <Vid
                  embed="https://drive.google.com/file/d/1ssEOQvBN-Bol30VZVcEpSKcuT52OmuDL/preview"
                  label="Dakar × Dhurandhar"
                />
                <p className="video-caption">Dakar × Dhurandhar — cinematic brand film</p>
              </div>
              <div>
                <Vid
                  embed="https://www.instagram.com/reel/DVsE19rkfE5/embed"
                  label="UCC documentary"
                />
                <p className="video-caption">UCC — documentary storytelling (Asian MTB)</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <a
              className="ig-link"
              href="https://www.instagram.com/man_made_machines/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 30 }}
            >
              See the work — @man_made_machines
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================= 07 WHAT YOU GET ================= */}
      <section className="stage" id="deliver">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">07</span>
              <span className="plate-label">What HCL gets</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              One shoot. A <span className="accent">full year</span> of content.
            </h2>
          </Reveal>
          <div className="deliver-grid">
            {[
              ["01", "~100 storytelling photographs", "A curated, full-resolution library per event — shot for storytelling, licensed for HCL to use anywhere."],
              ["02", "The aftermovie", "A cinematic 2–4 minute story film of the event — the centrepiece."],
              ["03", "Hero athletes", "We pick a few standout athletes and build their stories as the heart of the coverage."],
              ["04", "The four-part series", "Interlinked episodes across all four HCL Cyclothons, following the same athletes."],
              ["05", "Cultural identity layer", "Each edition rooted in its host city’s culture — an international documentary feel."],
              ["06", "Teaser + social cutdowns", "A 60s teaser plus vertical reels for Instagram, LinkedIn and YouTube Shorts."],
              ["07", "Athlete amplification", "The athletes share their episodes on their own socials — multiplying HCL’s reach."],
              ["08", "Fast turnaround", "Same-day social edits during the event, with the films delivered shortly after."],
            ].map(([n, h, p]) => (
              <Reveal className="deliver-card" key={n}>
                <span className="num">{n}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 08 CONTACT ================= */}
      <section className="stage dark contact" id="contact">
        <div className="wrap">
          <Reveal>
            <div className="plate" style={{ justifyContent: "center" }}>
              <span className="plate-num">08</span>
              <span className="plate-label">Let’s make it</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2" style={{ maxWidth: "26ch" }}>
              Let’s make the film the HCL Cyclothon{" "}
              <span className="accent">deserves</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Let’s start with one round — one cyclothon. If you love it, we build
              the full four-part series. Tell us the date and the route; we’ll
              bring the story.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="contact-links">
              <a className="btn btn-primary" href="mailto:parashramgore007@gmail.com">
                parashramgore007@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.instagram.com/man_made_machines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @man_made_machines
              </a>
              <a
                className="btn btn-ghost"
                href="https://webrook.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                webrook.in
              </a>
            </div>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="footer" style={{ marginTop: 60 }}>
            <span>webrook × man made machine — storytelling for sport</span>
            <span>Film pitch for the HCL Cyclothon · 2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
