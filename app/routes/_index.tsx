import type { MetaFunction } from '@remix-run/node';
import { Button } from '@nextui-org/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <Button>Sample Button</Button>
    </>
  );
}
