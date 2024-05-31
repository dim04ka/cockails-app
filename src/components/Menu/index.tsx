import { NavLink } from 'react-router-dom'
import { IItem } from '../../interface'

const Menu = ({ items }: { items: IItem[] }) => {
    return (
        <nav>
            <ul>
                {items.map((item: IItem) => {
                    return (
                        <li key={item.code}>
                            <NavLink
                                to={`/${item.code}`}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu
