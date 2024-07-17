import { Subjects, Publisher, PaymentCreatedEvent } from '@lawani321/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
