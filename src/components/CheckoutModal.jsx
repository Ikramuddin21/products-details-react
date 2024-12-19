/* eslint-disable react/prop-types */
const CheckoutModal = ({ cart, setCart, setOpen }) => {
  const updatedCart = cart.reduce((acc, curr) => {
    if (!acc[curr?.id]) {
      acc[curr?.id] = [];
    }
    acc[curr?.id].push(curr);
    return acc;
  }, {});

  const totalQuentity = Object.values(updatedCart).reduce(
    (acc, items) => acc + +items.length,
    0
  );

  const totalPrice = Object.values(updatedCart).reduce(
    (acc, items) => acc + +items.reduce((acc, item) => acc + +item.price, 0),
    0
  );

  // handle close modal when click the outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "my_modal") {
      setOpen(false);
      setCart([]);
    }
  };

  return (
    <div
      id="my_modal"
      className="fixed inset-0 bg-gray-800/75 p-3 sm:p-0 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-full max-w-[650px] mx-auto p-[34px] rounded-[20px] shadow-lg overflow-hidden">
        <div>
          <h3 className="text-lg font-semibold text-secondary">Your Cart</h3>
        </div>
        {/* modal body*/}
        <div className="mt-4 overflow-x-auto">
          <table className="table-auto bg-white w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-span_color font-normal">
                  Item
                </th>
                <th className="px-4 py-3 text-left text-span_color font-normal">
                  Color
                </th>
                <th className="px-4 py-3 text-left text-span_color font-normal">
                  Size
                </th>
                <th className="px-4 py-3 text-right text-span_color font-normal">
                  Quantity
                </th>
                <th className="px-4 py-3 text-right text-span_color font-normal">
                  Price
                </th>
              </tr>
            </thead>
            <tbody id="table_body">
              {Object.values(updatedCart).map((item, index) => {
                const price = item.reduce((acc, curr) => acc + +curr.price, 0);
                return (
                  <tr
                    key={`${item[0].title}-${index}`}
                    className="border-b border-gray-200 text-secondary"
                  >
                    <td className="px-4 py-6 text-center flex flex-col sm:flex-row items-center gap-2">
                      <img
                        className="w-[36px] h-[40px]"
                        src={item[0].img}
                        alt="Product Image Preview"
                      />
                      <span>{item[0].title}</span>
                    </td>
                    <td className="px-4 py-6 text-center capitalize">
                      {item[0].colorName}
                    </td>
                    <td className="px-4 py-6 font-medium text-center">
                      {[...item.map((pdt) => pdt.sizeAndPrice)].map(
                        ({ size }, index, arr) =>
                          `${size}${index + 1 === arr.length ? "" : ","}`
                      )}
                    </td>
                    <td className="px-4 py-6 text-center">{item.length}</td>
                    <td className="px-4 py-6 text-center font-semibold">
                      ${price}
                    </td>
                  </tr>
                );
              })}
              <tr className="font-semibold text-secondary">
                <td className="px-4 py-6" colSpan="3">
                  Total
                </td>
                <td className="px-4 py-6 text-center">{totalQuentity}</td>
                <td className="px-4 py-6 text-center">${totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* modal footer*/}
        <div className="mt-[26px] flex items-center justify-end space-x-6">
          <button
            onClick={() => setOpen(false)}
            className="close_modal_button px-[18px] py-2 rounded-[3px] text-[13px] bg-transparent text-secondary border border-[#DBDFEA]"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              setOpen(false);
              setCart([]);
            }}
            className="close_modal_button px-[18px] py-2 rounded-[3px] text-[13px] bg-primary text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
