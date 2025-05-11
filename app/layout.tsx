
export const metadata = {
  title: 'Digisoft Lite',
  description: 'VAG IMMO Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
