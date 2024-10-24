const HEAD = (
    <div style= {{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }}/>
)

const BODY = (
    <div style= {{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px"
    }}/>
)

const R_ARM = (
    <div style= {{
        width: "80px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-70px",
        rotate: "30deg",
        transformOrigin: "left bottom",
    }}/>
)

const L_ARM = (
    <div style= {{
        width: "80px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "0px",
        rotate: "-30deg",
        transformOrigin: "right bottom",
    }}/>
)

const R_LEG = (
    <div style= {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
    }}/>
)

const L_LEG = (
    <div style= {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
    }}/>
)
const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing ({ numberOfGuesses }: 
HangmanDrawingProps) {
    return  <div style={{position: "relative"}}> 
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            height: "60px", 
            width: "10px", 
            background: "brown",
            position: "absolute",
            marginLeft: "310px",
            }}
        />
        <div style={{
            height: "10px", 
            width: "200px", 
            background: "brown",
            marginLeft: "120px",
            }}
        />
        <div style={{
            height: "400px", 
            width: "10px", 
            background: "brown", 
            marginLeft: "120px"
            }}/>
        <div style={{
            height: "10px", 
            width: "250px", 
            background: "brown"
            }}/>
    </div>
}