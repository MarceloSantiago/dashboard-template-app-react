import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const files = [
  { name: "Documents", type: "folder", size: "-", date: "Jan 15, 2024" },
  { name: "report.pdf", type: "file", size: "2.4 MB", date: "Jan 14, 2024" },
  { name: "image.png", type: "image", size: "1.8 MB", date: "Jan 13, 2024" },
  { name: "backup.zip", type: "archive", size: "15.3 MB", date: "Jan 12, 2024" },
  { name: "notes.txt", type: "file", size: "4 KB", date: "Jan 11, 2024" },
];

export default function FileManager() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="File Manager | TailAdmin" description="File management" />
      <PageBreadcrumb pageTitle={t("menu.fileManager")} />
      <div className="space-y-6">
        <ComponentCard title="Files">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search files..."
              className="w-64 rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
            />
            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Upload
              </button>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                New Folder
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {files.map((file, i) => (
                <div key={i} className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                    {file.type === "folder" ? "📁" : file.type === "image" ? "🖼️" : file.type === "archive" ? "📦" : "📄"}
                  </div>
                  <p className="text-sm text-gray-800 dark:text-gray-200 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400">{file.size}</p>
                </div>
              ))}
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}