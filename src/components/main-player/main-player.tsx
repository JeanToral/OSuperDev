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
                <div className={ 'mainPlayerDetails' }>
                <h2>{ player.name }</h2>
                <p> { player.team } </p>
                </div>
                <div className= { 'mainPlayerActions' }>
                <FavoriteRoundedIcon className={ 'heart' } />
                <StarRoundedIcon className={ 'star' } />
                <ShareRoundedIcon className={ 'share' } />
                </div>
            </div>
            <div className={ 'completeStats' }>
                <p> Complete Stats for Fallen </p>
            </div>
        </div>
    )
}

export default MainPlayer 