import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";

export default function TwoStepVerification() {
  const { t } = useTranslation();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <>
      <PageMeta title="Two Step Verification | TailAdmin" description="Two step verification" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t("menu.twoStepVerification")}</h2>
              <p className="text-gray-500 dark:text-gray-400">{t("auth.twoStepDescription")}</p>
            </div>
            <form className="space-y-6">
              <div className="flex justify-center gap-4">
                {code.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(i, e.target.value)}
                    className="w-12 h-12 text-center rounded-lg border border-gray-200 bg-transparent text-xl font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                ))}
              </div>
              <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
                {t("auth.verify")}
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              {t("auth.noReceiveCode")} <button className="text-blue-600 hover:text-blue-700">{t("auth.resend")}</button>
            </p>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              <Link to="/signin" className="text-blue-600 hover:text-blue-700">{t("auth.backToSignIn")}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}