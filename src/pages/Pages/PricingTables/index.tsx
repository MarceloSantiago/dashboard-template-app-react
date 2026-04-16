import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

const plans = [
  { name: "Basic", price: "$0", period: "/month", features: ["5 Projects", "Basic Analytics", "24/7 Support"], current: false },
  { name: "Pro", price: "$29", period: "/month", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domain"], current: true },
  { name: "Enterprise", price: "$99", period: "/month", features: ["Everything in Pro", "SSO Authentication", "Dedicated Account Manager", "Custom Integrations"], current: false },
];

export default function PricingTables() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Pricing Tables | TailAdmin" description="Pricing plans" />
      <PageBreadcrumb pageTitle={t("menu.pricingTables")} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-6 ${plan.current ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-white/[0.03]"}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium ${plan.current ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"}`}>
                  {plan.current ? "Current Plan" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}