import { useState, useEffect } from 'react'
import { parseCookies } from 'nookies'

import { api } from '@/services/api'
import { TableContant, Header, Body, TableRow, TableHeader, TableData } from './style'

type TableTypes = {
    productName: string
    price: number
    amount: number
    userName: string
}

export default function Table() {

    const { 'id': companyId } = parseCookies()
    const [ responseData, setResponseData ] = useState<TableTypes>()
console.log(responseData)

    useEffect(() => {
        async function loadData() {
            try {
                const loadCompanyOrders = await api.get(`/orders/companyId/${companyId}`)
                setResponseData(loadCompanyOrders.data)
    
            } catch(erro) {
                console.error(erro)
            }
        }   
        loadData()
    }, [])

    function headerRender() {
        return (
            <tr>
                <TableHeader>#</TableHeader>
                <TableHeader>Nome do Produto</TableHeader>
                <TableHeader>Quantidade</TableHeader>
                <TableHeader>Preço</TableHeader>
                <TableHeader>Cliente</TableHeader>
            </tr>
        )
    }

    function renderData() {
        return (
            <>
                {responseData?.map((item, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'DarkRed' : 'Red'}>
                        <TableData>{index + 1}</TableData>
                        <TableData>{item.productName}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{item.price.toFixed(2)}</TableData>
                        <TableData>{item.userName}</TableData>
                    </TableRow>
                ))}
            </>
        )
    }
    

    return (
        <>
        <TableContant>
            <Header>
                {headerRender()}
            </Header>
            <Body>
                {renderData()}
            </Body>
        </TableContant>
        </>
    )
}