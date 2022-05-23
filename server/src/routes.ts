import express from 'express';
import { TelegramMessageAdapter } from './adapters/telegram-adapter/telegram-message-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, ss} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const telegramMessageAdapter = new TelegramMessageAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, telegramMessageAdapter);

    submitFeedbackUseCase.execute({
        type,
        comment,
        ss
    });

    return res.status(201).json({data: 'success create feedback'});
})