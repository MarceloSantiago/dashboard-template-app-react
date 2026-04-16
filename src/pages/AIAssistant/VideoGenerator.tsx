import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function VideoGenerator() {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState("short");

  return (
    <>
      <PageMeta
        title="Video Generator | TailAdmin"
        description="AI Video Generator for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.videoGenerator")} />
      <div className="space-y-6">
        <ComponentCard title="AI Video Generator">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Video Description</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the video you want to generate..."
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="short">Short (15-30 sec)</option>
                  <option value="medium">Medium (1-2 min)</option>
                  <option value="long">Long (5-10 min)</option>
                </select>
              </div>
              <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                Generate Video
              </button>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p>Video preview will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}