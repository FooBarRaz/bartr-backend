import {EventsHandler} from "@nestjs/cqrs";
import {OfferMadeEvent} from "./offer-made-event";
import {Logger} from "@nestjs/common";

class OfferReadRepository {
}

class Offer {
}

@EventsHandler(OfferMadeEvent)
export class OfferMadeEventHandler {
    handle(event: OfferMadeEvent) {
        Logger.log(`handled Offer made event: ${JSON.stringify(event, null, 2)}`)
    }

}
