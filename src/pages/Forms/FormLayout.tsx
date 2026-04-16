import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function FormLayout() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("menu.formLayout")}
        description={t("menu.formLayout")}
      />
      <PageBreadcrumb pageTitle={t("menu.formLayout")} />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            {t("forms.billingAddress")}
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("forms.firstName")}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
                placeholder={t("forms.firstName")}
              />
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("forms.lastName")}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
                placeholder={t("forms.lastName")}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.email")}
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder={t("forms.email")}
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.phone")}
            </label>
            <input
              type="tel"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.message")}
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder={t("forms.message")}
            />
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            {t("forms.shippingAddress")}
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("forms.country")}
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white">
                <option value="">{t("forms.selectCountry")}</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="br">Brasil</option>
              </select>
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("forms.city")}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
                placeholder={t("forms.city")}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.zipCode")}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder="12345"
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.additionalNotes")}
            </label>
            <textarea
              rows={3}
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder={t("forms.additionalNotes")}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
        <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          {t("forms.paymentDetails")}
        </h3>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.cardNumber")}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.expiryDate")}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
              {t("forms.cvv")}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
