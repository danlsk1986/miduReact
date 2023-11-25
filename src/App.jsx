import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard';

export function App() {
    const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true   
    },
    {
        userName: 'Fernando_Her85',
        name: 'Fernando Herrera',
        isFollowing: false,
    },
    {
        userName: 'MoureDev',
        name: 'Brais Moure',
        isFollowing: true,
    },
    {
        userName: 'codigoconjuan',
        name: 'Juan Pablo de la Torre',
        isFollowing: false,
    }

    ]


    return ( 
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => {  
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}                            
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>

                    )
                })
            }
            
        </section>
       
     );
}

