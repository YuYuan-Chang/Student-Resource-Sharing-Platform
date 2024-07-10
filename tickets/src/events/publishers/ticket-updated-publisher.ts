import { Publisher, Subjects, TicketUpdatedEvent } from '@lawani321/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
