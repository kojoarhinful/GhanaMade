"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<{}>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
