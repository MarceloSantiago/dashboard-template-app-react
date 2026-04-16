import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const products = [
  { id: 1, name: "MacBook Pro 14\"", sku: "MBP-001", price: "$1,999", stock: 45, status: "Active" },
  { id: 2, name: "iPhone 15 Pro Max", sku: "IPH-015", price: "$1,199", stock: 120, status: "Active" },
  { id: 3, name: "AirPods Pro 2nd Gen", sku: "AIRP-002", price: "$249", stock: 0, status: "Out of Stock" },
  { id: 4, name: "iPad Pro 12.9\"", sku: "IPAD-003", price: "$1,099", stock: 35, status: "Active" },
  { id: 5, name: "Apple Watch Ultra 2", sku: "WATCH-001", price: "$799", stock: 8, status: "Low Stock" },
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Products | TailAdmin" description="Products management" />
      <PageBreadcrumb pageTitle={t("menu.products")} />
      <div className="space-y-6">
        <ComponentCard title={t("menu.products")}>
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full sm:w-64 rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
              />
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Add Product
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">SKU</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Stock</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-medium">{product.name}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400 font-mono text-sm">{product.sku}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white">{product.price}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white">{product.stock}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        product.status === "Low Stock" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}