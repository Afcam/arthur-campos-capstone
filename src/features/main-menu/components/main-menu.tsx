import {useNavigate} from 'react-router-dom'
import {AppShell, Center, Space, Stack} from '@mantine/core'
import GitClashLogo from '../../../components/GitClashLogo'
import {MainMenuHeader} from './main-menu-header'
import {MainMenuFooter} from './main-menu-footer'

export default function MainMenu() {
	return (
		<AppShell header={<MainMenuHeader />} footer={<MainMenuFooter />}>
			<Center h="100%">
				<Stack align="center" w="300px" h="500px">
					<GitClashLogo />
					<Space h="xl" />
					{/* <SplashScreen onSubmit={handleSubmit} /> */}
				</Stack>
			</Center>
		</AppShell>
	)
}

// import {createGameRoomAPI, joinGameRoomAPI} from '@/utils/api'
// import storage from '@/utils/storage'
// import SplashScreen from '@/components/SplashScreen'
// import {HomeHeader} from '../components/HomeHeader'
// import {HomeFooter} from '../components/HomeFooter'

// const navigate = useNavigate()

// const handleSubmit = async (
// 	username: string,
// 	avatar: string,
// 	room?: string
// ) => {
// 	try {
// 		// avatar = `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}`
// 		// // try {
// 		// //   const response = await getGithubUserInfo(username);
// 		// //   avatar = response.data.avatar_url;
// 		// // } catch (error) {}

// 		// storage.clearToken()

// 		// const response =
// 		// 	room === ''
// 		// 		? await createGameRoomAPI({username, avatar})
// 		// 		: await joinGameRoomAPI({username, avatar, room_uuid: room})

// 		// storage.setToken(response?.data)
// 		navigate(`/game`)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
