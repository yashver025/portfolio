/** Horizontal (desktop) / vertical (mobile) flow diagram built from CSS. */
export default function Pipeline({ steps, hue = '#8aa4ff' }: { steps: string[]; hue?: string }) {
  return (
    <ol className="pipe" style={{ ['--h' as string]: hue }} aria-label="Pipeline">
      {steps.map((s, i) => <li key={s}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{s}</li>)}
    </ol>
  );
}
