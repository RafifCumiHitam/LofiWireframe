import { useState } from "react";

const SCREENS = [
  "01 / Landing",
  "02 / Processing",
  "03 / Profile",
  "04 / Reader",
  "05 / Score",
  "06 / Export",
];

// ─── Reusable wireframe primitives ────────────────────────────────────────────

function Box({
  children,
  className = "",
  dashed = true,
}: {
  children?: React.ReactNode;
  className?: string;
  dashed?: boolean;
}) {
  return (
    <div
      className={`border ${dashed ? "border-dashed" : "border-solid"} border-[#AAAAAA] ${className}`}
    >
      {children}
    </div>
  );
}

function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#E5E3DF] flex items-center justify-center text-[#888] text-xs tracking-widest uppercase ${className}`}
    >
      {label}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] tracking-[0.15em] uppercase text-[#888] font-medium">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-dashed border-[#AAAAAA] px-2 py-0.5 text-[11px] text-[#555] tracking-wide">
      {children}
    </span>
  );
}

function Btn({
  children,
  filled = false,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-semibold transition-opacity hover:opacity-70 cursor-pointer ${
        filled
          ? "bg-[#1C1C1C] text-[#F4F2EE] border border-solid border-[#1C1C1C]"
          : "bg-transparent text-[#1C1C1C] border border-dashed border-[#1C1C1C]"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 border-t border-dashed border-[#BBBBB9]" />
      {label && <span className="text-[10px] text-[#999] tracking-widest uppercase">{label}</span>}
      <div className="flex-1 border-t border-dashed border-[#BBBBB9]" />
    </div>
  );
}

// ─── Screen 1: Landing ────────────────────────────────────────────────────────

function ScreenLanding({ next }: { next: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Nav */}
      <header className="border-b border-dashed border-[#AAAAAA] px-8 py-4 flex items-center justify-between shrink-0">
        <div className="text-sm font-bold tracking-[0.25em] uppercase">ReadAble</div>
        <div className="flex gap-6">
          {["Product", "How It Works", "About"].map((n) => (
            <span key={n} className="text-xs text-[#888] tracking-wider cursor-pointer hover:text-[#1C1C1C] transition-colors">
              {n}
            </span>
          ))}
        </div>
        <Btn>Sign In</Btn>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main column */}
        <div className="flex-1 flex flex-col items-center justify-center px-12 py-10 gap-8">
          <div className="text-center max-w-xl">
            <Label>Universal Accessible Document Converter</Label>
            <h1 className="text-5xl font-bold tracking-tight leading-[1.1] mt-3 mb-4">
              Turn any document<br />into a reading<br />experience that<br />works for you.
            </h1>
            <p className="text-sm text-[#666] leading-relaxed max-w-sm mx-auto">
              Upload a PDF, DOCX, or image. We parse the structure, reflow the layout, and produce an accessible version tailored to how you read.
            </p>
          </div>

          {/* Drop zone */}
          <Box
            dashed
            className="w-full max-w-lg h-52 flex flex-col items-center justify-center gap-3 hover:bg-[#EDECEA] transition-colors cursor-pointer"
          >
            <Placeholder label="↑" className="w-12 h-12 text-xl bg-transparent" />
            <div className="text-sm font-medium text-[#444] tracking-wide">Drag & Drop your document</div>
            <div className="text-xs text-[#888]">or click to browse</div>
            <Divider label="Supports" />
            <div className="flex gap-2 flex-wrap justify-center">
              {["PDF", "DOCX", "PPTX", "EPUB", "JPG", "PNG", "TXT"].map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
          </Box>

          <Btn filled onClick={next}>
            Upload Document →
          </Btn>

          <p className="text-[10px] text-[#AAA] tracking-wider">Max file size 50 MB · No account required for preview</p>
        </div>

        {/* Side panel — "how it works" */}
        <aside className="w-64 border-l border-dashed border-[#AAAAAA] p-6 flex flex-col gap-5 shrink-0">
          <Label>How It Works</Label>
          {[
            { n: "01", title: "Upload", desc: "PDF, DOCX, image, or text" },
            { n: "02", title: "Parse", desc: "Structure & reading order detected" },
            { n: "03", title: "Reflow", desc: "Layout rebuilt for readability" },
            { n: "04", title: "Profile", desc: "Choose your reading style" },
            { n: "05", title: "Export", desc: "Download as PDF, EPUB, DOCX" },
          ].map((s) => (
            <div key={s.n} className="flex gap-3">
              <span className="text-[10px] text-[#AAA] font-semibold w-5 shrink-0 pt-0.5">{s.n}</span>
              <div>
                <div className="text-xs font-semibold text-[#333] tracking-wide">{s.title}</div>
                <div className="text-[11px] text-[#888] leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}

          <Divider />

          <Box className="p-3 bg-[#EDECEA]">
            <Label>Accessibility Score</Label>
            <div className="text-2xl font-bold mt-1">78 / 100</div>
            <div className="text-[11px] text-[#888] mt-0.5">avg. document score</div>
          </Box>
        </aside>
      </div>
    </div>
  );
}

// ─── Screen 2: Processing ──────────────────────────────────────────────────────

function ScreenProcessing({ next }: { next: () => void }) {
  const steps = [
    { label: "Text extracted", done: true },
    { label: "Structure detected", done: true },
    { label: "Reading order parsed", done: true },
    { label: "Tables detected", done: true },
    { label: "Images located", done: true },
    { label: "Accessibility layout generated", done: false, active: true },
    { label: "Export formats prepared", done: false },
  ];

  return (
    <div className="flex h-full">
      {/* Left: pipeline viz */}
      <div className="flex-1 flex flex-col items-center justify-center px-16 py-12 gap-10">
        <div className="text-center">
          <Label>Step 02 — Processing</Label>
          <h2 className="text-3xl font-bold mt-2 tracking-tight">Analysing your document…</h2>
          <p className="text-xs text-[#888] mt-1">research-paper.pdf · 2.4 MB · 48 pages</p>
        </div>

        <Box className="w-full max-w-md p-6 flex flex-col gap-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className={`w-5 h-5 flex items-center justify-center text-[11px] border shrink-0 ${
                  s.done
                    ? "border-solid border-[#1C1C1C] bg-[#1C1C1C] text-[#F4F2EE]"
                    : s.active
                      ? "border-dashed border-[#1C1C1C] text-[#1C1C1C]"
                      : "border-dashed border-[#AAAAAA] text-[#AAAAAA]"
                }`}
              >
                {s.done ? "✓" : s.active ? "⟳" : "○"}
              </span>
              <span
                className={`text-xs tracking-wide ${
                  s.done ? "text-[#1C1C1C] font-medium" : s.active ? "text-[#555]" : "text-[#BBB]"
                }`}
              >
                {s.label}
              </span>
              {s.active && (
                <span className="text-[10px] text-[#888] ml-auto tracking-wider">
                  — in progress
                </span>
              )}
            </div>
          ))}
        </Box>

        {/* Progress bar */}
        <div className="w-full max-w-md">
          <div className="flex justify-between mb-1">
            <Label>Progress</Label>
            <span className="text-[10px] text-[#888]">71%</span>
          </div>
          <div className="border border-dashed border-[#AAAAAA] h-2 w-full">
            <div className="bg-[#1C1C1C] h-full" style={{ width: "71%" }} />
          </div>
        </div>

        <Btn filled onClick={next}>
          Continue (skip wait) →
        </Btn>
      </div>

      {/* Right: document structure preview */}
      <aside className="w-72 border-l border-dashed border-[#AAAAAA] p-6 flex flex-col gap-4 shrink-0">
        <Label>Document Structure</Label>

        <Box className="flex-1 p-4 bg-[#EDECEA] flex flex-col gap-2 overflow-auto">
          {[
            { indent: 0, type: "H1", label: "Economic Growth" },
            { indent: 1, type: "P", label: "Paragraph ×3" },
            { indent: 1, type: "H2", label: "2.1 Introduction" },
            { indent: 2, type: "P", label: "Paragraph ×2" },
            { indent: 2, type: "IMG", label: "Figure 1.1" },
            { indent: 2, type: "CAP", label: "Caption" },
            { indent: 1, type: "H2", label: "2.2 Methods" },
            { indent: 2, type: "P", label: "Paragraph ×4" },
            { indent: 2, type: "TBL", label: "Table 1" },
            { indent: 1, type: "H2", label: "2.3 Results" },
            { indent: 2, type: "P", label: "Paragraph ×2" },
            { indent: 2, type: "LIST", label: "Bullet list ×5" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[10px]"
              style={{ paddingLeft: `${item.indent * 12}px` }}
            >
              <span className="text-[9px] font-semibold text-[#888] w-8 shrink-0 border border-dashed border-[#BBBBB9] text-center py-0.5">
                {item.type}
              </span>
              <span className="text-[#555]">{item.label}</span>
            </div>
          ))}
        </Box>

        <div className="text-[10px] text-[#888] leading-relaxed">
          12 headings · 4 images · 2 tables · 18 paragraphs · 1 footnote detected
        </div>
      </aside>
    </div>
  );
}

// ─── Screen 3: Profile Selection ──────────────────────────────────────────────

function ScreenProfile({ next }: { next: () => void }) {
  const [selected, setSelected] = useState(1);

  const profiles = [
    {
      id: 0,
      name: "Standard",
      desc: "Default layout. No modifications to typography or spacing.",
      specs: ["System font", "16px", "1.5 line-height", "Normal spacing"],
    },
    {
      id: 1,
      name: "Dyslexia Friendly",
      desc: "Optimised for dyslexia. Wider spacing, OpenDyslexic-style layout.",
      specs: ["Lexend", "20px", "1.8 line-height", "0.03em letter-spacing", "Short paragraphs"],
    },
    {
      id: 2,
      name: "Focus Reading",
      desc: "Highlights the current paragraph. Reduces surrounding distraction.",
      specs: ["Reading ruler", "Dim inactive text", "Narrow column", "No decorations"],
    },
    {
      id: 3,
      name: "High Contrast",
      desc: "Custom background and contrast for visual stress.",
      specs: ["Custom bg", "Contrast +", "Color overlay", "Low density"],
    },
    {
      id: 4,
      name: "Custom",
      desc: "Set every parameter manually.",
      specs: ["Font → adjust", "Size → adjust", "Spacing → adjust", "Colors → adjust"],
    },
  ];

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col px-12 py-10 gap-8 overflow-auto">
        <div>
          <Label>Step 03 — Reading Profile</Label>
          <h2 className="text-3xl font-bold mt-2 tracking-tight">
            Choose how you read.
          </h2>
          <p className="text-sm text-[#666] mt-1">
            Every person reads differently. Select the profile closest to your needs — you can adjust later.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {profiles.map((p) => (
            <Box
              key={p.id}
              dashed={selected !== p.id}
              className={`p-5 cursor-pointer flex flex-col gap-2 transition-colors ${
                selected === p.id
                  ? "border-solid border-[#1C1C1C] bg-[#EDECEA]"
                  : "hover:bg-[#EDECEA]"
              }`}
              onClick={() => setSelected(p.id)}
            >
              <div className="flex items-start justify-between">
                <div className="text-sm font-bold tracking-wide">{p.name}</div>
                <div
                  className={`w-3 h-3 border shrink-0 mt-0.5 ${
                    selected === p.id
                      ? "border-solid border-[#1C1C1C] bg-[#1C1C1C]"
                      : "border-dashed border-[#AAAAAA]"
                  }`}
                />
              </div>
              <p className="text-[11px] text-[#666] leading-relaxed">{p.desc}</p>
              <Divider />
              <div className="flex flex-col gap-1">
                {p.specs.map((s) => (
                  <div key={s} className="text-[10px] text-[#888] tracking-wide">
                    — {s}
                  </div>
                ))}
              </div>
            </Box>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Btn filled onClick={next}>
            Open Document →
          </Btn>
          <span className="text-[11px] text-[#888]">
            Profile: <strong className="text-[#333]">{profiles[selected].name}</strong>
          </span>
        </div>
      </div>

      {/* Preview column */}
      <aside className="w-72 border-l border-dashed border-[#AAAAAA] p-6 flex flex-col gap-4 shrink-0">
        <Label>Live Preview</Label>
        <Box className="flex-1 p-5 bg-[#EDECEA] flex flex-col gap-3 overflow-auto">
          <div className="text-[10px] text-[#888] uppercase tracking-wider">Chapter 2</div>
          <div className="font-bold text-sm leading-snug">2.3 Economic Growth</div>
          <div
            className="text-[#444]"
            style={{
              fontSize: selected === 1 ? "13px" : "11px",
              lineHeight: selected === 1 ? "1.9" : selected === 2 ? "1.7" : "1.5",
              letterSpacing: selected === 1 ? "0.03em" : "normal",
              maxWidth: selected === 1 ? "85%" : "100%",
            }}
          >
            Economic growth is the increase in the production of goods and services in an economy over a period of time...
          </div>
          <Divider label="figure 2.1" />
          <Placeholder label="Chart" className="h-20" />
          <div className="text-[10px] text-[#888]">GDP Growth 2020–2025 · Source: BPS</div>
        </Box>
        <div className="text-[10px] text-[#888] leading-relaxed">
          Preview updates as you select a profile
        </div>
      </aside>
    </div>
  );
}

// ─── Screen 4: Document Reader ──────────────────────────────────────────────────

function ScreenReader({ next }: { next: () => void }) {
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [ruler, setRuler] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="border-b border-dashed border-[#AAAAAA] px-6 py-2 flex items-center gap-6 shrink-0">
        <div className="text-xs font-bold tracking-widest uppercase">ReadAble</div>
        <div className="flex-1" />
        <span className="text-[11px] text-[#888]">research-paper.pdf</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#888]">Pg</span>
          <Box className="px-2 py-0.5 text-xs">14 / 48</Box>
        </div>
        <div className="flex gap-1">
          {["← Prev", "Next →"].map((l) => (
            <Btn key={l} className="py-1 px-3 text-[10px]">{l}</Btn>
          ))}
        </div>
        <Btn filled onClick={next} className="py-1 px-3">
          Score & Export →
        </Btn>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Controls sidebar */}
        <aside className="w-56 border-r border-dashed border-[#AAAAAA] p-5 flex flex-col gap-5 shrink-0 overflow-auto">
          <div>
            <Label>Typography</Label>
            <div className="mt-2 flex flex-col gap-3">
              <div>
                <div className="text-[10px] text-[#888] mb-1">Font Size — {fontSize}px</div>
                <input
                  type="range"
                  min={12}
                  max={28}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#1C1C1C]"
                />
              </div>
              <div>
                <div className="text-[10px] text-[#888] mb-1">Line Height — {lineHeight.toFixed(1)}</div>
                <input
                  type="range"
                  min={1.2}
                  max={2.4}
                  step={0.1}
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full accent-[#1C1C1C]"
                />
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <Label>Reading Aids</Label>
            <div className="mt-2 flex flex-col gap-2">
              {[
                { label: "Reading Ruler", val: ruler, set: setRuler },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => item.set(!item.val)}
                >
                  <span className="text-[11px] text-[#555]">{item.label}</span>
                  <Box
                    dashed={!item.val}
                    className={`w-8 h-4 flex items-center justify-center text-[9px] ${
                      item.val ? "border-solid bg-[#1C1C1C] text-[#F4F2EE]" : "text-[#AAA]"
                    }`}
                  >
                    {item.val ? "ON" : "OFF"}
                  </Box>
                </div>
              ))}
              {[
                "Highlight Active Para",
                "Hide Footnotes",
                "Text-to-Speech",
              ].map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-[11px] text-[#555]">{label}</span>
                  <Box dashed className="w-8 h-4 flex items-center justify-center text-[9px] text-[#AAA]">
                    OFF
                  </Box>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          <div>
            <Label>Background</Label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {["#FFFFFF", "#F5F1EB", "#E8F4E8", "#EEE8F0", "#1C1C1C"].map((c) => (
                <div
                  key={c}
                  className="w-6 h-6 border border-dashed border-[#AAAAAA] cursor-pointer hover:border-solid"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          <Divider />

          <div>
            <Label>Columns</Label>
            <div className="mt-2 flex gap-2">
              {["Narrow", "Wide", "Full"].map((c) => (
                <Box
                  key={c}
                  className={`px-2 py-1 text-[10px] cursor-pointer ${c === "Narrow" ? "border-solid bg-[#1C1C1C] text-[#F4F2EE] border-[#1C1C1C]" : "text-[#888]"}`}
                >
                  {c}
                </Box>
              ))}
            </div>
          </div>
        </aside>

        {/* Document area */}
        <div className="flex-1 flex flex-col overflow-auto bg-[#EDECEA] relative">
          {ruler && (
            <div
              className="absolute left-0 right-0 h-8 bg-[#1C1C1C] opacity-10 pointer-events-none z-10"
              style={{ top: "28%" }}
            />
          )}
          <div className="max-w-xl mx-auto py-12 px-8 flex flex-col gap-5" style={{ fontSize, lineHeight }}>
            <div className="text-[10px] text-[#888] tracking-widest uppercase">Chapter 2</div>
            <h1 className="text-2xl font-bold leading-snug tracking-tight">2.3 Economic Growth</h1>
            <p className="text-[#444]">
              Economic growth is the increase in the production of goods and services in an economy over time. It is measured as the percentage rate of increase in real gross domestic product (GDP) over a given period.
            </p>
            <p className="text-[#444]">
              Growth in a nation's output of goods and services can be achieved in two ways: by increasing the quantity or quality of productive inputs — labor, capital, and land — or by improving the techniques used.
            </p>
            <Divider label="Key Concept" />
            <Box className="p-4 bg-[#F4F2EE]">
              <Label>Definition</Label>
              <p className="text-xs text-[#555] mt-1 leading-relaxed">
                Economic growth = sustained increase in the production capacity of an economy, typically measured as GDP growth rate year-over-year.
              </p>
            </Box>
            <Placeholder label="Figure 2.1 — GDP Growth 2020–2025" className="h-40" />
            <div className="text-[11px] text-[#888]">Source: BPS Statistical Yearbook 2024</div>
            <Divider />
            <h2 className="text-lg font-bold">Factors Affecting Growth</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Capital accumulation",
                "Technological progress",
                "Labour force growth",
                "Institutional quality",
                "Natural resource endowment",
              ].map((item) => (
                <li key={item} className="text-xs text-[#444] flex gap-2">
                  <span className="text-[#AAAAAA]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chapter nav */}
        <aside className="w-48 border-l border-dashed border-[#AAAAAA] p-5 flex flex-col gap-3 shrink-0 overflow-auto">
          <Label>Contents</Label>
          {[
            { n: "1", title: "Introduction" },
            { n: "2", title: "Literature Review" },
            { n: "2.1", title: "Prior Studies" },
            { n: "2.2", title: "Theoretical Framework" },
            { n: "2.3", title: "Economic Growth", active: true },
            { n: "3", title: "Methods" },
            { n: "4", title: "Results" },
            { n: "5", title: "Discussion" },
            { n: "6", title: "Conclusion" },
          ].map((c) => (
            <div
              key={c.n}
              className={`text-[11px] cursor-pointer leading-snug flex gap-2 ${
                c.active ? "font-bold text-[#1C1C1C]" : "text-[#888] hover:text-[#555]"
              }`}
              style={{ paddingLeft: c.n.includes(".") ? "12px" : "0" }}
            >
              <span className="text-[#AAA] shrink-0">{c.n}</span>
              {c.title}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

// ─── Screen 5: Accessibility Score ────────────────────────────────────────────

function ScreenScore({ next }: { next: () => void }) {
  const checks = [
    { label: "Typography", status: "ok" },
    { label: "Heading Structure", status: "ok" },
    { label: "Paragraph Length", status: "warn" },
    { label: "Color Contrast", status: "warn" },
    { label: "Table Structure", status: "ok" },
    { label: "Image Description", status: "fail" },
    { label: "Reading Order", status: "ok" },
    { label: "Footnote Linkage", status: "ok" },
  ];

  const issues = [
    { page: 12, sev: "warn", msg: "3 paragraphs exceed 80 words. Consider splitting." },
    { page: 19, sev: "warn", msg: "Contrast ratio 2.8:1 below AA threshold on grey text." },
    { page: 27, sev: "fail", msg: "Figure 3.2 has no alt text or caption." },
    { page: 31, sev: "fail", msg: "Figure 4.1 has no alt text or caption." },
  ];

  const icon = (s: string) =>
    s === "ok" ? "✓" : s === "warn" ? "⚠" : "✕";
  const color = (s: string) =>
    s === "ok" ? "text-[#444]" : s === "warn" ? "text-[#888]" : "text-[#333] font-bold";

  return (
    <div className="flex h-full">
      {/* Score panel */}
      <div className="w-80 border-r border-dashed border-[#AAAAAA] p-8 flex flex-col gap-6 shrink-0">
        <div>
          <Label>Step 05 — Accessibility Score</Label>
          <h2 className="text-2xl font-bold mt-2 tracking-tight">Document Report</h2>
          <p className="text-xs text-[#888] mt-0.5">research-paper.pdf · 48 pages</p>
        </div>

        {/* Score ring (wireframe) */}
        <Box className="p-6 bg-[#EDECEA] flex flex-col items-center gap-2">
          <div className="text-5xl font-bold tracking-tight">78</div>
          <div className="text-xs text-[#888]">out of 100</div>
          <Divider label="score" />
          <div className="text-[10px] text-[#888] tracking-wider text-center">
            GOOD · Minor issues detected
          </div>
        </Box>

        {/* Checklist */}
        <div className="flex flex-col gap-2">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center justify-between text-xs">
              <span className="text-[#555]">{c.label}</span>
              <span className={`font-semibold ${color(c.status)}`}>{icon(c.status)}</span>
            </div>
          ))}
        </div>

        <Divider />

        <div className="flex flex-col gap-1 text-[10px] text-[#888]">
          <div>✓ 6 checks passed</div>
          <div>⚠ 2 warnings</div>
          <div>✕ 2 failures</div>
        </div>

        <Btn filled onClick={next}>
          Export Accessible Version →
        </Btn>
      </div>

      {/* Issues list */}
      <div className="flex-1 p-8 overflow-auto flex flex-col gap-6">
        <div>
          <Label>Issues Found</Label>
          <h3 className="text-lg font-bold mt-1">4 items need attention</h3>
        </div>

        <div className="flex flex-col gap-4">
          {issues.map((issue, i) => (
            <Box
              key={i}
              className={`p-4 flex gap-4 ${issue.sev === "fail" ? "bg-[#EDECEA]" : ""}`}
            >
              <div
                className={`text-sm font-bold mt-0.5 w-4 shrink-0 ${
                  issue.sev === "warn" ? "text-[#888]" : "text-[#1C1C1C]"
                }`}
              >
                {icon(issue.sev)}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[10px] text-[#888] tracking-wider uppercase">Page {issue.page}</div>
                <div className="text-xs text-[#444] leading-relaxed">{issue.msg}</div>
                <div className="flex gap-2 mt-1">
                  <Tag>View in document</Tag>
                  <Tag>Auto-fix</Tag>
                </div>
              </div>
            </Box>
          ))}
        </div>

        <Divider label="passing checks" />

        <div className="grid grid-cols-2 gap-3">
          {checks.filter((c) => c.status === "ok").map((c) => (
            <Box key={c.label} className="px-3 py-2 flex items-center gap-2 bg-[#EDECEA]">
              <span className="text-xs font-bold text-[#444]">✓</span>
              <span className="text-[11px] text-[#555]">{c.label}</span>
            </Box>
          ))}
        </div>
      </div>

      {/* Per-page breakdown */}
      <aside className="w-56 border-l border-dashed border-[#AAAAAA] p-5 flex flex-col gap-3 shrink-0 overflow-auto">
        <Label>Per-Page Score</Label>
        {Array.from({ length: 12 }, (_, i) => {
          const pg = (i + 1) * 4;
          const score = [92, 88, 95, 78, 91, 60, 85, 72, 94, 88, 55, 90][i];
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-[#888] w-10 shrink-0">Pg {pg}</span>
              <div className="flex-1 border border-dashed border-[#AAAAAA] h-2">
                <div
                  className="bg-[#1C1C1C] h-full"
                  style={{ width: `${score}%`, opacity: score < 70 ? 0.5 : 1 }}
                />
              </div>
              <span className="text-[10px] text-[#888] w-6 text-right">{score}</span>
            </div>
          );
        })}
      </aside>
    </div>
  );
}

// ─── Screen 6: Export ──────────────────────────────────────────────────────────

function ScreenExport({ reset }: { reset: () => void }) {
  const formats = [
    {
      fmt: "PDF",
      name: "Accessible PDF",
      desc: "Tagged PDF with semantic headings, reading order, and alt text. Screen-reader compatible.",
      file: "research-paper-accessible.pdf",
    },
    {
      fmt: "EPUB",
      name: "Accessible EPUB",
      desc: "Reflowable EPUB 3 with adjustable font, spacing, and TTS compatibility. Works on e-readers.",
      file: "research-paper-accessible.epub",
    },
    {
      fmt: "DOCX",
      name: "Word Document",
      desc: "Structured DOCX with semantic styles, proper heading levels, and accessible table markup.",
      file: "research-paper-accessible.docx",
    },
    {
      fmt: "HTML",
      name: "Readable Web Page",
      desc: "Clean semantic HTML with your chosen reading profile applied. Shareable link available.",
      file: "research-paper-accessible.html",
    },
  ];

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col px-12 py-10 gap-8 overflow-auto">
        <div>
          <Label>Step 06 — Export</Label>
          <h2 className="text-3xl font-bold mt-2 tracking-tight">Your document is ready.</h2>
          <p className="text-sm text-[#666] mt-1">
            Choose a format to download, or read it directly in the browser.
          </p>
        </div>

        {/* Original vs Accessible */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <Box className="p-5 bg-[#EDECEA] flex flex-col gap-2">
            <Label>Original</Label>
            <div className="text-sm font-semibold mt-1">research-paper.pdf</div>
            <div className="text-[11px] text-[#888]">2.4 MB · 48 pages · Accessibility score: 54/100</div>
            <Divider />
            <div className="flex flex-col gap-1 text-[10px] text-[#888]">
              <div>✕ No semantic headings</div>
              <div>✕ No alt text on images</div>
              <div>⚠ Low contrast on pg 19</div>
              <div>⚠ Long paragraphs</div>
            </div>
          </Box>
          <Box className="p-5 border-solid border-[#1C1C1C] flex flex-col gap-2">
            <Label>Accessible Version</Label>
            <div className="text-sm font-semibold mt-1">research-paper-accessible.*</div>
            <div className="text-[11px] text-[#888]">Rebuilt · 48 pages · Accessibility score: 78/100</div>
            <Divider />
            <div className="flex flex-col gap-1 text-[10px] text-[#444]">
              <div>✓ Semantic heading structure</div>
              <div>✓ Reading order corrected</div>
              <div>✓ Tables marked up</div>
              <div>⚠ 2 images still need alt text</div>
            </div>
          </Box>
        </div>

        {/* Format grid */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {formats.map((f) => (
            <Box key={f.fmt} className="p-5 flex flex-col gap-3 hover:bg-[#EDECEA] transition-colors cursor-pointer group">
              <div className="flex items-start gap-3">
                <div className="border border-dashed border-[#AAAAAA] text-[10px] font-bold px-2 py-1 text-[#555] shrink-0">
                  {f.fmt}
                </div>
                <div>
                  <div className="text-sm font-bold">{f.name}</div>
                  <div className="text-[11px] text-[#888] leading-relaxed mt-0.5">{f.desc}</div>
                </div>
              </div>
              <div className="text-[10px] text-[#888] border-t border-dashed border-[#BBBBB9] pt-2 flex items-center justify-between">
                <span>{f.file}</span>
                <span className="text-[#1C1C1C] group-hover:underline">↓ Download</span>
              </div>
            </Box>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Btn filled>Read Online</Btn>
          <Btn>Share Link</Btn>
          <button
            onClick={reset}
            className="text-[11px] text-[#888] underline cursor-pointer hover:text-[#555] ml-auto"
          >
            ← Convert another document
          </button>
        </div>
      </div>

      {/* Summary sidebar */}
      <aside className="w-64 border-l border-dashed border-[#AAAAAA] p-6 flex flex-col gap-5 shrink-0">
        <Label>Session Summary</Label>

        <Box className="p-4 bg-[#EDECEA] flex flex-col gap-2">
          <div className="text-[10px] text-[#888]">Document</div>
          <div className="text-xs font-semibold">research-paper.pdf</div>
          <Divider />
          <div className="grid grid-cols-2 gap-y-1 text-[10px]">
            <span className="text-[#888]">Pages</span><span className="text-[#333] font-medium">48</span>
            <span className="text-[#888]">Words</span><span className="text-[#333] font-medium">12,400</span>
            <span className="text-[#888]">Images</span><span className="text-[#333] font-medium">6</span>
            <span className="text-[#888]">Tables</span><span className="text-[#333] font-medium">3</span>
            <span className="text-[#888]">Headings</span><span className="text-[#333] font-medium">12</span>
          </div>
        </Box>

        <div>
          <Label>Applied Profile</Label>
          <div className="text-xs font-semibold mt-1 text-[#333]">Dyslexia Friendly</div>
          <div className="text-[10px] text-[#888] mt-0.5">Lexend · 20px · 1.8 line-height</div>
        </div>

        <Divider />

        <div>
          <Label>Improvements Made</Label>
          <div className="mt-2 flex flex-col gap-1 text-[11px] text-[#555]">
            <div>✓ Heading hierarchy rebuilt</div>
            <div>✓ Reading order corrected</div>
            <div>✓ Table markup added</div>
            <div>✓ Footnotes linked</div>
            <div>✓ Column layout reflowed</div>
            <div>✓ Large whitespace removed</div>
          </div>
        </div>
      </aside>
    </div>
  );
}

// ─── Navigation bar ────────────────────────────────────────────────────────────

function NavBar({
  current,
  setCurrent,
}: {
  current: number;
  setCurrent: (n: number) => void;
}) {
  return (
    <div className="border-b border-dashed border-[#AAAAAA] px-6 py-2 flex items-center gap-1 bg-[#F4F2EE] shrink-0">
      <span className="text-[10px] text-[#888] tracking-widest mr-3 uppercase">Wireframe</span>
      {SCREENS.map((label, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`px-3 py-1.5 text-[10px] tracking-wide transition-colors cursor-pointer ${
            i === current
              ? "border border-dashed border-[#1C1C1C] text-[#1C1C1C] font-semibold bg-[#EDECEA]"
              : "text-[#888] hover:text-[#555]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState(0);

  const next = () => setScreen((s) => Math.min(s + 1, SCREENS.length - 1));

  return (
    <div
      className="flex flex-col h-full bg-[#F4F2EE] text-[#1C1C1C] overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <NavBar current={screen} setCurrent={setScreen} />

      <div className="flex-1 overflow-hidden">
        {screen === 0 && <ScreenLanding next={next} />}
        {screen === 1 && <ScreenProcessing next={next} />}
        {screen === 2 && <ScreenProfile next={next} />}
        {screen === 3 && <ScreenReader next={next} />}
        {screen === 4 && <ScreenScore next={next} />}
        {screen === 5 && <ScreenExport reset={() => setScreen(0)} />}
      </div>
    </div>
  );
}
