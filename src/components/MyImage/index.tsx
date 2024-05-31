import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IValue } from '../../interface'

const MyImage = ({ data }: { data: IValue }) => (
    <LazyLoadImage alt={data.idDrink} src={data.strDrinkThumb} width={200} />
)

export default MyImage
