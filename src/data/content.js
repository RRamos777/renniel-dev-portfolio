export const profile = {
  name: 'Renniel Ramos',
  role: 'Full Stack Developer · 3+ years',
  tagline:
    'I build the systems businesses run on: insurance platforms, payroll, ticketing and automation that replaces manual work.',
  status: 'Open to remote roles · US / UK / AU hours',
  email: 'renniel.ramos0701@gmail.com',
  github: 'https://github.com/RRamos777',
  linkedin: 'https://www.linkedin.com/in/renniel-ramos-78853123a/',
  design: 'https://renniel-portfolio.vercel.app',
  resume: '/assets/Renniel_Ramos_Resume.pdf',
  photo: '/assets/renniel.webp',
}

export const sections = ['about', 'experience', 'projects', 'stack', 'contact']

export const experience = [
  {
    when: 'Aug 2025 — Present',
    title: 'Full Stack Developer · Thurston Software Solutions',
    text: 'Build and maintain insurance management systems for enterprise clients. Ship new modules and integration APIs, tune SQL Server queries and stored procedures, and run production releases through Azure DevOps and IIS.',
    tags: ['Blazor', 'C#', '.NET 8', 'SQL Server', 'Azure DevOps', 'IIS'],
  },
  {
    when: 'Oct 2024 — Aug 2025',
    title: 'Full Stack Developer & DBA · La Rose Noire',
    text: 'Built internal systems across departments: production process tracking, IT and Engineering ticketing, QR event registration and Hikvision face-recognition DTR. Owned the SQL Server estate: schema design, reporting, backups, migrations and security.',
    tags: ['C#', '.NET', 'Angular', 'SQL Server', 'Hikvision SDK'],
  },
  {
    when: '2023 — 2024',
    title: 'Freelance Full Stack Developer',
    text: 'Delivered custom DTR, payroll and RFID attendance systems for a school and a law firm. Replaced spreadsheet tracking with central databases, deployed on IIS and supported them in production.',
    tags: ['C#', 'AngularJS', 'SQL Server', 'RFID', 'IIS'],
  },
]

export const projects = [
  {
    title: 'Face-Recognition Attendance (DTR)',
    text: 'Connected Hikvision face-recognition terminals to a .NET backend so time-ins and time-outs land in SQL Server automatically. Removed manual attendance logging and fed clean data straight into payroll.',
    tags: ['C#', 'Hikvision', 'SQL Server', 'Angular'],
  },
  {
    title: 'Production Process System',
    text: 'Proposed and built a system that tracks manufacturing work as it moves between stations, giving supervisors live status instead of end-of-day paper reports.',
    tags: ['.NET', 'Angular', 'SQL Server'],
  },
  {
    title: 'Insurance Management Platform',
    text: 'Ongoing work on enterprise insurance software: new policy modules, REST APIs for third-party integrations and query tuning on large SQL Server databases.',
    tags: ['Blazor', '.NET 8', 'REST', 'SQL Server'],
  },
  {
    title: 'IT & Engineering Ticketing',
    text: 'One request system for two departments, with assignment, status tracking and monitoring so nothing gets lost in chat threads.',
    tags: ['C#', 'Angular', 'SQL Server'],
  },
  {
    title: 'QR Event Registration & Claiming',
    text: 'Registration with QR codes for company events, scanned at the venue to check people in and track giveaway claims in real time.',
    tags: ['.NET', 'Angular', 'QR'],
  },
  {
    title: 'RFID Campus Monitoring & Payroll',
    text: 'Freelance builds: RFID gate in/out with notifications for a school, and a full DTR and payroll engine for a law firm covering deductions and reports.',
    tags: ['C#', 'RFID', 'AngularJS', 'IIS'],
  },
]

export const stack = [
  ['Backend', 'C#, .NET 6/8, .NET Framework, ASP.NET MVC, REST APIs'],
  ['Frontend', 'Blazor, Angular, AngularJS, React, Tailwind CSS'],
  ['Data', 'SQL Server 2019/2022, T-SQL, stored procedures, query tuning'],
  ['Delivery', 'Azure, Azure DevOps, Git, GitHub, IIS, Vercel'],
  ['Hardware', 'Hikvision face recognition, RFID readers, QR scanning'],
]
