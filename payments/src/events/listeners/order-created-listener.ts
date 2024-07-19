import { Message } from 'node-nats-streaming';
<<<<<<< HEAD
import { Listener, OrderCreatedEvent, Subjects } from '@rallycoding/common';
=======
import { Listener, OrderCreatedEvent, Subjects } from '@lawani321/common';
>>>>>>> 9ab12212f2fd6a289e10f0d5a20a414ea9e9d31b
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const order = Order.build({
      id: data.id,
      price: data.ticket.price,
      status: data.status,
      userId: data.userId,
      version: data.version,
    });
    await order.save();

    msg.ack();
  }
}
