import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { email, message, name } = req.body
  const msg = {
    to: 'bilaldraoui22@gmail.com',
    from: 'bilaldraoui22@gmail.com',
    subject:`${name} at ${email} sent you a message from your portfolio`,
    name,
    text: message,
  };
  
  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}