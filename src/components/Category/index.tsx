import { useParams } from 'react-router-dom'
import { IValue, IDataSource, IItem } from '../../interface'
import { useDispatch, useSelector } from 'react-redux'
import { IValueState } from '../../reducers/todoSlice'
import { useEffect, useState } from 'react'
import { add } from '../../reducers/todoSlice'
import { URL, COCKTAIL_CODE } from '../../const'
import { useNavigate } from 'react-router-dom'
import Content from '../Content'

const Category = () => {
    const [loading, setLoading] = useState(false)
    const [_, setError] = useState<unknown>(null)
    const { category } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const value = useSelector((state: IValueState) => state.todo.value)

    const loadData = async () => {
        try {
            setLoading(true)
            if (!value[category]) {
                const result = await fetch(`${URL}${category}`)
                const data: IDataSource = await result.json()
                const value: Record<string, IValue[]> = {}
                value[category as string] = data.drinks
                dispatch(add(value))
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const isExist = COCKTAIL_CODE.map((code: IItem) => code.code).some(
            (code) => code === category
        )
        if (!isExist) {
            navigate('/404')
        }
        loadData()
    }, [category])

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Content item={value[category]} />
            )}
        </>
    )
}

export default Category
