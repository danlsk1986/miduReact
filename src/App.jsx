import './App.css';
import { v4 as uuidv4 } from 'uuid';
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
            {/* <TwitterFollowCard 
                initialIsFollowing={true} 
                userName='midudev'
                >Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard                 
                userName="codigoconjuan"
                >Juan Pablo de la Torre
            </TwitterFollowCard> */}

            {/* <TwitterFollowCard 
                isFollowing 
                userName="Fernando_Her85" 
                name="Fernando Herrera"/>

            <TwitterFollowCard 
                isFollowing 
                userName="MoureDev" 
                name="Brais Moure"/>             */}
        </section>
       
     );
}

