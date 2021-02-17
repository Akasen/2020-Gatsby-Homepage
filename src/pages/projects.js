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
          The project goal was to create a tool that would allow
          students to have a better understanding where they were academically
          with regards to their courses in an attempt to help improve graduation
          rates. A fantastic example is with regards to dropping a course, as
          certain courses are only offered during certain semesters, so a
          student should be made more aware of this fact before dropping a
          course so they don't drop something they will now have to wait
          essentially a year to retake.
        </p>
        <p>This project was developed using Microsoft ASP.NET Core.</p>
      </div>
    </Layout>
  </div>
)

export default Projects
