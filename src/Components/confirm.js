import { createConfirmation } from 'react-confirm';
import Confirmation from './Confirmation';

const defaultConfirmation = createConfirmation(Confirmation);

export default function confirm(confirmation, options = {}) {
  return defaultConfirmation({ confirmation, ...options });
}
