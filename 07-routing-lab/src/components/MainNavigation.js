import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { Navigation } from './Navigation';

export const MainNavigation = () => {
    return (
        <Navigation>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/characters'}>Characters</Link></li>

            {/* <li><NavLink style={({isActive}) => ({color: isActive ? 'red' : 'white'})} to={'/characters'}>Characters</NavLink></li>  */}
            {/* <li><NavLink className={({isActive}) => isActive ? 'nav-active' : undefined} to={'/characters'}>Characters</NavLink></li>  */}
            {/* can set dynamic styles, usually for Navigation */}
        </Navigation>
    )
}