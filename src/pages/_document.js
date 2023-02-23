import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <meta httpEquiv='X-UA-Compatible' content='IE=edge' /> */}
          <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />

          <meta
            name='keywords'
            content='Rajib Hossain Prejon, portfolio website, web development, android app development, iOS app development, Next.js, React.js, React Native, Redux, Django, Tailwind CSS, Material UI, frontend development, backend development, full-stack development, software development, programming, coding web design'
          />

          <meta
            name='description'
            content='Welcome to my portfolio website! I am Rajib Hossain Prejon, a web and mobile app developer specializing in Next.js, React, React Native, and Django. Whether you need a full-stack web app or just a frontend or backend developer, I can provide the skills and expertise you need to create an amazing product. Explore my portfolio and contact me to discuss your next project!'
          />

          <meta name='author' content='Rajib Hossain Prejon' />

          <link rel='shortcut icon' href='/img/logo.png' />
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
