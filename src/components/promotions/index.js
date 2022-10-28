import { Slide, useMediaQuery } from "@mui/material"
import { Box, useTheme } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import { MessageText, PromotionContainer } from "../../styles/promotions"


const msg = [
    'Use First20 code to get instent discount on first purchase.',
    'Get instent delivery, within 2 days.',
    'Updated collection.'
]

export default function Promotions() {
    const containerRef = useRef()
    const [messageCount, setmessageCount] = useState(0)
    const [show, setShow] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
          }, 3000);

        const intervalID = setInterval(() => {
            setmessageCount((i) => (i + 1) % msg.length)

            setShow(true)

            setTimeout(() => {
                setShow(false);
              }, 3000);
        }, 4000);

    return () => {
        clearInterval(intervalID);
    }
    }, []);
    return(
        <PromotionContainer ref={containerRef}>
            <Slide direction={show ? "left" : "right"} in={show} timeout={{enter: 600, exit: 100}} container={containerRef.current}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <MessageText>
                        {msg[messageCount]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionContainer>
    )
}