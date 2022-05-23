import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";

import { feedbackTypes, FeedbackType } from "..";
import { CloseBtn } from "../../CloseBtn";
import { SSBtn } from "../SSBtn";
import { api } from "../../../lib/api";
import { Loading } from "../Loading";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestart,
    onFeedbackSent
}: FeedbackContentStepProps){
    const [SS, setSS] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    async function handleSubmit(e: FormEvent){
        e.preventDefault();

        setIsSendingFeedback(true);

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            SS
        })

        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
                    onClick={onFeedbackRestart}
                    title="Voltar ao formulário de feedback"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-lg leading-6 flex items-center gap-2">
                    <img className="w-6" src={feedbackTypes[feedbackType].img.uri} alt={feedbackTypes[feedbackType].img.alt} />
                    {feedbackTypes[feedbackType].title}
                </span>

                <CloseBtn />
            </header>
            <div className="flex py-8 gap-2 w-full">
                <form onSubmit={handleSubmit} className="my-4 w-full">
                    <textarea 
                        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 border-zinc-600  text-zinc-100 bg-transparent rounded-sm hover:ring-norma-900 focus:border-norma-900 focus:ring-0 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                        placeholder="Conte com detalhes o que está acontecendo..." 
                        onChange={event => setComment(event.target.value)}
                    />

                    <footer className="flex gap-2 mt-2">
                        <SSBtn ss={SS} onSS={setSS} />

                        <button 
                            disabled={!comment.length || isSendingFeedback}
                            type="submit"
                            className="p-2 bg-norma-900 font-medium rounded-sm border-transparent flex-1 flex justify-center item-center text-sm hover:bg-norma-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-norma-900 focus:ring-offset-zinc-900 transition-colors disabled:opacity-40"
                        >
                            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                        </button>
                    </footer>
                </form>
            </div>
        </>
    );
}