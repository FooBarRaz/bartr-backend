export default interface CreateOfferDto {
    offering: string;
    quantity: number;
    comment: string;
    location: string;
    startTime: Date;
    endTime: Date;
}

