import type { MetaFunction } from '@remix-run/node';

import { Heading, Text } from '~/components/atom';
import { AppLayout } from '~/components/layouts';
import useGreetingMessage from '~/hooks/useGreetingMessage';

export const meta: MetaFunction = () => {
  return [
    { title: 'Axent Note App - Home' },
    { name: 'description', content: 'Axent note homepage' },
  ];
};

export default function Index() {
  const greetingMessage = useGreetingMessage();
  return (
    <AppLayout>
      <div className="mb-4 mt-6 flex w-full shrink-0 flex-col gap-1">
        <Heading component="h2" variant="title-4" weight="bold">
          {greetingMessage}, Agung
        </Heading>
        <Text size="small" className="text-office-brown-700">
          What do you want to achieve today? 🎯
        </Text>
      </div>
    </AppLayout>
  );
}
