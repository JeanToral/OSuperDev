import react from 'react'
import  './header.scss'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


function Header(){
    return <div className='Header'>
        <MenuRoundedIcon className={ 'menuIcon desktop-hidden' }/>
        <img src='/images/logo.png' alt='Logo' className={ 'Logo' }/>
        <div className={ 'headerCategories' }>
            <p>Players</p>
            <p>Teams</p>
            <p>Matches</p>
        </div>
        <AccountCircleRoundedIcon />
    </div>
}

export default Header

