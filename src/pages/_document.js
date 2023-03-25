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
            content='Ready to take your online presence to the next level? Look no further than Rajib Hossain Prejon! As an expert full-stack developer with extensive experience in website, web app, mobile app, Android app, iOS app, frontend, and backend development, Rajib offers exceptional service and top-quality results. Contact him today to bring your digital dreams to life.'
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
