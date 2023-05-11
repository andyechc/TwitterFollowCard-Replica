import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'reactjs',
        name: 'React',
        isFollowing: true
    },
    {
        userName: 'flutter',
        name: 'Flutter',
        isFollowing: false
    },
    {
        userName: 'kivymd',
        name: 'KivyMD',
        isFollowing: true
    },
    {
        userName: 'reactnative',
        name: 'React-Native',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}