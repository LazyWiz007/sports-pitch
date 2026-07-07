import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import Pic from "../components/Pic";

export default function Page() {
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
            <div className="cfi-badge">
              <img
                src="/images/cfi-logo.png"
                alt="Cycling Federation of India"
                className="cfi-badge-logo"
              />
              <div className="cfi-badge-text">
                <span className="cfi-badge-label">Official Proposal</span>
                <span className="cfi-badge-name">Cycling Federation of India</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="h1">
              Tech + media for competitive cycling.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              One partner to rebuild CFI&rsquo;s website, run its social media
              and marketing, and put Indian cycling in front of the audience it
              deserves. <strong>Riders first. Builders second.</strong>
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
                src="/images/hero/hero.jpg"
                alt="Riders racing at full speed"
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
                  <strong>Tour of Nilgiris</strong> — views overall in 8 months
                </span>
                <span className="board-value">
                  100<span className="unit">M+</span>
                </span>
              </Reveal>
              <Reveal className="board-row" delay={80}>
                <span className="board-rank">02</span>
                <span className="board-label">
                  <strong>Tour of Nilgiris</strong> — Instagram followers in 8
                  months, from scratch
                </span>
                <span className="board-value">
                  0&nbsp;&rarr;&nbsp;10.5<span className="unit">K</span>
                </span>
              </Reveal>
              <Reveal className="board-row" delay={160}>
                <span className="board-rank">03</span>
                <span className="board-label">
                  <strong>Asian MTB Championship</strong> — viewers on dashboard within a month
                </span>
                <span className="board-value">
                  1<span className="unit">M+</span>
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
              Indian cycling has the athletes. It needs the{" "}
              <span className="accent">audience</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Why do sponsors stay away from a sport with this much talent?
              Because the digital foundation isn&rsquo;t there yet.
            </p>
          </Reveal>
          <div className="grid-3">
            <Reveal className="gap-card">
              <span className="gap-kicker">Gap / Technology</span>
              <h3>No digital backbone</h3>
              <p>
                No CRM. No registration portal. No merchandise channel. Just
                spreadsheets and phone calls holding a national calendar
                together.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={100}>
              <span className="gap-kicker">Gap / Storytelling</span>
              <h3>Inconsistent storytelling</h3>
              <p>
                No consistent content between events. No audience growth. Great
                races happen, and almost nobody outside the venue sees them.
              </p>
            </Reveal>
            <Reveal className="gap-card" delay={200}>
              <span className="gap-kicker">Gap / Revenue</span>
              <h3>Untapped sponsor interest</h3>
              <p>
                Without consistent content and athlete data, brands have
                nothing to buy into. Fewer sponsors, less funding, slower
                growth for the sport.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER / TEAM ================= */}
      <section className="stage dark" id="founder">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">02</span>
              <span className="plate-label">Meet the founders</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              The team behind the{" "}
              <span className="accent">pedal strokes</span>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              Athletes, builders, and industry veterans — all rowing in the same direction.
            </p>
          </Reveal>

          <div className="team-grid">
            {/* Nikhil */}
            <Reveal className="team-card">
              <div className="team-photo">
                <Pic
                  src="/images/about/nikhil-das.png"
                  alt="Nikhil Das"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Nikhil Das</h3>
                <span className="team-role">Board Member &amp; Consultant</span>
                <p className="team-bio">
                  Ex-CTO at Havells — the person who scaled enterprise tech for one of India&rsquo;s biggest brands. Brings deep platform architecture and product thinking to everything we build.
                </p>
                <a
                  className="ig-link"
                  href="https://www.linkedin.com/in/nikhil-das-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn — Nikhil Das
                </a>
              </div>
            </Reveal>

            {/* Parshuram */}
            <Reveal className="team-card" delay={100}>
              <div className="team-photo">
                <Pic
                  src="/images/about/founder.jpg"
                  alt="Parshuram Gore competing in 5150 Ironman Chennai"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Parshuram Gore</h3>
                <span className="team-role">Founder &amp; CEO — Athlete First</span>
                <p className="team-bio">
                  Ironman finisher. Tour of Nilgiris rider. Webrook isn&rsquo;t run by an agency guy who discovered cycling last quarter — it&rsquo;s run by someone who lines up on race day and builds the tools the sport actually needs.
                </p>
                <a
                  className="ig-link"
                  href="https://www.instagram.com/parshuram_.gore/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram — @parshuram_.gore
                </a>
              </div>
            </Reveal>

            {/* Anil */}
            <Reveal className="team-card" delay={200}>
              <div className="team-photo">
                <Pic
                  src="/images/about/anil-kotnis.jpg"
                  alt="Anil Kotnis"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Anil Kotnis</h3>
                <span className="team-role">Co-founder &amp; Strategy</span>
                <p className="team-bio">
                  Ex-Director at Microsoft — two decades building enterprise products and driving strategic growth at global scale. Shapes how Webrook thinks about partnerships, data and long-term platform vision.
                </p>
              </div>
            </Reveal>
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
              <span className="accent">done it</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Cycling isn&rsquo;t a client for us — it&rsquo;s our community.
              We&rsquo;re on the start line, in the feed zones, and behind
              every results post.
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
                merchandise, remarketing, ads and live coverage</strong>. The
                result — organic growth strong enough that brands approached
                TFN, because the numbers finally matched the event&rsquo;s
                legacy.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    0 <em>&rarr;</em> 10.5K
                  </div>
                  <div className="lbl">followers in 8 months, from scratch</div>
                </div>
                <div className="case-stat">
                  <div className="num">
                    100<em>M+</em>
                  </div>
                  <div className="lbl">views overall in 8 months</div>
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
                    1<em>M+</em>
                  </div>
                  <div className="lbl">viewers on the dashboard within a month</div>
                </div>
                <div className="case-stat">
                  <div className="num">
                    0 <em>&rarr;</em> 650
                  </div>
                  <div className="lbl">followers in just 5 race days</div>
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
                Case 03 — Ongoing media retainer
              </span>
              <h3>BBCH — Full Media &amp; Social Partner</h3>
              <p className="case-body">
                Our longest-running proof that we show up every week, not just
                on race day: <strong>race-day and training photography,
                highlight reels, rider features, full social account
                management</strong>, plus the website and tooling underneath —
                all kept in sync with the media calendar.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    Full<em>-</em>time
                  </div>
                  <div className="lbl">photo, video &amp; social management</div>
                </div>
              </div>
              <a
                className="ig-link"
                href="https://www.instagram.com/bangalorebicyclechampionships/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it live — @bangalorebicyclechampionships
              </a>
            </div>
          </Reveal>

          {/* BBCH Website */}
          <Reveal className="case">
            <div className="case-photo">
              <Pic
                src="/images/bbch-platform/profile.png"
                alt="BBCH website platform screenshot"
              />
            </div>
            <div>
              <span className="case-tag">
                Case 04 — Live federation platform
              </span>
              <h3>BBCH Website &amp; Digital Platform</h3>
              <p className="case-body">
                Not a mockup — a <strong>fully live federation website</strong> we designed, built and maintain: athlete profiles, a searchable results archive, event calendar, race registrations and a decade of race history in one clean, fast platform. The blueprint for what we build for CFI.
              </p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="num">
                    3,071<em>+</em>
                  </div>
                  <div className="lbl">athletes on record</div>
                </div>
                <div className="case-stat">
                  <div className="num">
                    7,033<em>+</em>
                  </div>
                  <div className="lbl">results logged</div>
                </div>
              </div>
              <a
                className="ig-link"
                href="https://bbch-in.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore live — bbch-in.vercel.app
              </a>
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
              <span className="plate-label">What we build for CFI</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              One partner. Two disciplines. Every{" "}
              <span className="accent">CFI event</span> on the calendar.
            </h2>
          </Reveal>
          <div className="cap-grid">
            <Reveal className="cap-col tech">
              <p className="cap-title">Technology</p>
              <div className="cap-item" style={{ borderTop: "none" }}>
                <h4>Website</h4>
                <p>
                  A modern, mobile-first website for CFI and its events — news,
                  results, athlete profiles, built to be the federation&rsquo;s
                  digital home.
                </p>
              </div>
              <div className="cap-item">
                <h4>Registration portals</h4>
                <p>
                  Event-specific registration, category selection and payment —
                  built per event, running on one shared system.
                </p>
              </div>
              <div className="cap-item">
                <h4>CRM &amp; automation</h4>
                <p>
                  Email and WhatsApp remarketing, participant management,
                  sponsor databases and automated communication.
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
                  Professional on-ground coverage with rapid delivery of reels,
                  photos and highlight videos — real race-day storytelling, not
                  stock content.
                </p>
              </div>
              <div className="cap-item">
                <h4>Monthly content</h4>
                <p>
                  Consistent storytelling between events, with increased
                  posting during race weeks so the audience never goes quiet.
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
              built by us. For CFI we build the same thing, scaled to a national
              federation across every state association — and do it better.
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
                    exact performance data national selection reports read.
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
                &rarr; This is the athlete-data layer CFI needs for national
                team selection and rider records — already live, not a promise.
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
                &rarr; Connect every state cycling association into this and it becomes
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
                &rarr; No more scattered spreadsheets across state associations —
                one clean, searchable record for all of CFI.
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
                &rarr; Track CFI&rsquo;s whole national calendar and its history
                — track, road, and MTB — in one system.
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
                &rarr; CFI&rsquo;s site becomes a home for its identity and
                sponsors, not just a static homepage.
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

      {/* ================= PORTAL WORKFLOW ================= */}
      <section className="stage" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">06</span>
              <span className="plate-label">How the portal works</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              One checkout. One CRM. The{" "}
              <span className="accent">whole federation</span>.
            </h2>
          </Reveal>
          <div className="flow">
            <Reveal className="flow-step">
              <span className="flow-num">STEP 1</span>
              <h4>Register</h4>
              <p>
                Rider signs up with category, route and team details captured
                up front.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={80}>
              <span className="flow-num">STEP 2</span>
              <h4>Rent a bike</h4>
              <p>
                The same checkout flow lets riders reserve a bike — no separate
                vendor, no separate form.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={160}>
              <span className="flow-num">STEP 3</span>
              <h4>Buy merchandise</h4>
              <p>
                Jerseys, kits and event merch sold in the same cart, same
                payment step.
              </p>
            </Reveal>
            <Reveal className="flow-step" delay={240}>
              <span className="flow-num">STEP 4</span>
              <h4>Remarket</h4>
              <p>
                Every entry feeds one CRM, powering email and WhatsApp
                campaigns for next year&rsquo;s event.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="flow-note">
              &raquo; The same architecture, deployed for every CFI-sanctioned
              event — one CRM across the federation&rsquo;s full calendar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= MEDIA PARTNERS ================= */}
      <section className="stage dark" id="partner">
        <div className="wrap">
          <Reveal>
            <div className="plate">
              <span className="plate-num">07</span>
              <span className="plate-label">Our media partners</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h2">
              World-class creators.{" "}
              <span className="accent">All on the same start line.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              We don&rsquo;t just manage content — we bring a network of elite sports creators who live and breathe race-day storytelling.
            </p>
          </Reveal>

          {/* Man Made Machine */}
          <div className="partner" style={{ marginTop: 44 }}>
            <div>
              <Reveal delay={60}>
                <h3 className="h3-media">Man Made Machine</h3>
              </Reveal>
              <Reveal delay={120}>
                <ul className="partner-list">
                  <li>
                    <strong>100M+ views</strong> generated across our sports
                    clients over the last few years.
                  </li>
                  <li>
                    <strong>Documentary-grade production</strong> — full
                    documentaries on events, athletes and journeys, not just reels.
                  </li>
                  <li>
                    <strong>Race-day specialists</strong> — a crew that knows
                    where the story happens: the start line, the climb, the
                    finish sprint.
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

          {/* Additional media partners grid */}
          <div className="media-partners-grid">
            {/* Akhil */}
            <Reveal className="media-partner-card">
              <div className="mp-icon">📸</div>
              <h4 className="mp-name">Akhil Puthiyedath</h4>
              <p className="mp-bio">
                Elite sports photographer and filmmaker who shoots for the world&rsquo;s biggest motorsport stage — <strong>Formula 1</strong>. His eye for speed, light and decisive moments is exactly what cycling deserves.
              </p>
              <a
                className="ig-link"
                href="https://www.instagram.com/_akhilputhiyedath/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @_akhilputhiyedath
              </a>
            </Reveal>

            {/* Shoot for F1 */}
            <Reveal className="media-partner-card" delay={100}>
              <div className="mp-icon">🎬</div>
              <h4 className="mp-name">Shoot for F1</h4>
              <p className="mp-bio">
                A production house with a pedigree forged on the fastest circuits in the world. Bringing Formula 1&ndash;grade cinematography to the roads and tracks of Indian cycling.
              </p>
            </Reveal>

            {/* KP Production */}
            <Reveal className="media-partner-card" delay={200}>
              <div className="mp-icon">🎥</div>
              <h4 className="mp-name">KP Production</h4>
              <p className="mp-bio">
                A seasoned production partner specialising in sports storytelling — long-form documentaries, athlete features and race-day highlight packages delivered to broadcast standard.
              </p>
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
              Your upcoming{" "}
              <span className="accent">Asian Track Championship</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              International stage. The exact format we&rsquo;ve already
              delivered at the Asian MTB Championship — same playbook, ready to
              deploy now.
            </p>
          </Reveal>
          <Reveal className="opp-photo" delay={160}>
            <Pic
              src="/images/track-championship/track.jpg"
              alt="Indian track cyclists in team pursuit formation"
            />
          </Reveal>
          <div className="opp-grid">
            <Reveal className="opp-card">
              <h4>Tech, ready before entries open</h4>
              <p>
                Registration portal, merchandise checkout and CRM live before
                the entry window — exactly as built for TFN and UCC.
              </p>
            </Reveal>
            <Reveal className="opp-card" delay={100}>
              <h4>Media, ready before the gun fires</h4>
              <p>
                Photography and videography team on the ground for all five
                days, with same-day edited highlights.
              </p>
            </Reveal>
            <Reveal className="opp-card" delay={200}>
              <h4>Growth measured in days, not months</h4>
              <p>
                Based on the Asian MTB result, we target a comparable follower
                lift within the event window itself.
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
              Let&rsquo;s put Indian cycling on the{" "}
              <span className="accent">map</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              We&rsquo;re ready to start before the next entry window opens.
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
            </div>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="footer" style={{ marginTop: 60 }}>
            <span>webrook × bbch.in — live to race</span>
            <span>Proposal for the Cycling Federation of India · 2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
