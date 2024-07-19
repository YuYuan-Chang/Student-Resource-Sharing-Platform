<<<<<<< HEAD
import { Subjects, Publisher, PaymentCreatedEvent } from '@rallycoding/common';
=======
import { Subjects, Publisher, PaymentCreatedEvent } from '@lawani321/common';
>>>>>>> 9ab12212f2fd6a289e10f0d5a20a414ea9e9d31b

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
