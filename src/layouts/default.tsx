import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { GlobalStyles } from "../styles/GlobalStyles"

function Default(){
    return (
        <>
            <GlobalStyles />
            <Header />
            <Outlet />
        </>
    )
}

export { Default }