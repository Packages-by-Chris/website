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
    <div className="my-4 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center gap-0 border-b border-border bg-muted/40 px-4">
        <button
          type="button"
          onClick={() => setView("preview")}
          className={cn(
            "relative px-4 py-2.5 text-xs font-medium transition-colors",
            view === "preview"
              ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
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
              ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
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
                ? "text-foreground"
                : "text-muted-foreground/60 hover:text-foreground",
            )}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      {view === "preview" ? (
        <div className="bg-card p-6">{children}</div>
      ) : (
        <div className="overflow-x-auto bg-code-bg">
          <pre className="flex p-0 text-sm leading-6">
            <code className="flex w-full">
              <span
                className="shrink-0 select-none border-r py-4 text-right font-mono text-xs leading-6"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--border))",
                  minWidth: `${gutterWidth + 2}ch`,
                  paddingRight: "1ch",
                  paddingLeft: "1ch",
                }}
              >
                {lines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </span>
              <span className="overflow-x-auto py-4 pl-4 pr-6 font-mono text-[13px] leading-6 text-foreground/90">
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
