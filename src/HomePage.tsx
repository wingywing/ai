import React from "react";

export default function HomePage() {
  // Function for getting self-made illustrations
  const getImages = () => {
    var images: JSX.Element[] = []
    for ( var i=1; i<=17; i++) {
        var image = 
        <img src={`/illustrations/wngpng_${i}.jpg`} alt='' key={`illustration_${i}`}/>
        images.push(image)
    }
    return <>
      {images}
    </>
  }
  // Function for getting AI-generated images
  const getAIImages = () => {
    var images: JSX.Element[] = []
    for ( var i=1; i<=60; i++) {
        var image = 
        <img src={`/illustrations/ai/ai_${i}.png`} alt='' key={`ai_illustration_${i}`}/>
        images.push(image)
    }
    return <>
      {images}
    </>
  }

  return (
    <home-page>
      <div className="main-grid">
        <div className="section title">
          <div className="furniture">
            <span className="left">
              2024 May ● Wing Pang ©{" "}
              <a href="www.wingpang.com">www.wingpang.com</a>
            </span>
            <span className="right">Practice-led research</span>
          </div>
          <h1>"In the style of wngpng"</h1>
          <p className="caption">
            Fears and reflections on the ethics of AI art
          </p>
          <img src="/illustrations/wngpng_0.png" alt="illustration of eery faces" />
        </div>
        <div className="section intro">
          <div className="titled-paragraph">
            <h2>On art and artificial intelligence</h2>
            <div>
              <p>Ever since I could remember, I have been drawing—putting colour on the page and scribbling out fragments of how I viewed my world. </p>
              <p>I've always loved seeing the art of other people, giving me a glimpse into their minds, a window into their worlds. And indeed, art is said to be a definitive characteristic of the human species by <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2815939/">Professor Gillian Morriss-Kay from Oxford University (2010)</a>.</p>
              <p>If art is a lens in how we see the world, what can be said about art that is generated by a non-human entity? What can we say about pieces that are an amalgamation of unidentifiable sources—a mutated form of self expression?</p>
            </div>
          </div>
          {
            getImages()
          }
        </div>
        <div className="section experiment">
          <div className="titled-paragraph">
            <h2>The experiment</h2>
            <div className="paragraphs">
              <p>
                Like many artists, the idea that my artworks and art
                style—something that is deeply personal and rooted in my
                identity—could be used as training data and replicated through
                generative AI models deeply unsettled me.
              </p>
              <p>
                Current generative AI models have already been trained to
                appropriate the styles of uncredited and unremunerated artists <a href="https://www.theguardian.com/technology/2023/mar/16/the-stupidity-of-ai-artificial-intelligence-dall-e-chatgpt">(Bridle, 2023)</a>. If we associate an artist's distinct style as
                the cumulation of their efforts and personal identity, is the
                replication of their style a form of identity theft? What if
                images opposing the original artist's views were generated in
                their style?
              </p>
              <p>
                I wanted to explore this aspect of identity through practice-led
                research using an AI trained on my own art style.
              </p>
              <p>
                For the process of this experiment, I used RunwayML's Dreambooth
                to create a 'checkpoint' based off Stable Diffusion 1.5's
                model— <i>'in the style of wngpng'</i>.
              </p>
              <p>
                I picked 17 illustrations from my illustration archive which had
                a consistent style to do this, duplicating some images once for
                extra training data.
              </p>
            </div>
          </div>
        </div>
        <div className="section who">
          <p className="attribution">
            Above: the 17 illustrations I used to train the image model.
          </p>
          <h2>Who am I in the eyes of AI?</h2>
          <div className="left">
            <p>
              AI algorithms and generative image models don't have eyes, so to
              say, but the representation of an artist's style without
              plausibility or doubt conjures up a singular identity of the
              artist to be interpreted by its user.
            </p>
            <p>
              When we tell an image generation model to create art “in the style
              of [name]”, we associate the results to the artist whom we've
              included in the prompt, rather than it being a piece of work
              generated with biases from thousands (or even millions) of other
              unattributed sources of photographs and images. As <a href="https://zenodo.org/records/7524493">Francis 
              (2023)</a> points out, our anthropomorphisms of AI removes the amount of
              human labour within the process.
            </p>
          </div>
          <div className="right">
            <p>
              When I ask AI to generate an image “in the style of wngpng”
              (<i>wngpng.safetensors</i> being the stable diffusion checkpoint trained
              on my drawings), it isn't doing the same interpretations that I
              would do in my brain for my drawings.
            </p>
            <p>
              It merely generates a superficial copy of an artwork with my
              supposed “art style” as an additional layer on top of data is
              already available. When I add clarifying words or descriptors to
              create something that might resemble what I might create, the act
              of prompt engineering is what turns it into a piece “in the style
              of Wing Pang”.
            </p>
          </div>
        </div>
        <div className="section popup">
          <p className="attribution">
            Stable Diffusion Web UI with my custom .safetensors checkpoint
            loaded
          </p>
        </div>
        <div className="section images">
          <div className="ai-images">
            {
              getAIImages()
            }
          </div>
          <div className="overlay">
            <div className="popup">
              <p>
                From the subset of images generated “in the style of wngpng”, we
                can see how strongly certain images from the original dataset
                influenced the outcomes. Consistently, we see:
              </p>
              <ul>
                <li>dark hair</li>
                <li>androgynous figures with short hair and bangs</li>
                <li>white blouses</li>
                <li>blue backgrounds</li>
                <li>flames, lightbulbs or a glowing orb</li>
                <li>cone-shaped devices </li>
                <li>flowers</li>
                <li>dimly-lit spaces</li>
              </ul>
              <p>
                On the surface level, the brushstrokes do resemble my drawing
                style, but the generated images lack the depth and
                conceptualisation present in my actual works.
              </p>
            </div>
          </div>
        </div>
        <div className="section conclusion">
          <p className="attribution">
          Images generated with a custom model of Stable Diffusion trained on my own artworks, 05/05/2024. 
          </p>
          <h2>Conclusion</h2>
          <blockquote>
            “In the style of wngpng” is <span className="not">not</span> in the style of Wing Pang
          </blockquote>
          <div className="paragraphs">
            <p>While AI can be used to assist in forming ideas, colours and compositions of illustrations, it would never fully replace the work of a skilled artist.</p>
            <p>Just like how processes such as photo-bashing and collage have helped artists to create work more efficiently, AI is yet another tool that requires just as much human thought and input.</p>
            <p>Generative image models are just that. They generate images, not produce artworks—as art is defined by the uniquely human emotions and processes of interpretation.</p>
          </div>
          <div className="furniture">
            <span className="left">Practice-led research</span>
            <span className="right">2024 May ● Wing Pang © <a href="www.wingpang.com">www.wingpang.com</a></span>
          </div>
        </div>
      </div>
    </home-page>
  );
}
