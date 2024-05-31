import { useEffect, useState } from 'react'
import { IValue } from '../../interface'
import Details from '../Details'
import './style.scss'

const Content = ({ item }: { item: IValue[] }) => {
    const [value, setValue] = useState<string>()
    const [data, setData] = useState<IValue | null>(null)
    const itemsDrink = item && item.map((item: IValue) => item.strDrink)

    const handleClick = (name: string) => {
        const filteredData = item.filter(
            (item: IValue) => item.strDrink === name
        )
        setData(filteredData[0])
        setValue(name)
    }

    useEffect(() => {
        if (item) {
            const drink = item[0].strDrink
            const filteredData = item.filter(
                (item: IValue) => item.strDrink === drink
            )
            setData(filteredData[0])
            setValue(drink)
        }
    }, [item])

    return (
        <>
            <ul className="menu-drink">
                {itemsDrink &&
                    itemsDrink.map((item: string) => {
                        return (
                            <li
                                key={item}
                                className={value === item ? 'active' : ''}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </li>
                        )
                    })}
            </ul>
            <hr />
            <Details data={data} />
        </>
    )
}

export default Content
