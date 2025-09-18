import emailjs from "emailjs-com";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "service_1y8x8jd",
      "template_pz2pz5f",
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      "3VxZ2XS6rmTPLzTwV"
    );

    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    console.log("SUCCESS!", response.status, response.text);
  } catch (error) {
    console.error("FAILED...", error);
    throw error;
  }
};
