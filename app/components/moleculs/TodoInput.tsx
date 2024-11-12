import { Button, Card, Input } from '@nextui-org/react';
import { Notebook, Plus } from 'lucide-react';
import { useState } from 'react';

export function TodoInput() {
  const [showInput, setShowInput] = useState(false);

  const showInputTodos = (value: boolean) => {
    setShowInput(value);
  };

  if (!showInput) {
    return (
      <div className="mt-2">
        <Button
          fullWidth
          color="primary"
          startContent={<Plus strokeWidth={2.5} size={16} />}
          onClick={() => showInputTodos(true)}
        >
          Add Task
        </Button>
      </div>
    );
  }

  return (
    <form>
      <Card shadow="sm">
        <div className="flex items-center gap-2 p-3">
          <Notebook size={24} />
          <Input radius="sm" placeholder="Enter your task" variant="bordered" />
          <Button onClick={() => showInputTodos(false)}>Cancel</Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </div>
      </Card>
    </form>
  );
}
