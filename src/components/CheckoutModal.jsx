/* eslint-disable react/prop-types */
const CheckoutModal = ({ setOpen }) => {
  return (
    <div
      id="myModal"
      className="fixed inset-0 bg-gray-800/75 p-3 sm:p-0 flex items-center justify-center z-50"
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
              {/* total row*/}
              <tr className="border-b border-gray-200 text-secondary">
                <td className="px-4 py-6 text-center flex flex-col sm:flex-row items-center gap-2">
                  <img className="w-[36px] h-[40px]" src={""} alt="" />
                  <span>Classy Modern Smart watch</span>
                </td>
                <td className="px-4 py-6 text-center capitalize">
                  {[""][0].color || "Red"}
                </td>
                <td className="px-4 py-6 font-semibold text-center">
                  {[1, 2].map(({ size }) => size)}
                </td>
                <td className="px-4 py-6 text-center">${[].length || 5}</td>
                <td className="px-4 py-6 text-center font-semibold">${45}</td>
              </tr>
              <tr className="font-semibold text-secondary">
                <td className="px-4 py-6" colSpan="3">
                  Total
                </td>
                <td className="px-4 py-6 text-center">3</td>
                <td className="px-4 py-6 text-center">$60.00</td>
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
            onClick={() => setOpen(false)}
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
