import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { UserProvider } from "@/hooks/userContext";
import Navbar from "@/components/common/navbar";

const theme = createTheme();


export const metadata: Metadata = {
  title: "Food Waste Management",
  description: "By Pritam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <Navbar />
              <div className="p-12 min-h-screen">
                {children}
              </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
