<template>
    <div class="hire-me-container">
        <div class="container py-16">
            <!-- Header -->
            <div class="header-section fade-in-down">
                <h3 class="section-title">Why Hire Me?</h3>
                <p class="section-subtitle">Your Success is My Priority</p>
            </div>

            <!-- Highlights Grid -->
            <div class="highlights-grid fade-in-up">
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h4>Full-Stack Expertise</h4>
                    <p>Frontend, backend, mobile, and AI all in one package</p>
                </div>
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h4>Quick & Effective</h4>
                    <p>I deliver solutions fast without compromising quality</p>
                </div>
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h4>Latest Technologies</h4>
                    <p>Always using cutting-edge tools and frameworks</p>
                </div>
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h4>Collaborative</h4>
                    <p>I work closely with you to achieve your business goals</p>
                </div>
            </div>

            <!-- Description -->
            <div class="description-section fade-in-up">
                <p>From frontend to backend, and everything in between—mobile apps and AI models included—I bring a rich
                    mix
                    of full-stack and cross-domain expertise to your project. I approach every challenge with a unique
                    blend
                    of creativity and logic, ensuring that I deliver quick and effective solutions. I stay on top of the
                    latest trends and technologies, so your product always feels fresh and competitive. Whether it's
                    about
                    code quality or project flow, I focus on clarity, maintainability, and hitting deadlines. I don't
                    just
                    build software; I collaborate with you to reach your business goals through efficient, scalable, and
                    user-friendly solutions.</p>
            </div>

            <!-- CTA Section -->
            <div class="cta-section fade-in-up">
                <a href="mailto:sanrdushimimana@gmail.com" class="cta-button">
                    <span>Start a Project</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
                <p class="cta-subtitle">Let's build something amazing together</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hire-me-container {
    background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary-active) 100%);
    border-radius: 20px;
    margin: 70px 0 0;
    padding: 60px 40px;
    position: relative;
    overflow: hidden;
}

.hire-me-container::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.1;
    border-radius: 50%;
}

.hire-me-container::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.1;
    border-radius: 50%;
}

.container {
    position: relative;
    z-index: 2;
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-down {
    animation: fadeInDown 0.8s ease-out;
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* Header Section */
.header-section {
    text-align: center;
    margin-bottom: 50px;
}

.section-title {
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.section-subtitle {
    font-size: 1.3rem;
    color: var(--color-text-secondary-active);
    letter-spacing: 1px;
}

/* Highlights Grid */
.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin: 50px 0;
}

.highlight-card {
    background: var(--color-bg);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.highlight-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.highlight-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(249, 115, 22, 0.15);
}

.highlight-card:hover::before {
    transform: scaleX(1);
}

.highlight-icon {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: rgba(249, 115, 22, 0.1);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 80px;
}

.highlight-card h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 15px 0;
}

.highlight-card p {
    font-size: 0.95rem;
    color: var(--color-text-secondary-active);
    line-height: 1.6;
}

/* Description Section */
.description-section {
    background: rgba(249, 115, 22, 0.05);
    padding: 30px;
    border-radius: 15px;
    border-left: 4px solid var(--color-primary);
    margin: 40px 0;
}

.description-section p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-secondary-active);
}

/* CTA Section */
.cta-section {
    text-align: center;
    margin-top: 50px;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 40px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
    border: none;
    cursor: pointer;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(249, 115, 22, 0.4);
}

.cta-button:hover i {
    transform: translateX(5px);
}

.cta-button i {
    transition: transform 0.3s ease;
}

.cta-subtitle {
    margin-top: 15px;
    font-size: 1rem;
    color: var(--color-text-secondary-active);
    font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
    .hire-me-container {
        margin: 20px 0;
        padding: 40px 20px;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1.1rem;
    }

    .highlights-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        margin: 30px 0;
    }

    .description-section {
        padding: 20px;
    }

    .description-section p {
        font-size: 0.95rem;
    }
}
</style>