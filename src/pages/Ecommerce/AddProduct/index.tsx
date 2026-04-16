import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function AddProduct() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Add Product | TailAdmin" description="Add new product" />
      <PageBreadcrumb pageTitle={t("menu.addProduct")} />
      <div className="space-y-6">
        <ComponentCard title="Add New Product">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">SKU</label>
                <input
                  type="text"
                  placeholder="Enter SKU"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
                <input
                  type="text"
                  placeholder="$0.00"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stock</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Enter product description"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button type="button" className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Cancel
              </button>
              <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                Add Product
              </button>
            </div>
          </form>
        </ComponentCard>
      </div>
    </>
  );
}