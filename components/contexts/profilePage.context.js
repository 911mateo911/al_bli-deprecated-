import { createContext, useReducer } from 'react'
import reducer from '../reducers/profilePage.reducer'

const initialValues = {
    shareDialogOpen: false,
    dialogUrl: '',
    pageLoading: false
}

export const ProfilePageCTX = createContext()
export const ProfilePageDSC = createContext()

export function ProfilePageProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <ProfilePageCTX.Provider value={state} >
            <ProfilePageDSC.Provider value={dispatch} >
                {props.children}
            </ProfilePageDSC.Provider>
        </ProfilePageCTX.Provider>
    )
}