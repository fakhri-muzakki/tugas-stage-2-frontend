import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { IProduct } from "@/types";

type CartCardProps = IProduct & {
  removeFromCart: (id: number) => void;
};

const CartCard = ({
  id,
  category,
  description,
  price,
  thumbnail,
  title,
  removeFromCart,
}: CartCardProps) => {
  return (
    <Card key={id} className="flex gap-4 p-4">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-24 h-24 object-cover rounded-md"
      />

      {/* Content */}
      <CardContent className="flex-1 p-0 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{category}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="font-medium">${price}</span>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartCard;
