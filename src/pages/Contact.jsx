import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    event.target.reset();
  };

  return (
    <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <motion.div
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
            GET IN TOUCH
          </span>

          <h1>
            Let's start
            <br />
            <em>a conversation.</em>
          </h1>

          <p>
            Have a story idea, collaboration proposal or
            simply want to say hello? We'd love to hear from you.
          </p>

        </motion.div>

      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-content">

        {/* CONTACT INFORMATION */}

        <motion.div
          className="contact-info"
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

          <span>
            CONTACT
          </span>

          <h2>
            We'd love to
            <br />
            hear from you.
          </h2>

          <p>
            Whether you have feedback, a question or an
            exciting idea, send us a message.
          </p>

          <div className="contact-details">

            <a href="mailto:hello@akstories.com">

              <span className="contact-icon">
                <Mail size={19} />
              </span>

              <div>
                <small>Email</small>
                <strong>
                  hello@akstories.com
                </strong>
              </div>

            </a>


            <div>

              <span className="contact-icon">
                <MapPin size={19} />
              </span>

              <div>
                <small>Location</small>
                <strong>
                  India
                </strong>
              </div>

            </div>

          </div>

        </motion.div>


        {/* CONTACT FORM */}

        <motion.div
          className="contact-form-wrapper"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          {submitted ? (

            <motion.div
              className="form-success"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >

              <div className="success-icon">
                <Check size={28} />
              </div>

              <h3>
                Message sent!
              </h3>

              <p>
                Thanks for reaching out.
                We'll get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>

            </motion.div>

          ) : (

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <label>
                  Name

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>


                <label>
                  Email

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

              </div>


              <label>
                Subject

                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to talk about?"
                  required
                />
              </label>


              <label>
                Message

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Write your message..."
                  required
                />
              </label>


              <button
                type="submit"
                className="primary-btn"
              >
                Send message
                <Send size={17} />
              </button>

            </form>

          )}

        </motion.div>

      </section>


      {/* FAQ */}

      <section className="contact-faq">

        <div className="section-title">

          <span>
            FAQ
          </span>

          <h2>
            Common questions.
          </h2>

        </div>


        <div className="faq-list">

          <details>

            <summary>
              Can I submit a story idea?
              <ArrowRight size={18} />
            </summary>

            <p>
              Absolutely. Send us your idea through the
              contact form and tell us why you think it
              would be valuable for our readers.
            </p>

          </details>


          <details>

            <summary>
              Can I collaborate with Akstories?
              <ArrowRight size={18} />
            </summary>

            <p>
              Yes. We are open to thoughtful collaborations
              with writers, designers, creators and brands.
            </p>

          </details>


          <details>

            <summary>
              How often do you publish?
              <ArrowRight size={18} />
            </summary>

            <p>
              We aim to publish fresh stories regularly
              while maintaining quality over quantity.
            </p>

          </details>

        </div>

      </section>

    </div>
  );
}

export default Contact;