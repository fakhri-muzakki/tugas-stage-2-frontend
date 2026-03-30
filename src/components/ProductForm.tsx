interface ProductFormProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ProductForm = ({ search, setSearch }: ProductFormProps) => {
  return (
    <form className="flex gap-2 mb-20 relative">
      <input
        type="text"
        placeholder="Masukkan nama product..."
        value={search}
        required
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 min-w-md px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20"
      />

      {/* <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
      >
        Submit
      </button> */}
      <svg
        data-v-39ea7f52=""
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-search-icon lucide-search lucide-icon customizable absolute top-2 right-4"
      >
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
    </form>
  );
};

export default ProductForm;
