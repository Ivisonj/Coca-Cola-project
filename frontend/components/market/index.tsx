import React, { useState } from 'react';
import { Container, Icon, ProductDetail, PurchaseConfirmation, Product, ProductName, Text } from "./style"
import Amount from '../amount';
import Button from '../button';

export default function Market() {
    const [isVisible, setisVisible] = useState(false)

    const handleClick = () => {
        setisVisible(!isVisible)
    }
    // className={isExpand ? 'expanded' : undefined}


    return (
        <>
            <Container className={isVisible ? 'expanded' : null}>
                <Icon onClick={handleClick}>
                    <img width="25px" height="25px" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="MarketIcon" />
                </Icon>
                <ProductDetail className={!isVisible ? 'donShowDisplay' : null}>
                    <Product />
                    <ProductName>Nome do Produto</ProductName>
                    <Text>R$10,00</Text>
                    <Amount type='firtsType'/>
                </ProductDetail>
                <PurchaseConfirmation className={!isVisible ? 'donShowDisplay' : null}>
                    <Text style={{ color: "#000"}}>Total</Text>
                    <Text style={{ color: "#000"}}>R$10,00</Text>
                    <Button type='primary'>Finalizar Pedido</Button>
                </PurchaseConfirmation>
            </Container>  
        </>
    )
}

