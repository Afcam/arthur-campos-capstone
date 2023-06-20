// import { useEffect, useState } from 'react';
// import storage from '@/utils/storage';
import EnterForm from '@/components/EnterForm/EnterForm';
import Logo from '@/components/Logo/Logo';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
// import { io } from 'socket.io-client';
// import { API_URL } from '@/config/config';
// const socket = io(API_URL);

export default function HomePage() {
  // const [message, setMessage] = useState(undefined);

  // useEffect(() => {
  //   socket.on('receive_message', (data) => {
  //     // alert(data.message);
  //     console.log(data);
  //   });
  // }, [socket]);

  // const sendMessage = () => {
  //   socket.emit('send_message', { message: 'hello' });
  // };
  return (
    <>
      {/* <Header /> */}
      <SplashScreen />
      {/* <EnterForm /> */}
      {/* <Footer /> */}
    </>
  );
}
