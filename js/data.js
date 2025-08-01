// Portfolio Data Structure
let portfolioData = {
    "profile": {
        "name": "José Sirias Monge",
        "title": "Business Intelligence Operative",
        "location": "San José, Costa Rica",
        "experience": "6+ years",
        "email": "josesmonge_@hotmail.com",
        "linkedin": "linkedin.com&#x2F;in&#x2F;josesmonge",
        "github": "https://github.com/JCode-IA",
        "summary": "Dynamic BI analyst focused on process improvement and digital transformation. Skilled at translating complex data into actionable insights to foster sustainable growth and collaboration across teams.",
        "bio": "Dynamic BI analyst focused on process improvement and digital transformation. Skilled at translating complex data into actionable insights to foster sustainable growth and collaboration across teams.",
        "phone": "+506 8546 7161",
        "workType": "Flexible",
        "languages": "English, Spanish"
    },
    "achievements": [
        {
            "icon": "fas fa-graduation-cap",
            "title": "Team Development",
            "description": "Mentored 30+ team members in PowerBI, Query, SQL, Python and Excel best practices.  Across this 6Y of exp",
            "metric": "30+ Mentees",
            "order": 1
        },
        {
            "icon": "fas fa-globe",
            "title": "Global Reach",
            "description": "Implemented BI solutions across multiple countries. Connecting with teams, understanding cultures, processes and making sustainable change",
            "metric": "75+ Insightfull Reports",
            "order": 2
        },
        {
            "icon": "fas fa-clock",
            "title": "Automation Success",
            "description": "Automated weekly reporting for 85+ stores, saving significant operational time that was performed Manually by a group of people",
            "metric": "96 Hours/Week Saved in Automations",
            "order": 3
        },
        {
            "icon": "fas fa-trophy",
            "title": "Tool Impact for Sustainability",
            "description": "Built quotation-analysis tool in Excel/VBA used by 100+ analysts for standardized workflows. Allowing benchmarking between departments. \nEnhancing resolution times, accuracy metrics, spotting errors and solving complex terms into user-friendly interface for quick results  ",
            "metric": "120+ Users",
            "order": 4
        }
    ],
    "skills": [
        {
            "category": "BI & Analytics",
            "icon": "fas fa-chart-line",
            "items": [
                {
                    "name": "Power BI",
                    "level": 98
                },
                {
                    "name": "Excel/VBA",
                    "level": 96
                },
                {
                    "name": "PowerPivot - Query",
                    "level": 95
                },
                {
                    "name": "DAX - Code M",
                    "level": 90
                }
            ]
        },
        {
            "category": "Programming",
            "icon": "fas fa-code",
            "items": [
                {
                    "name": "Python",
                    "level": 90
                },
                {
                    "name": "SQL",
                    "level": 85
                },
                {
                    "name": "JavaScript",
                    "level": 80
                },
                {
                    "name": "HTML + CSS",
                    "level": 95
                }
            ]
        },
        {
            "category": "Automation",
            "icon": "fas fa-robot",
            "items": [
                {
                    "name": "Power Automate",
                    "level": 85
                },
                {
                    "name": "Power Apps",
                    "level": 75
                },
                {
                    "name": "SharePoint",
                    "level": 90
                },
                {
                    "name": "Process Optimization",
                    "level": 100
                }
            ]
        },
        {
            "category": "Project Management",
            "icon": "fas fa-tasks",
            "items": [
                {
                    "name": "Agile/Scrum",
                    "level": 90
                },
                {
                    "name": "Six Sigma",
                    "level": 100
                },
                {
                    "name": "Team Leadership",
                    "level": 90
                },
                {
                    "name": "Storytelling",
                    "level": 100
                }
            ]
        }
    ],
    "projects": [
        {
            "id": 1,
            "title": "Quotation Analysis Tool",
            "description": "Developed automated Excel + VBA tool for multi-dimensional quote analysis using Salesforce and SAP HANA data. Standardized workflows across 100+ users and improved transparency in compensation processes.",
            "image": "fas fa-file-excel",
            "technologies": [
                "Excel",
                "VBA",
                "Salesforce",
                "SAP HANA"
            ],
            "category": "automation",
            "status": "completed",
            "impact": "Company-wide recognition for bridging data gaps",
            "links": [
                {
                    "type": "demo",
                    "url": "#",
                    "label": "View Demo"
                },
                {
                    "type": "github",
                    "url": "#",
                    "label": "Source Code"
                }
            ],
            "order": 1
        },
        {
            "id": 4,
            "title": "Python Data Analysis Portfolio",
            "description": "Collection of Python scripts and Jupyter notebooks demonstrating data analysis, visualization, and machine learning techniques applied to business scenarios. Automating task with scripts, creating alerts, ETL, EDA, Clustering and Forecast Models. ",
            "image": "fab fa-python",
            "technologies": [
                "Python",
                "Pandas",
                "Matplotlib",
                "Scikit-learn",
                "ARIMA",
                "SARIMA",
                "XGBoost",
                "Selenium",
                "Random Forest"
            ],
            "category": "python",
            "status": "ongoing",
            "impact": "Insights to Action. Solving Complex Problems",
            "links": [
                {
                    "type": "github",
                    "url": "#",
                    "label": "View Repository"
                },
                {
                    "type": "notebook",
                    "url": "#",
                    "label": "Jupyter Notebooks"
                }
            ],
            "order": 2
        },
        {
            "id": 2,
            "title": "Multi-Country BI Dashboard",
            "description": "Designed Power BI dashboards aligned with strategic company goals for AR Holdings. Automated weekly reporting for 85+ stores across 9 countries, saving 96 hours per week. *Work was manually performed by a team* ",
            "image": "fas fa-globe",
            "technologies": [
                "Power BI",
                "DAX",
                "SQL",
                "Data Modeling",
                "PowerAutomate",
                "SharepointList"
            ],
            "category": "bi",
            "status": "completed",
            "impact": "Storytelling, reducing operative workload and moving from creating to analyzing data and the track of action plans.",
            "links": [
                {
                    "type": "demo",
                    "url": "#",
                    "label": "View Dashboard"
                }
            ],
            "order": 3
        },
        {
            "id": 3,
            "title": "Volume Forecasting Model",
            "description": "Built advanced Jupyter notebook models for automated volume forecasting and analysis. Implemented predictive analytics to support strategic decision-making. The tool allows simulating scenarios, to test traffic and capabilities of current configurations. Created with knowledge of Business process & rules",
            "image": "fas fa-chart-line",
            "technologies": [
                "ARIMA",
                "SARIMA",
                "XGBoost",
                "EDA Analysis. Random Forest"
            ],
            "category": "bi",
            "status": "completed",
            "impact": "Enhanced strategic decision-making capabilities and spot proactively problems",
            "links": [
                {
                    "type": "demo",
                    "url": "#",
                    "label": "View Model"
                }
            ],
            "order": 4
        },
        {
            "id": 5,
            "title": "KPI Monitoring System",
            "description": "Implemented comprehensive KPI monitoring and preventative process reviews at FIFCO, leading to significant process optimization and team efficiency improvements. Leading a SH meeting to review GAPS, lunch actions and benchmark between departments",
            "image": "fas fa-tachometer-alt",
            "technologies": [
                "Power BI",
                "Excel",
                "Query",
                "SAP",
                "Process Design"
            ],
            "category": "bi",
            "status": "completed",
            "impact": "Process optimization and improved multi-team efficiency",
            "links": [
                {
                    "type": "demo",
                    "url": "#",
                    "label": "View System"
                }
            ],
            "order": 5
        },
        {
            "id": 6,
            "title": "Automated Reporting Suite",
            "description": "Developed comprehensive automated reporting solutions using Power Automate and SharePoint, streamlining data collection and distribution processes. Saves all information with Data best practices into sharepoint site for teams review.",
            "image": "fas fa-cogs",
            "technologies": [
                "Power Automate",
                "SharePoint",
                "Power Apps",
                "Flow"
            ],
            "category": "automation",
            "status": "completed",
            "impact": "Streamlined reporting processes organization-wide",
            "links": [
                {
                    "type": "demo",
                    "url": "#",
                    "label": "View Suite"
                }
            ],
            "order": 6
        }
    ],
    "experience": [
        {
            "company": "FARM Studios",
            "position": "Senior BI Developer",
            "period": "Sept 2024 - Present",
            "location": "Remote, Costa Rica",
            "description": [
                "Developed and maintain the Report Server, enhancing data performance ETL with optimized PostGre SQL Queries.",
                "Automating daily task with Jupyter notebook scripts. Allowing advanced analytical models to save time and move to action.",
                "Enhanced Forecast Models with IA. Helping test escenarios of volume and traffic of Transactions. to spot earlier requirements to continue operations.",
                "Ensured continuous availability and performance of Power BI reports through proactive monitoring and issue resolution.",
                "Enhanced revenue performance by analyzing customer behavior, evaluating payment processor efficiency, and segmenting risk",
                "profiles. ",
                "Supported commercial strategy through profitability modeling, trend analysis, and customer segmentation to guide data-driven",
                "decisions.",
                "Solved complex issues with IA and gathered the documentation"
            ],
            "technologies": [
                "Report Server",
                "DBeaver",
                "PowerBI",
                "JupyterNotebooks",
                "Python",
                "JavaScript",
                "HTML",
                "DAX",
                "CodeM",
                "Postgre SQL",
                "IA Tools"
            ],
            "order": 1
        },
        {
            "company": "Cisco",
            "position": "Recurrent Revenue Analyst CLO",
            "period": "Jun 2023 – Present",
            "location": "Remote",
            "description": [
                "Led BI initiatives to close organizational knowledge gaps and align reporting processes",
                "Built quotation-analysis Excel tool used by 120+ analysts for standardized data workflows",
                "Developed advanced Excel/VBA models for automated revenue forecasting & analysis",
                "Collaborated across teams to document processes, track KPIs, and recommend improvements"
            ],
            "technologies": [
                "Excel",
                "VBA",
                "Salesforce",
                "SAP HANA",
                "Power BI"
            ],
            "order": 2
        },
        {
            "company": "AR Holdings",
            "position": "Business Intelligence Analyst",
            "period": "Sep 2022 – May 2023",
            "location": "San José, Costa Rica",
            "description": [
                "Designed Power BI dashboards aligned with strategic company goals",
                "Automated weekly reporting for 85+ stores across 9 countries, saving ~96 hours/week",
                "Enhanced data quality and KPI tracking infrastructure through cross-functional coordination"
            ],
            "technologies": [
                "Power BI",
                "DAX",
                "SQL",
                "Data Modeling",
                "Automation"
            ],
            "order": 3
        },
        {
            "company": "FIFCO",
            "position": "Operations Control Analyst (OPI)",
            "period": "Jul 2021 – Aug 2022",
            "location": "San José, Costa Rica",
            "description": [
                "Spearheaded digital transformation using Excel, Power BI, and PowerPivot to cleanse and structure data",
                "Mentored 15+ team members in SAP and Excel best practices",
                "Implemented KPI monitoring and preventative process reviews leading to process optimization"
            ],
            "technologies": [
                "Excel",
                "Power BI",
                "PowerPivot",
                "SAP",
                "Process Optimization"
            ],
            "order": 4
        }
    ],
    "certifications": [
        {
            "name": "ML3000 - Advanced Analytics Models",
            "provider": "PROMiDAT Iberoamericano, SA",
            "status": "Completed",
            "order": 1
        },
        {
            "name": "ML2006 - Data Visualization Python",
            "provider": "PROMiDAT Iberoamericano, SA",
            "status": "Completed",
            "order": 2
        },
        {
            "name": "ML2003 - Supervised Learning",
            "provider": "PROMiDAT Iberoamericano, SA",
            "status": "Completed",
            "url": "https://www.linkedin.com/in/josesmonge/details/certifications/1754069570762/single-media-viewer/?profileId=ACoAAC5icWgBAufUh7zz4s4jC_GV-RYoxPjjn2c",
            "order": 3
        },
        {
            "name": "ML2000 - Unsupervised Learning",
            "provider": "PROMiDAT Iberoamericano, SA",
            "status": "Completed",
            "url": "https://www.linkedin.com/in/josesmonge/details/certifications/1747962485899/single-media-viewer/?profileId=ACoAAC5icWgBAufUh7zz4s4jC_GV-RYoxPjjn2c",
            "order": 4
        },
        {
            "name": "ML1000 - Oriented Programming Objects (OOP)",
            "provider": "PROMiDAT Iberoamericano, SA",
            "status": "Completed",
            "url": "https://www.linkedin.com/in/josesmonge/details/certifications/1743720305581/single-media-viewer/?profileId=ACoAAC5icWgBAufUh7zz4s4jC_GV-RYoxPjjn2c",
            "order": 5
        },
        {
            "name": "Master Power BI",
            "status": "Completed",
            "provider": "LinkedIn Learning",
            "order": 6
        },
        {
            "name": "Master Excel",
            "status": "Completed",
            "provider": "LinkedIn Learning",
            "order": 7
        },
        {
            "name": "SQL Intermediate/Master",
            "status": "Completed",
            "provider": "LinkedIn Learning",
            "order": 8
        },
        {
            "name": "Green Belt / Six Sigma – Kaizen",
            "status": "Completed",
            "provider": "LinkedIn Learning",
            "order": 9
        },
        {
            "name": "Agile / Scrum - Foundations and Teams",
            "provider": "LinkedIn Learning",
            "status": "Completed",
            "order": 10
        }
    ]
};