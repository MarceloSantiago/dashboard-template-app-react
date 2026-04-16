import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function TextGenerator() {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = () => {
    setGeneratedText(`Generated text based on: "${prompt}"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
  };

  return (
    <>
      <PageMeta
        title="Text Generator | TailAdmin"
        description="AI Text Generator for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.textGenerator")} />
      <div className="space-y-6">
        <ComponentCard title="AI Text Generator">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                rows={4}
              />
            </div>
            <button
              onClick={handleGenerate}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Generate Text
            </button>
            {generatedText && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Generated Text</label>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{generatedText}</p>
                </div>
              </div>
            )}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}