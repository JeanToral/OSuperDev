import react from 'react'
import './home.scss'
import { Furia, Mibr, Imperial, Pain } from '../../utils/data'
import PlayerCorridor from '../../components/player-corridor/player-corridor';
import MainPlayer from '../../components/main-player/main-player';

export interface Player {
    name: string,
    team: string,
    image: string
}

function Home() {
    return (
    <div className='Home'>
        <MainPlayer />
        <div className="Divider"/>
        <PlayerCorridor players={ Furia } name={ 'Furia' } />
        <PlayerCorridor players={ Mibr } name={ 'Mibr' } />
        <PlayerCorridor players={ Imperial } name={ 'Imperial' } />
        <PlayerCorridor players={ Pain } name={ 'Pain' } />
    </div>
    )
}

export default Home