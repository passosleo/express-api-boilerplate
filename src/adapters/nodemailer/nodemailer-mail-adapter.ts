import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.email.com',
  port: 587,
  auth: {
    user: 'user',
    pass: 'pass',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Server <server@email.com>',
      to: 'User <user@email.com>',
      subject: subject,
      html: body,
    });
  }
}
