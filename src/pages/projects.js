import React from "react"
import Layout from "./components/Layout"

const Projects = () => (
  <div>
    <Layout>
      <div class="showcase">
        <h1>
          <a
            href="https://github.com/Blue-Harvest-Solutions/CPATv2"
            target="noopener noreferrer"
          >
            Course Planner and Advising Tool
          </a>
        </h1>
        <p>
          This was my two semester long Senior Project I did at the University
          of North Florida.
        </p>
        <p>
          Senior Project takes the form of a project that has multiple students
          working on some non-mission critcal aspect of a local company or
          organizations project. In my groups case, we found ourselves working
          with the school itself.
        </p>
        <p>
          The idea brought to us was simple: create a tool that would allow
          students to have a better understanding where they were academically
          with regards to their courses in an attempt to help improve graduation
          rates. A fantastic example is with regards to dropping a course, as
          certain courses are only offered during certain semesters, so a
          student should be made more aware of this fact before dropping a
          course so they don't drop something they will now have to wait
          essentially a year to retake.
        </p>
        <p>This project was developed using Microsoft ASP.NET Core.</p>
        <p>
          I will with great candor admit that in all honesty, everyone in my
          team was significantly underprepared for this project. In any moment I
          think about or speak about this project, I constantly wonder "what if"
          with relation to myself and my own studies.
        </p>
        <p>
          At no point ever did I ever find myself taking a course that went into
          great detail about ASP.NET development, or any modern web development
          concepts. Would I have been, at the very least as an individual,
          better prepared had I the knowledge I do now about basic Javascript
          web development?
        </p>
        <p>
          Also with candor, probably not. ASP.NET and the Visual Studio IDE are
          a different beast from what I can tell. Certainly, there'd be some
          overlap, but I would make the uneducated argument that between even
          Ruby, Python, and Javascript backend development, you at least have a
          lot more basic common ground to work with, like with that of package
          managers.
        </p>
        <p>
          I'd have been better off spending two academic years being constantly
          immersed in ASP.NET and C# development all things considered, at least
          with relation to my Senior Project. Of course, I also think that's a
          horrible idea in itself. I also wouldn't agree with the choice of
          basically putting students through fullstack Javascript as their path,
          but I'd wager it's a better alternative.
        </p>
      </div>
      <div class="showcase">
        <h1>
          <a
            href="https://github.com/Akasen/2020-Gatsby-Homepage"
            target="noopener noreferrer"
          >
            This Website
          </a>
        </h1>
        <p>
          This homepage has been quite the learning experience so far. I've
          remade it many times over the years, but this current iteration I'm
          taking more active steps in learning some tools.
        </p>
        <p>
          This iteration was originally just made in basic HTML and CSS, but
          then I realized it was a perfect opportunity to take what I had there
          and use them as a way to guide me in the creation of a basic Gatsby
          website.
        </p>
        <p>
          I'm so far happy with the results so far, and have in a short time
          learned a great deal about Gatsby and gained a better basic
          understanding of ReactJS.
        </p>
      </div>

      <div class="showcase">
        <h1>"The NodeJS/ExpressJS That Serves This Site"</h1>
        <p>
          It's not really a major feat, probably. But if I had to at least be
          honest, it is an accomplishment on my end to decide "I'm gonna delete
          apache just to see if I can build a basic node backend that serves my
          static website".
        </p>
        <p>
          I'd wager most university students that would have gone through the
          university track alone wouldn't have ever thought to do this in their
          spare time.
        </p>
        <p>But I did it because I was curious.</p>
      </div>
    </Layout>
  </div>
)

export default Projects
