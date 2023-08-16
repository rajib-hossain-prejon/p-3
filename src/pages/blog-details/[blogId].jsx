import React from 'react';
import BlogDetails from '../../components/Blog-details/blog-details';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import PageHeader from '../../components/Page-header/page-header';
import DarkTheme from '../../layouts/Dark';

import { useRouter } from 'next/router';
import dbs from '../../api/dbs';
import getData from '../../api/getData';
import TryAgain from '../../components/Try-Again/try-again';
import storage from '../../context/storage';

export async function getStaticPaths() {
  function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  const blogs = await getData.getListingsFromFirebase(dbs.BLOGS);

  const serializedBlogs = blogs.map((blog) => ({
    ...blog,
    date: formatDate(new Date(blog.date.seconds * 1000)),
  }));

  const paths = serializedBlogs.map((blog) => {
    const blogId = blog.id.toString();

    return {
      params: { blogId },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogId = context.params.blogId;

  function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  try {
    const blog = await getData.getListingByIdFromFirebase(dbs.BLOGS, blogId);
    blog.date = blog.date.toString();

    return {
      props: {
        blog,

        blogId,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const BlogDetailsDark = ({ blog, blogId, error }) => {
  const router = useRouter();

  // Access the blogId from the query parameters
  // const { blogId } = router.query;

  const d = storage.getData(dbs.BLOG_DETAILS);

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  if (error) {
    return <TryAgain />;
  }

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <div className='circle-bg'>
        <div className='circle-color fixed'>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title='Blog Details.'
        // paragraph="All the most current news and events of our creative team."
      />
      <BlogDetails blog={blog} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
