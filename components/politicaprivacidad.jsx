import { useState,useEffect} from "react";
export default function Politicaprivacidad() {
    const [show, setshow] = useState(true)

    useEffect(() => {
        const cookiesDate=localStorage.getItem("i+d+i")
        if (cookiesDate && !(parseInt(cookiesDate) + 100*60*60*60 < Date.now())) {
            setshow(false);            
        }
    }, [])

    const aceptarCookies = () => {
        setshow(false)
        localStorage.setItem("i+d+i",Date.now())
    }
    
    return (
        <div id="overbox3">
    {show && 
        <div id="infobox3">
            <p>Esta web utiliza cookies para obtener datos estadísticos de la navegación de sus usuarios. Si continúas navegando consideramos que aceptas su uso.
            <a href="#">Más información</a>
            <button className="btn btn-primary" onClick={aceptarCookies} style={{cursor:"pointer"}}>Aceptar</button>
            </p>
        </div>
    }
    </div>
    )
} 
