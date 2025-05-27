import { SearchIcon } from "lucide-react"

export default async function Search() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search Products..."
        className="flex-1 outline-none border-none text-gray-700 bg-transparent"
      />
      <SearchIcon className="text-primary w-5 h-5 cursor-pointer" />
    </div>
  )
}
