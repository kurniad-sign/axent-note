import { Heading } from '../atom';

export function Sidebar() {
  return (
    <aside className="relative flex w-72 min-w-[210px] max-w-[420px] shrink-0 bg-grey-100">
      <div className="flex grow flex-wrap items-center justify-center">
        <Heading component="h3" variant="title-4" align="center">
          Sidebar Component
        </Heading>
      </div>
    </aside>
  );
}
