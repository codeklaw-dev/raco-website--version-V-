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
          <summary>Offers <span>⌄</span></summary>
          <div class="mega-menu mega-expertise">
            <div class="mega-intro"><span>01 / TWO WAYS TO START</span><h2>Choose the outcome.<br />We shape the system.</h2><a href="/contact/">Book a free session <b>↗</b></a></div>
            <div class="mega-column"><p>Build a business system</p><a href="/business-systems-launch/">The Business Systems Launch</a><a href="/contact/?interest=systems-audit">Free systems audit</a><a href="/expertise/bespoke-software/">Bespoke software expertise</a><a href="/software-development/">Engineering capabilities</a></div>
            <div class="mega-column"><p>Automate a workflow</p><a href="/ai-automation-pilot/">The AI Automation Pilot</a><a href="/contact/?interest=ai-discovery">Free AI discovery session</a><a href="/expertise/agent-development/">Agent development expertise</a><a href="/solutions/ai/">AI capabilities</a></div>
            <div class="mega-column"><p>What follows</p><a href="/engagement-models/enterprise-delivery/">Production rollout</a><a href="/engagement-models/dedicated-engineering/">Dedicated engineering</a><a href="/engagement-models/managed-ai/">Managed AI operations</a><a href="/work/">Illustrative work</a></div>
            <div class="mega-column"><p>Explore</p><a href="/expertise/">All expertise</a><a href="/industries/manufacturing/">Manufacturing</a><a href="/industries/education/">Education</a><a href="/engagement-models/">How we work</a><a href="/contact/">Talk to RACO</a></div>
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
      <a class="header-cta" href="/contact/">Book a free session <span>↗</span></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><span></span><span></span><span class="sr-only">Open menu</span></button>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Primary navigation menu">
        <div class="nav-drawer-intro"><span>01 / NAVIGATION</span><h2>Two offers.<br /><em>One accountable team.</em></h2><p>Build a critical business system or automate one valuable workflow with AI.</p><a class="nav-drawer-primary" href="/contact/">Book a free session</a><div class="nav-drawer-theme"><span>Appearance</span><button class="theme-toggle" type="button" aria-label="Switch colour theme" role="switch" aria-checked="false"><span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label">Theme</span></button></div></div>
        <div class="nav-drawer-column"><p>Offers</p><a href="/business-systems-launch/">Business Systems Launch</a><a href="/ai-automation-pilot/">AI Automation Pilot</a><a href="/contact/?interest=systems-audit">Free systems audit</a><a href="/contact/?interest=ai-discovery">Free AI discovery</a><a href="/expertise/">All expertise</a></div>
        <div class="nav-drawer-column"><p>Explore</p><a href="/industries/">Industries</a><a href="/engagement-models/">How we work</a><a href="/work/">Selected work</a><a href="/company/">Company</a><a href="/raco-lab/">RACO Lab ↗</a></div>
        <a class="nav-drawer-feature" href="/industries/manufacturing/"><img src="/assets/raco-industrial-ai.jpg" alt="Engineers operating an intelligent inspection line" /><span>Applied intelligence / Featured</span><strong>From software to the physical world.</strong><i>Explore the work ↗</i></a>
      </nav>
    </header>`;
}

if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="site-footer">
      <div class="footer-hero"><div><p>One partner. End to end.</p><h2>Bring the workflow.<br /><em>Start free.</em></h2></div><a class="footer-project-link" href="/contact/">Book a free session <span>↗</span></a></div>
      <div class="footer-directory">
        <div><span>Company</span><a href="/company/">About RACO</a><a href="/work/">Selected work</a><a href="/insights/">Insights</a><a href="/contact/">Contact</a></div>
        <div><span>RACO network</span><a href="/contact/?interest=ai-discovery">RACO app enquiries</a><a href="/raco-lab/">RACO Labs ↗</a><a href="/investors/">Investor hub</a><a href="/control-panel/">Team control panel ↗</a></div>
        <div><span>Offers</span><a href="/business-systems-launch/">Business Systems Launch</a><a href="/ai-automation-pilot/">AI Automation Pilot</a><a href="/contact/?interest=systems-audit">Free systems audit</a><a href="/engagement-models/">Delivery models</a></div>
        <div><span>Join &amp; connect</span><a href="https://racoai.io/careers" target="_blank" rel="noreferrer">Careers portal ↗</a><a href="mailto:hello@racoai.io">hello@racoai.io</a><a href="/contact/">Free discovery session</a><a href="/roi/">Workflow ROI estimator</a></div>
      </div>
      <div class="footer-hqs" aria-label="RACO delivery locations">
        <a class="footer-hq" href="https://www.google.com/maps/search/?api=1&amp;query=Bristol+United+Kingdom" target="_blank" rel="noreferrer"><span>Location 01 / United Kingdom</span><strong>Bristol</strong><p>Client relationships · Product strategy<br />United Kingdom</p><i>View Bristol in Google Maps ↗</i></a>
        <a class="footer-hq" href="https://www.google.com/maps/search/?api=1&amp;query=Dhaka+Bangladesh" target="_blank" rel="noreferrer"><span>Location 02 / Bangladesh</span><strong>Dhaka</strong><p>Engineering delivery · Applied AI Lab<br />Bangladesh</p><i>View Dhaka in Google Maps ↗</i></a>
      </div>
      <div class="footer-trust"><span>Client-owned delivery</span><span>Private AI by design</span><span>Human oversight</span><span>Bristol ↔ Dhaka</span></div>
      <div class="footer-bottom"><span>© 2026 RACO AI</span><div><a href="/privacy/">Privacy</a><a href="/contact/">Contact</a><a href="#top">Back to top ↑</a></div></div>
    </footer>`;
}
