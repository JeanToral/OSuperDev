import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { Furia } from '../../utils/data';
import './main-player.scss'
import { Diversity1 } from '@mui/icons-material';

function MainPlayer() {

    const player = Furia[3]

    return(
        <div className={ 'mainPlayer'}>
            <div className={ 'mainPlayerIMG' }>
                <img src={ player.image } alt={ player.name } />
                <div className={ 'mainPlayerActions mobile-hidden' }>
                    <FavoriteRoundedIcon className={ 'heart' } />
                    <StarRoundedIcon className={ 'star' } />
                    <ShareRoundedIcon className={ 'share' } />
                </div>
            </div>
                <div className={ 'mainPlayerDetails' }>
                    <h2>{ player.name }</h2>
                    <p className={ 'playerTeam' }> { player.team } </p>
                    <div className={ 'completeStats mobile-hidden' }>
                        <p> Complete Stats for { player.name } </p>
                    </div>
                </div>
                <div className= { 'mainPlayerActions desktop-hidden' }>
                    <FavoriteRoundedIcon className={ 'heart' } />
                    <StarRoundedIcon className={ 'star' } />
                    <ShareRoundedIcon className={ 'share' } />
                </div>
            <div className={ 'completeStats desktop-hidden' }>
                <p> Complete Stats for { player.name } </p>
            </div>
        </div>
    )
}

export default MainPlayer 