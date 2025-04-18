"use client"

import { useEffect, useRef } from "react"

interface CompletionChartProps {
  completed: number
  total: number
}

export function CompletionChart({ completed, total }: CompletionChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Calculate percentages
    const completedPercentage = completed / total
    const pendingPercentage = 1 - completedPercentage

    // Draw chart
    const centerX = canvasRef.current.width / 2
    const centerY = canvasRef.current.height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Draw pending portion (yellow)
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fillStyle = "#FBBF24" // yellow-400
    ctx.fill()

    // Draw completed portion (green)
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2 * completedPercentage)
    ctx.fillStyle = "#4ADE80" // green-400
    ctx.fill()

    // Draw inner circle (white) for donut effect
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2)
    ctx.fillStyle = "#FFFFFF"
    ctx.fill()

    // Add text in the middle
    ctx.font = "bold 16px Arial"
    ctx.fillStyle = "#374151" // gray-700
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${Math.round(completedPercentage * 100)}%`, centerX, centerY)
  }, [completed, total])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} width={200} height={200} className="max-w-full" />
    </div>
  )
}
