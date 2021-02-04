import {createContext} from 'react'


const initialState = {
    first:"Ayush",
    last:"Rana"
}

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;