export const profile = {
  name: "MEY Soytry",
  role: "Data Warehouse Administration Officer",
  tagline: "Data Warehouse Administration Officer",
  eyebrow: "Open to data warehouse roles · Phnom Penh, Cambodia",
  bio: "Junior Core Banking at ChokChey Finance Plc. I work with core banking systems, manage reports, and build data pipelines for reporting. I also build warehouse pipelines in SQL, PostgreSQL, Snowflake, dbt, Airflow, and Power BI.",
  aboutHeading: "Banking data, reports, and warehouses.",
  aboutBody:
    "I work on core banking data at ChokChey Finance Plc. I check Credit Bureau files, reconcile source and database counts in SQL, and trace mismatches before handoff. On my own projects I land the files, load the warehouse, model a star schema, schedule the pipeline, and check the report against the database.",
  email: "meysoytry@gmail.com",
  phone: "+855 86 329 085",
  location: "Phnom Penh, Cambodia",
  available: true,
};

export const techStack = [
  {
    category: "Warehouse",
    skills: [
      "PostgreSQL",
      "Snowflake",
      "Medallion Architecture",
      "Star Schema",
      "Dimensional Modeling",
      "dbt",
    ],
  },
  {
    category: "Pipelines",
    skills: [
      "ETL/ELT",
      "Airflow",
      "Cloud Computing",
      "Docker",
      "SQL Validation",
      "Data-Quality Checks",
    ],
  },
  {
    category: "Analytics",
    skills: [
      "SQL",
      "Power BI",
      "Power Query",
      "Excel",
      "Python",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Also used",
    skills: ["Git", "FastAPI", "Next.js", "Spring Boot"],
  },
];

export const techTags = ["Data Warehouse", "ETL/ELT", "SQL", "PostgreSQL"];

export const projects = [
  {
    id: "olist",
    name: "Olist e-commerce ELT platform",
    emoji: "📦",
    subtitle: "Cloud → Snowflake Bronze → dbt → Airflow → Power BI",
    description:
      "Landed Olist CSVs on cloud storage and loaded Snowflake Bronze with COPY INTO: about 99,400 orders, 112,600 order items, and 1,000,000 geolocation rows. Built silver views, a gold star schema in dbt, a reporting mart, an Airflow DAG, a fact-table grain test, and a Power BI report reconciled to Snowflake.",
    stack: [
      "Cloud Computing",
      "Snowflake",
      "dbt",
      "Airflow",
      "Power BI",
      "SQL",
    ],
    role: "Land → Bronze → Silver → Gold star schema → reporting mart",
    highlight: true,
    images: [
      { src: "/projects/Olist/pipeline.png", label: "Airflow DAG" },
      { src: "/projects/Olist/bronze_layer.png", label: "Bronze" },
      { src: "/projects/Olist/staging_layer.png", label: "Silver" },
      { src: "/projects/Olist/star_schema.png", label: "Star Schema" },
      { src: "/projects/Olist/gold_layer.png", label: "Mart" },
      { src: "/projects/Olist/report.png", label: "Power BI" },
    ],
    details: {
      overview:
        "Landed Olist CSVs on cloud storage and loaded Snowflake Bronze with COPY INTO: about 99,400 orders, 112,600 order items, and 1,000,000 geolocation rows. Built silver views, a gold star schema in dbt, a reporting mart, an Airflow DAG, a fact-table grain test, and a Power BI report reconciled to Snowflake.",
      highlights: [
        "Cloud landing zone feeding Snowflake Bronze via COPY INTO",
        "dbt silver views and gold star schema with a reporting mart",
        "Airflow DAG orchestration and fact-table grain test",
        "Power BI report reconciled to Snowflake",
      ],
      github:
        "https://github.com/Soytry17/olist_brazilian_e-commerce_analytics_platform",
      demo: null as string | null,
    },
  },
  {
    id: "psql-warehouse",
    name: "ERP and CRM PostgreSQL warehouse",
    emoji: "🗄️",
    subtitle: "Medallion · Bronze → Silver → Gold star schema",
    description:
      "Medallion warehouse in PostgreSQL. Bronze loads from ERP and CRM CSVs, silver cleansing, gold star schema, SQL ETL, data-quality checks, a data catalog, and naming standards.",
    stack: ["PostgreSQL", "ETL", "Star Schema", "Data Quality"],
    role: "Bronze loads → silver cleansing → gold star schema",
    highlight: true,
    images: [
      {
        src: "/projects/PsqlWarehouse/data_structure_flow.png",
        label: "Medallion Flow",
      },
      { src: "/projects/PsqlWarehouse/data_model.png", label: "Star Schema" },
      {
        src: "/projects/PsqlWarehouse/data_integration.png",
        label: "Data Integration",
      },
    ],
    details: {
      overview:
        "Medallion warehouse in PostgreSQL. Bronze loads from ERP and CRM CSVs, silver cleansing, gold star schema, SQL ETL, data-quality checks, a data catalog, and naming standards.",
      highlights: [
        "Bronze loads from ERP and CRM CSVs",
        "Silver cleansing and gold star schema",
        "SQL ETL with data-quality checks",
        "Data catalog and naming standards",
      ],
      github: "https://github.com/Soytry17/psql_data_warehouse",
      demo: null as string | null,
    },
  },
  {
    id: "sqlyst",
    name: "SQLyst",
    emoji: "🤖",
    subtitle: "PostgreSQL → FastAPI → LLM Chat → Prophet → Dashboard",
    description:
      "PostgreSQL-backed app so a non-technical user can query data in plain language. FastAPI, chatbot layer, Prophet forecasts. KSHRD Advanced Course, Jul–Dec 2025.",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "LLMs",
      "Prophet",
      "PostgreSQL",
    ],
    role: "Natural language → SQL → charts → time-series forecasts",
    highlight: false,
    images: [
      { src: "/projects/SQLyst/dashboard.png", label: "Dashboard" },
      { src: "/projects/SQLyst/chat.png", label: "AI Chat" },
      { src: "/projects/SQLyst/forcast.png", label: "Forecast" },
      { src: "/projects/SQLyst/report.png", label: "Report" },
    ],
    details: {
      overview:
        "PostgreSQL-backed app so a non-technical user can query data in plain language. FastAPI, chatbot layer, Prophet forecasts. Built during the KSHRD Advanced Course, Jul–Dec 2025.",
      highlights: [
        "Natural language queries against PostgreSQL",
        "FastAPI backend with chatbot layer",
        "Prophet model for time-series forecasts",
      ],
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    id: "rippleeco",
    name: "RippleEco",
    emoji: "🌿",
    subtitle: "Next.js → Spring Boot → PostgreSQL",
    description:
      "Environmental platform that empowers individuals to take action, participate in eco-friendly events, donate to important causes, and raise awareness about environmental issues.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL"],
    role: "Frontend Team Lead",
    highlight: false,
    images: [
      { src: "/projects/RippleEco/landing.png", label: "Landing" },
      { src: "/projects/RippleEco/eco-event.png", label: "Events" },
      { src: "/projects/RippleEco/air-quality.png", label: "Air Quality" },
      { src: "/projects/RippleEco/discussion.png", label: "Discussion" },
    ],
    details: {
      overview:
        "Environmental platform that empowers individuals to take action, participate in eco-friendly events, donate to important causes, and raise awareness about environmental issues. Built with Next.js, Spring Boot, and PostgreSQL at Korean Software HRD Center.",
      highlights: [
        "Eco-event discovery and registration",
        "Donation campaigns for environmental causes",
        "Awareness reporting to raise issues with authorities",
        "Frontend team lead on architecture and delivery",
      ],
      github: null as string | null,
      demo: null as string | null,
    },
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Cambodia",
    period: "2023 – Present",
    detail: "Year 4",
  },
  {
    degree: "Advanced Course — Data Analytics",
    institution: "Korean Software HRD Center",
    period: "Jul – Dec 2025",
    detail:
      "Statistics, data collection and web scraping, ETL/ELT, Power BI, Python, time-series forecasting",
  },
  {
    degree: "Basic Course — Software Development",
    institution: "Korean Software HRD Center",
    period: "Feb – Jul 2025",
    detail: "Java, Spring Boot, SQL, PostgreSQL, data modeling, Docker, Git",
  },
];

export const experience = [
  {
    title: "Junior Core Banking",
    company: "ChokChey Finance Plc · Phnom Penh",
    period: "Feb 2026–Present",
    description: "",
    bullets: [
      "Work with core banking systems and manage databases.",
      "Manage reports and build data pipelines for reporting.",
      "Validate and reconcile record counts with SQL, then document mismatches and fixes.",
    ],
  },
  {
    title: "Frontend Team Lead",
    company: "Korean Software HRD Center",
    period: "2025",
    description:
      "Led the frontend team on a Next.js, Spring Boot, and PostgreSQL platform. Set the architecture, split the work, and delivered the interface.",
    bullets: [] as string[],
  },
];

export const languages = [
  { name: "Khmer", flag: "🇰🇭", level: "Native" },
  { name: "English", flag: "🇺🇸", level: "Intermediate" },
  { name: "Korean", flag: "🇰🇷", level: "Basic" },
];

// Sign up free at formspree.io → New Form → copy your form ID here
export const formspreeId = "YOUR_FORM_ID";

export const testimonials = [
  {
    quote:
      "Soytry was one of the standout students in our program. Beyond his technical skills in Next.js and Spring Boot, what impressed me most was how he took ownership as a team lead — guiding his peers, making architecture decisions, and delivering a polished product under real deadlines.",
    name: "Kim Jae-won",
    title: "Software Development Instructor",
    institution: "Korean Software HRD Center",
  },
  {
    quote:
      "Having Soytry as our frontend lead made a huge difference. He had a clear vision for the UI from day one, kept the team aligned when things got complicated, and always found a way to ship clean, working features. RippleEco wouldn't have looked the way it did without him.",
    name: "Chea Dara",
    title: "Full-Stack Developer",
    institution: "Korean Software HRD Center",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const social = [
  { label: "GitHub", href: "https://github.com/Soytry17" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soytry-mey-3a156b332",
  },
  { label: "Telegram", href: "https://t.me/Tryy43" },
  { label: "Facebook", href: "https://www.facebook.com/share/17WwDPdvqy/" },
];
