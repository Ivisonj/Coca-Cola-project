import React, { useState } from 'react';
import { Container, Icon, ProductDetail, PurchaseConfirmation, Product, ProductName, Price } from "./style"
import Amount from '../amount';

export default function Market() {
    const [isExpand, setisExpand] = useState(false)

    const handleClick = () => {
        setisExpand(!isExpand)
    }
    // className={isExpand ? 'expanded' : undefined}

    return (
        <>
            <Container >
                <Icon onClick={handleClick}>
                    <img width="25px" height="25px" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="MarketIcon" />
                </Icon>
                <ProductDetail>
                    <Product />
                    <ProductName>Nome do Produto</ProductName>
                    <Price>R$10,00</Price>
                    <Amount type='firtsType'/>
                </ProductDetail>
                <PurchaseConfirmation></PurchaseConfirmation>
            </Container>  
        </>
    )
}

