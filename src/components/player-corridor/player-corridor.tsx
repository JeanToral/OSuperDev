import React from 'react'
import { Player } from '../../pages/home/home'
import './player-corridor.scss'

interface PlayerCorridorProps {
    players: Player[],
    name: string
}

function PlayerCorridor(props: PlayerCorridorProps) {

    const { players, name } = props

    return (
        <div className={ 'playersContainer'}>
            <p> { name } </p>
            <div className={ 'playersCorridor' }>
                { players.slice(0, 2).map((players, index) => <div key={ index } className={ 'playersList'   }>
                    <img src={ players.image } alt={ players.name } />
                </div>)}
            </div>
        </div>
    )
    
}

export default PlayerCorridor