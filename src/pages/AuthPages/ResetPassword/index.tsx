import { Link } from "react-router";
import PageMeta from "../../../components/common/PageMeta";

export default function ResetPassword() {
  return (
    <>
      <PageMeta title="Reset Password | TailAdmin" description="Reset your password" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Reset Password</h2>
              <p className="text-gray-500 dark:text-gray-400">Enter your email to receive reset instructions</p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
                Send Reset Link
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Remember your password? <Link to="/signin" className="text-blue-600 hover:text-blue-700">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}