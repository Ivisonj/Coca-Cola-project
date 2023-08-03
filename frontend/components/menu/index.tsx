'use client'
import React, { useState, useEffect } from 'react'
import { parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import Link from 'next/link'

import { Conatiner, Avatar, MenuIcon, MenuConatiner, MenuOption } from './style'
import { api } from "@/services/api"

const defaultProfileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU'

export default function Menu() {

    const router = useRouter()
    const [ showMenu, setShowMenu ] = useState(false)
    const [ responseData, setResponseData ] = useState()

    const { 'account': accountType } = parseCookies()
    const { 'id': id } = parseCookies()

    useEffect(() => {
        async function getUserData() {
            try {
                if(accountType === 'company') {
                    const companyData = await api.get(`/companies/${id}`)
                    setResponseData(companyData.data[0])
                } else {
                    const userData = await api.get(`/users/${id}`)
                    setResponseData(userData.data[0])
                }
            } catch (erro) {
                console.error(erro)
            }
        }
        getUserData()
    }, [])

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    const goout = () => {
        const cookies = parseCookies()
        
        Object.keys(cookies).forEach(cookieNames => {
            destroyCookie(null, cookieNames)
        })

        router.push('/signin')
    }

    return (
        <Conatiner className={showMenu ? 'showMenu' : null}>
            {showMenu ? (
                <>
                    <MenuIcon>
                        <BiMenuAltLeft onClick={handleClick} style={{ fontSize: '3rem', color: '#000' }}/>
                    </MenuIcon>
                    <MenuConatiner>
                        <MenuOption>
                            <Link href={`/profile/${id}`} style={{ textDecoration: 'none', color: 'red'}}>
                                perfil
                            </Link>
                        </MenuOption>
                        <MenuOption onClick={goout}>sair</MenuOption>
                    </MenuConatiner>
                </>
            ) : (
                <Avatar
                    src={responseData ? (responseData.imageUrl === null ? defaultProfileImage :
                        `http://localhost:8080/image/${responseData.imageUrl}`) : defaultProfileImage}  
                    alt={responseData?.name}
                    onClick={handleClick} 
                />
            )}
        </Conatiner>
    )
}
