import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaBriefcase } from 'react-icons/fa';

export default function TimelineResume() {
  return (
    <div className="resume-container">
      <VerticalTimeline>
      <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Expected Graduation: May 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaSchool />}            >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Minnesota Twin Cities</h4>
            </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Aug 2022 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Cybersecurity Specialist Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Target, Brooklyn Park, MN</h4>
          <p>
            Identified and managed over 100+ new viruses and hidden malware incidents. Performing threat analysis in a 24/7 environment, mitigating and managing all threats and risks to the company, and gaining 99% security in data. Solely managed a comprehensive database of over 2,000,000 users, significantly increasing overall departmental performance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - Aug 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Nutrisek, Cape Town, South Africa</h4>
          <p>
            Fullstack Development at a stand-alone company. Developed user interfaces that are effective, allowing visitors to utilize any device with the same experience. Built mock designs and wireframes for landing pages with 5 new product concepts. Developed user interfaces with modern JavaScript frameworks, HTML, and CSS, which improved user satisfaction by 31% to complete deliverables for my company. Implemented the React Router DOM to allow nested RESTful routing. Designed and developed web applications using JavaScript and frameworks such as React.js to increase the target audience.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - Aug 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Allianz, Minneapolis, MN</h4>
          <p>
            Perform data discovery, analysis, and modeling while creating reports. Enhanced and maintained existing reports and applications. Monitored 300+ ticket activities while making reports on my analysis. Completed tasks such as ticket/incident reporting as assigned by the project manager. Identified opportunities for improvement by streamlining processes, and reducing cost. Developed decks and reports to present data more effectively.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}