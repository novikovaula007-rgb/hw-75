import {Container} from "@mui/material";
import Vigenere from "./features/vigenere/Vigenere.tsx";

const App = () => {
    return (
        <Container maxWidth='lg'>
            <Vigenere/>
        </Container>
    )
}

export default App
