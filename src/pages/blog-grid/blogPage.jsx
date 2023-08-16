import { useRouter } from 'next/router';
import React from 'react';
import dbs from '../../api/dbs.js';
import getData from '../../api/getData.js';
import BlogGrid from '../../components/Blog-grid/blog-grid.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Navbar from '../../components/Navbar/navbar.jsx';
import PageHeader from '../../components/Page-header/page-header.jsx';
import TryAgain from '../../components/Try-Again/try-again.jsx';
import DarkTheme from '../../layouts/Dark.jsx';

export async function getStaticProps() {
  function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  try {
    const blogs = await getData.getListingsFromFirebase(dbs.BLOGS);

    const blogsImage =
      await 'https://firebasestorage.googleapis.com/v0/b/rajibhossainprejon-de7fb.appspot.com/o/blogs%2Fblog-100x560.png?alt=media&token=d17813f5-139d-4ea6-aaac-8d4f551357a5';

    const serializedBlogs = blogs.map((blog) => ({
      ...blog,

      date: formatDate(new Date(blog.date.seconds * 1000)),
    }));

    return {
      props: {
        blogs: serializedBlogs,
        blogsImage,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const BlogGridDark = ({ blogs, error, blogsImage }) => {
  const router = useRouter();

  const { page } = router.query;

  // const id = router.query.blogPage;
  const id = page;

  const currentPage = isNaN(parseInt(id, 10)) ? 1 : parseInt(id, 10);
  // The current page number (you can manage this in state or through other logic)
  const postsPerPage = 12;

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
        title='My Blogs'
        paragraph='Welcome to my personal blog space! Here, I share my thoughts, experiences, and insights on various topics.'
      />
      <BlogGrid
        blogs={blogs}
        blogsImage={blogsImage}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
      />
      <Footer />
    </DarkTheme>
  );
};

export default BlogGridDark;
