"use client"

import type React from "react"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ColorPickerProps {
  defaultValue?: string
  onChange?: (value: string) => void
}

export function ColorPicker({ defaultValue = "#000000", onChange }: ColorPickerProps) {
  const [color, setColor] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    if (onChange) {
      onChange(newColor)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="w-10 h-10 rounded-md border overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          style={{ backgroundColor: color }}
          aria-label="Escolher cor"
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3">
        <div className="flex flex-col gap-2">
          <input
            type="color"
            value={color}
            onChange={handleChange}
            className="w-32 h-32 cursor-pointer border-0 p-0 m-0"
          />
          <div className="text-xs text-center text-muted-foreground mt-1">{color.toUpperCase()}</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

