import { ReactNode } from "react"
import { HeaderSearchProvider } from "./HeaderSearchContext"

interface IRootContext {
    children: ReactNode
}
export const RootContext = ({children}: IRootContext) => {
    return (
        <HeaderSearchProvider>
            {
                children
            }
        </HeaderSearchProvider>
    )
}