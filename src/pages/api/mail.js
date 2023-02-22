import { mailOptions, transporter } from '../../config/nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}\n \n`),
    ''
  );
  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1  id="email-header" >${CONTACT_MESSAGE_FIELDS[key]}</h1><p id="email-content">${val}</p>`),
    ''
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Email Title</title>
    <style>
      /* Set some default styles */
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        background-color: #f6f6f6;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
        font-weight: bold;
      }
      p {
        margin: 0;
        padding: 0;
      }

      /* Add some styles for the email container */
      #email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      /* Add some styles for the email header */
      #email-header {
        background-color: #fff;
        padding: 20px;
        text-align: center;
      }
      #email-header h1 {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
      }
      #email-header p {
        font-size: 16px;
        color: #666;
        margin-bottom: 0;
      }

      /* Add some styles for the email content */
      #email-content {
        padding: 20px;
      }

      /* Add some styles for the email footer */
      #email-footer {
        background-color: #333;
        padding: 20px;
        text-align: center;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="email-container">
      <!-- <div id="email-header">
        <h1>New Contact From Your Portfolio</h1>
        <!-- <p>Your email subtitle goes here.</p> -->
      </div> -->
      <div id="email-content">
        ${htmlData}
      </div>
      <div id="email-footer">
        <p>Copyright © 2023</p>
      </div>
    </div>
  </body>
</html>
`,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data);
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: 'Bad request' });
    }

    console.log(req.body);
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.name,
      });
      console.log(data.name);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};
export default handler;
