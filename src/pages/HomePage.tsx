import SplashScreen from '@/components/SplashScreen/SplashScreen';

// import EnterForm from '@/components/EnterForm/EnterForm';
// import Logo from '@/components/Logo/Logo';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { AppShell, Center, Container } from '@mantine/core';

export default function HomePage() {
  return (
    <AppShell padding="md">
      <Center h="100%">
        <SplashScreen />
      </Center>
    </AppShell>
  );
}
