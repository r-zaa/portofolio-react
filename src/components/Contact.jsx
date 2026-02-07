import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion as Motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";


export default function ContactCinematic() {
    const { t } = useLanguage();
    return (
        <section id="contact" className="contact-cinematic">
            <Motion.div
                className="glow-bg"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <Motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {t.contact.title}
            </Motion.h3>

            <div className="divider" />
            <div className="contact-icons-wrapper">
                <a href="mailto:mfahreza889@gmail.com" className="icon-item">
                    <FiMail />
                    <span className="tooltip">Email</span>
                </a>

                <a href="https://github.com/r-zaa" className="icon-item">
                    <FiGithub />
                    <span className="tooltip">GitHub</span>
                </a>

                <a href="https://linkedin.com/in/muhammad-fahreza-841552318/" className="icon-item">
                    <FiLinkedin />
                    <span className="tooltip">LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
