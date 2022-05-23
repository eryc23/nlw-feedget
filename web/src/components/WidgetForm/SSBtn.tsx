import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "./Loading";

interface SSBtnProps{
    ss: string | null;
    onSS: (ss: string | null) => void;
}

export function SSBtn({ss, onSS}: SSBtnProps){
    const [isTakingSS, setIsTakingSS] = useState(false);

    async function handleTakeSS(){
        setIsTakingSS(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onSS(base64image);

        setIsTakingSS(false);
    }

    if(ss){
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-sm border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100"
                style={{
                    backgroundImage: `url('${ss}')`,
                    backgroundSize: 190,
                    backgroundPosition: 'right bottom'
                }}
                onClick={() => onSS(null)}
            >
                <Trash weight="fill"/>
            </button>
        );
    }


    return(
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-sm border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-norma-900 focus:ring-offset-zinc-900 transition-colors"
            onClick={handleTakeSS}
        >
            {isTakingSS ? (
                <Loading />
            ): (
                <Camera className="w-6 h-6" />
            )}
        </button>
    )
}