import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Attend",
  description: "Attend privacy policy and how we process your information.",
};

const sections: LegalSection[] = [
  {
    id: "who-this-policy-covers",
    title: "Who this policy covers",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          This Privacy Policy explains how Meristem Securities Limited (&quot;Meristem&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, discloses, and protects personal data when you use the Attend platform (&quot;Attend&quot;), including the AGMs &amp; Investor Relations, Launch Event, and Hackathons &amp; Innovation Challenges, across our mobile apps, web app, and admin portal.
        </p>
        <p>
          This Policy applies to shareholders, retail and diaspora investors, company secretaries, event organizers, delegates, students, challenge judges, speakers, and any other individual whose personal data we process in connection with Attend. Where we process personal data on behalf of a Client Organization (for example, a listed company&apos;s shareholder register for an AGM), we acts as a data processor for that data and the Client Organization acts as data controller; this Policy explains Meristem&apos;s own controller-role processing (such as account and platform-usage data) and summarizes the processor-role safeguards that apply to Client Organization data.
        </p>
      </div>
    ),
  },
  {
    id: "legal-framework",
    title: "Legal framework",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Attend processes personal data in accordance with the Nigeria Data Protection Act 2023 (&quot;NDPA&quot;), as well as all other applicable laws, regulations and regulatory requirements governing identity verification services, shareholder records, corporate events and other activities conducted through Attend, as may be amended or replaced from time to time.
        </p>
        <p>
          Any reference in this Policy to a statute, regulation, rule, or other law is a reference to that law as amended, re-enacted, consolidated, or replaced from time to time, and includes any subordinate legislation, rules, regulations, guidelines, or circulars made or issued under it.
        </p>
      </div>
    ),
  },
  {
    id: "personal-data-we-collect",
    title: "Personal data we collect",
    content: (
      <div className="space-y-8 md:space-y-10">
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">3.1</span>
          <div className="flex-1 space-y-4">
            <p>
              The categories of personal data we collect depend on how you interact with Attend and the services you use. We may collect:
            </p>
            <ul className="list-none space-y-2">
              <li>• <strong>Identity and verification information,</strong> including your full name, date of birth, Bank Verification Number (BVN), National Identification Number (NIN), shareholder identification details, and biometric information such as selfies or liveness images where required for identity verification. This information is collected directly from you and, where applicable, from authorised identity verification providers.</li>
              <li>• <strong>Account information,</strong> including your email address, telephone number, encrypted or hashed password, account type or role, and your affiliation with a Client Organisation. This information is provided by you during account registration or subsequently updated by you or your Client Organisation.</li>
              <li>• <strong>Event participation information,</strong> including event registrations, attendance records, voting records, proxy appointments, questions submitted during events, poll responses, hackathon team details, challenge submissions, judging results and other information relating to your participation in events hosted through Attend. This information may be provided by you, the relevant Client Organisation, event administrators, challenge judges or other authorised participants.</li>
              <li>• <strong>Communications information,</strong> including your notification preferences, communications exchanged through Attend, chat messages where enabled, and correspondence with our customer support team.</li>
              <li>• <strong>Payment information,</strong> including your billing details, payment references and limited payment card information such as the last four digits of your card. Full payment card details are processed and stored only by our authorised payment service providers and are not stored by Attend.</li>
              <li>• <strong>Technical and usage information,</strong> including your IP address, device identifiers, browser type, operating system, application version, login records, session duration, usage logs, diagnostic information and crash reports. This information is collected automatically when you access or use Attend.</li>
              <li>• <strong>Streaming and recording information,</strong> including audio, video, screen-sharing content and other audiovisual materials where you participate in or contribute to recorded or livestreamed events. Such recordings may form part of the event archive or be made available after the event in accordance with the applicable event settings.</li>
              <li>• <strong>Cookies and similar technologies,</strong> including information collected through cookies, web beacons and comparable technologies to enable platform functionality, improve user experience, analyse usage and enhance security. Further information is available in our Cookies Policy.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">3.2</span>
          <div className="flex-1">
            <p>
              Where an event is to be recorded, we or the relevant Client Organisation will notify participants before recording begins, including by indicating this on the event registration page and, where practicable, at the start of the session (for example, through an on-screen notice or a verbal announcement by the host). If you join a session after the recording notice has been given, your continued participation will constitute acknowledgement that the session is being recorded.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-collect-personal-data",
    title: "How we collect personal data",
    content: (
      <div className="space-y-8 md:space-y-10">
        <ul className="list-none space-y-2">
          <li>• Directly from you — when you register an account, register for an event, cast a vote, appoint a proxy, submit hackathon work, or contact support.</li>
          <li>• From Client Organizations — for example, a company or its registrar may upload a shareholder register to enable AGM voting, or an employer may register delegates for a General Client Event. Where such records already incorporate personal identifiers such as BVN or NIN, the Client Organization is responsible for having lawfully collected that data and for having an appropriate legal basis to share it with us. We process it solely to verify identity and administer the relevant event.</li>
          <li>• From identity verification providers — personal identifier matches (e.g BVN and NIN) are performed by licensed third-party verification providers. We receive a verification result and the minimum identifying data necessary, rather than broader banking or national-identity records.</li>
          <li>• Automatically — through use of Attend (device, log, and streaming data as described above).</li>
        </ul>
      </div>
    ),
  },
  {
    id: "why-we-process-your-personal-data",
    title: "Why we process your personal data",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We process your personal data only where we have a lawful basis for doing so and for purposes that are compatible with the operation of Attend. Depending on your use of Attend and the services you access, we may process your personal data for one or more of the following purposes:
        </p>

        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.1</span>
          <div className="flex-1">
            <p>To verify your identity and, where applicable, your status as a shareholder, delegate, proxy holder, employee, participant or other authorised user, including through identity verification services. We process this information where necessary to comply with applicable legal and regulatory requirements or with your consent where required.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.2</span>
          <div className="flex-1">
            <p>To create, maintain and administer your account, authenticate your identity, provide access to Attend and enable you to use our services. This processing is necessary for the performance of our contract with you.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.3</span>
          <div className="flex-1">
            <p>To facilitate event registration, provide access to virtual or hybrid events, deliver livestreaming services, manage attendance, and send event-related notifications and updates. This processing is necessary for the performance of our contract with you.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.4</span>
          <div className="flex-1">
            <p>To record, validate and maintain electronic voting records, proxy appointments and other governance-related activities conducted through Attend, where required to comply with applicable legal and regulatory obligations or to support the legitimate interests of the relevant Client Organisation in ensuring the integrity of its corporate governance processes.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.5</span>
          <div className="flex-1">
            <p>To manage access to confidential or embargoed documents, announcements and event materials, where necessary to comply with applicable legal or regulatory requirements or to protect the legitimate interests of the relevant Client Organisation.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.6</span>
          <div className="flex-1">
            <p>To administer hackathons, innovation challenges and similar programmes, including participant registration, team formation, submission management, judging, scoring, prize administration and, where applicable, showcasing shortlisted or winning entries. Where we publish submissions or participant information beyond what is necessary to administer the programme, we will do so with your consent or as otherwise permitted by the applicable challenge rules.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.7</span>
          <div className="flex-1">
            <p>To process payments, issue receipts and administer paid events or subscriptions. This processing is necessary for the performance of our contract with you.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.8</span>
          <div className="flex-1">
            <p>To communicate with you regarding your account, events you have registered for, service announcements, security alerts, deadlines, reminders, results and other operational communications necessary for the provision of our services. Such processing is necessary for the performance of our contract with you or for our legitimate interests in operating Attend.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.9</span>
          <div className="flex-1">
            <p>To send marketing communications, newsletters, promotional materials and information about our products, services or events where you have consented to receive such communications or where otherwise permitted by applicable law. You may withdraw your consent or unsubscribe from marketing communications at any time.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.10</span>
          <div className="flex-1">
            <p>To protect the security, integrity and reliability of Attend by detecting, investigating and preventing fraud, unauthorised access, cyber threats, abuse, vote manipulation and other unlawful or prohibited activities. This processing is necessary to comply with applicable legal obligations and to protect our legitimate interests and those of our users and Client Organisations.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px] pt-1">5.11</span>
          <div className="flex-1">
            <p>To comply with applicable legal, regulatory, judicial, audit, accounting and record-retention requirements, including maintaining records necessary to demonstrate compliance with our legal and regulatory obligations.</p>
          </div>
        </div>

        <p>
          Where we rely on your consent as the legal basis for processing your personal data, you may withdraw that consent at any time. Withdrawal of consent will not affect the lawfulness of any processing carried out before the consent was withdrawn and may affect our ability to provide certain services where the processing is necessary for those services.
        </p>
      </div>
    ),
  },
  {
    id: "sensitive-and-special-category-data",
    title: "Sensitive and special category data",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Where, for any reason, we collect a sensitive identifier classified as special category data under the NDPA which requires heightened protection, we apply additional encryption, restricted internal access, and minimum-necessary transmission to verification providers for this data. Where an event captures health information (for example, dietary or accessibility requirements for an in-person hybrid component), that data is collected only with your explicit consent and used solely for the stated logistical purpose.
        </p>
      </div>
    ),
  },
  {
    id: "how-we-share-personal-data",
    title: "How we share personal data",
    content: (
      <div className="space-y-12 md:space-y-16">
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.1</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">With Client Organisations</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              Where you register for or participate in an event, the relevant Client Organization (the company holding the AGM, the event host, or the hackathon/challenge sponsor) receives the personal data reasonably necessary to run that event — for example, your registration details, attendance, votes cast (in aggregate or individually, as required for the official record), Q&amp;A submissions, and, for hackathons, your submission and judging scores. In some cases, the flow of identifying data runs the other way: the Client Organization may already hold and provide identifiers such as your shareholder details to us as part of a shareholder register, delegate list, or similar record, rather than Attend collecting that identifier from you directly. In that scenario, the Client Organization is the source of the data and remains responsible for the lawfulness of its original collection and we process it strictly to verify your identity and administer the event.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.2</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">With Service Providers (Data Processors)</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              We share personal data with a limited set of service providers who process it on our behalf. Identity verification providers receive your name, ID number, and date of birth — the minimum necessary — to perform BVN and NIN verification. Our streaming infrastructure provider receives session video and audio, and a participant name overlay where that feature is enabled, to deliver live and recorded video. Our payment gateway receives billing details and transaction data to process paid registrations. Our cloud hosting and storage provider holds all categories of personal data described in Section 3, encrypted at rest, to host Attend and its databases. Our SMS, email, and push notification provider receives your name, email, and phone number to deliver notifications.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.3</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">Regulatory and Legal Disclosure</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              We may disclose personal data to the Securities and Exchange Commission (SEC), the Nigeria Data Protection Commission (NDPC), the Corporate Affairs Commission (CAC), law enforcement, or a court, where required by law, in connection with an AGM dispute, a fraud or security investigation, or a lawful regulatory request.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-[#00A650] font-semibold text-[13px] md:text-[14px]">7.4</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0a2518]">No Sale of Personal Data</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p>
              We do not sell personal data to third parties for our own marketing purposes.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "diaspora-and-overseas-users",
    title: "Diaspora and overseas users",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We support Nigerian shareholders, delegates, and other users who live outside Nigeria, including diaspora investors participating in an AGM or participants of any Hackathon Challenge from abroad. Where you access Attend from outside Nigeria, the following applies in addition to the rest of this Policy:
        </p>
        <ul className="list-none space-y-2">
          <li>• Verification: If you hold a BVN or NIN, the standard verification path in Section 4 applies regardless of where you live. If you do not hold either, for example, because you have never held a Nigerian bank account or National Identification Number, we or the relevant Client Organization will offer an alternative verification method, such as international passport verification or another form of identity check performed by a licensed verification provider, so that you are not excluded from participating solely because you live overseas.</li>
          <li>• Applicable law: Your personal data continues to be processed in accordance with the NDPA and GAID. Depending on where you are physically located when you use Attend, the data protection law of that jurisdiction (for example, UK GDPR or EU GDPR) may also apply to the processing of your data by us, independently of your Nigerian citizenship or shareholder status. Where another jurisdiction&apos;s law applies and offers you additional or different rights, we will honour those rights to the extent required by that law, without reducing the rights available to you under the NDPA.</li>
          <li>• Voting parity: Diaspora and overseas shareholders have the same electronic voting and proxy rights as shareholders resident in Nigeria. Residence outside Nigeria does not by itself limit your entitlement to vote, appoint a proxy, or access embargoed documents, subject to the Client organisation&apos;s governance processes and constitutional documents, applicable laws and the same verification and eligibility requirements that apply to all shareholders under Section 8 of the Terms of Use.</li>
          <li>• Communications and payments: Notifications may be sent to an international phone number or email address, and paid registrations as set by the Client Organisation may be processed in a foreign currency at the rate and fees set by our payment gateway or the Client Organisation. We are not responsible for currency conversion charges or delivery issues caused by your local network or mobile operator.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-retention",
    title: "Data retention",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We retain your personal data only for as long as it is reasonably necessary or legally required to fulfil the purposes for which it was collected, to provide the Attend platform and our services, to comply with applicable legal and regulatory obligations, to resolve disputes, to enforce our agreements and to protect our legitimate business interests.
        </p>
        <p>
          At the end of the applicable retention period, we will securely delete, anonymise or otherwise dispose of your personal data in accordance with our data retention and disposal procedures, unless we are required or permitted by applicable law or an ongoing legal, regulatory or dispute resolution process to retain it for a longer period.
        </p>
      </div>
    ),
  },
  {
    id: "how-we-protect-personal-data",
    title: "How we protect personal data",
    content: (
      <div className="space-y-8 md:space-y-10">
        <ul className="list-none space-y-2">
          <li>• Encryption of personal data in transit and at rest.</li>
          <li>• Multi-factor authentication for account access and, in particular, for AGM voting and proxy actions.</li>
          <li>• Role-based access control restricting internal staff and Client Organization administrators to the minimum data necessary for their role.</li>
          <li>• Vote-integrity controls, including tamper-evident audit logging, to detect and prevent duplicate, altered, or unauthorized votes.</li>
          <li>• Segregation of sensitive identifiers from general profile data, with restricted internal access.</li>
          <li>• Regular security testing and monitoring of Attend&apos;s API gateway, identity service, and data storage layers.</li>
          <li>• Documented incident-response procedures, including notification to the Nigeria Data Protection Commission and affected individuals within the timeframes required by the NDPA where a personal data breach poses a risk to your rights.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Subject to applicable exceptions under the NDPA (including exceptions necessary for AGM record integrity during an active voting period), you have the right to:
        </p>
        <ul className="list-none space-y-2">
          <li>a. Access the personal data we hold about you.</li>
          <li>b. Request correction of inaccurate or incomplete personal data.</li>
          <li>c. Request deletion of your personal data, where retention is not required by law (See Section 9 – Data Retention).</li>
          <li>d. Object to or restrict certain processing, including marketing communications.</li>
          <li>e. Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing before withdrawal.</li>
          <li>f. Request a portable copy of data you provided directly to us, in a structured, commonly used format.</li>
          <li>g. Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
        </ul>
        <p>
          To exercise these rights, contact our Data Protection Officer using the details in Section 15. We will respond within the timeframe required by the NDPA, generally within one month of a verified request.
        </p>
      </div>
    ),
  },
  {
    id: "childrens-data",
    title: "Children's data",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Attend is not directed at children under 13. Specifically, the AGMs &amp; Investor Relations module does not permit participation by minors under any circumstances, regardless of age, as shareholding, proxy appointment, and voting require legal capacity under applicable Nigerian law. Where a Hackathon &amp; Innovation Challenge or similar module admits student participants or other participants who are minors under Nigerian law, we collect only the data necessary for participation and requires organizer confirmation of parental or guardian consent, in accordance with Section 31 of the NDPA regarding processing of a child&apos;s personal data.
        </p>
      </div>
    ),
  },
  {
    id: "automated-decision-making",
    title: "Automated decision-making",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We do not use fully automated decision-making that produces legal or similarly significant effects on you without human involvement. Vote counting, hackathon scoring aggregation, and identity-verification matching are automated processes. Attend produces the vote tally and audit log directly from votes as cast, without discretionary alteration. Official results and eligibility determinations are formally declared, confirmed and certified by the Client Organization&apos;s returning officer, registrar, or judging panel before is is treated as final.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to this policy",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          We may update this Privacy Policy to reflect changes in our practices or in applicable law. Material changes will be notified through Attend or by email at least fourteen (14) days before they take effect, except where a shorter period is required by law or regulator direction.
        </p>
      </div>
    ),
  },
  {
    id: "contact-and-data-protection-officer",
    title: "Contact and data protection officer",
    content: (
      <div className="space-y-8 md:space-y-10">
        <p>
          Questions, requests, or complaints regarding this Privacy Policy or your personal data may be directed to our Data Protection Officer at <a href="mailto:dpo@experienceattend.com" className="text-[#00A650] hover:underline">dpo@experienceattend.com</a>. You may also lodge a complaint directly with the Nigeria Data Protection Commission (NDPC).
        </p>
      </div>
    ),
  }
];


export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Attend privacy policy"
      breadcrumb="PRIVACY POLICY"
      sections={sections}
    />
  );
}
