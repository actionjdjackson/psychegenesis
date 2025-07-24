# PsycheGenesis System Overview

Created by Jacob Jackson, **PsycheGenesis** is a multidimensional assessment and profiling framework crafted to map the entire human experience—spirit, soul, and body—within a biblically anchored, psychologically insightful, and scientifically informed model. It is designed to offer an integrated lens through which individuals can better grasp their unique God-given identity, spiritual development, and holistic life design. By merging theology, psychology, somatic understanding, and vocational alignment, PsycheGenesis equips users to thrive across emotional, spiritual, and practical domains.

## Purpose

PsycheGenesis serves as a Spirit-led tool for personal transformation by helping users:

* Uncover their spiritual gifts, personality patterns, temperament, and calling.
* Reflect deeply on their journey of sanctification, healing, and soul restoration.
* Understand the shaping influence of genetics, temperament, trauma, upbringing, and spiritual milestones.
* Connect emotional and somatic awareness with spiritual development and behavioral change.
* Integrate biblical discipleship with neuroscience, identity theory, and growth psychology into a redemptive understanding of the human self.
* Align vocational pathways and spiritual callings to how a person is uniquely wired in both divine gifting and natural temperament.
* Recognize potential leadership readiness based on biblical maturity, not merely charisma or outward qualifications.

## Key Features

* 🔍 **Integrated Assessment Engine**: All modules feed into a unified profile with randomized question delivery, adaptive scoring, milestone triggers, and trauma-aware pacing logic.
* 🧠 **Mind-Gut-Heart Axis**: Captures embodied emotional experience, intuitive knowing, and neuro-emotional processing across the primary centers of internal awareness.
* 🕊️ **Spiritual Timeline Builder**: Enables users to map key spiritual events such as salvation, water and Spirit baptism, moments of calling, breakthrough, inner healing, and spiritual gift activation.
* 💡 **Role Recommendations**: Suggests biblically grounded roles, ministries, and vocations based on sanctification stage, character, temperament, relational maturity, gifting profile, and leadership development.
* 🔥 **Healing & Restoration Insights**: Tracks trauma exposure, inner vows, body memory, emotional regulation issues, and healing recovery pathways—offering grace-filled reflection and redemptive re-narration.
* 🧩 **Composite Profile System**: Normalizes and integrates insights across multiple assessment streams, offering a coherent, Spirit-led, and psychologically grounded story of the whole person.
* ✅ **Leadership Readiness Flags**: Automatically evaluate readiness for spiritual leadership roles (e.g., pastor, elder, missionary, mentor) based on maturity indicators drawn from sanctification stage, trauma healing status, relationship health, biblical qualifications (1 Tim 3, Titus 1), emotional regulation, and gift activation. Flags can recommend waiting, preparation, or confirmation by spiritual authority.
* ⚙️ **Role Recommendation Engine**: Calculates best-fit callings, life roles, or ministries by integrating all module outputs using weighted composite logic. It balances maturity, temperament, gifting, and healing to suggest personalized pathways forward.
* 📖 **Narrative Synthesis Generator**: Produces a personalized, redemptive life narrative that weaves together a user’s spiritual journey, gifting, personality, sanctification stage, trauma recovery, and divine calling. The result is a reflective, hope-filled story that contextualizes how God has shaped and is shaping the user’s life purpose.
* 🖥️ **User Interface & Experience Flow**:

  * **Likert Scale Questions**: Presented as a row of circles sized from large to small to large, colored from red (big, leftmost) to gray (small, center) to green (big, rightmost). Red = “not like me at all,” gray = “neutral,” green = “totally like me.”
  * **Yes/No Questions**: Displayed as neutral Y and N radio-button options with no color or symbol bias to avoid influencing response valence, especially for trauma- or vulnerability-related questions.
  * **Question Pagination**: Assessment flows in randomized order, 5–10 questions per page. Trauma and healing-related questions appear at the end in an intentional progression from surface-level to deeper reflection.
  * **Timeline Builder**: Isolated on its own page with flexible placement (beginning, midpoint, or end) depending on assessment flow configuration. Midpoint is often optimal to provide narrative context without overwhelming users upfront.
* 📊 **Administrative & Counselor Dashboard**: Enables authorized facilitators, coaches, or pastoral counselors to:

  * View user profiles, scores, growth stage summaries, and redemptive narratives.
  * Filter and tag users by spiritual maturity, leadership readiness, trauma recovery stage, or gifting category.
  * Export anonymized data for aggregate insights, program tailoring, or church ministry planning.
  * Set follow-up actions or notes for discipleship, mentorship, or spiritual formation.
  * Grant or restrict module access depending on user role (e.g., pastoral vs. layperson).

## Major Categories Assessed

* Personality Type (MBTI-style / NERIS with optional Assertive vs. Turbulent identity)
* Job Preference / Holland Code
* Motivational Gifts (Romans 12)
* Spiritual Gifts (1 Cor 12)
* Fivefold Ministry Callings (Ephesians 4)
* Birth Order & Family Dynamics
* Sanctification & Spiritual Growth Stages
* Trauma History & Inner Vows
* Conflict Resolution Style
* Relationship & Attachment Style
* Temperament & Genetic Traits (e.g., sensitivity, metabolism, circadian rhythm)
* Somatic Awareness & Movement Preferences
* Learning Styles (VARK + Multiple Intelligences)
* Optional Enneagram Input (for interpretive context only)
* Emotional Processing Centers (Mind, Gut, Heart)
* Spiritual Warfare Awareness (optional module)
* Leadership Readiness Flags (based on maturity, not just gifting)
* Heart Burden & Calling

## Output

* 🎯 **Profile Summary**: Tiered and narrative-based insights for each category, including growth stage, gifting strength, leadership readiness, and emotional resilience.
* 📊 **Composite Scoring**: Logic-weighted analysis of spiritual gift dominance, character maturity, trauma modifiers, healing progress, and role readiness.
* 🧩 **Role Fit Suggestions**: Suggests fitting life roles, callings, ministries, and leadership pathways based on composite maturity, personality, gifting, and growth stage.
* ✨ **Personalized Redemptive Narrative**: A cohesive, biblically inspired life story weaving spiritual formation, personality design, and divine purpose into a healing-centered worldview.

---

# PsycheGenesis System Architecture

The PsycheGenesis architecture is modular, extensible, and optimized for deep personalization and responsive spiritual insight. Each layer is engineered to support cross-category logic and real-time synthesis of user input.

## Core Components

### 1. **Assessment Engine**
- Dynamically renders randomized questions to reduce bias
- Calibrates adaptive scoring weights based on response type and context
- Flags milestones, spiritual turning points, or trauma indicators during input
- Supports conditional branching logic (e.g. trauma-aware pacing, sanctification-gated leadership paths)

### 2. **Profile Context Layer**
- Stores all user responses as unified structured data
- Tracks cross-category insights (e.g. correlations between trauma and personality)
- Manages timeline sequencing and growth-stage mapping
- Hosts global profile variables used across modules (e.g., age, conversion experience, calling, maturity level)

### 3. **Scoring & Insight Engine**
- Applies normalized weightings across all categories
- Handles tie-break logic using secondary factors like birth order or trauma modifiers
- Computes stages of spiritual growth, personality derivation, and somatic-emotional alignment
- Generates multi-layered insights and appropriate role-fit outcomes

### 4. **Timeline Module**
- Chronologically maps spiritual and psychological milestones
- Interactive UI for drag-drop milestone ordering
- Integrates with sanctification analysis, trauma overlays, and growth phase timelines

### 5. **Narrative Generator**
- Synthesizes user profile data into a redemptive life story
- Leverages templates with variable interpolation for spiritual depth and psychological nuance
- Highlights before-and-after contrasts in healing, salvation, and growth moments

### 6. **UI Layer**
- React-based interface built for modularity and mobile-first use
- Interactive assessment flow with inline guidance and visual feedback
- Supports timeline builder, visual scoring summaries, and profile export tools

### 7. **Data Model & Schema**
- Centralized JSON schema for representing assessment questions, response formats, profile structure, and scoring outputs
- Includes optional external inputs (e.g. MBTI code, Enneagram type, Holland code)
- Built to support both in-browser interaction and persistent backend storage

---

# Module: Personality Type (MBTI-style / NERIS)

## Purpose
To assess the user's fundamental personality dynamics across cognitive, emotional, social, and decision-making dimensions using the classic MBTI framework, with NERIS model integration (Assertive vs. Turbulent identity modifier).

## Core Dimensions
- **Introversion (I) / Extraversion (E)**
- **Sensing (S) / Intuition (N)**
- **Thinking (T) / Feeling (F)**
- **Judging (J) / Perceiving (P)**
- **Assertive (A) / Turbulent (T)** (optional from external input)

## Question Structure
- 3–5 randomized questions per axis (up to 20 total)
- Scoring logic infers the 4-letter MBTI type through response weighting
- Optional: allow the user to manually input a known 16personalities result

## Output
- MBTI Type (e.g. ENFP)
- Identity modifier (e.g. ENFP-T or ENFP-A)
- Strength of preference along each axis (e.g. E: 62%, I: 38%)
- Insight interpretation with spiritual and relational applications

## Insights Generated
- Core personality type profile
- Communication style
- Emotional processing orientation
- Leadership and collaboration strengths
- Watchpoints for spiritual growth and interpersonal maturity

---

# Module: Motivational Gifts (Romans 12)

## Purpose
To help users identify their innate creational gifts—often referred to as motivational or redemptive gifts—based on Romans 12:6–8. These are the foundational drivers of behavior and perspective that shape each person’s calling, strengths, and service preferences.

## Seven Gifts Profiled
1. **Prophecy** – Discerns truth and sees into people’s motives and direction.
2. **Serving** – Finds fulfillment in practical acts of help and behind-the-scenes work.
3. **Teaching** – Desires to understand and explain truth with clarity and accuracy.
4. **Exhortation** – Encourages others to grow, change, and overcome challenges.
5. **Giving** – Finds joy in supplying resources and investing in kingdom work.
6. **Leadership** – Sees the big picture and naturally organizes people and systems.
7. **Mercy** – Feels deep compassion and responds to emotional and spiritual needs.

## Question Structure
- 5 questions per gift (35 total)
- Likert scale (1–5) agreement responses
- Scoring emphasizes consistency across items to reveal primary and secondary gifts

## Output
- Primary motivational gift (e.g. Teaching)
- Secondary gift(s) and strength distribution across all seven
- Role suitability and team contribution insights

## Scriptural Encouragement
- Gift of Teaching: *“Let him who teaches, teach”* (Rom. 12:7)
- Gift of Mercy: *“Let him show mercy, with cheerfulness”* (Rom. 12:8)
- Gift of Leadership: *“Let him who leads, do so with diligence”* (Rom. 12:8)

## Insights Generated
- Strengths and relational tendencies based on gift
- Areas of fulfillment and potential burnout triggers
- How each gift complements others in community or church settings
- Suggested ministries, functions, or callings based on gifting profile

---

# Module: Job Preference / Holland Code

## Purpose
To help users identify vocational inclinations and natural career affinities based on Holland’s RIASEC model, aligning personality and motivation with occupational domains.

## Six Holland Types
1. **Realistic** – Hands-on, tool-based, often outdoors or mechanical
2. **Investigative** – Analytical, scientific, problem-solving
3. **Artistic** – Creative, expressive, visual/spatial, intuitive
4. **Social** – Service-oriented, empathetic, relational
5. **Enterprising** – Persuasive, entrepreneurial, leadership-focused
6. **Conventional** – Organized, detail-oriented, data/system-focused

## Question Structure
- 4–6 questions per category (approx. 30–36 total)
- Interest-based and preference ranking format
- Optional: allow user to input previous Holland code test results

## Output
- Ranked RIASEC profile (e.g. SIA: Social, Investigative, Artistic)
- Primary vocational orientation
- Secondary and tertiary strengths
- Recommended environments and roles

## Insights Generated
- Career environments that best align with personality and gifting
- Natural preferences for types of tasks and work styles
- Vocational fit with other modules (e.g. motivational gifts + job preference)
- Spiritual implications of work and calling

---

# Module: Spiritual Gifts (1 Corinthians 12)

## Purpose
To help users identify manifestations of the Holy Spirit in their life—these are gifts distributed according to the Spirit's will for the edification of the church (1 Cor 12:7-11).

## Nine Gifts Profiled
1. **Word of Wisdom**
2. **Word of Knowledge**
3. **Faith**
4. **Gifts of Healing**
5. **Working of Miracles**
6. **Prophecy**
7. **Discerning of Spirits**
8. **Different Kinds of Tongues**
9. **Interpretation of Tongues**

## Question Structure
- 3–5 experiential and situational questions per gift (27–45 total)
- Scenarios include ministry contexts, private prayer, interpersonal interactions
- Includes questions to differentiate gifting from natural personality traits or motivational gifting

## Output
- Strongest active spiritual gifts
- Emerging or latent gifts
- Situational sensitivity and Holy Spirit empowerment tendencies

## Insights Generated
- Areas of spiritual authority or ministry activation
- Balance between power gifts, revelatory gifts, and utterance gifts
- Suggested steps for growth, submission, accountability, and discernment
- Encouragement for ongoing relationship with the Holy Spirit

---

# Module: Fivefold Ministry Callings (Ephesians 4)

## Purpose
To help individuals discern whether they are called to one or more of the Fivefold Ministry roles listed in Ephesians 4:11—given by Jesus "to equip the saints for the work of ministry and to build up the body of Christ."

## Five Roles Profiled
1. **Apostle** – Pioneer, strategist, and visionary leader called to plant and establish.
2. **Prophet** – Reveals God's heart, provides guidance, calls the church to holiness.
3. **Evangelist** – Passionate about sharing the gospel and leading people to Christ.
4. **Pastor** – Shepherd and nurturer, providing care, counsel, and community building.
5. **Teacher** – Deeply rooted in scripture, helping others grow in biblical knowledge.

## Question Structure
- 5–7 situational and reflective questions per role (approx. 30–35 total)
- Designed to reveal current fruit, natural gravitation, and spiritual authority

## Output
- Primary Fivefold tendencies
- Secondary support roles
- Maturity level and readiness for ministry activation

## Insights Generated
- Identification of potential equipping ministry areas
- Distinctions between calling, gift, and spiritual maturity
- Recommendations for training, mentoring, or ordination pathways
- Alignment with personality, sanctification stage, and spiritual gifting

---

# Module: Birth Order & Family Dynamics

## Purpose

To assess the developmental impact of family structure, birth order, and blended household dynamics on personality, decision-making, and relational instincts.

## Areas Profiled

* Functional birth order vs. biological birth order
* Role adoption in mixed/blended families
* Presence of half/step-siblings and parental dynamics
* Perceived family role (e.g., responsible one, peacekeeper, rebel)
* Impact of upbringing on leadership style, self-image, and emotional regulation

## Question Structure

* 8–12 questions with branching logic for step/blended family structures
* Includes options for skipped siblings, large age gaps, or de facto oldest/youngest roles
* Confirmation and tie-break logic for use in composite analysis

## Output

* Inferred birth order category (e.g., Functional Firstborn, Youngest in Blended Family)
* Relational traits, role tendencies, and rule-following vs. risk-taking style
* Adjustment markers for conflict resolution, leadership pacing, and independence

## Insights Generated

* How birth order amplifies or counterbalances other personality metrics
* Influence of blended family dynamics on stability and resilience
* Potential compensations or shifts due to trauma, maturity gaps, or early responsibilities
* Use in tie-break logic for middle-ground scoring in other modules

---

# Module: Learning Styles (VARK & Multiple Intelligences)

## Purpose
To understand each user’s natural learning preferences and cognitive strengths, providing insight into how they best receive, process, and express knowledge—vital for discipleship, teaching, mentorship, and role training.

## Areas Profiled
- VARK: Visual, Auditory, Reading/Writing, Kinesthetic modalities
- Multiple Intelligences: Linguistic, Logical-Mathematical, Musical, Bodily-Kinesthetic, Spatial, Interpersonal, Intrapersonal, Naturalistic

## Question Structure
- 16–24 questions randomized across both VARK and MI categories
- Users rate agreement or choose best-fit responses to contextual learning scenarios

## Output
- Primary and secondary learning style preferences
- Top 2–3 multiple intelligences ranked by score
- Cross-linking to role suggestions (e.g., musical intelligence + pastoral calling → worship leader)

## Insights Generated
- Effective spiritual formation strategies (e.g., tactile prayer, scripture visualization)
- Teaching/discipleship methods that suit the individual (e.g., group discussion vs. solo reading)
- Growth path recommendations using learning strengths
- Confirmation or challenge to perceived learning barriers

---

# Module: Conflict Resolution Style

## Purpose

To assess how individuals naturally respond to interpersonal tension and conflict, identifying strategies that promote peacemaking, truth-telling, reconciliation, or assertive boundary-setting. This module contributes to understanding leadership readiness, relational maturity, and team dynamics.

## Areas Profiled

* Conflict engagement or avoidance patterns
* Preferred conflict strategy: Accommodating, Competing, Collaborating, Avoiding, Compromising
* Use of empathy, logic, or assertion in tension
* Recovery and reflection behaviors post-conflict
* Influence of trauma, attachment, or spiritual maturity on conflict style

## Question Structure

* 12–15 situational questions referencing both general and spiritually relevant conflict scenarios
* Includes emotional processing and behavioral follow-through options

## Output

* Primary and secondary conflict resolution styles
* Strengths and liabilities of the preferred style
* Compatibility insights with other relational types

## Insights Generated

* Relational health awareness and growth areas
* Role fit for leadership, counseling, mentorship, or team-based ministry
* Spiritual reflections on reconciling personality with Christlike peacemaking
* Cross-correlation with attachment style and trauma history

---

# Module: Sanctification & Spiritual Growth

## Purpose

To evaluate where a person is in their walk with Christ and how they are maturing in faith, character, obedience, emotional resilience, and fruit of the Spirit. This module helps determine leadership readiness, mentoring or discipleship needs, and the spiritual implications of unresolved trauma, prolonged infancy, or accelerated growth due to suffering or divine intervention.

## Areas Profiled

* New birth / salvation experience (date, clarity, transformation markers)
* Water and Spirit baptism (experiential knowledge and theological understanding)
* Spiritual hunger, prayer life, and time spent with Scripture
* Obedience to conviction, development of conscience, and moral decision-making
* Manifestation of fruit of the Spirit in relational life and inner posture
* Patterns of repentance, forgiveness, humility, and acceptance of correction
* Seasoned endurance under trial or spiritual opposition
* Stewardship of spiritual gifts and alignment with one’s call to serve the Body of Christ

## Question Structure

* 12–16 thoughtfully ordered questions assessing key maturity markers and experiential growth
* Includes milestone triggers (e.g., being Spirit-filled, first breakthrough, prophetic callings)
* Utilizes branching logic to identify stagnation, accelerated growth, or unhealed trauma interruptions
* Questions emphasize not only doctrinal affirmation but also character formation and discipleship patterns

## Output

* Current growth stage, ranging from Seedling (new believer) to Rooted, Maturing, Fruit-bearing, and Reproducing (discipler or elder-level)
* Growth trajectory trend (Accelerating, Plateauing, Regressing, Cyclical)
* Red flags indicating lack of growth, healing prerequisites, overextension, or risk of pride (1 Tim 3:6)

## Insights Generated

* Tiered insights aligned with spiritual maturity and recommended levels of leadership, teaching, or oversight
* Discipleship action steps matched to current stage with scriptural encouragements
* Growth blockers and spiritual accelerants tied to life seasons, trauma exposure, or inner vow patterns
* Cross-linking with other modules such as Timeline, Spiritual Gifts, Conflict Resolution, Trauma History, and Role Readiness

---

# Module: Relationship & Attachment Style

## Purpose

To explore how early emotional bonding patterns, adult relational behaviors, and healing experiences shape a person's approach to intimacy, trust, vulnerability, and belonging. This module helps identify areas of relational strength, insecurity, avoidant tendencies, and the potential for healing and secure connection.

## Areas Profiled

* Childhood bonding and emotional availability of primary caregivers
* Trust and vulnerability in adult relationships
* Reactions to conflict and emotional withdrawal or clinginess
* Fear of abandonment or smothering
* Degree of emotional self-regulation and co-regulation
* History of relational trauma, repair, and attachment reformation through Christ

## Question Structure

* 12–15 focused questions rooted in attachment theory and spiritual formation
* Covers both inward emotional posture and outward relational behavior
* Optional branch for those with known trauma history or disrupted attachment
* Uses both psychological and scriptural language to describe relational dynamics

## Output

* Primary attachment style (Secure, Anxious, Avoidant, Disorganized)
* Relational healing status (In process, Restored, Stagnant, Unaware)
* Influence of attachment pattern on spiritual intimacy, church involvement, and ministry relationships

## Insights Generated

* Interpretive guidance on how one’s attachment style may influence spiritual leadership, vulnerability in discipleship, or resistance to intimacy with God
* Identification of healing invitations or safe practices for building secure attachments
* Integration with trauma history, sanctification process, and emotional processing center (mind-gut-heart axis)
* Role fit considerations (e.g., shepherding, mentoring, counseling) based on relational maturity and healing trajectory

---

# Module: Mind-Gut-Heart Axis (Emotional Processing Centers)

## Purpose

To explore how individuals experience, interpret, and act upon emotions through the three primary centers of embodied awareness—mind (head), heart (chest), and gut (abdomen). These emotional and intuitive centers reflect distinct modes of decision-making, emotional regulation, and spiritual discernment, allowing for greater clarity in vocation, relational life, and spiritual growth.

## Areas Profiled

* Default decision-making locus (thinking, feeling, sensing)
* Emotional expression and regulation center (verbal, somatic, emotive)
* Intuitive responses and moral compass orientation
* Bodily location of strong emotions (head pressure, chest tightness, gut churn)
* Frequency of trusting inner impressions versus logical analysis
* Spiritual discernment through body signals or convictions

## Question Structure

* 9–12 targeted questions spread across daily behavior, emotional experience, and reflective awareness
* Respondents describe which bodily region they most associate with “feeling things deeply,” reacting under stress, or sensing peace
* Includes questions like: “When making difficult decisions, do you go with your gut, your heart, or your head?”
* Multiple-choice and ranked-preference formats

## Output

* Primary Emotional Center: Gut (instinctive), Heart (relational/emotional), or Head (analytical/intellectual)
* Secondary and tertiary tendencies, including situations in which alternate centers dominate
* Spiritual implications of emotional center (e.g., intuitive intercession vs. intellectual discernment)

## Insights Generated

* How emotional center impacts relational dynamics, conflict resolution, and ministry style
* Correlations with other traits (e.g., gut-centered types may also exhibit high somatic awareness or trauma-triggered avoidance)
* Recommendations for growth and integration across underused centers
* Role fit recommendations: Gut-centered individuals may thrive in high-intensity settings; heart-centered in pastoral care; head-centered in teaching and strategy

---

# Module: Somatic Awareness & Movement Preferences

## Purpose

To assess how individuals experience, interpret, and respond to bodily sensations, physical cues, and movement preferences as part of their emotional regulation, healing journey, and spiritual engagement. This module links somatic intelligence with psychological and spiritual development.

## Areas Profiled

* Awareness of physical symptoms tied to stress or emotion
* Comfort with movement-based vs. stillness-based self-regulation
* Natural tendencies toward physical activity (e.g., walking, stretching, dance)
* Use of somatic practices in spiritual disciplines (e.g., laying prostrate, lifting hands, breath prayer)
* Relationship between body tension and emotional/relational state

## Question Structure

* 10–14 questions across emotional regulation, spiritual practices, trauma triggers, and recovery behaviors
* Multiple choice, frequency-based scales, and somatic word-association questions ("Which part of your body tightens when...?")

## Output

* Somatic awareness level: low, moderate, high
* Movement preference profile: stillness-focused, balance-seeking, or movement-driven
* Links to spiritual practices: kinesthetic worship, embodied prayer, breath awareness, etc.

## Insights Generated

* Whether movement is a source of healing or dysregulation
* Recommended movement-based practices for recovery or spiritual growth (e.g., breathwork, walking prayer)
* Trauma-informed sensitivity indicators (e.g., body numbing, hyper-awareness)
* Contribution to spiritual gifting, recovery strategies, and role suitability (e.g., movement-based ministry, fitness-integrated discipleship)

---

# Module: Temperament & Genetic Traits

## Purpose

To evaluate baseline biological predispositions that influence personality expression, sensory processing, energy regulation, emotional sensitivity, and lifestyle preferences. This module helps distinguish between nature and nurture factors and supports clearer interpretation of personality, gifting, and behavioral patterns.

## Areas Profiled

* Circadian preference (early bird vs. night owl)
* Baseline energy level (high drive, steady, low stamina)
* Sensory sensitivity (e.g., noise, light, temperature)
* Stress tolerance and reactivity
* Metabolism type and physical recovery speed
* Introversion/extroversion as a biological trait
* Emotional reactivity baseline (hot/cold wiring)

## Question Structure

* 10–15 questions covering daily rhythms, energetic fluctuations, stimulus response, sensory preferences, and recovery needs
* Includes self-identification questions and behavioral observations (e.g., "How do you feel after 6 hours of social interaction?")

## Output

* Core temperament baseline (e.g., sensory sensitive, high-energy, introverted)
* Trait clusters that inform other areas of the profile (e.g., high reactivity may overlap with trauma sensitivity)
* Integration into other metrics (e.g., scoring modifiers for conflict style, learning needs, or spiritual practice preferences)

## Insights Generated

* Role of inborn traits in shaping daily rhythms, ideal work conditions, and relational energy
* Recommendations for stewardship of energy, sensitivity, and sensory needs in daily life and spiritual discipline
* Caveats when interpreting personality and gifting tests (e.g., "Trauma or temperament?")
* Influence on healing timelines and movement-based therapies
* Weight modifiers for composite profile scoring

---

# Module: Trauma History & Inner Vows

## Purpose

To assess the presence, severity, and developmental timing of personal trauma, and to explore any self-directed beliefs (inner vows) formed in reaction to pain, rejection, or fear. These patterns can distort personality expression, spiritual perception, and relational behavior. This module is designed to surface redemptive insights and support healing pathways through prayer, pastoral care, or therapeutic work.

## Areas Profiled

* Types of trauma experienced (abuse, neglect, abandonment, accidents, spiritual harm)
* Developmental timing of trauma (childhood, adolescence, adulthood)
* Frequency and duration of traumatic events
* Inner vows such as “I’ll never trust anyone again” or “I have to take care of everything myself”
* Indicators of unresolved trauma (flashbacks, body memory, emotional shutdown)
* Impact on relational style, emotional reactivity, personality expression, and spiritual growth

## Question Structure

* Trauma Exposure Questions: Yes/No and severity-scaled items across 10–15 trauma types
* Inner Vow Prompts: Users select or write statements they may have internalized
* Healing Status Questions: Yes/No reflections on healing progress, forgiveness, and emotional processing
* Includes milestone-tagging by life stage and trauma triggers (timeline integration)

## Output

* Trauma exposure profile: low, moderate, or high
* Dominant trauma categories and affected life stages
* Inner vow identification and linked impact areas (trust, independence, perfectionism, etc.)
* Healing readiness and active restoration status

## Insights Generated

* Correlations between trauma and personality shifts (e.g., extrovert becoming reserved post-trauma)
* Impact on spiritual development, attachment style, conflict patterns, and vocational risk aversion
* Suggested healing modalities: counseling, inner healing prayer, forgiveness work, somatic recovery
* Redemptive narrative reflections: how God is restoring the broken areas
* Adjusted role or leadership suggestions to protect from retraumatization or premature pressure
* Composite scoring modifiers applied across spiritual maturity, emotional regulation, and relational capacity

---

# Module: Healing History & Restoration Pathways

## Purpose

To document a user’s journey of healing—emotionally, spiritually, relationally, and physically—especially in response to trauma or wounding. This module supports redemptive re-narration and affirms signs of maturity, forgiveness, and integration. It also guides users in reflecting on how God has restored or is restoring areas of pain.

## Areas Profiled

* Key healing milestones: breakthroughs in forgiveness, freedom from bitterness, emotional release, spiritual renewal
* Restoration activities: counseling, pastoral care, deliverance, inner healing ministries, prayer encounters, etc.
* Role of Scripture, worship, community, and the Holy Spirit in facilitating healing
* Level of peace or closure regarding major past traumas
* Transformation markers: increased relational openness, decreased anxiety/reactivity, healthier boundaries

## Question Structure

* Milestone-triggering questions (e.g., "Have you ever experienced a breakthrough in forgiveness?")
* Simple Yes/No format for completed restoration activities
* Optional notes for users to reflect on how restoration occurred

## Output

* Healing history log mapped to timeline view
* Restoration depth score: In Process, Partially Restored, Significantly Restored, Fully Restored
* Highlighted themes of God's redemptive work
* Role readiness booster if certain thresholds of healing and maturity are met

## Insights Generated

* Affirms maturity and readiness in areas once wounded
* Connects healing moments to leadership eligibility, spiritual growth, and relational trustworthiness
* Offers redemptive re-narratives of identity, purpose, and destiny
* Provides encouragement and hope for further healing
* Refines trauma weighting in the composite scoring system

---

# Module: Timeline & Spiritual Milestones

## Purpose

To provide users with a visually interactive way to chronicle key spiritual moments in their life journey, such as salvation, baptism, callings, giftings, breakthroughs, crises, and turning points. The timeline helps clarify spiritual progression, life stage shifts, and the timing of major identity-shaping events.

## Areas Profiled

* Age of salvation / new birth in Christ
* Water baptism and Spirit baptism milestones
* Calling experiences (e.g., ministry, leadership, missions)
* Major spiritual encounters or turning points
* Times of spiritual crisis, repentance, or rededication
* Gift discovery and activation events
* Seasons of revival, spiritual dryness, or renewed purpose

## Question Structure

* Trigger questions embedded across other assessments (e.g., “When did you first feel called to ministry?”)
* Standalone milestone prompt list with optional date or age entry
* Drag-and-drop event builder with timeline visualization
* Dropdown menus for type of event and accompanying notes field

## Output

* Horizontal scrollable milestone timeline
* Categorized life stage events with icons and labels
* Visual clustering of formative seasons
* Spiritual maturity patterns and key turning points

## Insights Generated

* Identification of key growth periods or spiritual plateaus
* Highlighted linkages between events (e.g., trauma → healing → calling)
* Readiness indicators for deeper responsibility or leadership
* Cross-analysis with healing history, sanctification, and gift activation timing
* Alignment of role suggestions to actual milestones and life seasons

---

# Module: Optional Enneagram Input

## Purpose

To allow users to optionally input their known Enneagram type and wing (e.g., 4w5) for additional interpretive insight. While PsycheGenesis does not test for Enneagram type directly, it honors its value as a supplemental lens for understanding motivation, inner fears/desires, and character formation. Insights are used in a supportive role for narrative synthesis and spiritual formation mapping.

## Areas Profiled

* Enneagram core type (1–9)
* Wing preference (optional, 1–9)
* Optional subtypes (if provided) such as self-preserving, social, or sexual
* Confirmation of prior test source or self-identified reflection

## Input Structure

* Dropdown menu for type selection (1–9)
* Dropdown for wing (1–9 or "None")
* Optional free-text field for source or subtype
* Optional toggle to enable/disable Enneagram-based insights

## Output

* Interpretive profile linked to type and wing
* Spiritual growth strengths and cautions based on Enneagram lens
* Integration into redemptive narrative (e.g., Type 6 may struggle with fear but shows loyalty in sanctification)
* Suggestions for inner healing, spiritual disciplines, or prayer focus areas that complement PsycheGenesis insights

## Insights Generated

* Enhanced narrative color for inner motivational struggles and core longings
* Cross-check with attachment style and trauma indicators (e.g., Type 9s may suppress conflict)
* Affirmation of God’s redemptive use of temperament, even when shaped through past wounds
* Optional spiritual growth paths tailored to each type’s sanctification tendencies

---

# Module: Spiritual Warfare Awareness

## Purpose

To assess the user's understanding, sensitivity, and responsiveness to spiritual warfare as a component of Christian life and leadership. This includes awareness of spiritual authority, discernment of spirits, and the experience of spiritual battle across mental, emotional, physical, and relational domains.

## Areas Profiled

* Knowledge of biblical spiritual warfare (Eph 6, 2 Cor 10, etc.)
* Sensitivity to spiritual atmospheres, oppression, and demonic influence
* Experience with intercession, deliverance, fasting, and standing firm in trials
* Understanding of authority in Christ and protection through the armor of God
* Past experiences of spiritual attack or supernatural breakthrough

## Question Structure

* Scaled self-assessment items (e.g., “I can sense spiritual oppression in places or people”)
* Experience-based questions (e.g., “Have you ever prayed for someone’s deliverance?”)
* Situational reflection items (e.g., “How do you respond during seasons of spiritual attack?”)

## Output

* Spiritual warfare sensitivity profile (Unaware, Aware, Active, Equipped)
* Key areas of discernment and strength (intercession, prophetic alertness, deliverance prayer)
* Suggested areas for growth or education

## Insights Generated

* Readiness for ministry in high-spiritual-conflict contexts
* Need for discipleship in spiritual authority or protection
* Correlation with giftings (e.g., prophetic, intercessory, apostolic)
* Recommendations for mentorship, study, or training in warfare and discernment

---

# Module: Heart Burden & Calling

## Purpose

* Surface and confirm Holy Spirit–given burdens and callings
* Clarify emotional/spiritual passion that may guide ministry or vocation
* Strengthen connection between personal experience, inner healing, and missional direction
* Provide weight to role recommendations and ministry alignment

## Areas Profiled

* Inner Healing & Restoration
* Prophetic Intercession
* Worship & Creative Expression
* Evangelism & Souls
* Teaching & Discipleship
* Justice & Mercy
* Children & Next Generation
* Marketplace Transformation
* Global Missions
* Apostolic Building / Strategy

## Question Structure

* Forced-choice primary burden selection
* Optional ranked secondary burdens (2–4 max)
* Each presented with a brief description and sample ministry pathways

## Output

* Primary burden scored highest (30–40% influence in role suggestions)
* Secondary burdens scored lower (15–25% total influence)
* Insight template includes narrative context, e.g., “You carry a deep burden for justice…”

## Insights Generated

* Integrated into Role Recommendation Engine
* Compared with maturity level and trauma healing stage
* Profiled in Admin Dashboard for ministry planning
* Scriptural anchors include Nehemiah 2:12, Psalm 37:4, Jeremiah 20:9, Romans 9:2–3

© 2025 Jacob Jackson