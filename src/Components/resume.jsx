import React, { useState } from 'react';
import EditableText from './Editable'; // import it
import './Resume.css';

const Resume = React.forwardRef((props, ref) => {
  const [name, setName] = useState('John Doe');
  const [title, setTitle] = useState('Frontend Developer');
  const [email, setEmail] = useState('john.doe@email.com');
  const [phone, setPhone] = useState('+1-234-567-8901');
  const [linkedin, setLinkedin] = useState('linkedin.com/in/johndoe');
  const [location, setLocation] = useState('San Francisco, CA');
  const [summary, setSummary] = useState([
  "Creative and detail-oriented frontend developer with 3+ years of experience.",
  "Skilled in React, modern JavaScript, and clean UI design.",
  "Passionate about performance, accessibility, and user experiences."
]);
const [experience, setExperience] = useState([
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Tech Solutions",
    date: "Jan 2022 – Present",
    points: [
      "Led development of React-based features for a platform used by 20,000+ users.",
    ]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "XYZ Agency",
    date: "Aug 2020 – Dec 2021",
    points: [
      "Built static and dynamic pages using HTML, CSS, and JavaScript.",
    ]
  }
]);
const [projects, setProjects] = useState([
  {
    id: 1,
    title: "Portfolio Website",
    description: "React + Tailwind CSS site showcasing personal work and blogs."
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "MERN stack app for team collaboration with real-time updates."
  }
]);
const [skills, setSkills] = useState([
  { category: 'Languages', items: 'JavaScript (ES6+), HTML5, CSS3' },
  { category: 'Frameworks/Tools', items: 'React, Redux, Node.js, Tailwind, Git, REST APIs' },
  { category: 'Soft Skills', items: 'Communication, Time Management, Teamwork, Problem Solving' }
]);
const [education, setEducation] = useState([
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    school: "University of California, Berkeley",
    date: "2016–2020"
  }
]);
const [certifications, setCertifications] = useState([
  'AWS Certified Developer – Associate',
  'Google UX Design Certificate',
]);




/** Supporting functions for experience section */

const updateJobField = (jobIndex, field, value) => {
  const updated = [...experience];
  updated[jobIndex][field] = value;
  setExperience(updated);
};

const updateBulletPoint = (jobIndex, pointIndex, value) => {
  const updated = [...experience];
  updated[jobIndex].points[pointIndex] = value;
  setExperience(updated);
};

const addJob = () => {
  const newJob = {
    id: Date.now(),
    title: "New Job Title",
    company: "Company Name",
    date: "Start – End",
    points: ["Describe your responsibility..."]
  };
  setExperience([...experience, newJob]);
};

const addBulletPoint = (jobIndex) => {
  const updated = [...experience];
  updated[jobIndex].points.push("New responsibility...");
  setExperience(updated);
};

const deleteJob = (jobIndex) => {
  const updated = [...experience];
  updated.splice(jobIndex, 1);
  setExperience(updated);
};

const deleteBulletPoint = (jobIndex, pointIndex) => {
  const updated = [...experience];
  updated[jobIndex].points.splice(pointIndex, 1);
  setExperience(updated);
};


// Suporting functions for projects section
const updateProjectField = (index, field, value) => {
  const updated = [...projects];
  updated[index][field] = value;
  setProjects(updated);
};

const addProject = () => {
  const newProject = {
    id: Date.now(),
    title: "New Project Title",
    description: "Project description..."
  };
  setProjects([...projects, newProject]);
};

const deleteProject = (index) => {
  const updated = [...projects];
  updated.splice(index, 1);
  setProjects(updated);
};

// Supporting functions for skills section

const updateSkillField = (index, field, value) => {
  const updated = [...skills];
  updated[index][field] = value;
  setSkills(updated);
};

const addSkillCategory = () => {
  setSkills([...skills, { category: 'New Category', items: 'Skill 1, Skill 2' }]);
};

const deleteSkillCategory = (index) => {
  const updated = [...skills];
  updated.splice(index, 1);
  setSkills(updated);
};

//Supporting functions for education section
const updateEducationField = (index, field, value) => {
  const updated = [...education];
  updated[index][field] = value;
  setEducation(updated);
};

const addEducation = () => {
  const newEntry = {
    id: Date.now(),
    degree: "New Degree",
    school: "Institution Name",
    date: "Year – Year"
  };
  setEducation([...education, newEntry]);
};

const deleteEducation = (index) => {
  const updated = [...education];
  updated.splice(index, 1);
  setEducation(updated);
};

// Supporting functions for certifications section

const updateCertification = (index, value) => {
  const updated = [...certifications];
  updated[index] = value;
  setCertifications(updated);
};

const deleteCertification = (index) => {
  const updated = [...certifications];
  updated.splice(index, 1);
  setCertifications(updated);
};


  // 👇 Controls which field is currently being edited
  const [activeField, setActiveField] = useState(null);

  const handleEdit = (fieldKey) => setActiveField(fieldKey);
  const handleCancelEdit = () => setActiveField(null);

  return (
    <div className="resume" ref={ref}>
      <header className="resume-header">
        <EditableText
          value={name}
          onChange={setName}
          as="h1"
          className="name-display"
          fieldKey="name"
          isEditing={activeField === 'name'}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />

        <EditableText
          value={title}
          onChange={setTitle}
          as="h2"
          fieldKey="title"
          isEditing={activeField === 'title'}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />

        <div className="contact-row">
          <EditableText
            value={`Email: ${email}`}
            onChange={(v) => setEmail(v.replace(/^Email:\s*/, ''))}
            fieldKey="email"
            isEditing={activeField === 'email'}
            onEdit={handleEdit}
            onCancelEdit={handleCancelEdit}
          />
          <EditableText
            value={`Phone: ${phone}`}
            onChange={(v) => setPhone(v.replace(/^Phone:\s*/, ''))}
            fieldKey="phone"
            isEditing={activeField === 'phone'}
            onEdit={handleEdit}
            onCancelEdit={handleCancelEdit}
          />
        </div>

        <div className="contact-row">
          <EditableText
            value={`LinkedIn: ${linkedin}`}
            onChange={(v) => setLinkedin(v.replace(/^LinkedIn:\s*/, ''))}
            fieldKey="linkedin"
            isEditing={activeField === 'linkedin'}
            onEdit={handleEdit}
            onCancelEdit={handleCancelEdit}
          />
          <EditableText
            value={`Location: ${location}`}
            onChange={(v) => setLocation(v.replace(/^Location:\s*/, ''))}
            fieldKey="location"
            isEditing={activeField === 'location'}
            onEdit={handleEdit}
            onCancelEdit={handleCancelEdit}
          />
        </div>
      </header>

      {/* SUMMARY */}
<section>
  <h3>Professional Summary</h3>
  <ul className="editable-list">
    {summary.map((point, index) => (
      <li key={index}>
        <EditableText
          value={point}
          onChange={(newVal) => {
            const updated = [...summary];
            updated[index] = newVal;
            setSummary(updated);
          }}
          fieldKey={`summary-${index}`}
          isEditing={activeField === `summary-${index}`}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />
        <span className="no-print">
          <button
            onClick={() => {
              const updated = summary.filter((_, i) => i !== index);
              setSummary(updated);
              handleCancelEdit();
            }}
            className="btn-cancel no-print small"
            title="Remove bullet"
          >
            Delete
          </button>
        </span>
      </li>
    ))}
  </ul>
  <div className="no-print">
    <button
      className="btn-confirm no-print small"
      onClick={() => setSummary([...summary, 'New point'])}
    >
      ➕ Add point
    </button>
  </div>
</section>


     {/* EXPERIENCE */}
<section>
  <h3>Work Experience</h3>

  {experience.map((job, jobIndex) => (
    <div className="job" key={job.id}>
      <EditableText
        value={job.title}
        onChange={(v) => updateJobField(jobIndex, 'title', v)}
        className="job-title "
        fieldKey={`jobTitle-${jobIndex}`}
        isEditing={activeField === `jobTitle-${jobIndex}`}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
      />
      <EditableText
        value={job.company}
        onChange={(v) => updateJobField(jobIndex, 'company', v)}
        className="company-name"
        fieldKey={`jobCompany-${jobIndex}`}
        isEditing={activeField === `jobCompany-${jobIndex}`}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
      />
      <EditableText
        value={job.date}
        onChange={(v) => updateJobField(jobIndex, 'date', v)}
        className="date"
        fieldKey={`jobDate-${jobIndex}`}
        isEditing={activeField === `jobDate-${jobIndex}`}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
      />
      <ul>
  {job.points.map((point, pointIndex) => (
    <li key={pointIndex} className="editable-list-item">
  <EditableText
    value={point}
    onChange={(v) => updateBulletPoint(jobIndex, pointIndex, v)}
    fieldKey={`job${jobIndex}-point${pointIndex}`}
    isEditing={activeField === `job${jobIndex}-point${pointIndex}`}
    onEdit={handleEdit}
    onCancelEdit={handleCancelEdit}
  />
  <button
    className="btn-delete-point no-print"
    onClick={() => deleteBulletPoint(jobIndex, pointIndex)}
    title="Delete point"
  >
    Delete
  </button>
</li>

  ))}
</ul>

      <button className="btn-add-point no-print" onClick={() => addBulletPoint(jobIndex)}>+ Add Point</button>
      

    </div>
  ))}

  <button className="btn-add-job no-print" onClick={addJob}>+ Add Job</button>
  <button
  className="btn-delete-job no-print"
  onClick={() => deleteJob(jobIndex)}
  title="Delete job"
>
  🗑️ Delete Job
</button>
</section>


 {/* PROJECTS */}
<section>
  <h3>Projects</h3>
  <ul>
  {projects.map((project, index) => (
    <li key={project.id} className="editable-list-item">
      <div style={{ flex: 1 }}>
        <EditableText
          value={project.title}
          onChange={(v) => updateProjectField(index, 'title', v)}
          fieldKey={`project-title-${index}`}
          isEditing={activeField === `project-title-${index}`}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
          className="project-title"
        />        
        <EditableText
          value={project.description}
          onChange={(v) => updateProjectField(index, 'description', v)}
          fieldKey={`project-desc-${index}`}
          isEditing={activeField === `project-desc-${index}`}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />
      </div>

      <button
        className="btn-delete-point no-print"
        onClick={() => deleteProject(index)}
        title="Delete project"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

  <button className="btn-add-project no-print" onClick={addProject}>+ Add Project</button>
</section>


      {/* SKILLS */}
      <section>
        <h3>Skills</h3>
        <ul>
  {skills.map((skill, index) => (
    <li key={index} className="skill-row">
      <EditableText
        value={skill.category}
        onChange={(v) => updateSkillField(index, 'category', v)}
        fieldKey={`skill-cat-${index}`}
        isEditing={activeField === `skill-cat-${index}`}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
        className="skill-category"
      />
      :
      <EditableText
        value={skill.items}
        onChange={(v) => updateSkillField(index, 'items', v)}
        fieldKey={`skill-items-${index}`}
        isEditing={activeField === `skill-items-${index}`}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
        className="skill-items"
      />
      <button
        className="btn-delete-point no-print"
        onClick={() => deleteSkillCategory(index)}
        title="Delete category"
      >
        Delete
      </button>
    </li>
  ))}
</ul>
<button
  className="btn-add-point no-print"
  onClick={addSkillCategory}
>
  ➕ Add Skill Category
</button>

      </section>

      {/* EDUCATION */}
      <section>
  <h3>Education</h3>
  {education.map((edu, index) => (
    <div key={edu.id} className="education-entry">
  {/* Degree (on its own line) */}
  <EditableText
    value={edu.degree}
    onChange={(v) => updateEducationField(index, 'degree', v)}
    fieldKey={`edu-degree-${index}`}
    isEditing={activeField === `edu-degree-${index}`}
    onEdit={handleEdit}
    onCancelEdit={handleCancelEdit}
    className="job-title"
  />

  {/* School and Date side by side */}
  <div className="education-row">
    <EditableText
      value={edu.school}
      onChange={(v) => updateEducationField(index, 'school', v)}
      fieldKey={`edu-school-${index}`}
      isEditing={activeField === `edu-school-${index}`}
      onEdit={handleEdit}
      onCancelEdit={handleCancelEdit}
      className="company-name"
    />–
    <EditableText
      value={edu.date}
      onChange={(v) => updateEducationField(index, 'date', v)}
      fieldKey={`edu-date-${index}`}
      isEditing={activeField === `edu-date-${index}`}
      onEdit={handleEdit}
      onCancelEdit={handleCancelEdit}
      className="date right-align"
    />
  </div>

  <button
    className="btn-delete-job no-print"
    onClick={() => deleteEducation(index)}
    title="Delete education entry"
  >
    Delete
  </button>
</div>

  ))}

  <button
    className="btn-add-point no-print"
    onClick={addEducation}
  >
    ➕ Add Education
  </button>
</section>


      {/* CERTIFICATIONS */}
<section>
  <h3>Certifications</h3>
  <ul>
    {certifications.map((cert, index) => (
      <li key={index} className="editable-list-item">
        <EditableText
          value={cert}
          onChange={(v) => updateCertification(index, v)}
          fieldKey={`cert-${index}`}
          isEditing={activeField === `cert-${index}`}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />
        <button
          className="btn-delete-point no-print"
          onClick={() => deleteCertification(index)}
          title="Delete certification"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>

  <button
    className="btn-add-project no-print"
    onClick={() => setCertifications([...certifications, 'New Certification'])}
  >
    + Add Certification
  </button>
</section>

    </div>
  );
});

export default Resume;
