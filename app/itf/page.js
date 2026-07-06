import Reveal from "../../components/Reveal";
import Counter from "../../components/Counter";
import Pic from "../../components/Pic";

export const metadata = {
  title: "Webrook × Indian Triathlon Federation — Tech + Media Proposal",
  description:
    "One partner to rebuild ITF's website, connect every sub-federation into a single athlete database, and run the media that gets triathlon seen. Proven at Tour of Nilgiris, the Asian MTB Championship and BBCH.",
};

export default function ItfPage() {
  return (
    <main>
      {/* ================= NAV ================= */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="nav-logo" href="#top">
            webrook<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#problem">The Gap</a>
            <a href="#founder">Founder</a>
            <a href="#work">Proven Work</a>
            <a href="#build">What We Build</a>
            <a href="#platform">The Platform</a>
            <a href="#partner">Media Partner</a>
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
            <p className="hero-eyebrow">
              Proposal for the Indian Triathlon Federation
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="h1">
              Tech + media for competitive triathlon.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              One partner to rebuild ITF&rsquo;s website, give every athlete a
              login, connect every sub-federation into a single national
              database, and run the media that gets triathlon seen.{" "}
              <strong>Athletes first. Builders second.</strong>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                See the proof
              </a>
              <a className="btn btn-ghost" href="#contact">
                Start the conversation
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-photo">
              <Pic
                src="/images/itf-hero/hero.jpg"
                alt="Triathlete racing at full effort"
              />
            </div>
          </Reveal>
        </div>
        <div className="roadline" aria-hidden="true" />

        {/* signature: timing board */}
        <div className="board">
          <div className="wrap">
            <div className="board-head">
              <span>Official results — Webrook, sports clients</span>
              <span>Verified on the road</span>
            </div>
            <div className="board-rows">
              <Reveal className="board-row">
                <span className="board-rank">01</span>
                <span className="board-label">
                  <strong>Total views</strong> across sports clients, last few
                  years
                </span>
                <span className="board-value">
                  <Counter value={100} suffix="" />
                  <span className="unit">M+</span>
                </span>
              </Reveal>
              <Reveal className="board-row" delay={80}>
                <span className="board-rank">02</span>
                <span className="board-label">
                  <strong>Tour of Nilgiris</strong> — Instagram followers in 8
                  months, fully organic
                </span>
                <span className="board-value">
                  2K&nbsp;&rarr;&nbsp;10.5<span className="unit">K</span>
                </span>
              </Reveal>
              <Reveal className="board-row" delay={160}>
                <span className="board-rank">03</span>
                <span className="board-label">
                  <strong>Asian MTB Championship</strong> — followers gained in
                  5 race days
                </span>
                <span className="board-value">
                  0&nbsp;&rarr;&nbsp;<Counter value={650} />
                </span>
              </Reveal>
              <Reveal className="board-row" delay={240}>
                <span className="board-rank">04</span>
                <span className="board-label">
                  <strong>Year-on-year audience growth</strong> for TFN
                </span>
                <span className="board-value">
                  +<Counter value={45} />
                  <span className="unit">%</span>
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* ================= PROBLEM ================= */}
      <section className="stage" id="problem">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">01</span>
              <span className="plate-label">The gap</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              India has triathletes in a dozen states. ITF doesn&rsquo;t have{" "}
              <span className="accent">one system</span> for them.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Every state and regional association keeps its own
              registrations, its own spreadsheets, its own history. The
              federation sees the results — never the full pipeline.
            </p>
          </Reveal>
          <div className="grid-3">
            <Reveal className="gap-card">
              <span className="gap-kicker">Gap / Technology</span>
              <h3>No centralized athlete data</h3>
              <p>
                Every sub-federation runs its own registration and records.
                ITF has no single login, no shared history, no one database
                that spans the whole country.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={100}>
              <span className="gap-kicker">Gap / Selection</span>
              <h3>Team selection runs on memory</h3>
              <p>
                Without performance data across every registered athlete,
                picking the Indian squad leans on who coaches remember — not
                who is actually peaking right now.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={200}>
              <span className="gap-kicker">Gap / Storytelling</span>
              <h3>A sport with almost no visible history</h3>
              <p>
                Indian triathletes train hard and race well, but there&rsquo;s
                no consistent digital record of it — no easy way for sponsors
                or fans to see the sport&rsquo;s story.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="stage dark" id="founder">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">02</span>
              <span className="plate-label">The person behind the pedal strokes</span>
            </div>
          </Reveal>
          <div className="partner">
            <Reveal className="partner-photo">
              <Pic
                src="/images/about/founder.jpg"
                alt="Parshuram Gore, founder of Webrook, mid-race"
              />
            </Reveal>
            <div>
              <Reveal delay={60}>
                <h2 className="h2">
                  Parshuram Gore.{" "}
                  <span className="accent">Athlete first, founder second.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede">
                  Webrook isn&rsquo;t run by an agency that discovered
                  triathlon last quarter. It&rsquo;s run by someone who has
                  actually finished one.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <ul className="partner-list">
                  <li>
                    <strong>Ironman finisher</strong> — swum, biked and run the
                    exact three disciplines ITF&rsquo;s athletes train for,
                    at full Ironman distance.
                  </li>
                  <li>
                    <strong>Raced endurance events across disciplines</strong>{" "}
                    — including the Tour of Nilgiris — so the athlete&rsquo;s-eye
                    view is built into everything we ship.
                  </li>
                  <li>
                    <strong>Sees the sport from the inside</strong> —
                    registration, race day and athlete data designed by
                    someone who has stood at the start line, not just watched
                    it.
                  </li>
                  <li>
                    <strong>Creates content himself</strong> — behind the
                    camera and in front of it, he knows what makes an audience
                    stop scrolling.
                  </li>
                </ul>
                <a
                  className="ig-link"
                  href="https://www.instagram.com/parshuram_.gore/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow the journey — @parshuram_.gore
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROVEN WORK ================= */}
      <section className="stage dark" id="work">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">03</span>
              <span className="plate-label">Proven on the road</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              We don&rsquo;t promise. We&rsquo;ve already{" "}
              <span className="accent">built this</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Centralized registration, athlete data and season-long media
              aren&rsquo;t new to us — they&rsquo;re what we already run for
              endurance sport in India.
            </p>
          </Reveal>

          {/* TFN */}
          <Reveal className="case">
            <div className="case-photo">
              <Pic
                src="/images/case-tfn/tfn.jpg"
                alt="Tour of Nilgiris peloton on a forest road"
              />
            </div>
            <div>
              <span className="case-tag">
                Case 01 — End-to-end tech &amp; marketing partner
              </span>
              <h3>Tour of Nilgiris</h3>
              <p className="case-body">
                India&rsquo;s 17-year-old flagship endurance event. We ran the
                full stack: <strong>CRM, registration portal, bike rentals,
                merchandise, remarketing, ads and live coverage</strong> — the
                same registration-and-CRM architecture ITF needs, already
                proven at national scale.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    2K <em>&rarr;</em> 10.5K
                  </div>
                  <div className="lbl">followers in 8 months, fully organic</div>
                </div>
                <div className="case-stat">
                  <div className="num">
                    +45<em>%</em>
                  </div>
                  <div className="lbl">YoY audience growth</div>
                </div>
              </div>
              <a
                className="ig-link"
                href="https://www.instagram.com/tourofnilgiris/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it live — @tourofnilgiris
              </a>
            </div>
          </Reveal>

          {/* Asian MTB */}
          <Reveal className="case">
            <div className="case-photo">
              <Pic
                src="/images/case-asian-mtb/asian-mtb.jpg"
                alt="Rider at the Asian MTB Championship"
              />
            </div>
            <div>
              <span className="case-tag">
                Case 02 — International championship scale
              </span>
              <h3>UCC, Asian MTB Championship</h3>
              <p className="case-body">
                A 5-day international event with{" "}
                <strong>registrations plus a full marketing mandate</strong>:
                same portal and CRM architecture as TFN, scaled up, with daily
                content shipped from the venue. The best performing videos on
                their channel came from our team.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    0 <em>&rarr;</em> 650
                  </div>
                  <div className="lbl">followers in just 5 race days</div>
                </div>
                <div className="case-stat">
                  <div className="num">
                    5<em> days</em>
                  </div>
                  <div className="lbl">daily edits, live from the ground</div>
                </div>
              </div>
              <a
                className="ig-link"
                href="https://www.instagram.com/uccevents.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it live — @uccevents.in
              </a>
            </div>
          </Reveal>

          {/* BBCH */}
          <Reveal className="case">
            <div className="case-photo">
              <Pic
                src="/images/case-bbch/bbch.jpg"
                alt="BBCH riders on the start line"
              />
            </div>
            <div>
              <span className="case-tag">
                Case 03 — Full website, tech &amp; media retainer
              </span>
              <h3>BBCH — Full Website, Tech &amp; Social Partner</h3>
              <p className="case-body">
                Our clearest proof that one partner can own everything a
                federation needs: <strong>the website, the registration
                system and athlete records, plus race-day photography,
                highlight reels, rider features and full social account
                management</strong> — all kept in sync with the event
                calendar.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    Full<em>-</em>time
                  </div>
                  <div className="lbl">website, registration &amp; social management</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  className="ig-link"
                  href="https://bbch-in.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the platform — bbch-in.vercel.app
                </a>
                <a
                  className="ig-link"
                  href="https://www.instagram.com/bangalorebicyclechampionships/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it live — @bangalorebicyclechampionships
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section className="stage" id="build">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">04</span>
              <span className="plate-label">What we build for ITF</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              One login. One database. Every sub-federation,{" "}
              <span className="accent">finally connected</span>.
            </h2>
          </Reveal>
          <div className="cap-grid">
            <Reveal className="cap-col tech">
              <p className="cap-title">Technology</p>
              <div className="cap-item" style={{ borderTop: "none" }}>
                <h4>Website</h4>
                <p>
                  A modern, mobile-first website for ITF — news, results,
                  athlete profiles, built to be the federation&rsquo;s digital
                  home.
                </p>
              </div>
              <div className="cap-item">
                <h4>Athlete login &amp; profiles</h4>
                <p>
                  Every registered triathlete gets an account — competition
                  history, categories, documents and performance data, all in
                  one place.
                </p>
              </div>
              <div className="cap-item">
                <h4>Sub-federation network</h4>
                <p>
                  State and regional triathlon associations plug into the
                  same system, so every athlete they register flows straight
                  into ITF&rsquo;s central records — no separate spreadsheets,
                  no manual consolidation.
                </p>
              </div>
              <div className="cap-item">
                <h4>Centralized data center</h4>
                <p>
                  One national database for every athlete, every
                  sub-federation, every event — built once, shared by the
                  whole federation.
                </p>
              </div>
              <div className="cap-item">
                <h4>AI-powered quarterly athlete reports</h4>
                <p>
                  Every quarter, AI reviews performance data across the full
                  athlete base and produces a report — a data-backed shortlist
                  to support Indian team selection, not a guess based on who
                  is remembered.
                </p>
              </div>
              <div className="cap-item">
                <h4>Ongoing maintenance</h4>
                <p>
                  Continuous upkeep, uptime and support across the full season
                  — not a one-time build that rots.
                </p>
              </div>
            </Reveal>
            <Reveal className="cap-col media" delay={120}>
              <p className="cap-title">Marketing &amp; Media</p>
              <div className="cap-item" style={{ borderTop: "none" }}>
                <h4>Social media management</h4>
                <p>
                  Always-on management of Instagram, LinkedIn, Facebook and X
                  with platform-specific content.
                </p>
              </div>
              <div className="cap-item">
                <h4>Event photography &amp; videography</h4>
                <p>
                  Professional coverage of the swim, bike and run legs, with
                  rapid delivery of reels, photos and highlight videos — real
                  race-day storytelling, not stock content.
                </p>
              </div>
              <div className="cap-item">
                <h4>Monthly content</h4>
                <p>
                  Consistent storytelling between events, with increased
                  posting during race weeks so the audience — and sponsors —
                  never go quiet.
                </p>
              </div>
              <div className="cap-item">
                <h4>Paid advertising &amp; growth</h4>
                <p>
                  Meta ad campaigns, audience targeting, sponsor visibility and
                  transparent performance reporting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM SHOWCASE ================= */}
      <section className="stage dark" id="platform">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">05</span>
              <span className="plate-label">The platform, already live</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Not a mockup. A federation platform we{" "}
              <span className="accent">already run</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              This is the live BBCH platform — athlete logins, one central
              database, results, performance data and a decade of history, all
              built by us. For ITF we build the same thing, scaled to a national
              federation across every sub-federation — and do it better.
            </p>
          </Reveal>

          {/* SHOT 1 — Athlete profile */}
          <Reveal className="shot">
            <div className="shot-copy">
              <span className="shot-kicker">Athlete profiles &amp; logins</span>
              <h3>Every athlete gets a login and a full profile</h3>
              <ol className="shot-notes">
                <li>
                  <span className="shot-n">1</span>
                  <span>
                    <strong>Career stats at a glance</strong> — races, wins,
                    podiums and best finish.
                  </span>
                </li>
                <li>
                  <span className="shot-n">2</span>
                  <span>
                    <strong>&ldquo;Form over time&rdquo; graph</strong> — the
                    exact performance data an AI selection report reads.
                  </span>
                </li>
                <li>
                  <span className="shot-n">3</span>
                  <span>
                    <strong>Full race history</strong> — every event the
                    athlete has entered, in one place.
                  </span>
                </li>
              </ol>
              <p className="shot-itf">
                &rarr; This is the athlete-data layer ITF needs for national
                team selection — already live, not a promise.
              </p>
            </div>
            <div className="shot-frame">
              <div className="shot-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="shot-url">bbch-in.vercel.app/athletes/prranav-k</span>
              </div>
              <div className="shot-img">
                <Pic
                  src="/images/bbch-platform/profile.png"
                  alt="BBCH athlete profile page with career stats, a form-over-time graph and race history"
                />
                <span className="pin" style={{ top: "26%", left: "12%" }}>1</span>
                <span className="pin" style={{ top: "54%", left: "50%" }}>2</span>
                <span className="pin" style={{ top: "87%", left: "18%" }}>3</span>
              </div>
            </div>
          </Reveal>

          {/* SHOT 2 — Athlete directory */}
          <Reveal className="shot flip">
            <div className="shot-copy">
              <span className="shot-kicker">Centralized athlete database</span>
              <h3>One database. Every athlete on record.</h3>
              <ol className="shot-notes">
                <li>
                  <span className="shot-n">1</span>
                  <span>
                    <strong>Search by name or team</strong> — find any athlete
                    instantly.
                  </span>
                </li>
                <li>
                  <span className="shot-n">2</span>
                  <span>
                    <strong>3,071 riders on record</strong> — a real,
                    populated database, not a demo.
                  </span>
                </li>
                <li>
                  <span className="shot-n">3</span>
                  <span>
                    <strong>Every card links to a full profile</strong> —
                    races and wins visible at a glance.
                  </span>
                </li>
              </ol>
              <p className="shot-itf">
                &rarr; Connect every ITF sub-federation into this and it becomes
                your national athlete registry — one source of truth.
              </p>
            </div>
            <div className="shot-frame">
              <div className="shot-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="shot-url">bbch-in.vercel.app/athletes</span>
              </div>
              <div className="shot-img">
                <Pic
                  src="/images/bbch-platform/athletes.png"
                  alt="BBCH athletes directory with search and thousands of rider cards"
                />
                <span className="pin" style={{ top: "34%", left: "26%" }}>1</span>
                <span className="pin" style={{ top: "39%", left: "9%" }}>2</span>
                <span className="pin" style={{ top: "50%", left: "20%" }}>3</span>
              </div>
            </div>
          </Reveal>

          {/* SHOT 3 — Results archive */}
          <Reveal className="shot">
            <div className="shot-copy">
              <span className="shot-kicker">Searchable results archive</span>
              <h3>Every result, one searchable source of truth</h3>
              <ol className="shot-notes">
                <li>
                  <span className="shot-n">1</span>
                  <span>
                    <strong>Search any athlete by name</strong> across the
                    whole archive.
                  </span>
                </li>
                <li>
                  <span className="shot-n">2</span>
                  <span>
                    <strong>Filter by year, discipline and category</strong> —
                    drill down in seconds.
                  </span>
                </li>
                <li>
                  <span className="shot-n">3</span>
                  <span>
                    <strong>7,033 results logged</strong> — a decade of racing
                    in one place.
                  </span>
                </li>
              </ol>
              <p className="shot-itf">
                &rarr; No more scattered spreadsheets across sub-federations —
                one clean, searchable record for all of ITF.
              </p>
            </div>
            <div className="shot-frame">
              <div className="shot-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="shot-url">bbch-in.vercel.app/results</span>
              </div>
              <div className="shot-img">
                <Pic
                  src="/images/bbch-platform/results.png"
                  alt="BBCH results archive with search box, filters and a results table"
                />
                <span className="pin" style={{ top: "48%", left: "22%" }}>1</span>
                <span className="pin" style={{ top: "48%", left: "68%" }}>2</span>
                <span className="pin" style={{ top: "54%", left: "9%" }}>3</span>
              </div>
            </div>
          </Reveal>

          {/* SHOT 4 — Events archive */}
          <Reveal className="shot flip">
            <div className="shot-copy">
              <span className="shot-kicker">Event &amp; calendar tracking</span>
              <h3>Every event, every season — tracked</h3>
              <ol className="shot-notes">
                <li>
                  <span className="shot-n">1</span>
                  <span>
                    <strong>Filter by year</strong> — the full calendar from
                    2015 to today.
                  </span>
                </li>
                <li>
                  <span className="shot-n">2</span>
                  <span>
                    <strong>Discipline &amp; category tagging</strong> on every
                    event card.
                  </span>
                </li>
                <li>
                  <span className="shot-n">3</span>
                  <span>
                    <strong>Finisher counts + linked results</strong> — one
                    click from event to standings.
                  </span>
                </li>
              </ol>
              <p className="shot-itf">
                &rarr; Track ITF&rsquo;s whole national calendar and its history
                — swim, bike and run — in one system.
              </p>
            </div>
            <div className="shot-frame">
              <div className="shot-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="shot-url">bbch-in.vercel.app/events</span>
              </div>
              <div className="shot-img">
                <Pic
                  src="/images/bbch-platform/events.png"
                  alt="BBCH events archive with year filter and event cards showing finishers"
                />
                <span className="pin" style={{ top: "26%", left: "42%" }}>1</span>
                <span className="pin" style={{ top: "37%", left: "28%" }}>2</span>
                <span className="pin" style={{ top: "62%", left: "28%" }}>3</span>
              </div>
            </div>
          </Reveal>

          {/* SHOT 5 — About / identity */}
          <Reveal className="shot">
            <div className="shot-copy">
              <span className="shot-kicker">Federation identity &amp; story</span>
              <h3>Not just data — the federation&rsquo;s story, told well</h3>
              <ol className="shot-notes">
                <li>
                  <span className="shot-n">1</span>
                  <span>
                    <strong>Mission &amp; vision</strong> presented cleanly, up
                    front.
                  </span>
                </li>
                <li>
                  <span className="shot-n">2</span>
                  <span>
                    <strong>&ldquo;What we stand for&rdquo;</strong> — values
                    laid out for members and sponsors.
                  </span>
                </li>
                <li>
                  <span className="shot-n">3</span>
                  <span>
                    <strong>Integrated photo galleries</strong> — real
                    race-day imagery, built in.
                  </span>
                </li>
              </ol>
              <p className="shot-itf">
                &rarr; ITF&rsquo;s site becomes a home for its identity and
                sponsors, not just a results board.
              </p>
            </div>
            <div className="shot-frame">
              <div className="shot-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="shot-url">bbch-in.vercel.app/about</span>
              </div>
              <div className="shot-img">
                <Pic
                  src="/images/bbch-platform/about.png"
                  alt="BBCH about page showing mission, vision, values and a photo gallery"
                />
                <span className="pin" style={{ top: "14%", left: "30%" }}>1</span>
                <span className="pin" style={{ top: "48%", left: "20%" }}>2</span>
                <span className="pin" style={{ top: "82%", left: "42%" }}>3</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ marginTop: 44 }}>
              <a
                className="ig-link"
                href="https://bbch-in.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore it live — bbch-in.vercel.app
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CENTRALIZED SYSTEM WORKFLOW ================= */}
      <section className="stage" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">06</span>
              <span className="plate-label">How the system works</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              One login. One database. One{" "}
              <span className="accent">AI report</span> every quarter.
            </h2>
          </Reveal>
          <div className="flow">
            <Reveal className="flow-step">
              <span className="flow-num">STEP 1</span>
              <h4>Register once</h4>
              <p>
                Athlete signs up under their state or regional sub-federation
                — one login, valid everywhere in the ITF network.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={80}>
              <span className="flow-num">STEP 2</span>
              <h4>Data syncs to the center</h4>
              <p>
                Results, categories and race history flow automatically into
                ITF&rsquo;s central database — no manual entry, no
                spreadsheets.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={160}>
              <span className="flow-num">STEP 3</span>
              <h4>AI builds the report</h4>
              <p>
                Every quarter, AI turns the accumulated data into a
                performance report across the full athlete base.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={240}>
              <span className="flow-num">STEP 4</span>
              <h4>ITF selects with evidence</h4>
              <p>
                The report feeds directly into national team selection,
                backed by numbers instead of memory.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="flow-note">
              &raquo; The same architecture, deployed across every ITF
              sub-federation — one athlete base, one source of truth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= MEDIA PARTNER ================= */}
      <section className="stage dark" id="partner">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">07</span>
              <span className="plate-label">Our media partner</span>
            </div>
          </Reveal>
          <div className="partner">
            <div>
              <Reveal delay={60}>
                <h2 className="h2">
                  Man Made Machine.{" "}
                  <span className="accent">Top-of-the-line content.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <ul className="partner-list">
                  <li>
                    <strong>100M+ views</strong> generated across our sports
                    clients over the last few years.
                  </li>
                  <li>
                    <strong>Documentary-grade production</strong> — we&rsquo;ve
                    made full documentaries on events, athletes and journeys,
                    not just reels.
                  </li>
                  <li>
                    <strong>Race-day specialists</strong> — a crew that knows
                    where the story happens: the swim start, the bike leg, the
                    run to the finish.
                  </li>
                  <li>
                    <strong>Fast turnaround</strong> — same-day edited
                    highlights while the race is still trending.
                  </li>
                </ul>
                <a
                  className="ig-link"
                  href="https://www.instagram.com/man_made_machines/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the work — @man_made_machines
                </a>
              </Reveal>
            </div>
            <Reveal className="partner-photo partner-ig-shot" delay={180}>
              <Pic
                src="/images/media-partner/mmm.jpg"
                alt="Man Made Machine Instagram Profile"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= OPPORTUNITY ================= */}
      <section className="stage" id="opportunity">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">08</span>
              <span className="plate-label">The immediate opportunity</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              Your next{" "}
              <span className="accent">team selection cycle</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Whatever comes next on the calendar — a national championship,
              an Asian qualifier, or the next Indian team announcement — the
              system needs to be running before that selection meeting, not
              after.
            </p>
          </Reveal>
          <Reveal className="opp-photo" delay={160}>
            <Pic
              src="/images/itf-opportunity/opportunity.jpg"
              alt="Indian triathletes competing"
            />
          </Reveal>
          <div className="opp-grid">
            <Reveal className="opp-card">
              <h4>Tech, ready before the season starts</h4>
              <p>
                Athlete logins, sub-federation onboarding and the central
                database live before the next registration window opens.
              </p>
            </Reveal>
            <Reveal className="opp-card" delay={100}>
              <h4>First AI report, ready before selection</h4>
              <p>
                The first quarterly performance report delivered in time to
                inform the next Indian team announcement.
              </p>
            </Reveal>
            <Reveal className="opp-card" delay={200}>
              <h4>Media, ready from the first gun</h4>
              <p>
                Photography and videography on the ground for swim, bike and
                run, with same-day edited highlights.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="stage dark contact" id="contact">
        <div className="wrap">
          <Reveal>
            <div className="plate" style={{ justifyContent: "center" }}>
              <span className="plate-num">09</span>
              <span className="plate-label">Finish line</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2" style={{ maxWidth: "24ch" }}>
              Let&rsquo;s put Indian triathlon on the{" "}
              <span className="accent">map</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              We&rsquo;re ready to start before your next season begins.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="contact-links">
              <a
                className="btn btn-primary"
                href="mailto:parashramgore007@gmail.com"
              >
                parashramgore007@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/parashramgore"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn — parashramgore
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
            <span>webrook × bbch-in.vercel.app — built by us, live today</span>
            <span>Proposal for the Indian Triathlon Federation · 2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
