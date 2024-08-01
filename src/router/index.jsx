import MusicCenter from '@/pages/MusicCenter'
import MyMusic from '../pages/MyMusic'
import PlayerPage from '@/pages/PlayerPage'

const routes = [
    {
        path: '/',
        element: <MusicCenter />
    },
    {
        path: '/my-music',
        element: <MyMusic />
    },
    {
        path: '/music',
        element: <PlayerPage />
    }
]

export default routes
