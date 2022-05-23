import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
    async create({type, comment, ss}: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                type,
                comment,
                ss
            }
        })
    }
}