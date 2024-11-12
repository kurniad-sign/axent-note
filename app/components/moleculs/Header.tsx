import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import { LogOut } from 'lucide-react';

import { Heading, Text } from '../atom';

export function Header() {
  return (
    <header
      aria-label="header content"
      className="relative flex h-20 shrink-0 flex-col border-b px-7"
    >
      <div className="flex w-full max-w-screen-lg grow self-center">
        <div className="flex shrink-0 grow items-center">
          <Heading component="h2" weight="bold">
            Today
          </Heading>
        </div>
        <div className="flex h-full items-center">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions">
              <DropdownSection showDivider>
                <DropdownItem key="profile">
                  <Text weight="semibold">Agung Kurniadi</Text>
                  <Text component="span" size="xsmall" className="text-grey-500">
                    kurniadsign
                  </Text>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection>
                <DropdownItem key="logout" startContent={<LogOut size={16} />} color='danger'>
                  <Text component="span" weight="semibold">Logout</Text>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
