import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity("offer_read")
export class OfferEntity {
        @PrimaryColumn()
        id: string;

        @Column()
        offering: string;

        @Column()
        quantity: number;

        @Column()
        comment: string;

        @Column()
        location: string;

        @Column()
        startTime: Date;

        @Column()
        endTime: Date;

        @Column()
        userId: string;
}
