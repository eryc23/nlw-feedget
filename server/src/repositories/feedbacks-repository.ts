export interface FeedbackCreateData {
    type: string;
    comment: string;
    ss?: string;
}

export interface FeedbackRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}