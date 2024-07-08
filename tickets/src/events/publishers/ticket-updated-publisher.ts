import { Publisher, Subjects, TicketUpdatedEvent } from '@lawani321/common';

export class TicketupdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdate;
}
