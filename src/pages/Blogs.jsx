import { ArrowRight, Clock, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { blogs } from "../data/blogs";

function Blogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Artificial Intelligence",
    "Design",
    "Business",
    "Lifestyle",
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        blog.title.toLowerCase().includes(searchText) ||
        blog.description.toLowerCase().includes(searchText) ||
        blog.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="website">

      <section className="blogs-page">

        {/* BACK */}

        <Link
          to="/"
          className="back-link"
        >
          ← Back to Home
        </Link>


        {/* HEADING */}

        <motion.div
          className="page-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>LATEST STORIES</span>

          <h1>
            Explore
            <br />
            the blog.
          </h1>

          <p>
            Discover stories about technology,
            artificial intelligence, design,
            business and modern life.
          </p>
        </motion.div>


        {/* SEARCH */}

        <motion.div
          className="blog-search"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >

          <Search size={20} />

          <input
            type="text"
            placeholder="Search stories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}

        </motion.div>


        {/* CATEGORIES */}

        <div className="category-filter">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>


        {/* RESULT COUNT */}

        <div className="blog-result">

          <span>
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1
              ? "story"
              : "stories"}
          </span>

          {(search || category !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          )}

        </div>


        {/* BLOG GRID */}

        <motion.div
          className="blog-grid"
          layout
        >

          <AnimatePresence mode="popLayout">

            {filteredBlogs.map((blog) => (

              <motion.article
                className="blog-card"
                key={blog.id}

                layout

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}

                transition={{
                  duration: 0.35,
                }}

                whileHover={{
                  y: -10,
                }}
              >

                <div className="blog-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                  <span>
                    {blog.category}
                  </span>

                </div>


                <div className="blog-content">

                  <small>
                    <Clock size={13} />
                    {blog.readTime}
                  </small>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.id}`}
                  >
                    Read story
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>


        {/* NO RESULTS */}

        {filteredBlogs.length === 0 && (

          <motion.div
            className="no-results"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <Search size={35} />

            <h2>
              No stories found
            </h2>

            <p>
              Try a different search term or
              category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Show all stories
            </button>

          </motion.div>

        )}

      </section>

    </div>
  );
}

export default Blogs;