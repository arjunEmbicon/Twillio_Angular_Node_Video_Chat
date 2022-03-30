import config from './config';
import { Twilio } from 'twilio';

// Initialize Twilio client
const getTwilioClient = () => {
  if (!config.TWILIO_ACCOUNT_SID || !config.TWILIO_API_KEY || !config.TWILIO_API_SECRET) {
    throw new Error(`Unable to initialize Twilio client`);
  }
  return new Twilio(config.TWILIO_API_KEY, config.TWILIO_API_SECRET, { accountSid: config.TWILIO_ACCOUNT_SID })
}

export const twilioClient = getTwilioClient();
