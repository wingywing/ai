import React, { useEffect, useRef, useState } from "react";
import "./home-page.scss";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function HomePage() {
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  const ref = useRef<HTMLElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setContentHeight(ref.current.scrollHeight);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  const y: MotionValue<number> = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  const fadeUpAnimationVariants = {
    initial: {
      opacity: 0,
      y: 32,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.025 * i,
      },
    }),
  };
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };
  const fadeInPopUpVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };

  // Function for getting self-made illustrations
  const getImages = () => {
    var images: JSX.Element[] = [];
    for (var i = 1; i <= 17; i++) {
      var image = (
        <motion.img
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          
          src={`/illustrations/wngpng_${i}.jpg`}
          alt=""
          key={`illustration_${i}`}
          custom={i}
        />
      );
      images.push(image);
    }
    return <>{images}</>;
  };
  // Function for getting AI-generated images
  const getAIImages = () => {
    var images: JSX.Element[] = [];
    for (var i = 1; i <= 60; i++) {
      var image = (
        <motion.img
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          
          src={`/illustrations/ai/ai_${i}.png`}
          alt=""
          key={`ai_illustration_${i}`}
        />
      );
      images.push(image);
    }
    return <>{images}</>;
  };

  return (
    <home-page ref={ref} style={{ y }}>
      <motion.div className="main-grid">
        <motion.div className="section title" id="title">
          <motion.div className="furniture">
            <motion.span className="left">
              2024 May ● Wing Pang ©{" "}
              <a href="www.wingpang.com">www.wingpang.com</a>
            </motion.span>
            <motion.span className="right">Practice-led research</motion.span>
          </motion.div>
          <motion.h1>
            “In&nbsp;the <motion.span className="new-line" />
            style <motion.span className="new-line desktop" />
            of <motion.span className="new-line tablet desktop" />
            wngpng”
          </motion.h1>
          <motion.p className="caption">
            Fears and <motion.span className="new-line" /> reflections on the{" "}
            <motion.span className="new-line" />
            ethics of AI art
          </motion.p>
          <motion.div className="motion img">
            <motion.img
              src="/illustrations/wngpng_0.png"
              alt="illustration of eery faces"
            />
          </motion.div>
        </motion.div>
        <motion.div className="section intro" id="intro">
          <motion.div
            className="titled-paragraph"
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            <motion.h2>
              On art and <motion.span className="new-line tablet" />
              artificial <motion.span className="new-line tablet" />
              intelligence
            </motion.h2>
            <motion.div>
              <motion.p>
                Ever since I could remember, I have been drawing—putting colour
                on the page and scribbling out fragments of how I viewed my
                world.{" "}
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                I've always loved seeing the art of other people, giving me a
                glimpse into their minds, a window into their worlds. And
                indeed, art is said to be a definitive characteristic of the
                human species by{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2815939/">
                  Professor Gillian Morriss-Kay from Oxford University (2010)
                </a>
                .
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                If art is a lens in how we see the world, what can be said about
                art that is generated by a non-human entity? What can we say
                about pieces that are an amalgamation of unidentifiable
                sources—a mutated form of self expression?
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.blockquote
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            “Art, in its many forms, is practised by almost all human cultures
            and can be regarded as one of the defining characteristics of the
            human species.”
          </motion.blockquote>
          <motion.div
            className="attribution"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            (Morriss-Kay, 2010)
          </motion.div>
        </motion.div>
        <motion.div className="section experiment" id="experiment">
          <motion.div
            className="titled-paragraph"
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            <motion.h2>
              The <motion.span className="new-line tablet" />
              experiment
            </motion.h2>
            <motion.div className="paragraphs">
              <motion.p>
                Like many artists, the idea that my artworks and art
                style—something that is deeply personal and rooted in my
                identity—could be used as training data and replicated through
                generative AI models deeply unsettled me.
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                Current generative AI models have already been trained to
                appropriate the styles of uncredited and unremunerated artists{" "}
                <a href="https://www.theguardian.com/technology/2023/mar/16/the-stupidity-of-ai-artificial-intelligence-dall-e-chatgpt">
                  (Bridle, 2023)
                </a>
                . If we associate an artist's distinct style as the cumulation
                of their efforts and personal identity, is the replication of
                their style a form of identity theft? What if images opposing
                the original artist's views were generated in their style?
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                I wanted to explore this aspect of identity through practice-led
                research using an AI trained on my own art style.
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                For the process of this experiment, I used RunwayML's Dreambooth
                to create a 'checkpoint' based off Stable Diffusion 1.5's model—{" "}
                <i>'in the style of wngpng'</i>.
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                I picked 17 illustrations from my illustration archive which had
                a consistent style to do this, duplicating some images once for
                extra training data.
              </motion.p>
            </motion.div>
          </motion.div>
          {getImages()}
        </motion.div>
        <motion.div className="section who" id="who">
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
            className="attribution"
          >
            Above: the 17 illustrations I used to train the image model.
          </motion.p>
          <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            Who am I in the eyes of AI?
          </motion.h2>
          <motion.div className="paragraphs">
            <motion.div className="left">
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                AI algorithms and generative image models don't have eyes, so to
                say, but the representation of an artist's style without
                plausibility or doubt conjures up a singular identity of the
                artist to be interpreted by its user.
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                When we tell an image generation model to create art “in the
                style of [name]”, we associate the results to the artist whom
                we've included in the prompt, rather than it being a piece of
                work generated with biases from thousands (or even millions) of
                other unattributed sources of photographs and images. As{" "}
                <a href="https://zenodo.org/records/7524493">Francis (2023)</a>{" "}
                points out, our anthropomorphisms of AI removes the amount of
                human labour within the process.
              </motion.p>
            </motion.div>
            <motion.div className="right">
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                When I ask AI to generate an image “in the style of wngpng” (
                <i>wngpng.safetensors</i> being the stable diffusion checkpoint
                trained on my drawings), it isn't doing the same interpretations
                that I would do in my brain for my drawings.
              </motion.p>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                It merely generates a superficial copy of an artwork with my
                supposed “art style” as an additional layer on top of data is
                already available. When I add clarifying words or descriptors to
                create something that might resemble what I might create, the
                act of prompt engineering is what turns it into a piece “in the
                style of Wing Pang”.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="section popup" id="popup">
          <motion.div className="mobile sd-screenshot">
            <motion.img
              src="/stable-diff-mobile.png"
              alt="Screenshot of stable diffusion mobile interface"
            />
            <motion.span>in the style of wngpng</motion.span>
          </motion.div>
          <motion.div className="tablet sd-screenshot">
            <motion.img
              src="/stable-diff-desktop.png"
              alt="Screenshot of stable diffusion desktop interface"
            />
            <motion.span>in the style of wngpng</motion.span>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              
              className="attribution"
            >
              Stable Diffusion Web UI with my custom .safetensors checkpoint
              loaded
            </motion.p>
          </motion.div>
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
            className="attribution mobile"
          >
            Stable Diffusion Web UI with my custom .safetensors checkpoint
            loaded
          </motion.p>
        </motion.div>
        <motion.div className="section images" id="images">
          <motion.div className="ai-images">{getAIImages()}</motion.div>
          <motion.div
            className="overlay"
            variants={fadeInPopUpVariants}
            initial="initial"
            whileInView="animate"
            
          >
            <motion.div className="popup">
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                From the subset of images generated “in the style of wngpng”, we
                can see how strongly certain images from the original dataset
                influenced the outcomes. Consistently, we see:
              </motion.p>
              <ul>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  dark hair
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  androgynous figures with short hair and bangs
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  white blouses
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  blue backgrounds
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  flames, lightbulbs or a glowing orb
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  cone-shaped devices{" "}
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  flowers
                </motion.li>
                <motion.li
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  
                >
                  dimly-lit spaces
                </motion.li>
              </ul>
              <motion.p
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                
              >
                On the surface level, the brushstrokes do resemble my drawing
                style, but the generated images lack the depth and
                conceptualisation present in my actual works.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="section conclusion" id="conclusion">
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
            className="attribution"
          >
            Images generated with a custom model of Stable Diffusion trained on
            my own artworks, 05/05/2024. 
          </motion.p>
          <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            Conclusion
          </motion.h2>
          <motion.blockquote
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            “In the style&nbsp;of wngpng”{" "}
            <motion.span className="new-line desktop" />
            is <motion.span className="not">not</motion.span> in the style of{" "}
            <motion.span className="new-line desktop" />
            Wing Pang
          </motion.blockquote>
          <motion.div className="paragraphs">
            <motion.p
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              
            >
              While AI can be used to assist in forming ideas, colours and
              compositions of illustrations, it would never fully replace the
              work of a skilled artist.
            </motion.p>
            <motion.p
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              
            >
              Just like how processes such as photo-bashing and collage have
              helped artists to create work more efficiently, AI is yet another
              tool that requires just as much human thought and input.
            </motion.p>
            <motion.p
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              
            >
              Generative image models are just that. They generate images, not
              produce artworks—as art is defined by the uniquely human emotions
              and processes of interpretation.
            </motion.p>
          </motion.div>
          <motion.div
            className="furniture"
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            
          >
            <motion.span className="left">Practice-led research</motion.span>
            <motion.span className="right">
              2024 May ● Wing Pang ©{" "}
              <a href="www.wingpang.com">www.wingpang.com</a>
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </home-page>
  );
}
