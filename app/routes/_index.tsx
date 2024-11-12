import { Button } from '@nextui-org/button';
import type { MetaFunction } from '@remix-run/node';

import { Heading, Text } from '~/components/atom';
import { AppLayout } from '~/components/layouts/AppLayout';

export const meta: MetaFunction = () => {
  return [
    { title: 'Axent Note App - Home' },
    { name: 'description', content: 'Axent note homepage' },
  ];
};

export default function Index() {
  return (
    <AppLayout>
      <Heading component="h1">Heading One</Heading>
      <Text component="span">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
        beatae. Asperiores quae sint, sunt odit cum eum veritatis ab porro
        fugiat ipsa exercitationem minus quaerat iure quisquam, velit quo autem.
      </Text>
      <Button>Sample Button</Button>
    </AppLayout>
  );
}
