"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export function CodeBlock({
  code,
  lang,
  filename,
}: {
  code: string
  lang?: string
  filename?: string
}) {
  const [copied, setCopied] = useState(false)
  const lines = code.split("\n")
  const lineCount = lines.length
  const gutterWidth = String(lineCount).length

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }, [code])

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-border bg-code-bg">
      <div className="flex items-center gap-3 border-b border-border px-4 py-2">
        {filename ? (
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            {filename}
          </span>
        ) : (
          <span className="h-4" />
        )}
        <div className="ml-auto flex items-center gap-2">
          {lang && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
              {lang}
            </span>
          )}
          <button
            type="button"
            onClick={copy}
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest transition-all",
              copied
                ? "text-foreground"
                : "text-muted-foreground/60 opacity-0 group-hover:opacity-100 hover:text-foreground",
            )}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
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
    </div>
  )
}
