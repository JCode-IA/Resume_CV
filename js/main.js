// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initPortfolio();
});

function initPortfolio() {
    // Show loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 3000);
    
    // Initialize navigation
    initNavigation();
    
    // Load content
    updateMainContent();
    
    // Initialize interactive elements
    initInteractiveElements();
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Admin tab functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            const tab = e.target.getAttribute('data-tab');
            if (isAdminAuthenticated) {
                loadAdminContent(tab);
            }
        }
    });
}

function showSection(sectionId) {
    console.log(`[DEBUG] Switching to section: ${sectionId}`);
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        console.log(`[DEBUG] Section ${sectionId} made active`);
        console.log(`[DEBUG] Current scroll position before: ${window.scrollY}`);
        
        // Simple approach: scroll to top of page since sections are full height
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            
            console.log(`[DEBUG] Scrolled to top`);
            
            // Verify the scroll after a delay
            setTimeout(() => {
                console.log(`[DEBUG] Final scroll position: ${window.scrollY}`);
            }, 600);
            
        }, 10); // Short delay to ensure section is visible
        
        // Trigger animations for the section
        triggerSectionAnimations(sectionId);
    }
}

function triggerSectionAnimations(sectionId) {
    switch(sectionId) {
        case 'skills':
        case 'arsenal':
            animateProgressBars();
            break;
        case 'projects':
            animateProjectCards();
            break;
        case 'experience':
            animateTimeline();
            break;
    }
}

function animateProgressBars() {
    // Reset all progress bars to 0 first
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = '0%';
        bar.classList.remove('animate');
    });
    
    // Animate them with staggered timing
    setTimeout(() => {
        document.querySelectorAll('.progress-fill').forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.classList.add('animate');
                bar.style.width = width + '%';
            }, index * 150); // Stagger animation by 150ms per bar
        });
    }, 500); // Wait 500ms before starting animations
}

function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function animateTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

function updateMainContent() {
    console.log('[DEBUG] updateMainContent called');
    
    // Force reload the latest data from localStorage
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
        try {
            const loadedData = JSON.parse(savedData);
            portfolioData = { ...portfolioData, ...loadedData };
            console.log('[DEBUG] Data reloaded from localStorage, certifications:', portfolioData.certifications.map(c => ({name: c.name, order: c.order})));
        } catch (e) {
            console.error('Error reloading data:', e);
        }
    }
    
    updateAboutSection();
    updateSkillsSection();
    updateProjectsSection();
    updateExperienceSection();
    updateCertificationsSection();
    updateHeroSection();
    updateCommsSection();
    
    console.log('[DEBUG] All sections updated');
}

function updateHeroSection() {
    const heroTitle = document.querySelector('.glitch');
    const subtitle = document.querySelector('.subtitle');
    
    if (heroTitle) {
        heroTitle.textContent = portfolioData.profile.name.toUpperCase();
        heroTitle.setAttribute('data-text', portfolioData.profile.name.toUpperCase());
    }
    
    if (subtitle) {
        subtitle.textContent = portfolioData.profile.title.toUpperCase();
    }
}

function updateAboutSection() {
    const profileInfo = document.getElementById('profile-info');
    const achievements = document.getElementById('achievements');
    
    if (profileInfo) {
        profileInfo.innerHTML = `
            <div class="profile-container">
                <div class="profile-picture-section">
                    <div class="profile-rank">
                        <div class="rank-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="rank-title">BI SPECIALIST</span>
                    </div>
                    <div class="profile-picture">
                        <img src="jose_sirias_portrait.webp" alt="José Sirias - BI Specialist" />
                        <div class="picture-border"></div>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="profile-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><strong>Location:</strong> ${portfolioData.profile.location}</span>
                    </div>
                    <div class="profile-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span><strong>Experience:</strong> ${portfolioData.profile.experience}</span>
                    </div>
                    <div class="profile-item">
                        <i class="fas fa-envelope"></i>
                        <span><strong>Email:</strong> ${portfolioData.profile.email}</span>
                    </div>
                    <div class="profile-item">
                        <i class="fab fa-linkedin"></i>
                        <span><strong>LinkedIn:</strong> <a href="https://${portfolioData.profile.linkedin}" target="_blank" class="profile-linkedin-link">${portfolioData.profile.linkedin}</a></span>
                    </div>
                </div>
            </div>
            <div class="profile-summary">
                <h4>Mission Brief</h4>
                <p>${portfolioData.profile.summary}</p>
                <div class="profile-note">
                    *Please review <a href="https://${portfolioData.profile.linkedin}" target="_blank">LinkedIn</a> profile for better project documentation*
                </div>
            </div>
        `;
    }
    
    if (achievements) {
        // Sort achievements by order before displaying
        const sortedAchievements = portfolioData.achievements
            .slice()
            .sort((a, b) => (a.order || 999) - (b.order || 999));
            
        achievements.innerHTML = sortedAchievements.map(achievement => `
            <div class="achievement-item">
                <div class="achievement-icon">
                    <i class="${achievement.icon}"></i>
                </div>
                <div class="achievement-content">
                    <h5>${achievement.title}</h5>
                    <p>${achievement.description}</p>
                    <span class="achievement-metric">${achievement.metric}</span>
                </div>
            </div>
        `).join('');
    }
}

function updateSkillsSection() {
    const skillsGrid = document.getElementById('skills-grid');
    
    if (skillsGrid) {
        skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => `
            <div class="skill-card">
                <div class="skill-header">
                    <i class="${skillCategory.icon}"></i>
                    <h3>${skillCategory.category}</h3>
                </div>
                <div class="skills-list">
                    ${skillCategory.items.map(skill => `
                        <div class="skill-progress">
                            <div class="skill-name">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" data-width="${skill.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

function updateProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsGrid) {
        // Sort projects by order before displaying
        const sortedProjects = portfolioData.projects
            .slice()
            .sort((a, b) => (a.order || 999) - (b.order || 999));
            
        projectsGrid.innerHTML = sortedProjects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <i class="${project.image}"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-impact">
                        <strong>Impact:</strong> ${project.impact}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" class="project-link" target="_blank">
                                <i class="fas fa-${link.type === 'github' ? 'code-branch' : link.type === 'demo' ? 'eye' : 'book'}"></i>
                                ${link.label}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Initialize project filtering
    initProjectFiltering();
}

function updateExperienceSection() {
    const experienceTimeline = document.getElementById('experience-timeline');
    
    if (experienceTimeline) {
        // Sort experience by order before displaying
        const sortedExperience = portfolioData.experience
            .slice()
            .sort((a, b) => (a.order || 999) - (b.order || 999));
            
        experienceTimeline.innerHTML = sortedExperience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3 class="company-name">${exp.company}</h3>
                    <h4 class="job-title">${exp.position}</h4>
                    <p class="job-period">${exp.period}</p>
                    <div class="job-description">
                        ${exp.description.map(desc => `<p>• ${desc}</p>`).join('')}
                    </div>
                    <div class="job-technologies">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function getCertificationIcon(certName) {
    // Use consistent shield icon for all certifications
    return 'fas fa-certificate';
}

function updateCertificationsSection() {
    const certificationsContent = document.getElementById('certifications-content');
    
    if (certificationsContent && portfolioData.certifications) {
        // Sort certifications by order before displaying
        const sortedCertifications = portfolioData.certifications
            .slice()
            .sort((a, b) => (a.order || 999) - (b.order || 999));
            
        certificationsContent.innerHTML = sortedCertifications.map(cert => `
            <div class="certification-card">
                <div class="cert-icon">
                    <i class="${getCertificationIcon(cert.name)}"></i>
                </div>
                <div class="cert-content">
                    <h3 class="cert-name">${cert.name}</h3>
                    <p class="cert-provider">
                        <i class="fas fa-building"></i> ${cert.provider}
                    </p>
                    <div class="cert-status">
                        <span class="status-badge status-${cert.status.toLowerCase().replace(/\s+/g, '-')}">${cert.status}</span>
                        ${cert.date ? `<span class="cert-date"><i class="fas fa-calendar"></i> ${cert.date}</span>` : ''}
                    </div>
                    ${cert.url ? `
                        <div class="cert-actions">
                            <a href="${cert.url}" target="_blank" class="cert-link">
                                <i class="fas fa-external-link-alt"></i> View Certificate
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
}

function updateCommsSection() {
    console.log('[DEBUG] updateCommsSection called');
    
    // Update GitHub link if element exists
    const githubCard = document.querySelector('.github-card');
    if (githubCard && portfolioData.profile.github) {
        let githubUrl = portfolioData.profile.github;
        let displayText = portfolioData.profile.github;
        
        // Handle any existing encoded characters
        try {
            if (githubUrl.includes('%') || githubUrl.includes('&#x2F;')) {
                githubUrl = githubUrl.replace(/&#x2F;/g, '/');
                displayText = displayText.replace(/&#x2F;/g, '/');
                if (githubUrl.includes('%')) {
                    githubUrl = decodeURIComponent(githubUrl);
                    displayText = decodeURIComponent(displayText);
                }
            }
        } catch (e) {
            console.warn('URL decoding failed, using original:', e);
        }
        
        // Ensure proper URL format for href
        if (!githubUrl.startsWith('http://') && !githubUrl.startsWith('https://')) {
            githubUrl = 'https://' + githubUrl;
        }
        
        // Clean display text (remove protocol for display)
        displayText = displayText.replace(/^https?:\/\//, '');
        
        githubCard.href = githubUrl;
        githubCard.textContent = displayText;
        console.log('[DEBUG] Updated GitHub URL:', githubUrl, 'Display:', displayText);
    }
    
    // Update LinkedIn link if element exists
    const linkedinCard = document.querySelector('.linkedin-card');
    if (linkedinCard && portfolioData.profile.linkedin) {
        let linkedinUrl = portfolioData.profile.linkedin;
        let displayText = portfolioData.profile.linkedin;
        
        console.log('[DEBUG] Original LinkedIn URL:', linkedinUrl);
        
        // Handle any existing encoded characters (for backward compatibility)
        try {
            if (linkedinUrl.includes('%') || linkedinUrl.includes('&#x2F;')) {
                linkedinUrl = linkedinUrl.replace(/&#x2F;/g, '/');
                displayText = displayText.replace(/&#x2F;/g, '/');
                if (linkedinUrl.includes('%')) {
                    linkedinUrl = decodeURIComponent(linkedinUrl);
                    displayText = decodeURIComponent(displayText);
                }
                console.log('[DEBUG] After decoding:', linkedinUrl);
            }
        } catch (e) {
            console.warn('[DEBUG] URL decoding failed, using original:', e);
        }
        
        // Ensure proper URL format for href
        if (!linkedinUrl.startsWith('http://') && !linkedinUrl.startsWith('https://')) {
            linkedinUrl = 'https://' + linkedinUrl;
        }
        
        // Clean display text (remove protocol for display)
        displayText = displayText.replace(/^https?:\/\//, '');
        
        console.log('[DEBUG] Final LinkedIn URL:', linkedinUrl);
        console.log('[DEBUG] Final display text:', displayText);
        
        linkedinCard.href = linkedinUrl;
        linkedinCard.textContent = displayText;
        console.log('[DEBUG] LinkedIn card updated successfully');
    }
}

function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

function initInteractiveElements() {
    // Hero action buttons
    document.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            showSection(target);
            
            // Update nav
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === target) {
                    link.classList.add('active');
                }
            });
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message transmitted successfully! Awaiting response...', 'success');
            contactForm.reset();
        });
    }
    
    // Initialize progress bar animations when arsenal section is visible
    const arsenalSection = document.getElementById('arsenal');
    if (arsenalSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        animateProgressBars();
                    }, 200);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(arsenalSection);
    }
    
    // Initialize enhanced radar
    initEnhancedRadar();
    
    // Tactical effects
    initTacticalEffects();
}

// Fixed Naval Radar System with Proper CSS Synchronization
function initEnhancedRadar() {
    const radarContainer = document.getElementById('radar-container');
    const radarSweep = document.querySelector('.radar-sweep');
    if (!radarContainer || !radarSweep) {
        console.error('❌ Radar elements not found!');
        return;
    }
    
    let contacts = [];
    let dotCounter = 0;
    const MAX_CONTACTS = 4;
    const SWEEP_DURATION = 6000; // Must match CSS animation exactly
    const BEAM_WIDTH = 15; // Detection beam width in degrees
    
    console.log('🚢 NAVAL RADAR SYSTEM INITIALIZING...');
    console.log('⚡ Synchronizing with CSS radar-sweep animation...');
    
    // Get CSS animation start time for perfect synchronization
    let animationStartTime = null;
    
    function initializeAnimationSync() {
        // Force CSS animation restart to sync timing
        radarSweep.style.animation = 'none';
        radarSweep.offsetHeight; // Force reflow
        radarSweep.style.animation = 'radar-sweep 6s linear infinite';
        
        // Capture the exact start time
        animationStartTime = performance.now();
        console.log('🎯 CSS Animation synchronized at', animationStartTime);
    }
    
    // Calculate current sweep angle (0° = top, clockwise)
    function getCurrentSweepAngle() {
        if (!animationStartTime) return 0;
        
        const elapsed = (performance.now() - animationStartTime) % SWEEP_DURATION;
        const sweepAngle = (elapsed / SWEEP_DURATION) * 360;
        
        return sweepAngle;
    }
    
    // Create contact at random position
    function createContact() {
        console.log(`🔍 createContact() called - Current contacts: ${contacts.length}/${MAX_CONTACTS}`);
        
        if (contacts.length >= MAX_CONTACTS) {
            console.log(`⚠️ Maximum contacts reached (${MAX_CONTACTS}). Cannot create new contact.`);
            return null;
        }
        
        // Random angle (0° = top, clockwise to match CSS)
        const angle = Math.random() * 360;
        
        // Random distance from center (20% to 40% of radar radius)
        const distance = 15 + Math.random() * 25;
        
        // Convert polar coordinates to screen position
        // Note: CSS coordinate system has 0° at top, clockwise
        const radians = (angle * Math.PI) / 180;
        const x = 50 + distance * Math.sin(radians); // sin for x because 0° is at top
        const y = 50 - distance * Math.cos(radians); // -cos for y because 0° is at top
        
        const contact = {
            id: `radar_${dotCounter++}`,
            x: x,
            y: y,
            angle: angle, // Store in CSS coordinate system (0° = top)
            revealed: false,
            element: null,
            createdAt: performance.now()
        };
        
        // Create completely invisible dot
        const dot = document.createElement('div');
        dot.className = 'radar-dot radar-hidden';
        dot.id = contact.id;
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.position = 'absolute';
        dot.style.opacity = '0';
        dot.style.visibility = 'hidden';
        dot.style.transform = 'translate(-50%, -50%) scale(0)';
        
        radarContainer.appendChild(dot);
        contact.element = dot;
        contacts.push(contact);
        
        console.log(`✅ Contact created: ${contact.id} at ${angle.toFixed(1)}° (${x.toFixed(1)}%, ${y.toFixed(1)}%) - Total: ${contacts.length}`);
        return contact;
    }
    
    // Reveal contact when swept
    function revealContact(contact) {
        if (contact.revealed) return;
        
        console.log(`🎯 RADAR CONTACT DETECTED! ${contact.id} at ${contact.angle.toFixed(1)}°`);
        
        contact.revealed = true;
        contact.revealedAt = performance.now();
        
        // Make fully visible with dramatic effect
        contact.element.style.visibility = 'visible';
        contact.element.style.opacity = '1';
        contact.element.style.transform = 'translate(-50%, -50%) scale(1.2)';
        contact.element.className = 'radar-dot radar-revealed';
        
        // Add pulsing effect
        setTimeout(() => {
            if (contact.element) {
                contact.element.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }, 200);
        
        // Auto-fade after 6 seconds
        setTimeout(() => {
            if (contact.element && contact.revealed) {
                fadeOutContact(contact);
            }
        }, 6000);
    }
    
    // Fade out contact
    function fadeOutContact(contact) {
        if (!contact.element) return;
        
        console.log(`📡 Contact ${contact.id} fading out`);
        
        contact.element.style.opacity = '0';
        contact.element.style.transform = 'translate(-50%, -50%) scale(0.3)';
        contact.element.className = 'radar-dot radar-fading';
        
        setTimeout(() => {
            removeContact(contact.id);
        }, 1000);
    }
    
    // Remove contact completely
    function removeContact(contactId) {
        const index = contacts.findIndex(c => c.id === contactId);
        if (index === -1) return;
        
        const contact = contacts[index];
        if (contact.element && contact.element.parentNode) {
            contact.element.parentNode.removeChild(contact.element);
        }
        
        contacts.splice(index, 1);
        console.log(`�️ Contact ${contactId} removed`);
    }
    
    // Check for contact detection
    function updateRadarDetection() {
        const sweepAngle = getCurrentSweepAngle();
        
        // Debug output every 3 seconds
        const debugInterval = 3000;
        if (Math.floor(performance.now() / debugInterval) !== Math.floor((performance.now() - 16) / debugInterval)) {
            const hiddenContacts = contacts.filter(c => !c.revealed).length;
            console.log(`🔄 Sweep: ${sweepAngle.toFixed(1)}° | Contacts: ${contacts.length} total, ${hiddenContacts} hidden`);
        }
        
        // Check each unrevealed contact
        contacts.forEach(contact => {
            if (!contact.revealed) {
                // Calculate shortest angular distance
                let angleDiff = Math.abs(contact.angle - sweepAngle);
                if (angleDiff > 180) {
                    angleDiff = 360 - angleDiff;
                }
                
                // Detect if sweep beam is over contact
                if (angleDiff <= BEAM_WIDTH / 2) {
                    revealContact(contact);
                }
            }
        });
        
        requestAnimationFrame(updateRadarDetection);
    }
    
    // Manual contact placement on click
    radarContainer.addEventListener('click', (e) => {
        if (contacts.length >= MAX_CONTACTS) {
            console.log('⚠️ Maximum contacts reached');
            return;
        }
        
        const rect = radarContainer.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * 100;
        const clickY = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Check if click is within radar circle
        const centerX = 50, centerY = 50;
        const distance = Math.sqrt((clickX - centerX) ** 2 + (clickY - centerY) ** 2);
        
        if (distance <= 45) {
            // Calculate angle in CSS coordinate system (0° = top, clockwise)
            let clickAngle = Math.atan2(clickX - centerX, centerY - clickY) * 180 / Math.PI;
            if (clickAngle < 0) clickAngle += 360;
            
            const contact = {
                id: `manual_${dotCounter++}`,
                x: clickX,
                y: clickY,
                angle: clickAngle,
                revealed: false,
                element: null,
                createdAt: performance.now()
            };
            
            const dot = document.createElement('div');
            dot.className = 'radar-dot radar-hidden';
            dot.id = contact.id;
            dot.style.left = `${clickX}%`;
            dot.style.top = `${clickY}%`;
            dot.style.position = 'absolute';
            dot.style.opacity = '0';
            dot.style.visibility = 'hidden';
            dot.style.transform = 'translate(-50%, -50%) scale(0)';
            
            radarContainer.appendChild(dot);
            contact.element = dot;
            contacts.push(contact);
            
            console.log(`👆 Manual contact placed: ${contact.id} at ${clickAngle.toFixed(1)}°`);
        }
    });
    
    // Initialize radar system
    function startRadarSystem() {
        console.log('🚢 RADAR SYSTEM ONLINE');
        console.log('📡 Beginning contact detection...');
        
        // Synchronize with CSS animation
        initializeAnimationSync();
        
        // Create initial contacts after a short delay
        setTimeout(() => {
            console.log(`🎯 Creating initial contacts...`);
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {
                    createContact();
                    console.log(`✅ Initial contact ${i + 1}/2 created`);
                }, i * 800);
            }
        }, 1000);
        
        // Start detection loop
        setTimeout(() => {
            updateRadarDetection();
        }, 1500);
        
        // System status monitor
        setInterval(() => {
            const hiddenContacts = contacts.filter(c => !c.revealed).length;
            const revealedContacts = contacts.filter(c => c.revealed).length;
            const sweepAngle = getCurrentSweepAngle();
            
            console.log(`📊 RADAR STATUS: Sweep=${sweepAngle.toFixed(1)}° | Total=${contacts.length} | Hidden=${hiddenContacts} | Revealed=${revealedContacts} | Max=${MAX_CONTACTS}`);
            
            // List all contacts
            if (contacts.length > 0) {
                contacts.forEach(c => {
                    const age = ((performance.now() - c.createdAt) / 1000).toFixed(1);
                    console.log(`  📍 ${c.id}: ${c.revealed ? '🔴 VISIBLE' : '⚫ HIDDEN'} at ${c.angle.toFixed(1)}° (age: ${age}s)`);
                });
            }
        }, 5000); // Every 5 seconds
        
        // Periodically add new contacts with enhanced logging
        const contactGenerationInterval = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            const randomChance = Math.random();
            console.log(`🎲 Contact generation check at ${currentTime}: Random=${randomChance.toFixed(3)}, Contacts=${contacts.length}/${MAX_CONTACTS}`);
            
            if (randomChance < 0.7 && contacts.length < MAX_CONTACTS) {
                console.log(`🎯 Triggering automatic contact creation...`);
                const newContact = createContact();
                if (newContact) {
                    console.log(`✅ Automatic contact successfully created: ${newContact.id}`);
                } else {
                    console.log(`❌ Failed to create automatic contact`);
                }
            } else {
                if (contacts.length >= MAX_CONTACTS) {
                    console.log(`⏸️ Skipping contact creation - Maximum contacts reached`);
                } else {
                    console.log(`⏸️ Skipping contact creation - Random chance not met (needed < 0.7)`);
                }
            }
        }, 3000); // Every 3 seconds
        
        // Enhanced contact cleanup system
        setInterval(() => {
            const now = performance.now();
            const beforeCleanup = contacts.length;
            
            const oldContacts = contacts.filter(c => !c.revealed && (now - c.createdAt) > 20000);
            console.log(`🧹 Cleanup check: Found ${oldContacts.length} old contacts to remove`);
            
            oldContacts.forEach(c => {
                console.log(`🗑️ Removing old undetected contact: ${c.id} (age: ${((now - c.createdAt) / 1000).toFixed(1)}s)`);
                removeContact(c.id);
            });
            
            const afterCleanup = contacts.length;
            if (beforeCleanup !== afterCleanup) {
                console.log(`📊 Cleanup complete: ${beforeCleanup} → ${afterCleanup} contacts`);
            }
        }, 8000); // Every 8 seconds
    }
    
    // Initialize after brief delay
    setTimeout(startRadarSystem, 500);
}

// Inject radar status styles
const radarStyleSheet = document.createElement('style');
radarStyleSheet.textContent = '';
document.head.appendChild(radarStyleSheet);

function initTacticalEffects() {
    // Add glitch effect to random elements occasionally
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.hero-title, .section-header h2');
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        
        if (randomElement && Math.random() < 0.3) {
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = 'glitch 0.5s ease-in-out';
            }, 50);
        }
    }, 10000);
    
    // Add typing effect to hero subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        typeWriter(subtitle, subtitle.textContent, 100);
    }
}

function typeWriter(element, text, speed) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 2000); // Start after loading
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observe elements for animations
document.querySelectorAll('.project-card, .timeline-item, .skill-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for additional animations
const additionalStyles = `
    .profile-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .profile-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text-secondary);
    }
    
    .profile-item i {
        color: var(--primary-color);
        width: 20px;
    }
    
    .profile-summary {
        margin-top: 2rem;
    }
    
    .profile-summary h4 {
        color: var(--primary-color);
        font-family: var(--font-primary);
        margin-bottom: 1rem;
    }
    
    .achievement-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: var(--bg-tertiary);
        border-radius: 10px;
        border-left: 3px solid var(--primary-color);
    }
    
    .achievement-icon {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
    
    .achievement-content h5 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }
    
    .achievement-content p {
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
    
    .achievement-metric {
        color: var(--accent-color);
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .project-impact {
        margin-bottom: 1rem;
        color: var(--text-secondary);
    }
    
    .project-impact strong {
        color: var(--primary-color);
    }
    
    .job-technologies {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .project-card.visible,
    .timeline-item.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 2rem;
            border-top: 1px solid var(--border-color);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;

// Inject additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);
