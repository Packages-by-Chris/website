"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function ExamplePreview({
  children,
  code,
  defaultView = "preview",
}: {
  children: React.ReactNode
  code: string
  defaultView?: "preview" | "code"
}) {
  const [view, setView] = useState<"preview" | "code">(defaultView)
  const [copied, setCopied] = useState(false)
  const lines = code.split("\n")
  const gutterWidth = String(lines.length).length

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="my-4 rounded-xl border border-border overflow-hidden">
      <div className="flex items-center gap-0 border-b border-border bg-muted/20 px-4">
        <button
          type="button"
          onClick={() => setView("preview")}
          className={cn(
            "relative px-4 py-2.5 text-xs font-medium transition-colors",
            view === "preview"
              ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Preview
        </button>
        <button
          type="button"
          onClick={() => setView("code")}
          className={cn(
            "relative px-4 py-2.5 text-xs font-medium transition-colors",
            view === "code"
              ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Code
        </button>
        {view === "code" && (
          <button
            type="button"
            onClick={copy}
            className={cn(
              "ml-auto font-mono text-[10px] uppercase tracking-widest transition-all",
              copied
                ? "text-[#27c93f]"
                : "text-muted-foreground/30 hover:text-muted-foreground/70",
            )}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      {view === "preview" ? (
        <div className="p-6 bg-card">{children}</div>
      ) : (
        <div
          className="overflow-x-auto"
          style={{ backgroundColor: "hsl(var(--code-bg))" }}
        >
          <pre className="flex p-0 text-sm leading-6">
            <code className="flex w-full">
              <span
                className="shrink-0 select-none border-r py-4 text-right font-mono text-xs leading-6"
                style={{
                  borderColor: "hsl(var(--code-line))",
                  color: "hsl(var(--code-line))",
                  minWidth: `${gutterWidth + 2}ch`,
                  paddingRight: "1ch",
                  paddingLeft: "1ch",
                }}
              >
                {lines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </span>
              <span className="overflow-x-auto py-4 pl-4 pr-6 font-mono text-sm leading-6 text-foreground/85">
                {lines.map((line, i) => (
                  <div key={i} className="whitespace-pre">{line || " "}</div>
                ))}
              </span>
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}
