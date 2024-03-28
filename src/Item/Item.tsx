import React from 'react'
import { CartItemType } from '../App';
import { Wrapper } from './Item.style';
import { Button } from '@material-ui/core'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    const truncate = (str: string, length: number): string => {
        if (!str) return '';
        return str.length > length ? str.slice(0, length) + '...' : str;
    }
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                {/* <h3>{item.title}</h3> */}
                <h3>{truncate(item.title, 29)}</h3>
                {/* <p>{item.description}</p> */}
                <p>{truncate(item.description, 120)}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}

export default Item
