import { useNavigate } from 'react-router-dom';
import { AppShell, Center, Space, Stack } from '@mantine/core';
import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';
import SplashScreen from '@/components/SplashScreen';
import { HomeHeader } from '../components/HomeHeader';
import { HomeFooter } from '../components/HomeFooter';
import BrandLogo from '@/components/BrandLogo';
import { notifications } from '@mantine/notifications';

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = async (
    username: string,
    avatar: string,
    room?: string
  ) => {
    try {
      avatar = `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}`;
      storage.clearToken();

      const response = await (room === ''
        ? createGameRoomAPI({ username, avatar })
        : joinGameRoomAPI({ username, avatar, room_uuid: room }));

      storage.setToken(response?.data);
      navigate(`/game`);
    } catch (error) {
      notifications.show({
        title: 'Oops!',
        message: 'Something went wrong. Please try again later.',
        color: 'red',
      });
    }
  };

  return (
    <AppShell header={<HomeHeader />} footer={<HomeFooter />}>
      <Center h="100%">
        <Stack align="center" w="300px" h="500px">
          <BrandLogo />
          <Space h="xl" />
          <SplashScreen onSubmit={handleSubmit} />
        </Stack>
      </Center>
    </AppShell>
  );
}
