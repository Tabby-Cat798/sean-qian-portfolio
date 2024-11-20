// app/layout.tsx
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowY: 'scroll', height: '100vh', margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
