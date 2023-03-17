import { PRICE } from "@prisma/client";

export default function Price({ price }: { price: PRICE }) {
  const renderPrice = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span>$$</span>
            <span className="text-gray-300">$$</span>
          </>
        );
      case PRICE.REGULAR:
        return (
          <>
            <span>$$$</span>
            <span className="text-gray-300">$</span>
          </>
        );
      case PRICE.EXPENSIVE:
        return (
          <>
            <span>$$$$</span>
          </>
        );
    }
  };
  return <p className="flex mr-3">{renderPrice()}</p>;
}
