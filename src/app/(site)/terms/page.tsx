import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Attend",
  description: "Attend terms of use and conditions.",
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          These Terms of Use (&quot;Terms&quot;) govern access to and use of Attend, Nigeria&apos;s event engagement platform for virtual and hybrid corporate events, including the Attend mobile applications, the responsive web application, the administration portal, and all related services (collectively, &quot;Attend&quot;), operated by Meristem Securities Limited, a company incorporated under the laws of the Federal Republic of Nigeria (&quot;Meristem&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By creating an account, registering for an event, accessing Attend, or otherwise using any of our service, you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be bound by these Terms and by our Privacy Policy and Cookies Policy, each of which is incorporated into these Terms by reference. If you do not agree to these Terms, you must not access or use Attend.
          <br />
          If you are accessing Attend on behalf of a company, issuer, event organizer, registrar, or other organization (a &quot;Client Organization&quot;), you represent that you have authority to bind that organization, and &quot;you&quot; in these Terms refers to both you individually and the Client Organization.
        </p>
        <p>
          Where you access Attend in connection with an Annual General Meeting or other company or shareholder proceeding conducted for a Client Organization incorporated under the Companies and Allied Matters Act 2020 and registered with the Corporate Affairs Commission (&quot;CAC&quot;), including any such Client Organization that is additionally a public company or is regulated by the Securities and Exchange Commission of Nigeria (&quot;SEC&quot;), the Nigerian Exchange (&quot;NGX&quot;), the Central Bank of Nigeria (&quot;CBN&quot;), or any other applicable regulator, the specific terms in Section 8 (AGMs and Investor Relations) apply in addition to these general Terms, and prevail over the general Terms to the extent of any conflict for that module only.
        </p>
        <p>
          Any reference in these Terms to a statute, regulation, rule, or other law is a reference to that law as amended, re-enacted, consolidated, or replaced from time to time, and includes any subordinate legislation, rules, regulations, guidelines, or circulars made or issued under it.
        </p>
      </>
    ),
  },
  {
    id: "eligibility-and-account-registration",
    title: "Eligibility and account registration",
    content: (
      <div className="space-y-12 md:space-y-16">
        {/* 2.1 Eligibility */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">2.1</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Eligibility</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              You must be at least 18 years old, or the age of legal majority in your jurisdiction, to create an Attend account and to hold verified shareholder or delegate status. Persons under 18 may participate in designated modules (for example, as student participants in Hackathons & Innovation Challenges) only where the applicable event permits it and with the consent of a parent or guardian, in accordance with Section 31 of the Nigeria Data Protection Act 2023 (&quot;NDPA&quot;) regarding the processing of a child&apos;s personal data.
            </p>
            <p>
              To use Attend as a Client Organisation, you must be a duly incorporated or otherwise legally recognised entity with the legal capacity and authority to enter into binding agreements. Where you register or use Attend on behalf of a Client Organisation, you represent and warrant that you are duly authorised to act for and bind that organisation to these Terms and any other applicable agreements. Attend reserves the right to verify the identity, legal status and authority of any Client Organisation or its authorised representatives and may require the submission of corporate documents, regulatory licences, authorisations or other information reasonably necessary to establish eligibility or comply with applicable laws and regulatory requirements.
            </p>
            <p>
              Access to certain Attend features, modules or services may be subject to additional eligibility requirements or onboarding procedures determined by Meristem.
            </p>
            <p>
              In addition to these Terms, Client Organisations may be required to execute a separate commercial agreement governing the provision of the services. Where such an agreement is executed, it shall supplement these Terms and, to the extent of any inconsistency in relation to the services provided to the Client Organisation, the provisions of that agreement shall prevail over these Terms.
            </p>
          </div>
        </div>

        {/* 2.2 Identity Verification */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">2.2</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Identity Verification</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Depending on the module and the event, registration may require verification of your identity through your Bank Verification Number (&quot;BVN&quot;), National Identification Number (&quot;NIN&quot;), email or telephone verification, multi-factor authentication or other means integrated by us through licensed third-party verification providers. Failure to complete required verification may prevent participation. You authorize us to transmit the minimum necessary identifying information to these providers solely to confirm your identity and, where relevant, your shareholding or delegate status. Verification requirements and the specific identifiers used are described in the Privacy Policy.
            </p>
            <p>
              Where a Client Organization already holds and incorporates such identifiers into records it provides to us for an event — for example, a shareholder register, delegate list, membership database containing personal data, or other identifying data — the Client Organization is responsible for the lawful collection of that data and for having the appropriate legal basis to share it with us, and we process it solely to verify identity and administer the relevant event, in accordance with the Privacy Policy.
            </p>
          </div>
        </div>

        {/* 2.3 Account Accuracy and Security */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">2.3</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Account Accuracy and Security</h3>
          </div>
          <ul className="list-none">
            <li>• You must provide accurate, current, and complete information during registration and keep it up to date.</li>
            <li>• You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.</li>
            <li>• You must notify us immediately at the support channel designated on Attend if you suspect unauthorized access to your account.</li>
            <li>• We may require multi-factor authentication (&quot;MFA&quot;) for account access, and for AGM voting and proxy actions in particular, and may suspend an account where MFA cannot be completed.</li>
          </ul>
        </div>

        {/* 2.4 One Person, One Account */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">2.4</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">One Person, One Account</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Except where an event organizer expressly authorizes delegated or proxy access (for example, a company secretary managing shareholder communications, or a registrar acting for multiple shareholders), each individual may hold only one active Attend account per verified identity.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "the-attend-platform-and-its-modules",
    title: "The Attend Platform and its Modules",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Attend provides three event modules, each with tailored workflows. The general Terms in this document apply to all modules; module-specific terms are provided in Sections 8 to 10.
        </p>
        <p>
          <strong>Virtual AGMs &amp; Investor Relations</strong> supports Annual General Meetings, Extraordinary General Meetings, and shareholder communications. This module covers AGM notice publication, agenda upload, and proxy form distribution; electronic voting; proxy management; embargoed document rooms; live streaming; and Q&amp;A. After the meeting, Attend generates an auto-generated transcript, a statutory return data export, and a complete vote audit log, among other post-AGM outputs.
        </p>
        <p>
          <strong>Launch Events</strong> supports corporate product and brand launch events, conferences, webinars, and other corporate events. This module covers pre-launch teaser campaigns, invitation management, registration, live streaming, interactive engagement, digital press kit distribution, notifications, document management, post-event content, and event archiving.
        </p>
        <p>
          <strong>Hackathons &amp; Innovation Challenges</strong> supports competitive innovation events, covering team formation, submission portals, judging dashboards, and certificates.
        </p>
        <p>
          We may add, modify, or retire modules and features at our discretion, and will give you reasonable notice of material changes that affect an event already scheduled or in progress.
        </p>
        <p>
          For the purposes of these Terms, an &quot;Event&quot; means any physical, virtual or hybrid event hosted on Attend by us or a Client Organisation. The entity responsible for organising and managing an Event through Attend shall be referred to as the &quot;Event Organiser&quot;.
        </p>
        <p>
          For the Hackathon and Innovation Challenge, the Client organisation responsible for hosting the challenge shall be referred to as the &quot;Hackathon Sponsor&quot; or &quot;Challenge Sponsor&quot;.
        </p>
      </div>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          You agree not to, and not to permit any third party to:
        </p>
        <ul className="list-none">
          <li>• Impersonate any person or entity, or misrepresent your affiliation with a Client Organization, shareholder, or delegate.</li>
          <li>• Circumvent, disable, or interfere with identity verification, MFA, vote integrity, or other security features of Attend.</li>
          <li>• Cast a vote, submit a proxy, or take any AGM action on behalf of another person without valid, verifiable authorization.</li>
          <li>• Access, copy, reproduce, or redistribute embargoed documents, submission materials, or judging content before their designated release time or outside their authorized audience.</li>
          <li>• Upload or transmit malicious code, attempt to probe, scan, or test the vulnerability of Attend, or attempt to gain unauthorized access to any account, system, or network connected to Attend.</li>
          <li>• Use Attend to harass, defame, threaten, or unlawfully discriminate against any other user, speaker, or organizer.</li>
          <li>• Scrape, harvest, or extract data from Attend other than through features expressly provided for that purpose (such as an authorized export).</li>
          <li>• Use Attend in a manner that violates CAMA 2020, SEC rules, the NDPA, the Cybercrimes (Prohibition, Prevention, etc.) Act 2015, or any other applicable Nigerian or foreign law;</li>
          <li>• Reverse-engineer, decompile, or attempt to derive the source code of Attend, except to the extent such restriction is prohibited by applicable law.</li>
          <li>• Infringe intellectual property rights of Attend or other participants.</li>
        </ul>
        <p>
          We may suspend or terminate access, remove content, or refer conduct to law enforcement or regulators where we reasonably believe this section has been violated, particularly in relation to vote integrity or embargoed disclosure.
        </p>
      </div>
    ),
  },
  {
    id: "live-streaming-recording-and-content",
    title: "Live streaming, recording and content",
    content: (
      <div className="space-y-12 md:space-y-16">
        {/* 5.1 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">5.1</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Recording</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Sessions, AGM proceedings, product launches, and other events conducted on Attend may be recorded for compliance, dispute-resolution, quality, and archival purposes. Where an Event is recorded, this will be indicated on the registration page or at the start of the session, consistent with the notice obligations in the Privacy Policy. By participating, you consent to audiovisual recording, livestream broadcasting, replay distribution, inclusion in event archives, reasonable promotional use relating to the Event. Where legally required, additional consent shall be obtained.
            </p>
          </div>
        </div>

        {/* 5.2 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">5.2</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">User Generated Content</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Content you submit to Attend — including Q&amp;A submissions, chat messages, hackathon submissions, poll responses, and profile information (&quot;User Content&quot;) — remains yours, but you grant Attend and the relevant Client Organization a worldwide, royalty-free, non-exclusive licence to host, store, reproduce, display, distribute, transmit, process and archive that User Content for the purposes of operating the Event and providing the services on Attend, including post-event distribution where the organizer has enabled it. You warrant that you possess all necessary rights to upload such User Content.
            </p>
          </div>
        </div>

        {/* 5.3 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">5.3</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Organiser and Attend Content</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Presentations, streams, templates, branding, and platform software are owned by Attend, the relevant Client Organization/Event Organizer, or their licensors. You may not use this content outside Attend except as the organizer expressly permits (for example, a public product-launch recording marked for redistribution).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "fees-and-payment",
    title: "Fees and payment",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Certain events or features may require payment (for example, delegate registration fees for General Client Events, or premium hackathon submission tiers). Where payment is required:
        </p>
        <ul className="list-none">
          <li>• Fees, currency, and applicable taxes will be displayed before you confirm payment.</li>
          <li>• Payments made through Attend are processed by authorised integrated third-party payment service providers. We do not store your full payment card details. While we select reputable payment service providers, we are not responsible for any delays, errors, interruptions or other failures arising solely from the services provided by those third parties, except to the extent required by applicable law.</li>
          <li>• Refund eligibility is set by the relevant Event Organizer and displayed on the event&apos;s registration page, except where a refund is required by applicable law.</li>
          <li>• We will charge Client Organizations separate platform and licensing fees under a commercial agreement, which are not governed by these Terms.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "event-registration-notifications-and-communication",
    title: "Event registration, notifications and communication",
    content: (
      <div className="space-y-12 md:space-y-16">
        {/* 7.1 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.1</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Event Registration</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Registration for Events may require invitation codes, shareholder validation, payment of applicable fees, acceptance of additional Event-specific terms, and/or completion of regulatory checks. Registration remains subject to approval by the Event Organiser where applicable.
            </p>
          </div>
        </div>

        {/* 7.2 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.2</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Notifications and Communication</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              By registering for an event, you consent to receive service and event-related notifications (registration confirmations, reminders, streaming links, voting deadlines, embargo lifts, and results) by email, SMS, push notification, or in-app message. You may manage optional marketing communications through your account settings or the unsubscribe mechanism provided in each communication, without affecting service-related notifications necessary for the event for which you are registered.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "virtual-agms-and-investor-relations",
    title: "Virtual agms and investor relations",
    content: (
      <div className="space-y-12 md:space-y-16">
        {/* 8.1 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">8.1</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Purpose and Regulatory Framework</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              This module is designed to support Client Organizations in conducting Annual General Meetings, Extraordinary General Meetings, and related shareholder proceedings in a manner intended to be consistent with the Companies and Allied Matters Act 2020 (&quot;CAMA 2020&quot;), the rules and regulations of SEC, and, where applicable, the listing rules of the relevant Nigerian Exchange. We provide the technology, the Client Organization and its company secretary, registrars, and legal advisers remain responsible for ensuring that each meeting is convened, conducted, and concluded in accordance with the company&apos;s constitutional documents and applicable law. Use of Attend does not replace, and is not a substitute for, any statutory obligation of the Client Organization under applicable law with respect to company meetings, notices, voting procedures and any other regulated company activity.
            </p>
          </div>
        </div>

        {/* 8.2 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">8.2</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Electronic Voting</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <ul className="list-none">
              <li>• Where electronic voting is available, please note that:
                <ul className="list-none pl-6 space-y-2 mt-4">
                  <li>- votes shall be cast only by authorised persons.</li>
                  <li>- voting rights remain subject to the provisions of the Companies and Allied Matters Act (and the amendments in the Business Facilitation Act), any applicable law and/or the Event Organiser&apos;s governance/constitutional documents.</li>
                  <li>- voting windows may close automatically.</li>
                  <li>- duplicate votes may be invalidated.</li>
                  <li>- electronic audit trails shall constitute evidence of participation.</li>
                </ul>
              </li>
              <li>• Votes cast through Attend are recorded against the verified identity of the shareholder or authorized proxy and are time-stamped and logged in an audit trail.</li>
              <li>• We implements technical measures intended to preserve vote integrity, including one-vote-per-verified-holding controls, MFA at the point of voting, and tamper-evident logging; however, the Client Organization&apos;s returning officer or registrar remains responsible for the official declaration of results under CAMA 2020.</li>
              <li>• We do not adjudicate disputes over shareholding entitlement, quorum, or the validity of a resolution; such disputes are matters between the shareholder, the Client Organization, its registrars, and, where applicable, SEC or the courts.</li>
              <li>• Diaspora and overseas shareholders have the same electronic voting and proxy rights as shareholders resident in Nigeria; residing outside Nigeria does not by itself limit your entitlement to vote, appoint a proxy, or access embargoed documents, subject to the same verification and eligibility requirements described in Section 2.2 and this Section 8.</li>
            </ul>
          </div>
        </div>

        {/* 8.3 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">8.3</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Proxy Management</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <div className="pl-4 border-l-2 border-[#e4e6e7]">
              <div className="flex items-center gap-2 mb-2 text-[#00A650] font-semibold text-[11px]">8.3.1</div>
              <p>
                Attend allows a shareholder to appoint a proxy electronically, subject to the notice periods and form requirements of the Client Organization&apos;s articles of association and CAMA 2020. We are not a party to the appointment and make no representation as to its legal sufficiency. The Client Organization&apos;s company secretary is responsible for verifying that proxy appointments meet statutory requirements.
              </p>
            </div>
            
            <div className="pl-4 border-l-2 border-[#e4e6e7]">
              <div className="flex items-center gap-2 mb-2 text-[#00A650] font-semibold text-[11px]">8.3.2</div>
              <div>
                <p className="mb-2">If you are attending an AGM through a proxy, please note the following:</p>
                <ul className="list-none">
                  <li>• proxies must comply with applicable corporate law.</li>
                  <li>• appointment procedures shall be determined by the Event Organiser.</li>
                  <li>• verification requirements may apply.</li>
                  <li>• proxy submissions after published deadlines may not be accepted.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 8.4 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">8.4</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Embargoed Documents</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Annual reports, financial statements, and other price-sensitive documents may be made available in an embargoed state, accessible only to verified shareholders and only after the release time set by the Client Organization, consistent with market-disclosure obligations under CAMA and SEC Rules. Accessing, screenshotting, downloading, or distributing an embargoed document before its release, or outside the audience it was released to, is a violation of Section 4 of these Terms and may expose you to liability under the Investments and Securities Act 2025 or any other applicable law.
            </p>
          </div>
        </div>

        {/* 8.5 */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">8.5</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Retention</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Voting records, proxy appointments, meeting minutes uploaded by the Client Organization, and related audit logs for AGM proceedings shall be retained in accordance with applicable retention laws to meet corporate and securities record-keeping expectations. See Section 9 of our Privacy Policy for Data Retention provisions.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hackathons-and-innovation-challenges-module",
    title: "Hackathons and Innovation Challenges module",
    content: (
      <div className="space-y-8 md:space-y-10">
        <ul className="list-none">
          <li>• Team Formation: Participants may form or join teams through Attend. Team composition, eligibility (including any student, age, or institutional-affiliation requirements), and permitted team size are set by the Challenge Sponsor.</li>
          <li>• Submission Portal: You retain ownership of intellectual property you submit but grant the Challenge Sponsor and us a licence to host, store, reproduce, display, and evaluate the submission for the purposes of administering the challenge, including publishing shortlisted or winning entries where the event rules disclose this.</li>
          <li>• Judging Dashboards: Scores, rankings, and judge comments are managed by the Challenge Sponsor through Attend. We provide the tooling and do not determine winners.</li>
          <li>• Certificates: Participation and award certificates generated through Attend are issued on behalf of, and are the responsibility of, the Challenge Sponsor.</li>
          <li>• Confidentiality: Where a hackathon involves a Client Organization&apos;s confidential challenge statements or datasets, participants must comply with any confidentiality terms presented at registration, in addition to these Terms.</li>
          <li>• Where applicable:
            <ul className="list-none pl-6 space-y-2 mt-4">
              <li>- submission deadlines are final unless extended.</li>
              <li>- judging decisions are final unless otherwise stated.</li>
              <li>- prize eligibility shall be determined by Challenge-specific terms.</li>
            </ul>
          </li>
        </ul>
        <p>
          Participation does not guarantee selection or awards.
        </p>
        <p>
          Any licence, assignment, or transfer of intellectual property rights for the purpose of developing, implementing or commercialising a submission shall be governed exclusively by the applicable Challenge Rules or a separate written agreement between the participant and the Challenge Sponsor. Attend shall not acquire any ownership interest in participants&apos; submissions.
        </p>
      </div>
    ),
  },
  {
    id: "launch-event-module",
    title: "Launch Event module",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          This module supports product and brand launches, conferences, webinars, seminars and other corporate events that do not fall within the AGM or Hackathon &amp; Innovation Challenge modules. The module provides features including event registration, live streaming, media and press distribution, notifications, document management and post-event content sharing.
        </p>
        <p>
          Client Organisations are solely responsible for the content of their events and for ensuring that all presentations, promotional materials, announcements, claims, disclosures and other event content comply with all applicable laws, regulations and industry standards, including any requirements imposed by the relevant Nigerian regulatory authorities. Where an event relates to regulated products, services or industries (for example, financial services, pharmaceuticals or healthcare products), the Client Organisation is responsible for ensuring that all required approvals, disclosures and regulatory requirements have been satisfied.
        </p>
        <p>
          We provide the technology infrastructure for hosting and managing events through this module and do not review, approve, endorse or verify the accuracy, legality or regulatory compliance of event content unless separately engaged to do so.
        </p>
      </div>
    ),
  },
  {
    id: "regulatory-compliance-and-data-protection",
    title: "Regulatory compliance and data protection",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We process personal data in accordance with the Nigeria Data Protection Act 2023 and, where applicable, the data protection laws of other jurisdictions in which Users are located. Full detail on what is collected, why, and for how long is set out in the Privacy Policy, which forms part of these Terms. Where these Terms and the Privacy Policy conflict on a data-handling question, the Privacy Policy shall prevail.
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Attend including its software, design, trademarks (including the ATTEND name and logo), and underlying technology, is owned by Meristem Securities Limited and is a registered trademark. Nothing in these Terms transfers ownership of any Attend intellectual property to you or to a Client Organization, except as expressly agreed in a separate written licence.
        </p>
      </div>
    ),
  },
  {
    id: "third-party-services",
    title: "Third party services",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We integrate third-party services for identity verification, live streaming infrastructure, and payment processing. We select these providers with reasonable care, but each provider&apos;s own terms and privacy practices also apply to the relevant part of your interaction, and we are not liable for a third-party provider&apos;s acts, omissions, or downtime, except where required by applicable Nigerian law.
        </p>
      </div>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Attend is provided &quot;as is&quot; and &quot;as available.&quot; While we take reasonable steps to maintain uptime, accuracy of scheduling information, and vote-integrity controls, we do not warrant that Attend will be uninterrupted, error-free, compatible with every device, or completely secure, and do not warrant uninterrupted livestream quality or internet connectivity, or the outcome or validity of any corporate resolution, election, or judging decision conducted through it. Services may be interrupted due to maintenance, upgrades, force majeure, telecommunication failures, third party outages, cyber incidents and related events.
        </p>
        <p>
          Except where prohibited by law, we disclaim all implied warranties including merchantability, fitness for a particular purpose and non-infringement. Nothing in these Terms excludes or limits any right, remedy, warranty or liability that cannot lawfully be excluded or limited under applicable law.
        </p>
      </div>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We are committed to providing secure and reliable services through Attend. However, to the fullest extent permitted by applicable law, neither we nor our subsidiaries, affiliates, directors, officers, employees, agents, licensors, or service providers will be liable for:
        </p>
        <ul className="list-none">
          <li>• Any indirect, incidental, special, consequential, or punitive losses, including loss of profits, data, goodwill, or business opportunities.</li>
          <li>• Any unauthorized access to or alteration of your Account or data resulting from circumstances beyond our reasonable control.</li>
          <li>• The actions or omissions of third-party service providers.</li>
          <li>• Events beyond our reasonable control, including force majeure events such as natural disasters, epidemics, pandemics, government and regulatory actions, strikes, civil unrest, system-wide telecommunications failures, or cyber incidents affecting external infrastructure.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          You agree to indemnify and hold harmless Meristem Securities Limited, its officers, employees, and agents from any claim, loss, or expense (including reasonable legal fees) arising from your breach of these Terms, your violation of applicable law, or your infringement of any third party&apos;s rights in connection with your use of Attend.
        </p>
      </div>
    ),
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and termination",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We may suspend or terminate your access to Attend, with or without notice, where you breach these Terms, where required by a regulator or court order, or where necessary to protect the security or integrity of an event (in particular, an AGM in progress). A Client Organization may also terminate an individual user&apos;s access to its own event, subject to any statutory rights that user may have as a shareholder to participate in that meeting.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law-and-dispute-resolution",
    title: "Governing law and dispute resolution",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or in connection with these Terms that falls within the jurisdiction of the Investment and Securities Tribunal under applicable capital market laws shall be determined exclusively by the Tribunal. Subject to the foregoing, the competent courts of the Federal Republic of Nigeria shall have jurisdiction over any dispute arising out of or in connection with these Terms, unless the parties agree in writing to refer such dispute to arbitration in accordance with the Arbitration and Mediation Act, 2023.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to these terms",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We may update these Terms from time to time. Where a change is material, we will provide notice through Attend or by email at least fourteen (14) days before the change takes effect, except where a shorter period is required to comply with law or regulator direction. Continued use of Attend after the effective date of an update constitutes acceptance of the revised Terms.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Questions about these Terms may be directed to <a href="mailto:contact@experienceattend.com" className="text-[#00A650] hover:underline">contact@experienceattend.com</a>, including the Data Protection Officer contact listed in the Privacy Policy for data-related questions.
        </p>
      </div>
    ),
  }

];

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      title="Attend terms of use"
      breadcrumb="TERMS AND CONDITIONS"
      sections={sections}
    />
  );
}
