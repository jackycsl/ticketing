import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@csltickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
