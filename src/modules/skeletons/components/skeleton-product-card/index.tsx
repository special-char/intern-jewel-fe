export const ProductCardSkeleton = () => {
  const circles = Array(6).fill(null)
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "subgrid",
        gridTemplateRows: "1fr minmax(70px, auto)",
      }}
      className="w-full aspect-4/3 bg-card p-4 md:p-8 gap-6 animate-pulse rounded-lg"
    >
      <div className="relative w-full aspect-4/3 bg-gray-300 rounded-md" />

      <div className="flex flex-col items-center gap-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-1/4 bg-gray-300 rounded" />
      </div>
    </div>
  )
}

export default ProductCardSkeleton
