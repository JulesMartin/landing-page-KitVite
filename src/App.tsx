import { useState } from "react";
import "./App.css";
import { InteractiveCircle } from "./InteractiveCircle";

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">KitVite</span>
            </div>
            <nav className="nav">
              <a href="#features">Fonctionnalités</a>
              <a href="#how-it-works">Comment ça marche ?</a>
              <a href="#pricing">Abonnement</a>
            </nav>
            <button className="btn btn-primary">Télécharger</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <InteractiveCircle />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Plus de 50 leçons gratuites</div>
            <h1 className="hero-title">
              Créez votre première
              <br />
              application mobile
              <span className="gradient-text"> sans coder</span>
            </h1>
            <p className="hero-description">
              Publiez votre première application en quelques semaines seulement.
              Aucune expérience requise. Grâce aux avancées de l'IA, vous pouvez
              publier des applications sans écrire une seule ligne de code.
            </p>
            <div className="hero-cta">
              <button className="btn btn-large btn-primary">
                Commencer gratuitement →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi choisir KitVite ?</h2>
            <p className="section-description">Laissez-vous guider</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">De A à Z</h3>
              <p className="feature-description">
                Vous serez accompagnés de la création de votre premier fichier
                jusqu'à la publication de l'application sur le store
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3 className="feature-title">Pour débutants</h3>
              <p className="feature-description">
                Aucune expérience requise. Même vos grands-parents sauront créer
                leurs propres applications
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Projets réels</h3>
              <p className="feature-description">
                Créez de vraies applications que vous pouvez publier et
                monétiser, tout ça sans coder une ligne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Carousel Section */}
      <section className="screenshots-carousel">
        <div className="carousel-container">
          <div className="carousel-column carousel-column-down">
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen1.jpg"
                alt="Screenshot 1"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen5.jpg"
                alt="Screenshot 2"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen3.jpg"
                alt="Screenshot 3"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen1.jpg"
                alt="Screenshot 1"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen5.jpg"
                alt="Screenshot 2"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen3.jpg"
                alt="Screenshot 3"
              />
            </div>
          </div>
          <div className="carousel-column carousel-column-up">
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen4.jpg"
                alt="Screenshot 4"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen5.jpg"
                alt="Screenshot 5"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen6.jpg"
                alt="Screenshot 6"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen4.jpg"
                alt="Screenshot 4"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen5.jpg"
                alt="Screenshot 5"
              />
            </div>
            <div className="screenshot-item">
              <img
                src="src\assets\screenshots_app\screen6.jpg"
                alt="Screenshot 6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="lessons">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              50 leçons disponibles gratuitement
            </h2>
            <p className="section-description">
              Apprenez à programmer sans coder
            </p>
          </div>
          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-number">01</div>
              <h3 className="lesson-title">Vocabulaire</h3>
              <p className="lesson-description">
                Découvrez le vocabulaire utilisé en programmation afin de
                comprendre ce que vous faites
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 25 min</span>
                <span className="lesson-level">Débutant</span>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">02</div>
              <h3 className="lesson-title">Utilisation de l'IA</h3>
              <p className="lesson-description">
                Apprenez à utiliser l'IA pour vos différentes tâches en
                programmation
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 35 min</span>
                <span className="lesson-level">Débutant</span>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">03</div>
              <h3 className="lesson-title">
                Installation de votre environnement
              </h3>
              <p className="lesson-description">
                Installez les outils nécessaires à la création de votre première
                application
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 90 min</span>
                <span className="lesson-level">Débutant</span>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">04</div>
              <h3 className="lesson-title">Gestion de projet digital</h3>
              <p className="lesson-description">
                Apprenez les bases de la gestion d'un projet d'application
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 35 min</span>
                <span className="lesson-level">Débutant</span>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">05</div>
              <h3 className="lesson-title">Fondation d'une application</h3>
              <p className="lesson-description">
                Apprenez à comprendre comment une application fonctionne
                réellement
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 50 min</span>
                <span className="lesson-level">Intermédiaire</span>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">06</div>
              <h3 className="lesson-title">Design UI</h3>
              <p className="lesson-description">
                Créez votre premier design d'interface d'application
              </p>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱ 120 min</span>
                <span className="lesson-level">Intermédiaire</span>
              </div>
            </div>
          </div>
          <div className="lessons-cta">
            <p className="lessons-note">+ 59 autres leçons</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-description">
              3 étapes simples pour développer votre première application
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Téléchargez l'app</h3>
                <p className="step-description">
                  Installez KitVite gratuitement depuis le Play Store et créez
                  votre compte
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Générez votre code avec l'IA</h3>
                <p className="step-description">
                  Apprenez comment utiliser des outils IA qui codent à votre
                  place
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Créez et publiez</h3>
                <p className="step-description">
                  Suivez les étapes et publiez votre première application sur le
                  Play Store et l'App Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choisissez votre plan</h2>
            <p className="section-description">
              Commencez gratuitement, évoluez quand vous êtes prêt
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Gratuit</h3>
                <div className="pricing-price">
                  <span className="price-amount">0€</span>
                  <span className="price-period">/mois</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ 10 leçons disponibles dès votre arrivée</li>
                <li>✓ 1 nouvelle leçon toutes les 12h</li>
                <li>✓ 40 leçons débloquables avec le temps</li>
                <li>✗ 15 leçons non-disponibles</li>
                <li>✗ Suivez seulement les cours dans l'ordre pré-défini</li>
                <li>
                  ✗ Pas d'accès à la communauté d'entraide ni au contenu
                  exclusif
                </li>
              </ul>
              <button className="btn btn-outline">
                Commencer gratuitement
              </button>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Version complète</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <div className="pricing-price">
                  <span className="price-amount">11€</span>
                  <span className="price-period">/mois</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Tous les cours disponibles immédiatement</li>
                <li>✓ Suivez les cours dans l'ordre que vous préférez</li>
                <li>✓ Accès à la communauté d'entraide</li>
                <li>✓ Accès au contenu exclusif dans le chat d'entraide</li>
              </ul>
              <button className="btn btn-primary">Je m'inscris</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-description">Encore un doute ?</p>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <button
                className={`faq-question ${openFAQ === 0 ? "active" : ""}`}
                onClick={() => toggleFAQ(0)}
              >
                <span>
                  Je suis nul en informatique, ça ne va pas être trop dur pour
                  moi ?
                </span>
                <span className="faq-icon">{openFAQ === 0 ? "−" : "+"}</span>
              </button>
              {openFAQ === 0 && (
                <div className="faq-answer">
                  Absolument pas ! KitVite est conçu spécifiquement pour les
                  personnes sans aucune expérience en programmation. Nous
                  reprenons à la base de la base afin que cela soit accessible
                  pour tout le monde, même des personnes qui n'ont pas la fibre
                  informatique.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFAQ === 1 ? "active" : ""}`}
                onClick={() => toggleFAQ(1)}
              >
                <span>
                  Apprendre à coder ne m'intéresse pas, je n'aime pas ça !
                </span>
                <span className="faq-icon">{openFAQ === 1 ? "−" : "+"}</span>
              </button>
              {openFAQ === 1 && (
                <div className="faq-answer">
                  Ça tombe très bien, le but içi n'est pas d'apprendre à coder
                  mais d'utiliser les nouveaux outils IA qui font le travail à
                  votre place!
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFAQ === 2 ? "active" : ""}`}
                onClick={() => toggleFAQ(2)}
              >
                <span>
                  Vais-je apprendre à publier mes applications sur le Play Store
                  ou l'App Store ?
                </span>
                <span className="faq-icon">{openFAQ === 2 ? "−" : "+"}</span>
              </button>
              {openFAQ === 2 && (
                <div className="faq-answer">
                  Oui ! Nous vous guidons dans tout le processus de publication,
                  de la création de votre compte développeur à la mise en ligne
                  de votre application.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFAQ === 3 ? "active" : ""}`}
                onClick={() => toggleFAQ(3)}
              >
                <span>
                  Combien de temps ça prend d'apprendre à créer une application?
                </span>
                <span className="faq-icon">{openFAQ === 3 ? "−" : "+"}</span>
              </button>
              {openFAQ === 3 && (
                <div className="faq-answer">
                  Cela dépend du temps que vous y consacrez mais créer une
                  première application fonctionnelle peut prendre littéralement
                  quelques jours si celle-ci a des fonctionnalités très
                  basiques. En moyenne, quelques semaines seront nécessaires si
                  vous partez de 0.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à créer votre première app ?</h2>
            <p className="cta-description">
              Publiez votre première application en quelques semaines seulement
              !
            </p>
            <div className="cta-buttons">
              <button className="btn btn-large btn-white">
                Commencer gratuitement
              </button>
              <div className="cta-badge">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">KitVite</span>
              </div>
              <p className="footer-description">
                Transformez vos idées en applications avec l'aide de l'IA
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  LinkedIn
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Produit</h4>
              <a href="#" className="footer-link">
                Fonctionnalités
              </a>
              <a href="#" className="footer-link">
                Abonnement
              </a>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Entreprise</h4>
              <a href="#" className="footer-link">
                À propos
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Légal</h4>
              <a href="#" className="footer-link">
                Confidentialité
              </a>
              <a href="#" className="footer-link">
                Conditions
              </a>
              <a href="#" className="footer-link">
                Cookies
              </a>
              <a href="#" className="footer-link">
                Licences
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 KitVite. Tous droits réservés.</p>
            <p>contact@kitvite.app</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
