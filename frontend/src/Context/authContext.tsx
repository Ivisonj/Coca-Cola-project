'use client'
import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { baseApiUrl } from '../app/page'
import { api } from '../../services/api'

import { setCookie, parseCookies } from 'nookies'

export const AuthContext = createContext({} as AuthContextType)

type User = {
    id: string
    name: string
    account: string
}

type SignInData = {
    data: any
}

type CompanySignInData = {
    data: any
}

type AuthContextType = {
    isAuthenticated: boolean
    errorResponse: string
    user: User
    signIn: (data: SignInData) => Promise<void>
    companySignIn: (data: CompanySignInData) => Promise<void>
}

export function AuthProvider({ children }) {

    const router = useRouter()
    const [ user, setUser ] = useState<User | null>(null)
    const [ errorResponse, setErrorResponse ] = useState('')

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'cocacola-token':token } = parseCookies()

        if (token) {
            axios.post(`${baseApiUrl}/recoverInformation`, { token: token })
              .then(res => setUser(res.data))
              .catch(err => console.error(err))
          }
    }, [])

    async function signIn(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/signin`, data)

            setCookie(undefined, 'cocacola-token', response.data.token, {
                maxAge: response.data.exp
            })

            setCookie(undefined, 'account', response.data.account, {
                maxAge: response.data.exp
            })

            setCookie(undefined, 'id', response.data.id, {
                maxAge: response.data.exp
            })
            
            setUser(response.data)

            api.defaults.headers['Authorization'] = `bearer ${response.data.token}`

            router.push('/user')
        } catch(error) {
            console.error(error)
            setErrorResponse(error.response.data)
        }
    }

    async function companySignIn(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/signin/company`, data)

            setCookie(undefined, 'cocacola-token', response.data.token, {
                maxAge: response.data.exp
            })

            
            setCookie(undefined, 'account', response.data.account, {
                maxAge: response.data.exp
            })
            
            setCookie(undefined, 'id', response.data.id, {
                maxAge: response.data.exp
            })

            setUser(response.data)

            api.defaults.headers['Authorization'] = `bearer ${response.data.token}`

            router.push('/company')
        } catch(error) {
            console.error(error)
            setErrorResponse(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn, companySignIn, errorResponse }}>
            {children}
        </AuthContext.Provider>
    )
}