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
    <div className="group relative my-4 rounded-xl border border-border overflow-hidden shadow-sm">
      {/* Title bar with traffic lights */}
      <div
        className="flex items-center gap-3 border-b border-border px-4 py-2.5"
        style={{ backgroundColor: "hsl(var(--code-header))" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>
        {filename && (
          <span className="ml-2 font-mono text-[11px] text-muted-foreground/50">{filename}</span>
        )}
        <div className="ml-auto flex items-center gap-2">
          {lang && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/30">
              {lang}
            </span>
          )}
          <button
            type="button"
            onClick={copy}
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest transition-all",
              copied
                ? "text-[#27c93f]"
                : "text-muted-foreground/30 opacity-0 group-hover:opacity-100 hover:text-muted-foreground/70",
            )}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code area with line numbers */}
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
    </div>
  )
}
