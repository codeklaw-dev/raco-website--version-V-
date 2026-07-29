const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");

if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header" data-header>
      <a class="brand" href="/" aria-label="RACO AI home">
        <img class="brand-logo" src="/assets/raco-wordmark.svg?v=20260727a" alt="RACO AI" />
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <details class="nav-group">
          <summary>Expertise <span>⌄</span></summary>
          <div class="mega-menu mega-expertise">
            <div class="mega-intro"><span>01 / EXPERTISE</span><h2>Engineering depth.<br />Intelligence built in.</h2><a href="/expertise/">View expertise <b>↗</b></a></div>
            <div class="mega-column"><p>Engineering</p><a href="/expertise/bespoke-software/">Bespoke software</a><a href="/expertise/product-development/">SaaS &amp; product development</a><a href="/expertise/web-mobile/">Web &amp; mobile applications</a><a href="/expertise/cloud-modernisation/">Cloud &amp; modernisation</a><a href="/expertise/qa-devops/">QA &amp; DevOps</a></div>
            <div class="mega-column"><p>AI &amp; data</p><a href="/expertise/ai-transformation/">AI transformation</a><a href="/expertise/private-ai-rag/">Private AI &amp; RAG</a><a href="/expertise/agent-development/">Agent development</a><a href="/expertise/voice-computer-vision/">Voice &amp; computer vision</a><a href="/expertise/data-engineering/">Data engineering</a></div>
            <div class="mega-column"><p>Business solutions</p><a href="/engagement-models/enterprise-delivery/">Enterprise delivery</a><a href="/engagement-models/startup-product-teams/">Startup product teams</a><a href="/engagement-models/dedicated-engineering/">Dedicated engineering pods</a><a href="/engagement-models/managed-ai/">Managed AI operations</a><a href="/roi/">Workflow ROI estimator</a></div>
            <div class="mega-column"><p>Explore</p><a href="/software-development/">All engineering services</a><a href="/solutions/ai/">All AI services</a><a href="/engagement-models/">All engagement models</a><a href="/work/">Selected work</a><a href="/contact/">Start a conversation</a></div>
          </div>
        </details>
        <details class="nav-group">
          <summary>Industries <span>⌄</span></summary>
          <div class="mega-menu mega-industries">
            <div class="mega-intro"><span>02 / INDUSTRIES</span><h2>Technology shaped by<br />operating context.</h2><a href="/industries/">View industries <b>↗</b></a></div>
            <div class="mega-industry-links"><a href="/industries/healthcare/">Healthcare</a><a href="/industries/legal/">Legal</a><a href="/industries/financial-services/">Financial services</a><a href="/industries/manufacturing/">Manufacturing</a><a href="/industries/retail-ecommerce/">Retail &amp; ecommerce</a><a href="/industries/logistics/">Logistics</a><a href="/industries/real-estate/">Real estate</a><a href="/industries/hospitality/">Hospitality</a><a href="/industries/education/">Education</a><a href="/industries/construction/">Construction</a></div>
            <div class="mega-feature"><img src="/assets/raco-industrial-ai.jpg" alt="Engineers operating an intelligent inspection line" /><p>Applied industrial AI</p><span>Software intelligence in the physical world.</span></div>
          </div>
        </details>
        <a href="/engagement-models/">How we work</a>
        <a href="/work/">Work</a>
        <a href="/raco-lab/">RACO Lab ↗</a>
        <a href="/company/">Company</a>
      </nav>
      <a class="header-cta" href="/contact/">Start a project <span>↗</span></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><span></span><span></span><span class="sr-only">Open menu</span></button>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Primary navigation menu">
        <div class="nav-drawer-intro"><span>01 / NAVIGATION</span><h2>Engineering depth.<br /><em>Intelligence built in.</em></h2><p>Software delivery and private AI, connected through one accountable partner.</p><a class="nav-drawer-primary" href="/contact/">Start a project</a><div class="nav-drawer-theme"><span>Appearance</span><button class="theme-toggle" type="button" aria-label="Switch colour theme" role="switch" aria-checked="false"><span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label">Theme</span></button></div></div>
        <div class="nav-drawer-column"><p>Expertise</p><a href="/expertise/">All expertise</a><a href="/software-development/">Software engineering</a><a href="/solutions/ai/">AI &amp; data solutions</a><a href="/expertise/private-ai-rag/">Private AI &amp; RAG</a><a href="/expertise/agent-development/">Agent development</a></div>
        <div class="nav-drawer-column"><p>Explore</p><a href="/industries/">Industries</a><a href="/engagement-models/">How we work</a><a href="/work/">Selected work</a><a href="/company/">Company</a><a href="/raco-lab/">RACO Lab ↗</a></div>
        <a class="nav-drawer-feature" href="/industries/manufacturing/"><img src="/assets/raco-industrial-ai.jpg" alt="Engineers operating an intelligent inspection line" /><span>Applied intelligence / Featured</span><strong>From software to the physical world.</strong><i>Explore the work ↗</i></a>
      </nav>
    </header>`;
}

if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="site-footer">
      <div class="footer-hero"><div><p>One partner. End to end.</p><h2>Build the next<br /><em>serious thing.</em></h2></div><a class="footer-project-link" href="/contact/">Start a project <span>↗</span></a></div>
      <div class="footer-directory">
        <div><span>Company</span><a href="/company/">About RACO</a><a href="/work/">Selected work</a><a href="/insights/">Insights</a><a href="/contact/">Contact</a></div>
        <div><span>RACO network</span><a href="/#products">RACO app</a><a href="/raco-lab/">RACO Labs ↗</a><a href="/investors/">Investor hub</a><a href="/control-panel/">Team control panel ↗</a></div>
        <div><span>Expertise</span><a href="/software-development/">Software engineering</a><a href="/solutions/ai/">Private AI &amp; data</a><a href="/engagement-models/">Delivery models</a><a href="/industries/">Industries</a></div>
        <div><span>Join &amp; connect</span><a href="https://racoai.io/careers" target="_blank" rel="noreferrer">Careers portal ↗</a><a href="mailto:hello@racoai.io">hello@racoai.io</a><a href="/contact/">Book a discovery call</a><a href="/roi/">Workflow ROI estimator</a></div>
      </div>
      <div class="footer-hqs" aria-label="RACO engineering headquarters">
        <a class="footer-hq" href="https://www.google.com/maps/search/?api=1&amp;query=Beacon+Tower+Bristol+BS1+4XE" target="_blank" rel="noreferrer"><span>HQ 01 / United Kingdom</span><strong>Bristol</strong><p>Beacon Tower · Bristol City Centre<br />Bristol BS1 4XE</p><i>Open in Google Maps ↗</i></a>
        <a class="footer-hq" href="https://www.google.com/maps/search/?api=1&amp;query=House+40+Shahjalal+Avenue+Dhaka+Bangladesh" target="_blank" rel="noreferrer"><span>HQ 02 / Bangladesh</span><strong>Dhaka</strong><p>House 40 · Shahjalal Avenue<br />Dhaka, Bangladesh</p><i>Open in Google Maps ↗</i></a>
      </div>
      <div class="footer-trust"><span>Client-owned delivery</span><span>Private AI by design</span><span>Human oversight</span><span>Bristol ↔ Dhaka</span></div>
      <div class="footer-bottom"><span>© 2026 RACO AI Technologies Ltd</span><div><a href="/privacy/">Privacy</a><a href="/contact/">Contact</a><a href="#top">Back to top ↑</a></div></div>
    </footer>`;
}
