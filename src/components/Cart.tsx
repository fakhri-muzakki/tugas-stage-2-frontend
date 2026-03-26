import type { IProduct } from "../types";

type CartProps = {
  cart: IProduct[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isOpen, setIsOpen, cart }: CartProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-neutral-900 border-r border-neutral-800 transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-neutral-800">
        <h2 className="font-semibold">Cart</h2>
        <button onClick={() => setIsOpen(false)}>✕</button>
      </div>

      <div className="p-4 space-y-3">
        {cart.length === 0 && (
          <p className="text-sm text-neutral-400">Cart kosong</p>
        )}

        {cart.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-neutral-800 p-2 rounded-lg"
          >
            <img src={item.image} className="w-10 h-10 rounded object-cover" />
            <div className="text-sm">
              <p>{item.name}</p>
              <p className="text-neutral-400">
                Rp {item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
