export class MakeOfferCommand {
    constructor(
        public readonly userId: string,
        public readonly offering: string,
        public readonly quantity: number,
        public readonly comment: string,
        public readonly location: string,
        public readonly startTime: Date,
        public readonly endTime: Date
    ) {
    }

}
