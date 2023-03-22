import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";


interface IHeaderSearchContext {
    headerSearch: string
    changeHeaderSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const HeaderSearchContext = createContext<IHeaderSearchContext>({} as IHeaderSearchContext)

interface IHeaderSearchProvider {
    children: ReactNode   
}

export const HeaderSearchProvider = ({children}: IHeaderSearchProvider) => {
    const [headerSearch, setHeaderSearch] = useState('Eminem')

    const changeHeaderSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setHeaderSearch(e.target.value)
    }, [])

    const value = useMemo(() => ({
        headerSearch,
        changeHeaderSearch
    }), [headerSearch,changeHeaderSearch])

    return (
        <HeaderSearchContext.Provider
            value={value}
        >
            {
                children
            }

        </HeaderSearchContext.Provider>
    )
}

export const useHeaderSearch = () => {
    const context = useContext(HeaderSearchContext)
    if(!context) {
        throw new Error('useHeaderSearch must be used within Header Search Provider')
    }
    return context
}