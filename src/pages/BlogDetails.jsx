import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Link as LinkIcon,
  Share2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { blogs } from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  const currentIndex = blogs.findIndex(
    (item) => item.id === Number(id)
  );

  const previousBlog =
    currentIndex > 0
      ? blogs[currentIndex - 1]
      : null;

  const nextBlog =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog?.id &&
        item.category === blog?.category
    )
    .slice(0, 2);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const shareArticle = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.description,
          url,
        });
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  if (!blog) {
    return (
      <section className="simple-page">

        <div className="simple-content">

          <span>404</span>

          <h1>
            Story not found.
          </h1>

          <p>
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blogs"
            className="back-link"
          >
            <ArrowLeft size={18} />
            Back to stories
          </Link>

        </div>

      </section>
    );
  }

  return (
    <>
      {/* READING PROGRESS */}

      <motion.div
        className="reading-progress"
        style={{ scaleX }}
      />


      <motion.article
        className="article-page"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        {/* BACK */}

        <Link
          to="/blogs"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Back to stories
        </Link>


        {/* ARTICLE HEADER */}

        <motion.header
          className="article-header"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            {blog.category.toUpperCase()}
          </span>

          <h1>
            {blog.title}
          </h1>

          <div className="article-meta">

            <span>
              By {blog.author}
            </span>

            <span>•</span>

            <span>
              {blog.date}
            </span>

            <span>•</span>

            <span>
              <Clock size={14} />
              {blog.readTime}
            </span>

          </div>

        </motion.header>


        {/* COVER */}

        <motion.img
          className="article-cover"
          src={blog.image}
          alt={blog.title}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        />


        {/* ARTICLE BODY */}

        <div className="article-layout">

          {/* TABLE OF CONTENTS */}

          <aside className="article-sidebar">

            <div className="toc">

              <span>
                IN THIS STORY
              </span>

              {blog.content.map(
                (section, index) => (

                  <a
                    href={`#section-${index}`}
                    key={index}
                  >
                    <small>
                      0{index + 1}
                    </small>

                    {section.heading}
                  </a>

                )
              )}

            </div>

          </aside>


          {/* MAIN CONTENT */}

          <main className="article-content">

            <p className="lead">
              {blog.description}
            </p>


            {blog.content.map(
              (section, index) => (

                <motion.section
                  id={`section-${index}`}
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >

                  <h2>
                    {section.heading}
                  </h2>

                  <p>
                    {section.text}
                  </p>

                </motion.section>

              )
            )}


            {/* QUOTE */}

            <blockquote>
              Great ideas become meaningful when
              they help people see the world differently.
            </blockquote>


            {/* SHARE */}

            <div className="article-share">

              <span>
                Share this story
              </span>

              <button
                onClick={shareArticle}
              >
                {copied ? (
                  <>
                    <LinkIcon size={17} />
                    Copied
                  </>
                ) : (
                  <>
                    <Share2 size={17} />
                    Share
                  </>
                )}
              </button>

            </div>

          </main>

        </div>


        {/* PREVIOUS / NEXT */}

        <div className="article-navigation">

          {previousBlog ? (

            <Link
              to={`/blog/${previousBlog.id}`}
              className="article-nav-card"
            >

              <small>
                <ArrowLeft size={14} />
                Previous story
              </small>

              <strong>
                {previousBlog.title}
              </strong>

            </Link>

          ) : (
            <div />
          )}


          {nextBlog ? (

            <Link
              to={`/blog/${nextBlog.id}`}
              className="article-nav-card next"
            >

              <small>
                Next story
                <ArrowRight size={14} />
              </small>

              <strong>
                {nextBlog.title}
              </strong>

            </Link>

          ) : (
            <div />
          )}

        </div>


        {/* RELATED STORIES */}

        {relatedBlogs.length > 0 && (

          <section className="related-stories">

            <div className="section-title">

              <span>
                KEEP READING
              </span>

              <h2>
                You may also like
              </h2>

            </div>


            <div className="blog-grid">

              {relatedBlogs.map(
                (related) => (

                  <Link
                    to={`/blog/${related.id}`}
                    className="blog-card"
                    key={related.id}
                  >

                    <div className="blog-image">

                      <img
                        src={related.image}
                        alt={related.title}
                      />

                      <span>
                        {related.category}
                      </span>

                    </div>

                    <div className="blog-content">

                      <small>
                        {related.readTime}
                      </small>

                      <h3>
                        {related.title}
                      </h3>

                      <span>
                        Read story
                        <ArrowRight
                          size={16}
                        />
                      </span>

                    </div>

                  </Link>

                )
              )}

            </div>

          </section>

        )}

      </motion.article>
    </>
  );
}

export default BlogDetails;