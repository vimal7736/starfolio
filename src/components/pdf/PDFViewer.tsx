import { X } from "lucide-react"

import { Button } from "@/components/ui"

interface PDFViewerProps {
  pdfUrl: string
  title: string
  onClose: () => void
}

export function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-6xl mx-4 my-8 flex flex-col bg-[var(--color-bg-secondary)] rounded-lg border border-border shadow-[var(--shadow-raised-lg)]">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground text-glow">
            {title}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title={title}
            style={{ minHeight: "600px" }}
          />
        </div>
      </div>
    </div>
  )
}

