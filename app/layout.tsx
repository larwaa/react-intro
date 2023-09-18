import ThemeRegistry from "@/lib/mui/ThemeRegistry/ThemeRegistry";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction to React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box component="main" flexGrow={1}>
            <AppBar
              position="sticky"
              color="transparent"
              sx={{ marginBottom: 4 }}
            >
              <Toolbar>
                <Typography variant="h6" component="h1">
                  Introduction to React for Rubberdøk, 2023
                </Typography>
              </Toolbar>
            </AppBar>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
