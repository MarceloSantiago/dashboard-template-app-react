import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function ImageGenerator() {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");

  return (
    <>
      <PageMeta
        title="Image Generator | TailAdmin"
        description="AI Image Generator for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.imageGenerator")} />
      <div className="space-y-6">
        <ComponentCard title="AI Image Generator">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image Description</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate..."
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="realistic">Realistic</option>
                <option value="abstract">Abstract</option>
                <option value="cartoon">Cartoon</option>
                <option value="watercolor">Watercolor</option>
                <option value="digital">Digital Art</option>
              </select>
            </div>
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              Generate Image
            </button>
          </div>
        </ComponentCard>

        <ComponentCard title="Recent Generations">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm">Image 1</div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm">Image 2</div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm">Image 3</div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-sm">Image 4</div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}