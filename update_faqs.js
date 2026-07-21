const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'public/locales');
const locales = fs.readdirSync(localesDir);

const contactFaqs = [
  {
    q: "How quickly can you resolve my insurance issue?",
    a: "Most general queries are resolved within 24-48 hours. Complex claim dispute resolutions can take anywhere between 15 to 45 days depending on the stage of escalation."
  },
  {
    q: "Do you charge upfront fees for claim assistance?",
    a: "For initial assessment and consultation, we charge no fees. For extensive claim recovery and ombudsman representation, our fee structure is transparently shared beforehand."
  },
  {
    q: "Can you help with policies from any insurance company?",
    a: "Yes, our experts have experience dealing with all major public and private life, health, and general insurance companies in India."
  },
  {
    q: "Are your services available outside our main branches?",
    a: "Absolutely. We provide comprehensive online and phone support to clients across all major states in India."
  }
];

const supportFaqs = {
  stuck: {
    q: "What should I do if my insurance claim has been stuck for months?",
    a: "If your claim hasn't been resolved within 30 days, it's likely stuck in the insurer's internal process. Contact us with your claim reference number and we'll escalate it through the Grievance Redressal Officer (GRO), IRDAI Bima Bharosa, or the Insurance Ombudsman depending on the severity and duration of the delay."
  },
  old: {
    q: "Can you help with a claim that was rejected years ago?",
    a: "Yes. The Insurance Ombudsman accepts complaints within one year of the insurer's final response. However, IRDAI has no time limit for regulatory complaints. For very old cases (2+ years), consumer court remedies are also available. We assess every case individually to determine the best recovery route."
  },
  how_to: {
    q: "How do I file a complaint against my insurance company?",
    a: "The process involves three levels: (1) Internal Grievance to the insurer's GRO — 15-day response window, (2) IRDAI Bima Bharosa portal at igms.irda.gov.in, and (3) Insurance Ombudsman — a zero-cost, semi-judicial body. We handle the entire complaint filing and documentation process on your behalf."
  },
  docs: {
    q: "What documents do I need for claim support?",
    a: "The required documents vary by case: For health claims — policy copy, rejection letter, discharge summary, medical bills, and payment receipts. For death claims — death certificate, policy bond, nominee ID, post-mortem report (if applicable). For revival — policy number, premium payment history, and health declaration form. Don't worry if you're missing documents — we help locate and collect them."
  }
};

for (const locale of locales) {
  const filePath = path.join(localesDir, locale, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Update Contact FAQs
    if (data.contact) {
      data.contact.faqs = contactFaqs;
      data.contact.faq_title = "Frequently Asked Questions";
    }

    // Update Support Page FAQs
    if (data.support_page) {
      if (!data.support_page.faqs) {
        data.support_page.faqs = {};
      }
      data.support_page.faqs = supportFaqs;
      data.support_page.faq_title = "Frequently Asked Questions";
    }

    // Update Location Page FAQs
    if (data.location_page) {
      data.location_page.faq_title = "Frequently Asked Questions about {{service}} in {{city}}";
      data.location_page.faq_local_answer_suffix = "Our local advisors in {{city}}, {{state}} are ready to help you with this.";
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated FAQs for locale: ${locale}`);
  }
}
