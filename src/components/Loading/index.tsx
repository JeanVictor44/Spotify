import { Container } from "./style"

function Loading(){
    return (
        <Container>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </Container>
    )
}
export { Loading }