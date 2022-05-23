import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy =  jest.fn();
const sendMessage = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMessage: sendMessage}
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'kekw'
        })).resolves.not.toThrow();
    })

    it('should be not able to submit a feedback', async()=> {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Caracois'
        })).rejects.toThrow();
    })

    it('should be not able to submit a feedback', async()=> {
        await expect(submitFeedback.execute({
            type: 'jeggers',
            comment: ''
        })).rejects.toThrow();
    })
})