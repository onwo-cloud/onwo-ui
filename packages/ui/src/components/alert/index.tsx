import { Close } from './close';
import { Message } from './message';
import { Root } from './root';
import { Title } from './title';

export const Alert = Object.assign(Root, {
  Title,
  Message,
  Close,
});
