import { Header, Sidebar } from '../moleculs';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <section className="relative z-[1] flex min-h-[380px] grow flex-col shadow-md">
        <Header />
        <main
          aria-label="main content"
          className="relative flex shrink-0 grow flex-col px-7"
        >
          <div className="flex w-full max-w-screen-lg grow flex-col self-center">
            <div className="mb-4 mt-6 flex w-full shrink-0 flex-col gap-1">
              {children}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
