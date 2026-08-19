import { ArrowRight, Menu, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">

        <Link to="/" className="logo">
          <span className="logo-icon">
            <Sparkles size={16} />
          </span>
          AkStories
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link to="/">Home</Link>

          <Link to="/blogs">Blogs</Link>

          <a href="#categories">Categories</a>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="nav-actions">

          <button className="search-btn">
            <Search size={18} />
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={21} />
          </button>

        </div>

      </nav>

      {/* HERO */}
      <motion.section
  className="hero"
  id="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

        <motion.div
  className="hero-text"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>

          <div className="small-label">
            <Sparkles size={15} />
            STORIES WORTH READING
          </div>

          <h1>
            Ideas that
            <br />
            <em>move the world.</em>
          </h1>

          <p>
            Discover thoughtful stories about technology,
            creativity, artificial intelligence, design and
            the ideas shaping our future.
          </p>

          <div className="hero-buttons">

            <Link to="/blogs" className="primary-btn">
              Explore stories
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="secondary-btn">
              About us
            </Link>

          </div>

        </motion.div>

        <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 50, scale: 0.95 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80"
            alt="Writer working"
          />

          <motion.div
  className="floating-card"
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>

            <Sparkles size={18} />

            <div>
              <strong>Fresh ideas</strong>
              <span>Every week</span>
            </div>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* FEATURED */}
      <motion.section
  className="featured"
  id="blogs"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

        <div className="section-title">
          <span>EDITOR'S PICK</span>
          <h2>Featured story</h2>
        </div>

        <div className="featured-card">

          <div className="featured-image">

            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Technology"
            />

          </div>

          <div className="featured-content">

            <span className="category">
              TECHNOLOGY
            </span>

            <h3>
              How technology is creating
              a new way of thinking
            </h3>

            <p>
              Technology is no longer simply a tool.
              It has become part of how we imagine,
              communicate and solve problems.
            </p>

            <div className="author">

              <div className="avatar">
                A
              </div>

              <div>
                <strong>Alex Morgan</strong>
                <span>7 min read</span>
              </div>

            </div>

            <Link
              to="/blog/1"
              className="read-btn"
            >
              Read article
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </motion.section>

      {/* BLOGS */}
      <section className="latest">

        <div className="section-title">
          <span>LATEST STORIES</span>
          <h2>From the blog</h2>
        </div>

        <div className="blog-grid">

          <BlogCard
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            category="Technology"
            title="The future of technology is more human than ever"
            id="1"
          />

          <BlogCard
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
            category="Artificial Intelligence"
            title="AI and the next digital revolution"
            id="2"
          />

          <BlogCard
            image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
            category="Design"
            title="Why great design makes technology simple"
            id="3"
          />

        </div>

      </section>

      {/* CATEGORIES */}
      <section
        className="categories"
        id="categories"
      >

        <div>

          <span>EXPLORE</span>

          <h2>
            Find your
            <br />
            next idea.
          </h2>

        </div>

        <div className="category-list">

          {[
            "Technology",
            "Artificial Intelligence",
            "Design",
            "Business",
            "Lifestyle",
          ].map((item, index) => (

            <Link
              to="/blogs"
              className="category-item"
              key={item}
            >

              <small>
                0{index + 1}
              </small>

              <strong>
                {item}
              </strong>

              <ArrowRight size={19} />

            </Link>

          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section className="about">

        <Sparkles size={30} />

        <span>
          STAY CURIOUS
        </span>

        <h2>
          Better ideas.
          <br />
          Better stories.
        </h2>

        <p>
          AkStories is a modern publication for curious minds.
          We share meaningful stories that inform, inspire
          and make you think differently.
        </p>

        <div className="subscribe">

  {!subscribed ? (
    <>
      <input
        type="email"
        placeholder="Your email address"
        required
      />

      <button
        onClick={() => setSubscribed(true)}
      >
        Subscribe
        <ArrowRight size={17} />
      </button>
    </>
  ) : (
    <div className="subscribe-success">
      ✓ You're subscribed!
    </div>
  )}

</div>

      </section>

      {/* FOOTER */}
      <footer>

        <Link to="/" className="logo">

          <span className="logo-icon">
            <Sparkles size={15} />
          </span>

          AkStories

        </Link>

        <p>
          Ideas. Stories. Perspectives.
        </p>

        <span>
          © 2026 AkStories
        </span>

      </footer>

    </div>
  );
}




/* MAIN APP */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}
function BlogCard({
  image,
  category,
  title,
  id,
}) {
  return (
    <motion.article
      className="blog-card"
      initial={{
        opacity: 0,
        y: 40,
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
      whileHover={{
        y: -10,
      }}
    >
      <div className="blog-image">

        <img
          src={image}
          alt={title}
        />

        <span>
          {category}
        </span>

      </div>

      <div className="blog-content">

        <small>
          5 min read
        </small>

        <h3>
          {title}
        </h3>

        <Link to={`/blog/${id}`}>
          Read story
          <ArrowRight size={16} />
        </Link>

      </div>
    </motion.article>
  );
}
export default App;