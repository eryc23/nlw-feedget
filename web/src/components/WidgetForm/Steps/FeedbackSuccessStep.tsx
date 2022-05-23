import { CloseBtn } from "../../CloseBtn";

interface FeedbackSuccessStepProps {
    onFeedbackRestart: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestart}: FeedbackSuccessStepProps){
    return (
        <>
            <header>
                <CloseBtn />
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" className="w-10" />
                <span className="text-xl mt-2">Agradecemos seu feedback!</span>
                <button 
                    className="py-2 px-6 mt-6 bg-zinc-800 border-transparent rounded-sm text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-norma-900 focus:ring-offset-zinc-900 transition-colors"
                    onClick={onFeedbackRestart}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}