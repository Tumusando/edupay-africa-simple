"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"

const languages = [
  { code: "rw", name: "Kinyarwanda", flag: "🇷🇼", region: "Rwanda" },
  { code: "en", name: "English", flag: "🇬🇧", region: "International" },
  { code: "fr", name: "Français", flag: "🇫🇷", region: "Rwanda, Burundi" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪", region: "Kenya, Tanzania, Uganda" },
]

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("en")

  const currentLanguage = languages.find((lang) => lang.code === selectedLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setSelectedLang(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.name}</div>
                <div className="text-xs text-muted-foreground">{lang.region}</div>
              </div>
            </div>
            {selectedLang === lang.code && <Check className="w-4 h-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
