import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("menu.settings")}
        description={t("menu.settings")}
      />
      <PageBreadcrumb pageTitle={t("menu.settings")} />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            {t("settings.general")}
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("settings.language")}
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white">
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("settings.timezone")}
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white">
                <option value="utc">UTC</option>
                <option value="america/sao_paulo">America/Sao Paulo</option>
                <option value="europe/madrid">Europe/Madrid</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            {t("settings.appearance")}
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("settings.theme")}
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white">
                <option value="light">{t("settings.light")}</option>
                <option value="dark">{t("settings.dark")}</option>
                <option value="system">{t("settings.system")}</option>
              </select>
            </div>
            <div className="w-full">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("settings.compactMode")}
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-strokedark dark:bg-boxdark dark:text-white">
                <option value="normal">{t("settings.normal")}</option>
                <option value="compact">{t("settings.compact")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-strokedark dark:bg-boxdark sm:p-7">
        <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          {t("settings.notifications")}
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{t("settings.emailNotifications")}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("settings.emailNotificationsDesc")}</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-blue-600 dark:border-strokedark dark:bg-boxdark" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{t("settings.pushNotifications")}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("settings.pushNotificationsDesc")}</p>
            </div>
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 dark:border-strokedark dark:bg-boxdark" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{t("settings.weeklyReports")}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("settings.weeklyReportsDesc")}</p>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-blue-600 dark:border-strokedark dark:bg-boxdark" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-strokedark dark:bg-boxdark dark:text-white dark:hover:bg-gray-700">
          {t("settings.cancel")}
        </button>
        <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          {t("settings.saveChanges")}
        </button>
      </div>
    </div>
  );
}