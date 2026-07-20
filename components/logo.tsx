import { cn } from "@/lib/utils"

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex size-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
        <svg
          viewBox="0 0 48 48"
          className="size-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 8V40M10 24H24M24 8V40"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 8C33 8 30 12 30 18V30C30 36 33 40 38 40"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            HIPER<span className="text-primary">CLEAN</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Premium Care
          </span>
        </div>
      )}
    </div>
  )
}
