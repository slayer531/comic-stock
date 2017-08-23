import { createConfirmation } from 'react-confirm';
import Confirmation from './Components/Confirmation';

const defaultConfirmation = createConfirmation(Confirmation);

export default function confirm(confirmation, options = {}) {
  return defaultConfirmation({ confirmation, ...options });
}
