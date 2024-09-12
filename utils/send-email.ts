import emailjs from 'emailjs-com';

export const sendEmail = async (data: { name: string; email: string; message: string }) => {
  const { name, email, message } = data;

  try {
    const response = await emailjs.send(
      'service_ume3qg8', 
      'template_pz2pz5f', 
      {
        name,
        email,
        message,
      },
      '3VxZ2XS6rmTPLzTwV'
    );

    if (response.status !== 200) { 
      throw new Error('Failed to send email');
    }

    console.log('SUCCESS!', response.status, response.text);
  } catch (error) {
    console.error('FAILED...', error);
    throw error;
  }
};
