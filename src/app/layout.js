import TanstackProvider from "./provider/TanstackProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}

