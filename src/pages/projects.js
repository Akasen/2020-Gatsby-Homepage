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
          This project was probably one of the more complicated projects I had
          ever done all things considered. While I had some experience in
          working on Ruby on Rails before, I had never had to work on something
          with the scope of this project. Admittedly, my group as a whole had
          over-estimated the ease of the project we seemed to have and so we
          ended up promising features to our client that wasn't even reasonable
          for us considering our skills.
        </p>
        <p>Overall, a major learning experience.</p>
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
        <p>
          It is a bit of a learning experience though to be honest, as normally
          most servers one can get off the internet tend to have apache or nginx
          already installed, and I assume installing either from the package
          manager of any given Linux distribution would also have things
          somewhat setup.
        </p>
        <p>
          I say this because I had to deal with actually learning how to make my
          webserver run at all times, even after a system reboot. Although it
          took me a bit because for some reason looking this up in relation to
          Node kept giving me answers about "forever" (a node application or
          something) or "nohup", the latter being a seemingly alright solution.
          Until I learned about systemd.
        </p>
        <p>
          I'll have to figure out what the better question I should have been
          asking Google should have been, cause I almost was about to venture
          into using "forever", which likely is no longer maintained.
        </p>
      </div>
    </Layout>
  </div>
)

export default Projects
