"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  return (
    <section id="antes-depois" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Antes e Depois</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Resultados que falam por si
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Arraste para comparar o antes e o depois de uma higienização profissional realizada pelaHIPER CLEAN.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40"
            onPointerDown={(e) => {
              dragging.current = true
              updateFromClientX(e.clientX)
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX)
            }}
            onPointerUp={() => (dragging.current = false)}
            onPointerLeave={() => (dragging.current = false)}
          >
            <Image
              src="/images/sofa-depois.png"
              alt="Sofá depois da higienização HIPER CLEAN"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/images/sofa-antes.png"
                alt="Sofá antes da higienização"
                fill
                className="object-cover"
              />
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Antes
              manchas, arcáros, odores e todo tipo de sujidades.
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Depois
              limpo, higienizado, protegido e com aparência de novo.
            </span>

            <div
              className="absolute inset-y-0 flex w-1 items-center justify-center bg-primary"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40">
                <MoveHorizontal className="size-6" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
