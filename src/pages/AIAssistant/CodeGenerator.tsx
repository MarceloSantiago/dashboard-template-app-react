import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function CodeGenerator() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("javascript");
  const [description, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = () => {
    setGeneratedCode(`// Generated ${language} code\n\nfunction example() {\n  console.log("Hello, World!");\n  return true;\n}`);
  };

  return (
    <>
      <PageMeta
        title="Code Generator | TailAdmin"
        description="AI Code Generator for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.codeGenerator")} />
      <div className="space-y-6">
        <ComponentCard title="AI Code Generator">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what the code should do..."
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                  rows={5}
                />
              </div>
              <button
                onClick={handleGenerate}
                className="w-full rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Generate Code
              </button>
            </div>
            <div className="col-span-12 md:col-span-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Generated Code</label>
              <textarea
                value={generatedCode}
                readOnly
                className="w-full h-[300px] rounded-lg border border-gray-200 bg-gray-900 px-4 py-3 text-green-400 font-mono text-sm dark:border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Generated code will appear here..."
              />
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}