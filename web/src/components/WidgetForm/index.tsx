import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        img: {
            uri: 'https://img.icons8.com/emoji/452/bug-emoji.png',
            alt: 'Imagem de inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        img: {
            uri: 'https://img.icons8.com/fluency/344/macbook-idea.png',
            alt: 'Imagem de luz'
        }
    },
    OTHER: {
        title: 'Outro',
        img: { 
            uri: 'https://img.icons8.com/fluency/344/cloud.png', 
            alt: 'Imagem de nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const onFeedbackRestart = () => {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-md mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto transition-all">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestart={onFeedbackRestart} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackChange={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestart={onFeedbackRestart} 
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-1" href="#">Poggers</a>
            </footer>
        </div>
    )
}