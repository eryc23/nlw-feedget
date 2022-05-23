import { MessageAdapter } from "../adapters/message-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    ss?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbackRepository,
        private messageAdapter: MessageAdapter
    ){}

    async execute(req: SubmitFeedbackUseCaseRequest) {
        const { type, comment, ss } = req;

        if(!type) throw new Error("Type is required");
        if(!comment) throw new Error("Type is required");
        

        await this.feedbackRepository.create({
            type,
            comment,
            ss
        })

        await this.messageAdapter.sendMessage({
            type,
            body: comment
        })
    }
}