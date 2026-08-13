import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Attend",
  description: "Attend cookies policy and how we use similar technologies.",
};

const sections: LegalSection[] = [
  {
    id: "about-this-policy",
    title: "About this policy",
    content: (
      <>
        <p>
          This Cookies Policy explains how Meristem Securities Limited (&quot;Meristem&quot;, &quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on the Attend website and admin portal, and equivalent tracking technologies in the Attend mobile apps (&quot;collectively &quot;Attend&quot;). It should be read together with our Privacy Policy, which explains how we handle the personal data these technologies may collect.
        </p>
        <p>
          By continuing to use Attend after being presented with our cookie banner or consent screen, or by adjusting your cookie preferences to allow certain categories, you consent to our use of cookies as described here, in accordance with the Nigeria Data Protection Act 2023.
        </p>
      </>
    ),
  },
  {
    id: "what-are-cookies-and-similar-technologies",
    title: "What are cookies and similar technologies",
    content: (
      <p>
        Cookies are small text files placed on your device when you visit a website, used to remember information about your visit. Similar technologies include local storage, pixels, and, in mobile apps, device identifiers and software development kit (SDK) -based analytics that perform an equivalent function without a traditional browser cookie.
      </p>
    ),
  },
  {
    id: "categories-of-cookies-we-use",
    title: "Categories of cookies we use",
    content: (
      <>
        <p>
          <strong>Strictly Necessary cookies</strong> are required for login sessions, multi-factor authentication (MFA), vote-session integrity, and basic security. Attend cannot function without these, and they cannot be opted out of.
        </p>
        <p>
          <strong>Functional cookies</strong> remember your preferences, such as language, module shortcuts, and notification settings. You can opt out of these via your cookie preferences.
        </p>
        <p>
          <strong>Analytics and Performance cookies</strong> help us understand how Attend is used, measure event attendance funnels, and identify errors. You can opt out of these via your cookie preferences.
        </p>
        <p>
          <strong>Streaming and Media cookies</strong> support live-stream playback quality, buffering, and session continuity. You can opt out of these to a limited extent — disabling them may degrade streaming quality.
        </p>
        <p>
          <strong>Marketing cookies,</strong> where used, measure the effectiveness of our own promotional communications about Attend. They are not used for third-party advertising. You can opt out of these via your cookie preferences.
        </p>
      </>
    ),
  },
  {
    id: "mobile-apps",
    title: "Mobile apps",
    content: (
      <p>
        The Attend mobile apps do not use traditional browser cookies but use functionally equivalent technologies, including secure local storage for session tokens and device identifiers used for push notification delivery and crash diagnostics. You can manage push notification permissions and, on supported devices, advertising or analytics identifiers, through your device&apos;s operating system settings.
      </p>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-party cookies",
    content: (
      <p>
        Where Attend embeds third-party functionality, for example, a streaming infrastructure player, or a payment gateway checkout, those providers may set their own cookies subject to their own privacy and cookie policies. We do not control these third-party cookies directly but selects providers that are expected to comply with applicable Nigerian and international data protection standards.
      </p>
    ),
  },
  {
    id: "managing-your-cookie-preferences",
    title: "Managing your cookie preferences",
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          On first visit to the Attend website, you will be presented with a cookie consent banner allowing you to accept all, reject non-essential, or customize preferences by category.
        </li>
        <li>
          You can update your preferences at any time through the &quot;Cookie Preferences&quot; link in Attend&apos;s footer or your account settings.
        </li>
        <li>
          You can also control cookies through your browser settings, including blocking or deleting cookies. Note that blocking strictly necessary cookies will prevent core functions such as login, MFA, and vote-session integrity from working.
        </li>
        <li>
          For mobile apps, notification and identifier permissions can be managed in your device&apos;s system settings under the Attend app entry.
        </li>
      </ul>
    ),
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Cookies Policy as our use of cookies and similar technologies changes. Material changes will be reflected in an updated &quot;Effective Date&quot; and, where required, a renewed consent prompt.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about this Cookies Policy can be directed to our Data Protection Officer on <a href="mailto:dpo@experienceattend.com">dpo@experienceattend.com</a>.
      </p>
    ),
  },
];

export default function CookiesPolicyPage() {
  return (
    <LegalPageLayout
      title="Attend cookies policy"
      breadcrumb="COOKIES"
      effectiveDate="Effective date 08 – 14 – 2026"
      sections={sections}
    />
  );
}
