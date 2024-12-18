import { FaMinus, FaPlus, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import img1 from "../assets/img1.png";

const ProdectDetails = () => {
  return (
    <div className="lg:my-0 my-10 max-w-[1320px] w-full min-h-screen m-auto px-5 flex items-center justify-center">
      <div id="product_wrapper">
        <div
          id="product"
          className="flex lg:flex-row flex-col gap-[60px] items-center justify-center text-center lg:text-left"
        >
          <div className="3xl:max-w-[630px] lg:max-w-[500px] max-w-[360px] w-full 3xl:max-h-[700px] lg:max-h-[550px] max-h-[400px] h-full mx-auto">
            <img
              id="selected_image"
              className="w-full h-full"
              src={img1}
              alt="Product Image"
            />
          </div>

          <div>
            <h1 className="text-[28px] 3xl:text-[40px] font-bold text-secondary">
              Classy Modern Smart watch
            </h1>
            <div className="my-5 text-[#FFD200] flex justify-center lg:justify-start space-x-2">
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h5 className="text-span_color">(2 Reviews)</h5>
            </div>
            <h2 className="flex gap-[5px] justify-center lg:justify-start">
              <span className="3xl:text-xl text-lg line-through text-span_color">
                $99.00
              </span>
              <span
                id="price"
                className="3xl:text-2xl text-xl font-bold text-primary"
              >
                $79.00
              </span>
            </h2>
            <p className="mt-5 3xl:text-lg text-base text-span_color w-[85%] sm:w-[60%] mx-auto lg:mx-0 lg:w-[85%]">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>
            {/* type & model */}
            <div className="mt-5 flex items-center justify-center lg:justify-start space-x-10">
              <div>
                <span className="3xl:text-sm text-xs text-span_color">
                  Type
                </span>
                <h5 className="3xl:text-base text-sm text-secondary font-bold">
                  Watch
                </h5>
              </div>
              <div>
                <span className="3xl:text-sm text-xs text-span_color">
                  Model Number
                </span>
                <h5 className="3xl:text-base text-sm text-secondary font-bold">
                  Forerunner 290XT
                </h5>
              </div>
            </div>
            {/* brand */}
            <div className="mt-5">
              <h3 className="3xl:text-lg text-base text-secondary font-bold">
                Brand Color
              </h3>
              <div className="brand-color-container mt-3.5 flex justify-center lg:justify-start space-x-[19px]">
                {/* item 1 */}
                <div
                  id="selected_color"
                  name="indigo"
                  className="brand-color border border-[#816BFF]"
                  role="button"
                >
                  <div className="inner-circle bg-[#816BFF]"></div>
                </div>
                {/* item 2 */}
                <div
                  name="sky"
                  className="brand-color border-[#1FCEC9]"
                  role="button"
                >
                  <div className="inner-circle bg-[#1FCEC9]"></div>
                </div>
                {/* item 3 */}
                <div
                  name="cyan"
                  className="brand-color border-[#4B97D3]"
                  role="button"
                >
                  <div className="inner-circle bg-[#4B97D3]"></div>
                </div>
                {/* item 4 */}
                <div
                  name="gray"
                  className="brand-color border-[#3B4747]"
                  role="button"
                >
                  <div className="inner-circle bg-[#3B4747]"></div>
                </div>
              </div>
              {/* Wrist Size */}
              <div className="mt-5">
                <h5 className="3xl:text-lg text-base text-secondary font-bold">
                  Wrist Size
                </h5>
                <div className="mt-2.5 flex justify-center lg:justify-start space-x-3">
                  <button
                    id="selected_sizeAndPrice"
                    data="S-79"
                    className="size_selected px-[18px] py-2 text-xs flex space-x-1.5 border border-primary hover:border-primary"
                  >
                    <span className="font-bold text-slate-900">S</span>
                    <span className="text-span_color">$79</span>
                  </button>
                  <button
                    data="M-99"
                    className="size_selected px-[18px] py-2 text-xs flex space-x-1.5 border border-[#DBDFEA] hover:border-primary"
                  >
                    <span className="font-bold text-slate-900">M</span>
                    <span className="text-span_color">$99</span>
                  </button>
                  <button
                    data="L-99"
                    className="size_selected px-[18px] py-2 text-xs flex space-x-1.5 border border-[#DBDFEA] hover:border-primary"
                  >
                    <span className="font-bold text-slate-900">L</span>
                    <span className="text-span_color">$99</span>
                  </button>
                  <button
                    data="XL-100"
                    className="size_selected px-[18px] py-2 text-xs flex space-x-1.5 border border-[#DBDFEA] hover:border-primary"
                  >
                    <span className="font-bold text-slate-900">XL</span>
                    <span className="text-span_color">$100</span>
                  </button>
                </div>
              </div>
              {/* add to card */}
              <div className="mt-5 flex justify-center lg:justify-start space-x-3">
                <div className="border-y border-[#DBDFEA] flex items-center">
                  <button
                    id="plus_btn"
                    className="py-[3px] px-2 h-full text-base border-x border-[#DBDFEA] text-span_color"
                  >
                    <FaMinus />
                  </button>
                  <span
                    id="show_price"
                    className="py-[3px] px-6 text-base text-span_color"
                  >
                    0
                  </span>
                  <button
                    id="minus_btn"
                    className="py-[3px] px-2 h-full text-base border-x border-[#DBDFEA] text-span_color"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  id="add_to_cart"
                  className="px-[18px] py-2 rounded-[3px] text-[13px] bg-primary text-white"
                >
                  Add to Cart
                </button>
                <button className="text-lg text-primary">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* checkout button */}
        <button
          id="open_modal_button"
          className="3xl:mt-[112px] mt-[50px] bg-[#FFBB5A] rounded-[20px] px-6 py-2 font-bold flex items-center mx-auto space-x-2.5"
        >
          <span className="text-secondary font-bold">Checkout</span>
          <span
            id="product_quentity"
            className="text-secondary bg-white font-bold rounded-[5px] px-1.5 py-0.5 text-xs"
          >
            0
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProdectDetails;
