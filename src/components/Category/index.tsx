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
    const [error, setError] = useState<unknown>(null)
    const { category } = useParams<{ category: string }>()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const value = useSelector((state: IValueState) => state.todo.value)

    const loadData = async () => {
        try {
            setLoading(true)
            if (category && !value[category]) {
                const result = await fetch(`${URL}${category}`)
                const data: IDataSource = await result.json()
                const value: Record<string, IValue[]> = {}
                value[category] = data.drinks
                dispatch(add(value))
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!category) return

        const isExist = COCKTAIL_CODE.some(
            (code: IItem) => code.code === category
        )
        if (!isExist) {
            navigate('/404')
            return
        }

        loadData()
    }, [category])

    return (
        <>
            <>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error loading data</div>
                ) : (
                    <Content item={value[category]} />
                )}
            </>
        </>
    )
}

export default Category
