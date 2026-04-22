<template>
    <div class="footer-container">
        <div class="container">
            <!-- Header Section -->
            <div class="footer-header fade-in-down">
                <div class="header-content">
                    <h3 class="header-title">Let's Connect Here</h3>
                    <p class="header-subtitle">I'd love to hear from you. Let's build something amazing together!</p>
                </div>
                <a href="mailto:sanrdushimimana@gmail.com" class="cta-button">
                    <span>Get in Touch</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>

            <!-- Main Grid -->
            <div class="footer-grid fade-in-up">
                <!-- About Section -->
                <div class="footer-section">
                    <div class="section-content">
                        <img src="@/assets/images/logo.png" class="footer-logo" alt="Logo">
                        <p class="section-text">Thanks for checking out my portfolio! I'm passionate about creating
                            innovative solutions and would love to connect with you.</p>
                        <p class="section-label">Find me on social media:</p>
                        <div class="social-links">
                            <a href="https://www.instagram.com/d_bs02/" target="_blank" rel="noopener noreferrer"
                                class="social-icon" title="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/b-sandrine" target="_blank" rel="noopener noreferrer"
                                class="social-icon" title="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dushimimana-sandrine-219b891b9/" target="_blank"
                                rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/sanrdushimimana" target="_blank" rel="noopener noreferrer"
                                class="social-icon" title="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Navigation Section -->
                <div class="footer-section">
                    <h4 class="section-heading">Navigation</h4>
                    <ul class="nav-list">
                        <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
                        <li><a href="#skills"><i class="fas fa-briefcase"></i> Services</a></li>
                        <li><a href="#projects"><i class="fas fa-folder"></i> Projects</a></li>
                        <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
                    </ul>
                </div>

                <!-- Contact Section -->
                <div class="footer-section">
                    <h4 class="section-heading">Contact Info</h4>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+250791646583">+250 791 646 583</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:sanrdushimimana@gmail.com">sanrdushimimana@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Kigali, Rwanda</span>
                        </div>
                    </div>
                </div>

                <!-- Newsletter Section -->
                <div class="footer-section">
                    <h4 class="section-heading">Stay Updated</h4>
                    <p class="section-text">Subscribe to get the latest information and updates</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Enter your email" class="newsletter-input"
                            aria-label="Email address">
                        <button class="newsletter-button" aria-label="Subscribe">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom fade-in-up">
                <p class="copyright">
                    <i class="fas fa-copyright"></i> 2025 Sandrine Dushimimana. All Rights Reserved.
                </p>
                <p class="footer-credit">Made with <i class="fas fa-heart"></i> using Vue & TypeScript</p>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="footer-decoration"></div>
    </div>
</template>

<style scoped>
.footer-container {
    background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary-active) 100%);
    border-top: 2px solid var(--color-primary);
    margin-top: 80px;
    padding: 60px 40px;
    position: relative;
    overflow: hidden;
}

.footer-container::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.05;
    border-radius: 50%;
}

.footer-container::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.05;
    border-radius: 50%;
}

.container {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
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
.footer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    margin-bottom: 40px;
    border-bottom: 2px solid rgba(249, 115, 22, 0.2);
    gap: 30px;
}

.header-content {
    flex: 1;
}

.header-title {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.header-subtitle {
    font-size: 1.1rem;
    color: var(--color-text-secondary-active);
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
    white-space: nowrap;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(249, 115, 22, 0.4);
}

.cta-button:hover i {
    transform: translateX(3px);
}

.cta-button i {
    transition: transform 0.3s ease;
}

/* Main Grid */
.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section {
    animation-delay: 0.2s;
}

.section-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.footer-logo {
    width: 120px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.footer-logo:hover {
    transform: scale(1.05);
}

.section-text {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary-active);
}

.section-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text);
    margin-top: 10px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(249, 115, 22, 0.1);
    color: var(--color-primary);
    border-radius: 50%;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
}

/* Section Styling */
.section-heading {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.nav-list li a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-text-secondary-active);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.nav-list li a:hover {
    color: var(--color-primary);
    transform: translateX(5px);
}

.nav-list li a i {
    font-size: 1.1rem;
}

/* Contact Info */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
}

.contact-item i {
    color: var(--color-primary);
    font-size: 1.2rem;
    width: 25px;
}

.contact-item a {
    color: var(--color-text-secondary-active);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: var(--color-primary);
}

.contact-item span {
    color: var(--color-text-secondary-active);
}

/* Newsletter */
.newsletter-form {
    display: flex;
    gap: 8px;
    margin-top: 15px;
}

.newsletter-input {
    flex: 1;
    padding: 12px 16px;
    background: var(--color-bg);
    border: 2px solid rgba(249, 115, 22, 0.2);
    border-radius: 8px;
    color: var(--color-text);
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.newsletter-input:focus {
    outline: none;
    border-color: var(--color-primary);
    background: var(--color-bg);
}

.newsletter-input::placeholder {
    color: var(--color-text-secondary);
}

.newsletter-button {
    padding: 12px 16px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: var(--color-white);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
}

/* Footer Bottom */
.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 2px solid rgba(249, 115, 22, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.copyright {
    font-size: 0.9rem;
    color: var(--color-text-secondary-active);
    display: flex;
    justify-content: center;
    gap: 5px;
}

.footer-credit {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.footer-credit i {
    color: var(--color-primary);
}

/* Responsive */
@media (max-width: 1024px) {
    .footer-header {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .header-title {
        font-size: 2rem;
    }

    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .footer-container {
        margin-top: 40px;
        padding: 40px 20px;
    }

    .footer-header {
        border-bottom: none;
        margin-bottom: 30px;
    }

    .header-title {
        font-size: 1.8rem;
    }

    .header-subtitle {
        font-size: 1rem;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 0.95rem;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .footer-logo {
        width: 100px;
    }

    .newsletter-form {
        flex-direction: column;
    }

    .newsletter-input,
    .newsletter-button {
        width: 100%;
    }

    .footer-bottom {
        gap: 8px;
    }
}
</style>