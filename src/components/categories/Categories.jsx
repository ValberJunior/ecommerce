import { Container } from './styles';
import { categories } from '../../data';
import CategoryItem from '../categoryItem/CategoryItem';

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            )
            )}
        </Container>
    )
}

export default Categories
