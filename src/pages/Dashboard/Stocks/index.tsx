import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function Stocks() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title="Stocks Dashboard | TailAdmin"
        description="Stocks Dashboard for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.stocks")} />
      <div className="space-y-6">
        <ComponentCard title="Inventory Overview">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Products</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,284</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Low Stock</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">23</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Value</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$892K</p>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Stock Levels">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">SKU</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Stock</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">MacBook Pro 14"</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">MBP-001</td>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">45</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">In Stock</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">iPhone 15 Pro</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">IPH-015</td>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">12</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Low Stock</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">AirPods Pro</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">AIRP-002</td>
                  <td className="py-3 px-4 text-gray-800 dark:text-white">0</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Out of Stock</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}