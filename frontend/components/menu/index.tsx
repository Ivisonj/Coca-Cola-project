'use client'
import React, { useState } from 'react'
import { parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Conatiner, Avatar, MenuIcon, MenuConatiner, MenuOption } from './style'
import Link from 'next/link'

export default function Menu() {

    const router = useRouter()
    const [ showMenu, setShowMenu ] = useState(false)

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

    const { 'id': id } = parseCookies()

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
                <Avatar onClick={handleClick}>
                    <BsFillPersonFill style={{ fontSize: '3rem' }}/>
                </Avatar>
            )}
        </Conatiner>
    )
}
