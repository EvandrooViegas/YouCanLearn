type Data = {
  reciverEmail: string;
  email: string;
  name?: string;
  message?: string;
  subject: string;
};
export default function sendEmail(data: Data) {
  const { reciverEmail, email, name, message, subject } = data;
  return `
    mailto:${reciverEmail}?subject=${subject.replace(" ", "%20")}&body=${message?.replace(" ", "%20")?.replace("\n", "%0D%0A")} 
    %0D%0A
    %0D%0A${name},
    %0D%0AFrom: ${email}
    `;
}
