import { NextUIProvider } from '@nextui-org/react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
} from '@remix-run/react';

import './styles/fonts.css';
import './styles/tailwind.css';

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider navigate={navigate} useHref={useHref} disableRipple>
          {children}
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
