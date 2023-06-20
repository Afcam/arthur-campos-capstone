import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { createRoom, joinRoom } from '@/utils/api';

import './EnterForm.scss';
import storage from '@/utils/storage';

export default function EnterForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    console.log(form.gameId.value);

    try {
      const token = await createRoom();
      storage.setToken(token.data);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="enter-form" onSubmit={handleSubmit}>
        <TextInput name="gameId" placeholder="GAME ROOM ID" />

        <Group position="center" mt="md">
          <Button type="submit" size="md">
            ENTER
          </Button>
        </Group>
      </form>
      <Button type="submit" color="red" size="xs" radius="md">
        Create
      </Button>
    </>
  );
}
