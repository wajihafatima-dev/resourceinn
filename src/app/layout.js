import TanstackProvider from "./provider/TanstackProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{margin:0,padding:0}}
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}

