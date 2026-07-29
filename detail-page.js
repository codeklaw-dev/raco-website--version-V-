const detailTarget = document.querySelector("[data-detail-page]");

const detailPages = {
  "bespoke-software": {
    category: "Software engineering", title: "Bespoke software", accent: "built around the business.", intro: "Custom systems for organisations whose workflows, data and operating model cannot be reduced to an off-the-shelf product.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Operational platforms", "Secure internal systems that connect people, decisions and business-critical workflows."], ["Customer applications", "Distinctive digital experiences backed by resilient services and maintainable product architecture."], ["Systems integration", "Connected data and processes across existing platforms, APIs and specialist tools."]],
    useCases: [["Workflow replacement", "Replace spreadsheets, email hand-offs and disconnected point tools."], ["Differentiated products", "Build customer value that cannot be bought as a generic platform feature."], ["Complex operations", "Turn specialised rules and institutional knowledge into dependable software."]],
    stack: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS", "Azure", "API integration"], fit: "The strongest fit is a high-value workflow where generic software creates compromise, duplication or operational risk."
  },
  "product-development": {
    category: "Software engineering", title: "SaaS and product development", accent: "from signal to scale.", intro: "Cross-functional product teams that turn an opportunity into a validated, production-ready digital product.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Product discovery", "User, market and workflow discovery tied to a clear first product decision."], ["MVP engineering", "A focused first release designed to test value without creating disposable foundations."], ["Product evolution", "Roadmap delivery, analytics and continuous improvement after launch."]],
    useCases: [["New SaaS ventures", "Move from concept to a credible market-facing product."], ["Corporate innovation", "Test a new proposition without burdening an existing delivery roadmap."], ["Product rescue", "Stabilise a stalled product and create a clearer technical and commercial route."]],
    stack: ["Product strategy", "UX research", "Design systems", "React", "Next.js", "Node.js", "Cloud", "Product analytics"], fit: "Use this page when the central risk is not only engineering—it is deciding what should be built, for whom and in what sequence."
  },
  "web-mobile": {
    category: "Software engineering", title: "Web and mobile applications", accent: "made for real use.", intro: "Accessible, responsive applications that feel clear at the interface and remain dependable underneath it.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Web applications", "Responsive product interfaces, portals and operational tools for complex user journeys."], ["Mobile products", "Native-quality cross-platform applications shaped around context, performance and device use."], ["Experience systems", "Reusable design systems and front-end architecture that keep products coherent as they grow."]],
    useCases: [["Customer self-service", "Give customers a faster, clearer route through complex tasks."], ["Field operations", "Put the right information and action in the hands of distributed teams."], ["Platform interfaces", "Make powerful underlying systems usable, accessible and easier to adopt."]],
    stack: ["React", "Next.js", "Flutter", "TypeScript", "Node.js", "Accessibility", "Design systems", "App delivery"], fit: "The interface is treated as part of the operating model, not a decorative layer placed over backend functionality."
  },
  "cloud-modernisation": {
    category: "Software engineering", title: "Cloud and modernisation", accent: "without the cliff edge.", intro: "Staged renewal of legacy platforms, infrastructure and delivery practices while protecting operational continuity.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Modernisation assessment", "Map architecture, dependencies, risk and the economic case for change."], ["Cloud migration", "Move workloads and data through an incremental, observable transition plan."], ["Architecture renewal", "Replace fragile components and unlock faster, safer product delivery."]],
    useCases: [["Legacy bottlenecks", "Remove systems that make every product change slow or risky."], ["Scale constraints", "Prepare architecture and operations for new volumes, markets or services."], ["Platform consolidation", "Reduce duplicated systems and create clearer ownership across the estate."]],
    stack: ["AWS", "Azure", "Containers", "Kubernetes", "Terraform", "Observability", "CI/CD", "API architecture"], fit: "Modernisation should reduce business risk in increments. The programme is structured so each stage creates value and learning."
  },
  "qa-devops": {
    category: "Software engineering", title: "Quality engineering and DevOps", accent: "confidence by design.", intro: "Testing, deployment, observability and operational controls built into the way software moves from idea to production.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Quality strategy", "Risk-based testing across product behaviour, integration, performance and accessibility."], ["Delivery automation", "Repeatable build, test and release pipelines with explicit controls."], ["Production visibility", "Monitoring, tracing and incident signals that help teams operate what they ship."]],
    useCases: [["Release instability", "Reduce regressions, manual deployment and last-minute uncertainty."], ["Slow delivery", "Remove avoidable waiting and hand-offs from the path to production."], ["Operational blind spots", "Create the signals required to detect, understand and recover from failure."]],
    stack: ["Automated testing", "Playwright", "CI/CD", "Docker", "Kubernetes", "Terraform", "Monitoring", "Security scanning"], fit: "Quality is most effective when it shapes architecture, acceptance and deployment from the beginning—not when it arrives as a final gate."
  },
  "ai-transformation": {
    category: "AI and data", title: "AI transformation", accent: "grounded in the work.", intro: "A practical route from scattered AI ideas to a governed portfolio of systems with measurable operating value.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Opportunity mapping", "Prioritise workflows by value, feasibility, readiness and consequence."], ["AI operating model", "Define ownership, governance, evaluation and the route from experiment to production."], ["Delivery roadmap", "Sequence foundations and use cases so each investment creates evidence for the next."]],
    useCases: [["Executive AI roadmap", "Replace disconnected initiatives with a defensible investment sequence."], ["Workflow portfolio", "Identify where assistants, automation or decision support create real leverage."], ["Production enablement", "Establish data, platform and governance foundations for repeatable delivery."]],
    stack: ["AI discovery", "Value mapping", "Data readiness", "Governance", "Evaluation", "Architecture", "Change design", "Roadmapping"], fit: "Transformation begins with operating leverage and organisational readiness, not with a preferred model or fashionable use case."
  },
  "private-ai-rag": {
    category: "AI and data", title: "Private AI and RAG", accent: "answers with evidence.", intro: "Secure knowledge systems grounded in approved organisational information, permissions and review controls.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Knowledge architecture", "Prepare sources, ownership, permissions and retrieval for trustworthy use."], ["Grounded assistants", "Deliver evidence-linked answers within a defined business context."], ["Evaluation and control", "Measure answer quality, source use and failure modes before autonomy grows."]],
    useCases: [["Internal knowledge", "Help teams find and apply approved organisational information."], ["Document-intensive work", "Accelerate research, review and synthesis while preserving evidence."], ["Customer support", "Ground service responses in current, permissioned product and policy sources."]],
    stack: ["RAG", "Vector search", "PostgreSQL", "OpenAI", "Open-source models", "Access control", "Evaluation", "Audit trails"], fit: "Useful RAG depends more on source quality, permission design and evaluation than on a retrieval demo alone."
  },
  "agent-development": {
    category: "AI and data", title: "AI agent development", accent: "action with boundaries.", intro: "Agentic systems that coordinate tools, context and decisions while keeping consequential actions visible and controllable.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Agent workflow design", "Define goals, tools, state and explicit decision boundaries around the work."], ["Tool orchestration", "Connect agents safely to business systems, data and specialist services."], ["Operational control", "Add approval, monitoring, fallback and evidence to multi-step execution."]],
    useCases: [["Research operations", "Coordinate search, synthesis, evidence and structured output."], ["Service workflows", "Route, prepare and resolve repeatable work across multiple systems."], ["Back-office execution", "Automate bounded, reversible tasks with human escalation when required."]],
    stack: ["Agent orchestration", "Tool calling", "APIs", "State management", "Evaluation", "Human approval", "Observability", "Private deployment"], fit: "Autonomy is matched to consequence, reversibility and evidence. The goal is controlled execution, not maximum independence."
  },
  "voice-computer-vision": {
    category: "AI and data", title: "Voice and computer vision", accent: "intelligence beyond the screen.", intro: "Perception systems that understand speech, images and physical environments, connected to usable operational workflows.", image: "/assets/raco-industrial-ai.jpg",
    capabilities: [["Computer vision", "Detection, classification, inspection and visual decision support."], ["Voice systems", "Speech interfaces and operational voice agents designed around real conversations."], ["Multimodal workflows", "Combine text, image, audio and system context within one controlled process."]],
    useCases: [["Visual quality", "Support consistent inspection and evidence capture in industrial settings."], ["Voice operations", "Reduce friction where hands-free or conversational access matters."], ["Document and media intake", "Extract, classify and route information from mixed-format inputs."]],
    stack: ["PyTorch", "Computer vision", "Speech-to-text", "Voice agents", "Edge inference", "Python", "Evaluation", "Human review"], fit: "The perception model is connected to capture conditions, uncertainty, review and the action that follows."
  },
  "data-engineering": {
    category: "AI and data", title: "Data engineering", accent: "built for decisions.", intro: "Reliable data foundations that connect operational sources to analytics, products and production AI.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Data platforms", "Organise ingestion, storage, transformation and access around clear ownership."], ["Operational pipelines", "Move data reliably between products, workflows and decision systems."], ["AI data foundations", "Prepare governed context, feedback and evaluation data for intelligent systems."]],
    useCases: [["Fragmented reporting", "Create consistent definitions and a trusted route from source to decision."], ["Product intelligence", "Power customer and operational features with timely, observable data."], ["AI readiness", "Establish the quality, permissions and lineage production AI requires."]],
    stack: ["Python", "SQL", "PostgreSQL", "Data pipelines", "Warehousing", "Streaming", "Cloud storage", "Data quality"], fit: "The platform is designed around the decisions and systems it must support, not around accumulating data without purpose."
  },
  "enterprise-delivery": {
    category: "Business solution", title: "Enterprise delivery", accent: "complexity made governable.", intro: "Coordinated product, software and AI delivery for programmes with multiple stakeholders, systems and operational constraints.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Programme architecture", "Align delivery streams around shared boundaries, dependencies and technical direction."], ["Governed execution", "Create visible decisions, quality controls and leadership across the programme."], ["Capability transfer", "Build internal confidence through documentation, pairing and structured ownership transition."]],
    useCases: [["Digital transformation", "Coordinate products, platforms and operating change around measurable outcomes."], ["AI enablement", "Move multiple use cases through shared governance and technical foundations."], ["Platform renewal", "Modernise a critical estate without losing business continuity."]],
    stack: ["Programme discovery", "Architecture governance", "Product teams", "Cloud", "Security", "Quality engineering", "Change enablement", "Managed support"], fit: "Best for organisations that need delivery capacity and a coherent technical system of direction at the same time."
  },
  "startup-product-teams": {
    category: "Business solution", title: "Startup product teams", accent: "speed with foundations.", intro: "Senior product and engineering capability for founders who need to learn quickly without building a disposable product.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Founder discovery", "Turn the proposition into explicit users, assumptions and a testable first release."], ["Venture engineering", "Build product, cloud and data foundations at the right level for the current stage."], ["Scale preparation", "Strengthen architecture, quality and delivery as market evidence grows."]],
    useCases: [["Zero to one", "Move from a clear problem to the first usable product."], ["Technical acceleration", "Add a complete product team when hiring would delay the market window."], ["Scale-up renewal", "Address product and architecture debt before the next stage of growth."]],
    stack: ["Product discovery", "UX", "Web", "Mobile", "Cloud", "Analytics", "AI integration", "Fractional leadership"], fit: "The team protects learning speed while making deliberate choices about which foundations must last."
  },
  "dedicated-engineering": {
    category: "Business solution", title: "Dedicated engineering pods", accent: "your priorities, one stable team.", intro: "A long-lived cross-functional RACO team that operates as an integrated extension of your product and technology organisation.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Stable team design", "Assemble the product, software, AI, quality and cloud mix around your roadmap."], ["Integrated delivery", "Work inside shared priorities, ceremonies and technical standards."], ["Capability scaling", "Adjust specialist capacity as the roadmap and architecture evolve."]],
    useCases: [["Roadmap acceleration", "Add a complete delivery stream without fragmenting ownership."], ["Capability gap", "Bring sustained AI, data or cloud depth into an existing organisation."], ["New product line", "Create a focused team for a proposition outside the core roadmap."]],
    stack: ["Product management", "Engineering", "AI and data", "Quality", "Cloud", "DevOps", "Delivery leadership", "Knowledge transfer"], fit: "Dedicated teams work best when the outcome benefits from continuity, accumulated domain knowledge and a stable operating rhythm."
  },
  "managed-ai": {
    category: "Business solution", title: "Managed AI operations", accent: "reliability after launch.", intro: "Ongoing monitoring, evaluation and improvement for AI systems whose quality, cost and behaviour change in production.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Quality monitoring", "Track task performance, failure modes and operator feedback over time."], ["Model and prompt operations", "Manage versions, evaluations and provider changes through controlled releases."], ["System improvement", "Refine data, retrieval, interfaces and workflows against production evidence."]],
    useCases: [["Private assistants", "Keep knowledge quality, permissions and user value under review."], ["Agentic workflows", "Monitor actions, exceptions, cost and approval behaviour."], ["Vision and voice systems", "Respond to environmental drift and changing operating conditions."]],
    stack: ["AI observability", "Evaluation", "Model operations", "Cost monitoring", "Incident response", "Data quality", "Security review", "Continuous delivery"], fit: "Production AI is an operating capability, not a finished deployment. Ownership must continue after the launch milestone."
  },
  "healthcare": {
    category: "Industry", title: "Healthcare technology", accent: "designed around care.", intro: "Secure digital products and decision-support systems shaped around clinical responsibility, patient experience and operational reality.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Patient services", "Accessible digital journeys for access, communication and ongoing support."], ["Clinical workflows", "Tools that reduce administrative burden without obscuring professional judgement."], ["Health intelligence", "Responsible use of data and AI for prioritisation, review and operational insight."]],
    useCases: [["Virtual care", "Connect patients and clinicians through clear, secure digital workflows."], ["Document intelligence", "Structure and surface relevant information from complex health records."], ["Operational capacity", "Improve scheduling, triage support and service visibility."]],
    stack: ["Secure cloud", "Interoperability", "Private AI", "Audit trails", "Accessibility", "Data governance", "Workflow software", "Human review"], fit: "Every design decision reflects the sensitivity of health information and the consequence of clinical or operational error."
  },
  "legal": {
    category: "Industry", title: "Legal technology", accent: "knowledge with provenance.", intro: "Private software and AI systems for document-intensive, evidence-sensitive legal work.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Matter platforms", "Connect cases, documents, tasks and client-facing workflows."], ["Private legal AI", "Ground research and drafting support in approved firm knowledge."], ["Document operations", "Classify, review and route high-volume legal information with control."]],
    useCases: [["Contract review", "Surface clauses, risks and differences while retaining lawyer review."], ["Research", "Accelerate source-grounded knowledge work across approved collections."], ["Client intake", "Structure information and route matters more consistently."]],
    stack: ["Private RAG", "Document processing", "Access control", "Search", "Audit trails", "Workflow automation", "Web platforms", "Evaluation"], fit: "The system is designed around confidentiality, source traceability and the boundary between assistance and professional judgement."
  },
  "financial-services": {
    category: "Industry", title: "Financial services technology", accent: "decisions that can be explained.", intro: "Secure platforms and intelligent workflows for regulated, data-intensive financial operations.", image: "/assets/raco-software-delivery.jpg",
    capabilities: [["Decision platforms", "Connect policy, evidence, review and outcome in one traceable workflow."], ["Operational automation", "Reduce repetitive work while preserving controls and escalation."], ["Customer products", "Clear digital experiences for onboarding, service and financial interaction."]],
    useCases: [["Onboarding and KYC", "Coordinate documents, checks, exceptions and customer communication."], ["Underwriting support", "Bring relevant evidence and policy into a controlled decision flow."], ["Fraud operations", "Prioritise investigation and connect signals to human review."]],
    stack: ["Secure cloud", "Data engineering", "Decision systems", "Private AI", "Auditability", "APIs", "Workflow software", "Monitoring"], fit: "AI and automation are placed inside explicit controls so speed does not come at the cost of explainability or oversight."
  },
  "manufacturing": {
    category: "Industry", title: "Manufacturing technology", accent: "intelligence on the line.", intro: "Connected software, data and computer vision for quality, maintenance and production operations.", image: "/assets/raco-industrial-ai.jpg",
    capabilities: [["Vision inspection", "Detect, review and trace visual quality issues in production."], ["Production software", "Connect people, machines, tasks and evidence across the operation."], ["Operational intelligence", "Turn production and maintenance data into timely action."]],
    useCases: [["Quality assurance", "Create consistent inspection and faster exception response."], ["Maintenance", "Prioritise intervention using condition and operating signals."], ["Traceability", "Connect materials, process events and quality outcomes."]],
    stack: ["Computer vision", "Edge AI", "IoT integration", "Python", "Cloud", "Event streaming", "Operational dashboards", "Human review"], fit: "The technology is designed for the physical environment, capture conditions and the people responsible for the line."
  },
  "retail-ecommerce": {
    category: "Industry", title: "Retail and ecommerce", accent: "personal at scale.", intro: "Digital commerce products and intelligent operations that improve discovery, service and execution.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Commerce platforms", "Flexible customer experiences connected to product, order and service systems."], ["Personalisation", "Relevant content and recommendations governed by clear customer value."], ["Retail operations", "Automation and decision support across content, service and fulfilment."]],
    useCases: [["Product discovery", "Help customers navigate large or complex catalogues."], ["Content operations", "Accelerate structured product content with human control."], ["Customer service", "Ground assistance in current product, order and policy information."]],
    stack: ["Web commerce", "Mobile", "Search", "Recommendations", "Private AI", "CRM integration", "Product data", "Analytics"], fit: "The strongest systems connect customer experience to the operational data and processes required to fulfil the promise."
  },
  "logistics": {
    category: "Industry", title: "Logistics technology", accent: "movement with visibility.", intro: "Operational software and decision systems for routing, fleets, capacity and exception-heavy supply chains.", image: "/assets/raco-industrial-ai.jpg",
    capabilities: [["Control platforms", "A shared operational picture across orders, assets, routes and exceptions."], ["Planning intelligence", "Decision support for capacity, demand and routing under real constraints."], ["Field applications", "Mobile workflows for drivers, operators and distributed teams."]],
    useCases: [["Fleet operations", "Connect assignments, status, evidence and communication."], ["Exception management", "Detect risk early and route the right intervention."], ["Demand planning", "Use history and current signals to improve operational readiness."]],
    stack: ["Optimisation", "Geospatial data", "Mobile", "Event streaming", "Forecasting", "Cloud platforms", "APIs", "Operational analytics"], fit: "Logistics value often sits in the exception. Systems must make changing conditions visible and actionable."
  },
  "real-estate": {
    category: "Industry", title: "Real estate technology", accent: "assets made intelligible.", intro: "Digital platforms and AI-enabled workflows across property search, valuation, operations and asset information.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Property platforms", "Customer and operator experiences connected to complex asset data."], ["Document intelligence", "Extract and organise information from property and transaction documents."], ["Decision support", "Assist matching, valuation and portfolio review with traceable evidence."]],
    useCases: [["Property discovery", "Improve search and matching across structured and unstructured information."], ["Transaction workflows", "Coordinate documents, parties, tasks and review."], ["Asset operations", "Connect property information to maintenance, compliance and performance."]],
    stack: ["Web platforms", "Geospatial", "Document AI", "Search", "Data engineering", "Private AI", "CRM integration", "Cloud"], fit: "Property systems become more valuable when fragmented asset information is connected to the decision or transaction at hand."
  },
  "hospitality": {
    category: "Industry", title: "Hospitality technology", accent: "service made seamless.", intro: "Guest experiences and operational systems that connect booking, service, pricing and team coordination.", image: "/assets/raco-hero-engineering.jpg",
    capabilities: [["Guest applications", "Clear digital journeys before, during and after a stay or experience."], ["Service operations", "Coordinate requests, teams and standards across distributed properties."], ["Commercial intelligence", "Support pricing, demand and customer decisions with timely data."]],
    useCases: [["Booking journeys", "Reduce friction from discovery through confirmation and change."], ["Guest service", "Give teams and assistants access to current, property-specific information."], ["Multi-site operations", "Create consistent visibility and workflow across locations."]],
    stack: ["Web and mobile", "Booking integration", "CRM", "Private AI", "Voice", "Analytics", "Workflow automation", "Cloud"], fit: "The technology should disappear into the service experience while giving operators better context and control."
  },
  "education": {
    category: "Industry", title: "Education technology", accent: "learning with support.", intro: "Accessible learning products and responsible AI systems for education, training and workforce development.", image: "/assets/raco-ai-lab.jpg",
    capabilities: [["Learning platforms", "Structured content, progress and interaction across web and mobile experiences."], ["AI learning support", "Grounded assistance and feedback designed around educator control."], ["Training operations", "Tools for enrolment, assessment, certification and workforce capability."]],
    useCases: [["Adaptive support", "Offer relevant guidance without hiding the learning process."], ["Tutor assistance", "Help educators prepare, review and respond with stronger context."], ["Workforce learning", "Connect role requirements, learning activity and evidence of capability."]],
    stack: ["Learning platforms", "Accessibility", "Private AI", "Content systems", "Assessment", "Analytics", "Mobile", "Data governance"], fit: "AI should strengthen learning and educator capacity while preserving transparency, agency and appropriate safeguarding."
  },
  "construction": {
    category: "Industry", title: "Construction technology", accent: "complex delivery connected.", intro: "Field, planning and compliance software for projects where information, assets and decisions move across many parties.", image: "/assets/raco-industrial-ai.jpg",
    capabilities: [["Field operations", "Mobile workflows for evidence, tasks, issues and site coordination."], ["Project intelligence", "Connect programme, cost, risk and progress information."], ["Visual systems", "Use image and video data for review, progress and compliance support."]],
    useCases: [["Site reporting", "Capture structured evidence and route action from the field."], ["Compliance workflows", "Connect requirements, inspections, evidence and resolution."], ["Equipment operations", "Improve visibility across assets, allocation and maintenance."]],
    stack: ["Mobile", "Computer vision", "Document AI", "Cloud platforms", "Geospatial", "Workflow software", "Dashboards", "Integration"], fit: "The system must work in the field, across organisational boundaries and under changing project conditions."
  }
};

const pageJourneys = {
  "bespoke-software": [["Shape the product", "SaaS & product development", "/expertise/product-development/"], ["Renew the platform", "Cloud & modernisation", "/expertise/cloud-modernisation/"], ["Choose delivery", "Enterprise delivery", "/engagement-models/enterprise-delivery/"]],
  "product-development": [["Design the experience", "Web & mobile applications", "/expertise/web-mobile/"], ["Build the team", "Startup product teams", "/engagement-models/startup-product-teams/"], ["Add intelligence", "Private AI & RAG", "/expertise/private-ai-rag/"]],
  "web-mobile": [["Shape the roadmap", "SaaS & product development", "/expertise/product-development/"], ["Strengthen delivery", "QA & DevOps", "/expertise/qa-devops/"], ["See a market context", "Retail & ecommerce", "/industries/retail-ecommerce/"]],
  "cloud-modernisation": [["Improve reliability", "QA & DevOps", "/expertise/qa-devops/"], ["Connect the data", "Data engineering", "/expertise/data-engineering/"], ["Run the programme", "Enterprise delivery", "/engagement-models/enterprise-delivery/"]],
  "qa-devops": [["Renew the platform", "Cloud & modernisation", "/expertise/cloud-modernisation/"], ["Extend the team", "Dedicated engineering pods", "/engagement-models/dedicated-engineering/"], ["Review delivery patterns", "Selected work", "/work/"]],
  "ai-transformation": [["Ground the knowledge", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Move into action", "Agent development", "/expertise/agent-development/"], ["Operate after launch", "Managed AI operations", "/engagement-models/managed-ai/"]],
  "private-ai-rag": [["Prepare the foundations", "Data engineering", "/expertise/data-engineering/"], ["Coordinate action", "Agent development", "/expertise/agent-development/"], ["Explore a domain", "Legal technology", "/industries/legal/"]],
  "agent-development": [["Ground the agents", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Govern production", "Managed AI operations", "/engagement-models/managed-ai/"], ["Scale the programme", "Enterprise delivery", "/engagement-models/enterprise-delivery/"]],
  "voice-computer-vision": [["See it in production", "Manufacturing technology", "/industries/manufacturing/"], ["Prepare the data", "Data engineering", "/expertise/data-engineering/"], ["Operate the system", "Managed AI operations", "/engagement-models/managed-ai/"]],
  "data-engineering": [["Create the roadmap", "AI transformation", "/expertise/ai-transformation/"], ["Build knowledge AI", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Apply it to finance", "Financial services", "/industries/financial-services/"]],
  "enterprise-delivery": [["Define the platform", "Bespoke software", "/expertise/bespoke-software/"], ["Plan AI change", "AI transformation", "/expertise/ai-transformation/"], ["Extend capacity", "Dedicated engineering pods", "/engagement-models/dedicated-engineering/"]],
  "startup-product-teams": [["Shape the product", "SaaS & product development", "/expertise/product-development/"], ["Design the interface", "Web & mobile applications", "/expertise/web-mobile/"], ["Add a specialist team", "Dedicated engineering pods", "/engagement-models/dedicated-engineering/"]],
  "dedicated-engineering": [["Set the programme", "Enterprise delivery", "/engagement-models/enterprise-delivery/"], ["Strengthen reliability", "QA & DevOps", "/expertise/qa-devops/"], ["Explore the work", "Selected work", "/work/"]],
  "managed-ai": [["Choose the use cases", "AI transformation", "/expertise/ai-transformation/"], ["Operate agents", "Agent development", "/expertise/agent-development/"], ["Operate perception", "Voice & computer vision", "/expertise/voice-computer-vision/"]],
  "healthcare": [["Build the platform", "Bespoke software", "/expertise/bespoke-software/"], ["Ground sensitive knowledge", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Design human oversight", "AI transformation", "/expertise/ai-transformation/"]],
  "legal": [["Ground firm knowledge", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Automate bounded work", "Agent development", "/expertise/agent-development/"], ["Connect document data", "Data engineering", "/expertise/data-engineering/"]],
  "financial-services": [["Build decision software", "Bespoke software", "/expertise/bespoke-software/"], ["Prepare governed data", "Data engineering", "/expertise/data-engineering/"], ["Coordinate transformation", "Enterprise delivery", "/engagement-models/enterprise-delivery/"]],
  "manufacturing": [["Add machine perception", "Voice & computer vision", "/expertise/voice-computer-vision/"], ["Connect production data", "Data engineering", "/expertise/data-engineering/"], ["See the case pattern", "Connected quality inspection", "/work/connected-quality/"]],
  "retail-ecommerce": [["Build the experience", "Web & mobile applications", "/expertise/web-mobile/"], ["Ground service AI", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Shape a product team", "SaaS & product development", "/expertise/product-development/"]],
  "logistics": [["Build control software", "Bespoke software", "/expertise/bespoke-software/"], ["Connect operational data", "Data engineering", "/expertise/data-engineering/"], ["Create field products", "Web & mobile applications", "/expertise/web-mobile/"]],
  "real-estate": [["Build the platform", "SaaS & product development", "/expertise/product-development/"], ["Understand documents", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Connect the estate", "Data engineering", "/expertise/data-engineering/"]],
  "hospitality": [["Design guest journeys", "Web & mobile applications", "/expertise/web-mobile/"], ["Build service AI", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Create the product team", "Dedicated engineering pods", "/engagement-models/dedicated-engineering/"]],
  "education": [["Build learning products", "SaaS & product development", "/expertise/product-development/"], ["Ground learning AI", "Private AI & RAG", "/expertise/private-ai-rag/"], ["Design the AI roadmap", "AI transformation", "/expertise/ai-transformation/"]],
  "construction": [["Build field applications", "Web & mobile applications", "/expertise/web-mobile/"], ["Add visual intelligence", "Voice & computer vision", "/expertise/voice-computer-vision/"], ["Connect project data", "Data engineering", "/expertise/data-engineering/"]]
};

const visualProfiles = {
  "bespoke-software": ["/assets/expertise-bespoke.jpg", "coral", "editorial"], "product-development": ["/assets/expertise-product.jpg", "coral", "split"], "web-mobile": ["/assets/expertise-mobile.jpg", "blue", "poster"], "cloud-modernisation": ["/assets/expertise-cloud.jpg", "indigo", "technical"], "qa-devops": ["/assets/expertise-devops.jpg", "blue", "split"],
  "ai-transformation": ["/assets/expertise-ai-transformation.jpg", "magenta", "poster"], "private-ai-rag": ["/assets/expertise-private-ai.jpg", "magenta", "technical"], "agent-development": ["/assets/expertise-agents.jpg", "wine", "split"], "voice-computer-vision": ["/assets/expertise-vision.jpg", "coral", "technical"], "data-engineering": ["/assets/expertise-data.jpg", "indigo", "editorial"],
  "enterprise-delivery": ["/assets/raco-visual-software.jpg", "wine", "editorial"], "startup-product-teams": ["/assets/raco-visual-education.jpg", "coral", "poster"], "dedicated-engineering": ["/assets/raco-visual-software.jpg", "blue", "split"], "managed-ai": ["/assets/raco-visual-ai.jpg", "magenta", "technical"],
  "healthcare": ["/assets/raco-visual-health.jpg", "clinical", "split"], "legal": ["/assets/raco-visual-finance.jpg", "wine", "editorial"], "financial-services": ["/assets/raco-visual-finance.jpg", "wine", "technical"], "manufacturing": ["/assets/raco-industrial-ai.jpg", "coral", "poster"], "retail-ecommerce": ["/assets/raco-visual-commerce.jpg", "blue", "poster"], "logistics": ["/assets/raco-visual-field.jpg", "blue", "editorial"], "real-estate": ["/assets/raco-visual-field.jpg", "indigo", "split"], "hospitality": ["/assets/raco-visual-commerce.jpg", "coral", "split"], "education": ["/assets/raco-visual-education.jpg", "magenta", "poster"], "construction": ["/assets/raco-visual-field.jpg", "coral", "technical"]
};

const paletteTokens = {
  coral: ["#FF6A1A", "#FFD21F", "#404040", "#FFF2E8"], blue: ["#00E0FF", "#7A3CFF", "#404040", "#E8FBFF"], indigo: ["#7A3CFF", "#00E0FF", "#404040", "#F0EAFF"], magenta: ["#FF3DB8", "#7A3CFF", "#404040", "#FFF0FA"], wine: ["#FF3DB8", "#FF6A1A", "#404040", "#FFF0F7"], clinical: ["#00E0FF", "#C7F23A", "#404040", "#E9FCFF"]
};

const technologySets = {
  editorial: [["react", "React"], ["nextdotjs", "Next.js"], ["nodedotjs", "Node.js"], ["python", "Python"], ["amazonwebservices", "AWS"], ["microsoftazure", "Azure"]],
  split: [["typescript", "TypeScript"], ["react", "React"], ["python", "Python"], ["postgresql", "PostgreSQL"], ["docker", "Docker"], ["github", "GitHub"]],
  technical: [["python", "Python"], ["pytorch", "PyTorch"], ["postgresql", "PostgreSQL"], ["docker", "Docker"], ["kubernetes", "Kubernetes"], ["amazonwebservices", "AWS"]],
  poster: [["openai", "OpenAI"], ["python", "Python"], ["react", "React"], ["microsoftazure", "Azure"], ["amazonwebservices", "AWS"], ["postgresql", "PostgreSQL"]]
};

if (detailTarget) {
  const key = detailTarget.dataset.detailPage;
  const page = detailPages[key];
  if (!page) throw new Error(`Unknown detail page: ${key}`);
  const profile = visualProfiles[key] || [page.image, "coral", "editorial"];
  const palette = paletteTokens[profile[1]] || paletteTokens.coral;
  document.body.dataset.palette = profile[1];
  document.body.dataset.layout = profile[2];
  document.body.style.setProperty("--page-accent", palette[0]);
  document.body.style.setProperty("--page-accent-2", palette[1]);
  document.body.style.setProperty("--page-deep", palette[2]);
  document.body.style.setProperty("--page-pale", palette[3]);
  const capabilityCards = page.capabilities.map((item, index) => `<article class="capability-card"><span>0${index + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("");
  const useCaseCards = page.useCases.map((item, index) => `<article class="directory-card"><span>0${index + 1} / USE CASE</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("");
  const stack = page.stack.map((item) => `<span>${item}</span>`).join("");
  const journeyCards = (pageJourneys[key] || [["Explore", "All RACO expertise", "/expertise/"], ["Choose a model", "How we work", "/engagement-models/"], ["Begin", "Start a project", "/contact/"]]).map((item) => `<a href="${item[2]}"><span>${item[0]}</span><h3>${item[1]} ↗</h3></a>`).join("");
  const technologyLogos = (technologySets[profile[2]] || technologySets.editorial).map((item) => `<div><img src="https://cdn.simpleicons.org/${item[0]}" alt="${item[1]}" loading="lazy" /><span>${item[1]}</span></div>`).join("");
  const pageNumber = String(Object.keys(detailPages).indexOf(key) + 1).padStart(2, "0");
  detailTarget.className = "inner-page-main detail-page";
  detailTarget.innerHTML = `
    <section class="inner-page-hero detail-hero"><img src="${profile[0]}" alt="RACO visual narrative for ${page.title.toLowerCase()}" /><div class="detail-hero-content reveal"><p class="eyebrow"><span></span> ${page.category}</p><h1>${page.title}<br /><em>${page.accent}</em></h1><p>${page.intro}</p><div class="hero-actions"><a class="button button-primary" href="/contact/">Start a project <span>↗</span></a><a class="button button-ghost" href="#capabilities">Explore the page <span>↓</span></a></div></div><div class="hero-signature" aria-hidden="true"><span>${profile[1]} / ${profile[2]}</span><b>${pageNumber}</b></div></section>
    <div class="page-trust"><span>RACO delivery system</span><div><strong>Discover</strong><strong>Design</strong><strong>Deliver</strong><strong>Operate</strong></div></div>
    <section class="page-section" id="capabilities"><div class="page-heading reveal"><div><p class="eyebrow"><span></span> What we deliver</p><h2>Focused capability.<br /><em>Production discipline.</em></h2></div><p>${page.fit}</p></div><div class="capability-grid reveal">${capabilityCards}</div></section>
    <section class="page-section page-section-dark"><div class="page-heading"><div><p class="eyebrow"><span></span> Where it creates value</p><h2>Use cases shaped<br /><em>around the work.</em></h2></div><p>These component ideas give the page concrete operating context while leaving room for approved client examples and quantified results later.</p></div><div class="directory-grid detail-use-cases">${useCaseCards}</div></section>
    <section class="feature-split"><div class="feature-media"><img src="${profile[0]}" alt="The working environment for ${page.title.toLowerCase()}" loading="lazy" /></div><div class="feature-copy"><p class="eyebrow"><span></span> Why RACO</p><h2>Software depth.<br /><em>AI built in.</em></h2><p>${page.fit}</p><ul class="feature-list"><li>Senior technical and delivery ownership</li><li>Security, quality and deployment designed from the start</li><li>Working outcomes and visible decisions throughout</li><li>Knowledge transfer and long-term operational readiness</li></ul></div></section>
    <section class="page-section page-section-dark"><div class="page-heading"><div><p class="eyebrow"><span></span> Delivery approach</p><h2>From uncertainty<br />to <em>operating system.</em></h2></div><p>The engagement can begin as focused discovery, a complete project or a dedicated team.</p></div><div class="delivery-steps"><article class="delivery-step"><span>01 / DISCOVER</span><h3>Map the work</h3><p>Clarify users, workflows, constraints, evidence and the opportunity.</p></article><article class="delivery-step"><span>02 / DESIGN</span><h3>Shape the system</h3><p>Define the architecture, controls, experience and delivery plan.</p></article><article class="delivery-step"><span>03 / DELIVER</span><h3>Build in increments</h3><p>Release tested outcomes with direct stakeholder visibility.</p></article><article class="delivery-step"><span>04 / OPERATE</span><h3>Improve with evidence</h3><p>Monitor quality, adoption, cost and the next valuable change.</p></article></div></section>
    <section class="page-section ecosystem-section"><div class="page-heading"><div><p class="eyebrow"><span></span> Relevant capabilities</p><h2>Technology chosen<br /><em>for the context.</em></h2></div><p>Final architecture follows the operating environment, existing estate, security constraints and team capability. Logos indicate commonly used ecosystem technologies, not partnerships.</p></div><div class="technology-logo-grid">${technologyLogos}</div><div class="stack-row">${stack}</div></section>
    <section class="page-section faq-page"><div><p class="eyebrow"><span></span> FAQ</p><h2>Questions before<br /><em>we begin.</em></h2></div><div class="faq-list"><details open><summary>What is the best first step?<i>+</i></summary><p>A focused discovery session maps the workflow, stakeholders, technical context and smallest valuable production outcome.</p></details><details><summary>Can RACO work with our existing team?<i>+</i></summary><p>Yes. We can own a complete outcome, form a dedicated pod or add specialist capability inside your delivery model.</p></details><details><summary>How are cost and timing established?<i>+</i></summary><p>We estimate against evidence from discovery: scope, dependencies, architecture, risk, team shape and acceptance criteria.</p></details><details><summary>What happens after launch?<i>+</i></summary><p>RACO can provide monitoring, optimisation, security review, model improvement and continued product delivery.</p></details></div></section>
    <section class="page-section"><div class="page-heading"><div><p class="eyebrow"><span></span> Your next best paths</p><h2>Keep following<br /><em>the problem.</em></h2></div><p>Each route connects this capability or industry to the most relevant technical foundation, delivery model or operating context.</p></div><div class="related-grid">${journeyCards}</div></section>`;
}
