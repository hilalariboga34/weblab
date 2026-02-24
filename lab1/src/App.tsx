function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <div className="page">
        <header className="site-header">
          <div className="container header-content">
            <div>
              <p className="lab-label">Web Tasarımı ve Programlama · LAB-2</p>
              <h1 className="site-title">Hilal Gül Arıboğa</h1>
              <p className="site-subtitle">Frontend geliştirici adayı</p>

              <dl className="student-info" aria-label="Öğrenci bilgileri">
                <div>
                  <dt>Öğrenci No</dt>
                  <dd>235542007</dd>
                </div>
              </dl>
            </div>

            <figure className="profile-figure">
              <img
                src="https://via.placeholder.com/160x160.png?text=Hilal"
                alt="Hilal Gül Arıboğa için profil illüstrasyonu"
                className="profile-image"
              />
              <figcaption className="profile-caption">
                Web tasarımı ve programlama öğrencisi
              </figcaption>
            </figure>
          </div>

          <nav className="site-nav" aria-label="Ana navigasyon">
            <div className="container">
              <ul>
                <li>
                  <a href="#about">Hakkımda</a>
                </li>
                <li>
                  <a href="#projects">Projeler</a>
                </li>
                <li>
                  <a href="#contact">İletişim</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main id="main-content" className="site-main">
          <section
            id="about"
            className="section"
            aria-labelledby="about-heading"
          >
            <div className="container">
              <h2 id="about-heading">Hakkımda</h2>
              <p>
                Merhaba! Ben Hilal Gül Arıboğa. Web Tasarımı ve Programlama
                dersi kapsamında modern, erişilebilir ve semantik web
                arayüzleri geliştirmeye odaklanıyorum.
              </p>

              <p>
                Özellikle HTML5 semantik etiketleri, CSS ile duyarlı (responsive)
                tasarım ve React ile bileşen tabanlı geliştirme konularına
                ilgi duyuyorum.
              </p>

              <ul className="about-list">
                <li>Semantik HTML5 ve erişilebilirlik (a11y)</li>
                <li>Temel React ve bileşen yapısı</li>
                <li>Git ve GitHub ile sürüm kontrolü</li>
              </ul>
            </div>
          </section>

          <section
            id="projects"
            className="section section-alt"
            aria-labelledby="projects-heading"
          >
            <div className="container">
              <h2 id="projects-heading">Projeler</h2>

              <article className="project-card">
                <header>
                  <h3>LAB-1: İlk React Uygulaması</h3>
                </header>
                <p>
                  Vite ve React kullanarak temel bir proje yapısı oluşturdum,
                  geliştirme ortamını kurdum ve Git iş akışını öğrendim.
                </p>
                <p className="project-meta">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">Git</span>
                </p>
              </article>

              <article className="project-card">
                <header>
                  <h3>LAB-2: Semantik Portföy Sayfası</h3>
                </header>
                <p>
                  Bu sayfa, semantik HTML5, erişilebilirlik ilkeleri ve form
                  doğrulama pratiklerini birleştiren kişisel bir portföy
                  uygulamasıdır.
                </p>
                <p className="project-meta">
                  <span className="project-tag">Semantik HTML</span>
                  <span className="project-tag">Erişilebilirlik</span>
                  <span className="project-tag">Formlar</span>
                </p>
              </article>
            </div>
          </section>

          <section
            id="contact"
            className="section"
            aria-labelledby="contact-heading"
          >
            <div className="container">
              <h2 id="contact-heading">İletişim</h2>
              <p>
                Benimle iletişime geçmek için aşağıdaki formu doldurabilirsin.
                Tüm alanlar zorunludur ve klavye ile de rahatça doldurulabilir.
              </p>

              <form
                className="contact-form"
                noValidate
                aria-describedby="contact-form-help"
              >
                <p id="contact-form-help" className="form-help">
                  Formu göndermeden önce lütfen bilgilerini kontrol et. Hata
                  olması durumunda ilgili alanın altında uyarı mesajı
                  görünecektir.
                </p>

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={3}
                      aria-describedby="name-error"
                    />
                    <small
                      id="name-error"
                      className="error-message"
                      role="alert"
                    >
                      Lütfen en az 3 karakter uzunluğunda bir ad girin.
                    </small>
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">E-posta</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-describedby="email-error"
                    />
                    <small
                      id="email-error"
                      className="error-message"
                      role="alert"
                    >
                      Geçerli bir e-posta adresi girin (ornegin:
                      ornek@mail.com).
                    </small>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="topic">Konu</label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    aria-describedby="topic-error"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bir konu seçin
                    </option>
                    <option value="lab">LAB çalışmaları hakkında</option>
                    <option value="frontend">Frontend geliştirme</option>
                    <option value="other">Diğer</option>
                  </select>
                  <small
                    id="topic-error"
                    className="error-message"
                    role="alert"
                  >
                    Lütfen bir konu seçin.
                  </small>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    aria-describedby="message-error"
                  />
                  <small
                    id="message-error"
                    className="error-message"
                    role="alert"
                  >
                    Lütfen en az 10 karakter uzunluğunda bir mesaj yazın.
                  </small>
                </div>

                <button type="submit" className="submit-button">
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container">
            <p>
              © {currentYear} Hilal Gül Arıboğa · Web Tasarımı ve Programlama
              LAB-2
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;