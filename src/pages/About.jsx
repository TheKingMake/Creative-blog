import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Curiosity",
      text: "We believe the best stories begin with a good question and a willingness to explore."
    },
    {
      icon: BookOpen,
      title: "Meaning",
      text: "We focus on ideas that are useful, thoughtful and worth remembering."
    },
    {
      icon: Sparkles,
      title: "Creativity",
      text: "We look for fresh perspectives that help readers see familiar ideas differently."
    },
  ];

  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <motion.div
          className="about-hero-content"
          initial={{
            opacity: 0,
            y: 40,
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
            <Sparkles size={15} />
            ABOUT AKSTORIES
          </span>

          <h1>
            Stories for
            <br />
            <em>curious minds.</em>
          </h1>

          <p>
            Akstories is a modern publication exploring
            technology, artificial intelligence, design,
            business and the ideas shaping our future.
          </p>

        </motion.div>

      </section>


      {/* MISSION */}

      <section className="about-mission">

        <motion.div
          className="mission-label"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          OUR MISSION
        </motion.div>

        <motion.div
          className="mission-content"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2>
            We make complex ideas
            <br />
            <em>simple, useful and human.</em>
          </h2>

          <p>
            The internet is full of information.
            Akstories exists to help you find the ideas
            that are actually worth your attention.
          </p>

          <p>
            From emerging technologies to creative thinking,
            we tell stories that inform, inspire and encourage
            you to think differently.
          </p>

        </motion.div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="section-title">

          <span>
            WHAT WE BELIEVE
          </span>

          <h2>
            Our values.
          </h2>

        </div>


        <div className="values-grid">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (
              <motion.article
                className="value-card"
                key={value.title}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="value-icon">
                  <Icon size={24} />
                </div>

                <small>
                  0{index + 1}
                </small>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

              </motion.article>
            );
          })}

        </div>

      </section>


      {/* STATS */}

      <section className="about-stats">

        <div>
          <strong>50+</strong>
          <span>Stories published</span>
        </div>

        <div>
          <strong>5</strong>
          <span>Topics explored</span>
        </div>

        <div>
          <strong>10K+</strong>
          <span>Ideas discovered</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Curiosity</span>
        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <Sparkles size={28} />

        <span>
          KEEP EXPLORING
        </span>

        <h2>
          There's always
          <br />
          another story.
        </h2>

        <p>
          Discover your next idea on Akstories.
        </p>

        <Link
          to="/blogs"
          className="primary-btn"
        >
          Explore stories
          <ArrowRight size={18} />
        </Link>

      </section>

    </div>
  );
}

export default About;