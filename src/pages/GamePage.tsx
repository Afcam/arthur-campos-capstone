export default function GamePage() {
  return (
    <>
      <h2>GamePage</h2>
    </>
  );
}
// useEffect(() => {
//   // Player receives a command
//   // socket.on('receivedCommand', (command) => {
//   //   setCommandLog((prevLog) => [...prevLog, command]);
//   // });

//   // Player successfully joins a room
//   socket.on('joinedRoom', (roomName) => {
//     setJoinedRoom(roomName);
//   });

//   return () => {
//     // Clean up the socket connection when the component unmounts
//     socket.disconnect();
//   };
// }, [socket]);
