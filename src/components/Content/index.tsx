import { useEffect, useState } from 'react'
import { IValue } from '../../interface'
import Details from '../Details'
import './style.scss'

const Content = ({ item }: { item: IValue[] }) => {
    const [value, setValue] = useState<string>()
    const [data, setData] = useState<IValue | null>(null)
    const itemsDrink = item && item.map((item: IValue) => item.strDrink)

    const handleClick = (name: string) => {
        const filteredData = item.find((item: IValue) => item.strDrink === name)
        if (filteredData) {
            setData(filteredData)

            setValue(name)
        }
    }

    useEffect(() => {
        if (item && item.length > 0) {
            const drink = item[0].strDrink
            const filteredData = item.find(
                (item: IValue) => item.strDrink === drink
            )
            if (filteredData) {
                setData(filteredData)
                setValue(drink)
            }
        }
    }, [item])

    return (
        <>
            <ul className="menu-drink">
                {itemsDrink?.map((drink: string) => {
                    return (
                        <li
                            key={drink}
                            className={value === drink ? 'active' : ''}
                            onClick={() => handleClick(drink)}
                        >
                            {drink}
                        </li>
                    )
                })}
            </ul>
            <hr />
            {data && <Details data={data} />}
        </>
    )
}

export default Content
