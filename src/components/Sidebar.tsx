import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../hooks/useCart";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { carts, deleteCart, updateStock } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-[#111] border-l border-white/10 transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="font-semibold">Cart</h2>
        <button onClick={() => setIsOpen(false)}>
          <X />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-full">
        {carts.length === 0 && (
          <p className="text-white/50 text-sm">Cart kosong</p>
        )}

        {carts.map((item) => (
          <div
            key={item.id}
            className="relative flex gap-3 bg-[#0a0a0a] p-3 rounded-xl border border-white/10"
          >
            {/* Delete Button */}
            <button
              onClick={() => deleteCart(item.id)}
              className="absolute top-2 right-2 p-1 rounded-md hover:bg-red-500/20 text-red-400"
            >
              <X size={14} />
            </button>

            {/* Image */}
            <img
              src={item.thumbnail}
              className="w-16 h-16 object-cover rounded-lg"
            />

            {/* Content */}
            <div className="flex-1 pr-6">
              <h3 className="text-sm font-medium">{item.title}</h3>

              <p className="text-xs text-white/50">
                Rp {Number(item.price).toLocaleString("id-ID")}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateStock({ id: item.id, stock: -1 })}
                  className="p-1 bg-white/10 rounded hover:bg-white/20"
                >
                  <Minus size={14} />
                </button>

                <span className="text-sm">{item.stock}</span>

                <button
                  onClick={() => updateStock({ id: item.id, stock: 1 })}
                  className="p-1 bg-white/10 rounded hover:bg-white/20"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
