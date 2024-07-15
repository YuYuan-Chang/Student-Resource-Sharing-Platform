import { Publisher, Subjects, TicketCreatedEvent } from '@lawani321/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
