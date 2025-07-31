// Portfolio Data Structure
let portfolioData = {
    profile: {
        name: "José Sirias Monge",
        title: "Business Intelligence Operative",
        location: "San José, Costa Rica",
        experience: "3+ years",
        email: "contact@josesirias.com",
        linkedin: "linkedin.com/in/josesmonge",
        github: "github.com/josesirias-monge",
        summary: "Dynamic BI analyst focused on process improvement and digital transformation. Skilled at translating complex data into actionable insights to foster sustainable growth and collaboration across teams."
    },
    
    achievements: [
        {
            icon: "fas fa-trophy",
            title: "Excel/VBA Tool Impact",
            description: "Built quotation-analysis tool used by 100+ analysts for standardized workflows",
            metric: "100+ Users",
            order: 1
        },
        {
            icon: "fas fa-clock",
            title: "Automation Success",
            description: "Automated weekly reporting for 85+ stores, saving significant operational time",
            metric: "96 Hours/Week Saved",
            order: 2
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Team Development",
            description: "Mentored 15+ team members in SAP and Excel best practices",
            metric: "15+ Mentees",
            order: 3
        },
        {
            icon: "fas fa-globe",
            title: "Global Reach",
            description: "Implemented BI solutions across 9 countries for AR Holdings",
            metric: "9 Countries",
            order: 4
        }
    ],
    
    skills: [
        {
            category: "BI & Analytics",
            icon: "fas fa-chart-line",
            items: [
                { name: "Power BI", level: 90 },
                { name: "Excel/VBA", level: 95 },
                { name: "PowerPivot", level: 85 },
                { name: "DAX", level: 80 }
            ]
        },
        {
            category: "Programming",
            icon: "fas fa-code",
            items: [
                { name: "Python", level: 75 },
                { name: "SQL", level: 80 },
                { name: "JavaScript", level: 70 },
                { name: "VBA", level: 90 }
            ]
        },
        {
            category: "Automation",
            icon: "fas fa-robot",
            items: [
                { name: "Power Automate", level: 85 },
                { name: "Power Apps", level: 75 },
                { name: "SharePoint", level: 80 },
                { name: "Process Optimization", level: 90 }
            ]
        },
        {
            category: "Project Management",
            icon: "fas fa-tasks",
            items: [
                { name: "Agile/Scrum", level: 85 },
                { name: "Six Sigma", level: 75 },
                { name: "Team Leadership", level: 90 },
                { name: "Stakeholder Management", level: 85 }
            ]
        }
    ],
    
    projects: [
        {
            id: 1,
            title: "Quotation Analysis Tool",
            description: "Developed automated Excel + VBA tool for multi-dimensional quote analysis using Salesforce and SAP HANA data. Standardized workflows across 100+ users and improved transparency in compensation processes.",
            image: "fas fa-calculator",
            technologies: ["Excel", "VBA", "Salesforce", "SAP HANA"],
            category: "automation",
            status: "completed",
            impact: "Company-wide recognition for bridging data gaps",
            order: 1,
            links: [
                { type: "demo", url: "#", label: "View Demo" },
                { type: "github", url: "#", label: "Source Code" }
            ]
        },
        {
            id: 2,
            title: "Multi-Country BI Dashboard",
            description: "Designed Power BI dashboards aligned with strategic company goals for AR Holdings. Automated weekly reporting for 85+ stores across 9 countries, saving 96 hours per week.",
            image: "fas fa-globe-americas",
            technologies: ["Power BI", "DAX", "SQL", "Data Modeling"],
            category: "bi",
            status: "completed",
            impact: "96 hours/week saved across organization",
            order: 2,
            links: [
                { type: "demo", url: "#", label: "View Dashboard" }
            ]
        },
        {
            id: 3,
            title: "Revenue Forecasting Model",
            description: "Built advanced Excel/VBA models for automated revenue forecasting and analysis at Cisco. Implemented predictive analytics to support strategic decision-making.",
            image: "fas fa-chart-area",
            technologies: ["Excel", "VBA", "Statistical Analysis", "Forecasting"],
            category: "bi",
            status: "completed",
            impact: "Enhanced strategic decision-making capabilities",
            order: 3,
            links: [
                { type: "demo", url: "#", label: "View Model" }
            ]
        },
        {
            id: 4,
            title: "Python Data Analysis Portfolio",
            description: "Collection of Python scripts and Jupyter notebooks demonstrating data analysis, visualization, and machine learning techniques applied to business scenarios.",
            image: "fab fa-python",
            technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
            category: "python",
            status: "ongoing",
            impact: "Showcasing advanced analytical capabilities",
            order: 4,
            links: [
                { type: "github", url: "#", label: "View Repository" },
                { type: "notebook", url: "#", label: "Jupyter Notebooks" }
            ]
        },
        {
            id: 5,
            title: "KPI Monitoring System",
            description: "Implemented comprehensive KPI monitoring and preventative process reviews at FIFCO, leading to significant process optimization and team efficiency improvements.",
            image: "fas fa-tachometer-alt",
            technologies: ["Power BI", "Excel", "SAP", "Process Design"],
            category: "bi",
            status: "completed",
            impact: "Process optimization and improved team efficiency",
            order: 5,
            links: [
                { type: "demo", url: "#", label: "View System" }
            ]
        },
        {
            id: 6,
            title: "Automated Reporting Suite",
            description: "Developed comprehensive automated reporting solutions using Power Automate and SharePoint, streamlining data collection and distribution processes.",
            image: "fas fa-file-alt",
            technologies: ["Power Automate", "SharePoint", "Power Apps", "Flow"],
            category: "automation",
            status: "completed",
            impact: "Streamlined reporting processes organization-wide",
            order: 6,
            links: [
                { type: "demo", url: "#", label: "View Suite" }
            ]
        }
    ],
    
    experience: [
        {
            company: "Cisco",
            position: "Recurrent Revenue Analyst CLO",
            period: "Jun 2023 – Present",
            location: "Remote",
            description: [
                "Led BI initiatives to close organizational knowledge gaps and align reporting processes",
                "Built quotation-analysis Excel tool used by 100+ analysts for standardized data workflows",
                "Developed advanced Excel/VBA models for automated revenue forecasting & analysis",
                "Collaborated across teams to document processes, track KPIs, and recommend improvements"
            ],
            technologies: ["Excel", "VBA", "Salesforce", "SAP HANA", "Power BI"],
            order: 1
        },
        {
            company: "AR Holdings",
            position: "Business Intelligence Analyst",
            period: "Sep 2022 – May 2023",
            location: "San José, Costa Rica",
            description: [
                "Designed Power BI dashboards aligned with strategic company goals",
                "Automated weekly reporting for 85+ stores across 9 countries, saving ~96 hours/week",
                "Enhanced data quality and KPI tracking infrastructure through cross-functional coordination"
            ],
            technologies: ["Power BI", "DAX", "SQL", "Data Modeling", "Automation"],
            order: 2
        },
        {
            company: "FIFCO",
            position: "Operations Control Analyst (OPI)",
            period: "Jul 2021 – Aug 2022",
            location: "San José, Costa Rica",
            description: [
                "Spearheaded digital transformation using Excel, Power BI, and PowerPivot to cleanse and structure data",
                "Mentored 15+ team members in SAP and Excel best practices",
                "Implemented KPI monitoring and preventative process reviews leading to process optimization"
            ],
            technologies: ["Excel", "Power BI", "PowerPivot", "SAP", "Process Optimization"],
            order: 3
        }
    ],
    
    certifications: [
        {
            name: "PL-900: Microsoft Power Platform Certification",
            status: "In Progress",
            provider: "Microsoft",
            order: 1
        },
        {
            name: "Master Power BI",
            status: "Completed",
            provider: "LinkedIn Learning",
            order: 2
        },
        {
            name: "Master Excel",
            status: "Completed",
            provider: "LinkedIn Learning",
            order: 3
        },
        {
            name: "SQL Intermediate/Master",
            status: "Completed",
            provider: "LinkedIn Learning",
            order: 4
        },
        {
            name: "Green Belt / Six Sigma – Kaizen",
            status: "Completed",
            provider: "LinkedIn Learning",
            order: 5
        }
    ]
};

// Save data to localStorage
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        try {
            const loadedData = JSON.parse(saved);
            // Merge with current data to ensure all properties exist
            portfolioData = { ...portfolioData, ...loadedData };
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// Initialize data on load
document.addEventListener('DOMContentLoaded', function() {
    loadData();
});
