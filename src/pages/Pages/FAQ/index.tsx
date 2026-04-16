import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const faqs = [
  { q: "How do I reset my password?", a: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email." },
  { q: "How can I upgrade my plan?", a: "Go to Settings > Billing and click 'Upgrade Plan' to see available options." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
  { q: "How do I contact support?", a: "You can reach our support team via email at support@company.com or through the chat widget." },
];

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="FAQ | TailAdmin" description="Frequently asked questions" />
      <PageBreadcrumb pageTitle={t("menu.faq")} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ComponentCard title="Frequently Asked Questions">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">{faq.q}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </ComponentCard>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ComponentCard title="Still have questions?">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Can't find the answer you're looking for? Please contact our support team.</p>
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              Contact Support
            </button>
          </ComponentCard>
        </div>
      </div>
    </>
  );
}