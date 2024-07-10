import { Subjects, Publisher, OrderCancelledEvent } from '@lawani321/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
