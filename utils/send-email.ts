import emailjs from "emailjs-com";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const params = {
    name: data.name,
    email: data.email,
    message: data.message,

    from_name: data.name,
    reply_to: data.email,
    user_email: data.email,
  };

  const res = await emailjs.send(
    "service_1y8x8jd",
    "template_pz2pz5f",
    params,
    "3VxZ2XS6rmTPLzTwV"
  );

  if (res.status !== 200) throw new Error(`EmailJS failed: ${res.text}`);
};
