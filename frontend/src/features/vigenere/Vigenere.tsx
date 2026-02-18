import {Box, IconButton, Stack, TextField} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {useState} from "react";
import {axiosAPI} from "../../axiosAPI.ts";

const Vigenere = () => {
    const [decoded, setDecoded] = useState('');
    const [password, setPassword] = useState('');
    const [encoded, setEncoded] = useState('');

    const vigenereCipher = async (cipherType: "encode" | "decode") => {
        try {
            if (cipherType === "encode") {
                const vigenereResponse = await axiosAPI.post("encode", {message: encoded, password: password});
                const vigenereText = vigenereResponse.data;
                setDecoded(vigenereText.encoded);
            } else if (cipherType === "decode") {
                const vigenereResponse = await axiosAPI.post("decode", {message: decoded, password: password});
                const vigenereText = vigenereResponse.data;
                setEncoded(vigenereText.decoded);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box sx={{maxWidth: '50%', p: 4}}>
            <form>
                <Stack spacing={2}>
                    <TextField
                        label="Decoded message"
                        multiline
                        rows={6}
                        fullWidth
                        value={decoded}
                        onChange={(e) => setDecoded(e.target.value)}
                    />

                    <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Stack>
                            <IconButton disabled={!(password.trim().length > 0)} onClick={() => vigenereCipher("decode")}>
                                <ArrowDownwardIcon/>
                            </IconButton>
                            <IconButton disabled={!(password.trim().length > 0)} onClick={() => vigenereCipher("encode")}>
                                <ArrowUpwardIcon/>
                            </IconButton>
                        </Stack>
                    </Stack>

                    <TextField
                        label="Encoded message"
                        rows={6}
                        multiline
                        fullWidth
                        value={encoded}
                        onChange={(e) => setEncoded(e.target.value)}
                    />
                </Stack>
            </form>
        </Box>
    );
};

export default Vigenere;