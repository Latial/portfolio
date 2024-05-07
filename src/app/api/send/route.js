//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Aleksandar <simic.aleksandar.sd@gmail.com>',
            to: ['simic.aleksandar.sd@gmail.com'],
            subject: 'Hello world',
            react: (
                <><p>Welcome</p>></>
            )
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
