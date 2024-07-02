import { Button, Input } from "~/components/ui"
import { SearchIcon } from "~/components/icons"
import Navbar from "./Navbar"
import BookSearch from "./BookSearch"

export function HomePage() {
  return (
    <div key="1" className="flex h-screen w-full flex-col">
      <section className="flex flex-col items-center justify-center space-y-6 md:space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Discover the World of Google Books
          </h1>
          <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            Find your next great read with the power of Google Books.
          </p>
        </div>
        <BookSearch />
        <p className="max-w-md text-center text-gray-500 dark:text-gray-400 md:text-lg">
          Explore millions of books, from classic novels to the latest bestsellers.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center space-y-6 md:space-y-12 mt-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">My Bookshelves</h2>
          <ul className="space-y-4">
            <li className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fiction</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">20 books</p>
                </div>
                <Button size="sm" variant="outline">
                  View Bookshelf
                </Button>
              </div>
            </li>
            <li className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Non-Fiction</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">15 books</p>
                </div>
                <Button size="sm" variant="outline">
                  View Bookshelf
                </Button>
              </div>
            </li>
            <li className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">History</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">12 books</p>
                </div>
                <Button size="sm" variant="outline">
                  View Bookshelf
                </Button>
              </div>
            </li>
            <li className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Science</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">18 books</p>
                </div>
                <Button size="sm" variant="outline">
                  View Bookshelf
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}