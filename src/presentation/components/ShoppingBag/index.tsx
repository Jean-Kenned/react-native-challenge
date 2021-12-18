import React from 'react'
import BagImage from '@/presentation/assets/bag.svg'
import {Container, Counter, Number} from './styles'

const ShoppingBag = () => {
    return (
        <Container>
            <BagImage/>
            <Counter>
                <Number>
                    1
                </Number>
            </Counter>
        </Container>
    )
}   

export default ShoppingBag