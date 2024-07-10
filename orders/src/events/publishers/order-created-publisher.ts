import { Publisher, OrderCreatedEvent, Subjects } from "@lawani321/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}