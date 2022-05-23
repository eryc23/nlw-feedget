import { feedbackTypes, FeedbackType } from "..";
import { CloseBtn } from "../../CloseBtn";

interface FeedbackTypeStepProps {
    onFeedbackChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackChange}: FeedbackTypeStepProps){
    return (
        <>
            <header>
                <span className="text-lg leading-6">Deixe seu Feedback</span>

                <CloseBtn />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, item]) => {
                    return (
                        <button 
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-norma-900 focus:border-norma-900 focus:outline-none"
                            onClick={() => onFeedbackChange(key as FeedbackType)}
                            type="button"
                        >
                            <img src={item.img.uri} alt={item.img.alt} className="w-10" />
                            <span>{item.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}