/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/dist/client/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import dbs from '../../api/dbs';
import storage from '../../context/storage';

const BlogGrid = ({ blogs, blogsImage, currentPage, postsPerPage }) => {
  const router = useRouter();
  // Calculate the index of the first and last post for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Slice the blogs array to get the posts for the current page
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Function to handle navigation with query parameters
  const handleNavigation = (blogId) => {
    // Use router.push to navigate to the target page with query parameters
    storage.storeData(dbs.BLOG_DETAILS, blogId);

    router.push(`/blog-details/${blogId}`);
    // router.push({
    //   pathname: '/blog-details/bd',
    //   query: { blogId },
    // });
  };

  return (
    <section className='blog-pg blog section-padding pt-0'>
      <div className='container'>
        <div className='posts'>
          <div className='row'>
            {currentPosts.map((blogItem) => (
              <div className='col-lg-4' key={blogItem.id}>
                <div className='item mb-80 wow fadeInUp' data-wow-delay='.3s'>
                  <a
                    onClick={() => handleNavigation(blogItem.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='img'>
                      {/* <img src={blogItem.image} alt='' />
                       */}
                      {blogItem.image && (
                        <Image
                          src={blogItem.image}
                          height={560}
                          width={1000}
                          alt={
                            blogItem.alt ||
                            'rajibhossainprejon.com web and mobile app developer'
                          }
                          priority
                        />
                      )}
                      {!blogItem.image && (
                        <Image
                          src={blogsImage}
                          height={560}
                          width={1000}
                          alt={
                            blogItem.alt ||
                            'rajibhossainprejon.com web and mobile app developer'
                          }
                          priority
                        />
                      )}
                    </div>
                  </a>
                  <div className='cont'>
                    <div>
                      <div className='info'>
                        <span className='date'>
                          <span>
                            <i>{blogItem.date}</i>
                            <span> </span>
                            {blogItem.date.month}
                          </span>
                        </span>
                      </div>
                      <h5>
                        <a
                          onClick={() => handleNavigation(blogItem.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          {blogItem.title.substr(0, 55) + '...'}
                        </a>
                      </h5>
                      <div className='btn-more'>
                        <a
                          className='simple-btn'
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleNavigation(blogItem.id)}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className='pagination d-block w-100'>
              {currentPage > 1 && (
                <span className='mr-3 btn-outline-info'>
                  <Link href={`/blog-grid/blogPage/?page=${currentPage - 1}`}>
                    <a>
                      <i className='ion-ios-arrow-back' />
                    </a>
                  </Link>
                </span>
              )}

              {Array.from({ length: totalPages }).map((_, index) => (
                <span
                  key={index}
                  className={index + 1 === currentPage ? 'active' : ''}
                >
                  <Link href={`/blog-grid/blogPage/?page=${index + 1}`}>
                    <a>{index + 1}</a>
                  </Link>
                </span>
              ))}
              {currentPage < totalPages && (
                <span className='ml-3 btn-outline-info'>
                  <Link href={`/blog-grid/blogPage/?page=${currentPage + 1}`}>
                    <a>
                      <i className='ion-ios-arrow-forward' />
                    </a>
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
