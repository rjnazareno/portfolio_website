interface WatermarkTextProps {
  text: string;
}

export default function WatermarkText({ text }: WatermarkTextProps) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden px-8 select-none sm:top-8 sm:px-12"
      aria-hidden
    >
      <div className="watermark-track">{text}</div>
    </div>
  );
}
