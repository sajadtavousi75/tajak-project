import React, { useState } from "react";
import Modal from "react-modal";

export default function ProductBox() {
  const [isModalDiscount, setIsModalDiscount] = useState(false);
  const [isModalDelet , setIsModalDelet] =useState(false)
  return (
    <div className="productbox p-3 border-solid border-gmain border-y-2 rounded-lg flex items-center justify-between">
      <div className="right flex items-center justify gap-2">
        <img
          className="w-[55px] h-20 rounded-lg"
          src="/images/be06d9a3929044ff82e28424a0d1c337.jpg"
          alt=""
        />
        <div className="name text-text font-bold">
          <h1>نام کتاب</h1>
          <h1>نام نویسنده</h1>
        </div>
      </div>
      <div className="middle flex flex-col items-center justify-center">
        <span className="price font-bold">00.00</span>
        <div className="icon flex items-center justify-between w-[150px] h-10 bg-gmain rounded-lg p-3">
          <img src="/images/adminprofile/Vector7.png" alt="" />
          <img src="/images/adminprofile/Vector8.png" alt="" />
          <img src="/images/adminprofile/Vector9.png" alt="" />
        </div>
      </div>
      <div className="left flex items-center justify-center gap-2">
        <div className="btn-discount h-[60px] flex items-center  gap-2 border-dashed border-gmain border-2 rounded-lg p-1">
          <button
            onClick={() => setIsModalDiscount(true)}
            className="w-[150px] h-10 bg-gmain text-bg rounded-lg"
          >
            افزودن تخفیف
          </button>
          <svg
            className="mt-3"
            width="40"
            height="40"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2452_26993)">
              <path
                d="M28.7083 13.401C28.7083 12.3324 28.394 11.2877 27.8053 10.3994C27.2165 9.51101 26.3798 8.8187 25.4009 8.41018C24.4219 8.00167 23.3449 7.89532 22.3061 8.10449C21.2672 8.31375 20.3132 8.82911 19.5647 9.58544C18.8163 10.3418 18.3072 11.305 18.1017 12.3534C17.8962 13.4017 18.0037 14.488 18.4104 15.4747C18.8171 16.4614 19.5049 17.3042 20.3866 17.8966C21.2684 18.4888 22.3045 18.804 23.3638 18.802C24.0665 18.802 24.7624 18.6623 25.4114 18.3907C26.0604 18.1191 26.65 17.7212 27.1464 17.2195C27.6428 16.7179 28.0363 16.1224 28.3043 15.4671C28.5723 14.8119 28.7096 14.1098 28.7083 13.401ZM20.9204 13.401C20.9204 12.9155 21.0632 12.4408 21.3306 12.0371C21.598 11.6334 21.9781 11.3187 22.4228 11.1329C22.8676 10.9471 23.3568 10.8985 23.829 10.9932C24.301 11.0879 24.7347 11.3217 25.075 11.6651C25.4154 12.0084 25.6472 12.4458 25.7411 12.9221C25.835 13.3983 25.7868 13.8919 25.6026 14.3405C25.4184 14.7891 25.1065 15.1725 24.7063 15.4423C24.306 15.712 23.8355 15.856 23.3541 15.856C22.7104 15.8534 22.0938 15.5936 21.6395 15.1335C21.1853 14.6734 20.9301 14.0504 20.9301 13.401H20.9204Z"
                fill="#519D9E"
              />
              <path
                d="M35.6685 21.198C34.6096 21.198 33.5744 21.5147 32.6939 22.1083C31.8134 22.7017 31.1272 23.5452 30.7219 24.5321C30.3167 25.519 30.2106 26.605 30.4172 27.6527C30.6238 28.7004 31.1338 29.6628 31.8826 30.4181C32.6313 31.1734 33.5854 31.6878 34.6239 31.8962C35.6625 32.1046 36.7391 31.9977 37.7174 31.5889C38.6958 31.1801 39.532 30.4878 40.1203 29.5996C40.7087 28.7114 41.0226 27.6673 41.0226 26.599C41.0226 25.1666 40.4586 23.7928 39.4544 22.7799C38.4504 21.767 37.0885 21.198 35.6685 21.198ZM35.6685 29.054C35.1868 29.054 34.7158 28.9098 34.3154 28.6395C33.915 28.3694 33.603 27.9854 33.4191 27.5363C33.2352 27.0871 33.1876 26.5929 33.2823 26.1165C33.377 25.6399 33.6097 25.2025 33.951 24.8596C34.2924 24.5166 34.727 24.2836 35.1997 24.19C35.6725 24.0964 36.1621 24.1464 36.6066 24.3338C37.0511 24.521 37.4306 24.8372 37.6968 25.2422C37.9631 25.6473 38.1041 26.1229 38.1022 26.6089C38.0971 27.2565 37.8384 27.8759 37.3826 28.3321C36.9267 28.7882 36.3106 29.0442 35.6685 29.0442V29.054Z"
                fill="#519D9E"
              />
              <path
                d="M38.2775 11.2111C38.1427 11.0733 37.9819 10.964 37.8048 10.8893C37.6277 10.8147 37.4376 10.7763 37.2456 10.7763C37.0536 10.7763 36.8636 10.8147 36.6864 10.8893C36.5094 10.964 36.3486 11.0733 36.2137 11.2111L20.8035 26.7071C20.6669 26.8432 20.5586 27.0053 20.4845 27.1839C20.4105 27.3626 20.3724 27.5543 20.3724 27.748C20.3724 27.9416 20.4105 28.1334 20.4845 28.312C20.5586 28.4908 20.6669 28.6529 20.8035 28.7889C21.0777 29.0643 21.4485 29.2196 21.8354 29.221C22.2159 29.2349 22.5865 29.0973 22.8673 28.838L38.2775 13.293C38.4141 13.1569 38.5225 12.9948 38.5965 12.8161C38.6706 12.6375 38.7087 12.4457 38.7087 12.252C38.7087 12.0584 38.6706 11.8667 38.5965 11.688C38.5225 11.5094 38.4141 11.3472 38.2775 11.2111Z"
                fill="#519D9E"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2452_26993"
                x="0"
                y="0"
                width="59.0234"
                height="60"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2452_26993"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.180392 0 0 0 0 0.227451 0 0 0 0 0.282353 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2452_26993"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2452_26993"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="btn-delet border-dashed border-gmain border-2 rounded-lg p-1 h-[60px] flex items-center justify-center transition-all duration-700 hover:bg-red">
          <button onClick={()=> setIsModalDelet(true)}>
            <img src="/images/deletprofile.png" alt="" />
          </button>
        </div>
      </div>
      <div className="modal">
        <Modal
          className="w-[400px] h-[500px] overflow-y-auto	mt-[130px] bg-bg  mx-auto p-4 font-roya md:w-[750px] rounded-lg "
          isOpen={isModalDiscount}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            // content: {
            //   width: "400px",
            //   height: "500px",
            //   margin: "auto",
            //   backgroundColor: "#E0EAF1",
            //   padding:"20px",
            //   marginTop:"100px"

            // },
          }}
        >
          <div className="modal-top flex flex-wrap items-center justify-start gap-2 md:justify-between">
            <div
              onClick={() => setIsModalDiscount(false)}
              className="bg-gmain w-10 h-10 flex items-center justify-center rounded-full hover:bg-gmelo hover:text-text"
            >
              <img src="/images/close.svg" alt="" />
            </div>
            <div className="flex gap-2 mt-3">
              <h1 className="text-text font-bold">افزودن تخفیف</h1>
            </div>
            <div>
              <svg
                width="57"
                height="40"
                viewBox="0 0 57 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.869391 13.2707C0.863894 13.2692 0.860156 13.2651 0.854659 13.2636C0.385459 13.2442 0.000574895 12.8606 0.000574937 12.3806C0.00057498 11.889 0.384467 11.4914 0.870158 11.4914C1.11806 11.4086 1.7691 10.3245 1.7691 8.37029C1.7691 6.40991 1.11763 5.33194 0.869392 5.25186C0.864887 5.25075 0.861805 5.24719 0.857299 5.24607C0.431407 5.23015 0.0676342 4.90739 0.0160747 4.46535C-0.0406536 3.97632 0.304218 3.5335 0.786941 3.47603L29.1317 0.0992303C30.2336 -0.0330798 31.3506 -0.0330797 32.4534 0.0992306L52.8837 2.58506C52.8886 2.58562 52.8923 2.58885 52.8972 2.58963C54.551 2.70111 55.4174 5.10107 55.4174 7.47931C55.4174 9.01168 55.0572 10.5531 54.3596 11.4874C55.0578 12.4217 55.4174 13.9652 55.4174 15.4981C55.4174 16.9639 55.087 18.4376 54.4477 19.3809C55.6649 20.6191 56.2969 23.1894 56.2969 25.7444C56.2969 29.2569 55.1086 32.8121 52.8373 32.8713L22.9796 36.43C22.9453 36.4343 22.9109 36.4361 22.8765 36.4361C22.8413 36.4361 22.8065 36.4343 22.7717 36.43L15.8408 35.5873L15.8408 39.109C15.8408 39.5093 15.5772 39.8608 15.1962 39.9678C15.1181 39.9895 15.0395 40 14.9613 40C14.6581 40 14.3691 39.8407 14.2073 39.5675L12.2417 36.249L10.3879 38.7523C10.1608 39.0595 9.76566 39.1856 9.40617 39.0629C9.04712 38.942 8.80494 38.6017 8.80494 38.218L8.80494 34.7322L0.784848 33.757C0.322793 33.7004 -0.0160285 33.2898 0.0118952 32.819C0.0393801 32.3483 0.424153 31.9812 0.889615 31.9812C1.50976 31.9812 2.64858 29.9512 2.64858 26.6353C2.64858 23.3473 1.56857 21.4444 0.889616 21.2895C0.403925 21.2895 0.000684819 20.8919 0.000684862 20.3994C0.000684902 19.9417 0.333895 19.565 0.771986 19.5153C0.806288 19.511 0.841578 19.5084 0.876757 19.5075C1.12884 19.4092 1.7691 18.3276 1.7691 16.3891C1.7691 14.4287 1.11763 13.3507 0.869391 13.2707ZM2.86218 11.725L22.8671 14.154C23.1217 14.0509 23.7561 12.9798 23.7561 11.0432C23.7561 9.08897 23.1051 8.00488 22.8766 7.9248C22.8766 7.9248 22.8763 7.92469 22.8761 7.92469C22.8414 7.92457 22.8069 7.92302 22.7719 7.91867L3.06831 5.52651C3.3747 6.38073 3.52806 7.3921 3.52806 8.37029C3.52806 9.58424 3.30269 10.8053 2.86218 11.725ZM32.2452 1.86894C31.2815 1.75233 30.3033 1.75411 29.3379 1.86893L8.3364 4.3708L22.8784 6.13638L44.1891 3.59164C44.1916 3.59131 44.1938 3.59253 44.1964 3.5922C44.197 3.5922 44.1975 3.59175 44.1981 3.59164L45.3141 3.45911L32.2452 1.86894ZM25.0533 13.8929L44.0877 11.6305C44.2956 10.8963 44.4239 9.8805 44.4239 8.81578C44.4239 8.23542 44.3899 7.67421 44.323 7.14776C44.2625 6.67409 44.5844 6.24642 45.0437 6.16323C44.9739 5.84303 44.891 5.56104 44.7987 5.31446L44.4033 5.36146C44.401 5.36168 44.399 5.36068 44.3967 5.3609C44.3962 5.3609 44.3957 5.36135 44.3951 5.36146L24.8528 7.69504C25.2909 8.61397 25.5151 9.83205 25.5151 11.0432C25.5151 12.0236 25.3613 13.0376 25.0533 13.8929ZM52.7905 4.36523L49.617 4.74223C49.9133 5.61271 50.1405 6.71441 50.1405 7.9248C50.1405 9.03997 50.0208 10.0861 49.8125 10.9443L52.7597 10.6003C53.0074 10.5177 53.6584 9.43356 53.6584 7.47931C53.6584 5.55636 53.0285 4.47661 52.7905 4.36523ZM52.7861 12.3849L48.6198 12.877C48.6053 12.8794 48.5938 12.8887 48.5791 12.8904L33.6932 14.6599C33.7518 14.7978 33.8078 14.9434 33.8617 15.0975C33.8791 15.0923 33.8921 15.0795 33.9101 15.0752C34.3817 14.9664 34.8558 15.2632 34.9653 15.7435C35.1137 16.3969 35.1893 17.0634 35.1893 17.7256C35.1893 18.8442 35.0511 19.8866 34.8066 20.7527L45.7013 19.4579C45.7079 19.4576 45.714 19.4558 45.7206 19.4556L49.2263 19.039C49.2339 19.0386 49.2409 19.0365 49.2485 19.0364L52.7596 18.6191C53.0074 18.5365 53.6584 17.4524 53.6584 15.4981C53.6584 13.5607 53.0196 12.4815 52.7861 12.3849ZM52.6758 31.0963C52.7098 31.092 52.7447 31.0902 52.779 31.0902C53.3991 31.0902 54.5379 29.0602 54.5379 25.7444C54.5379 22.4493 53.4144 20.4287 52.7917 20.4032L50.7922 20.6412C51.4715 22.0681 51.8818 24.1429 51.8818 26.4212C51.8818 28.2322 51.6222 29.9313 51.1701 31.2757L52.6758 31.0963ZM45.6668 31.9318C46.249 30.7604 46.605 28.8712 46.605 26.8494C46.605 24.2421 46.0214 22.1934 45.3805 21.2855L33.4526 22.7055C33.4265 22.7078 33.4021 22.7216 33.376 22.7216C33.3692 22.7216 33.3626 22.7181 33.3557 22.7179C33.9571 24.1373 34.31 26.1089 34.31 28.2302C34.31 30.1802 34.0085 31.9969 33.4954 33.3825L45.6668 31.9318ZM25.4274 34.3441L27.9014 34.0493C28.4903 33.0996 29.033 31.1595 29.033 28.6044C29.033 26.4758 28.6423 24.4967 28.0187 23.3525L25.1233 23.6972C25.9611 25.0707 26.3945 27.1945 26.3945 29.3083C26.3945 31.0542 26.0829 32.9472 25.4274 34.3441ZM25.0533 21.9117L29.2996 21.4071C29.5425 20.678 29.6926 19.6692 29.6926 18.6165C29.6926 16.8465 29.3263 15.6662 29.0493 15.212L24.8504 15.7111C25.2898 16.6304 25.5151 17.8494 25.5151 19.062C25.5151 20.0424 25.3613 21.0564 25.0533 21.9117ZM8.80494 32.937L8.80494 27.6052L8.25229 27.5377C7.77001 27.4794 7.42558 27.0356 7.48363 26.5467C7.5408 26.0585 7.98823 25.7079 8.46106 25.768L9.7827 25.9296C9.78501 25.9298 9.78699 25.9287 9.7893 25.9289L15.0662 26.5702C15.0757 26.5714 15.0834 26.5773 15.093 26.5788L16.1896 26.7128C16.6719 26.7703 17.0171 27.2131 16.9605 27.7022C16.908 28.1555 16.528 28.4887 16.0882 28.4887C16.0539 28.4887 16.0191 28.4869 15.9844 28.4825L15.8409 28.4651L15.8409 33.7922L22.8776 34.6481L22.9552 34.6389C23.5605 34.4899 24.6356 32.5894 24.6356 29.3083C24.6356 25.9924 23.4968 23.9624 22.8766 23.9624C22.8419 23.9624 22.8066 23.9606 22.7719 23.9563L3.43945 21.6083C4.09323 23.0046 4.40754 24.8909 4.40754 26.6353C4.40754 28.7471 3.97769 30.8753 3.14153 32.2483L8.80494 32.937ZM22.8667 22.173C23.121 22.0706 23.7561 20.9991 23.7561 19.062C23.7561 17.1078 23.1051 16.0237 22.8766 15.9436C22.8419 15.9436 22.8066 15.9418 22.7719 15.9375L3.06831 13.5453C3.3747 14.3995 3.52806 15.4109 3.52806 16.3891C3.52806 17.6097 3.2873 18.8192 2.84184 19.7406L22.8667 22.173Z"
                  fill="#519D9E"
                />
              </svg>
            </div>
          </div>
          <div className="modal-middel mt-5">
            <div className=" content-discount bg-bg p-3 flex flex-col items-center justify-center flex-wrap  gap-3 rounded-lg">
              <div className="btns-discount flex gap-4">
                <button className="w-[64px] h-10 border-solid border-red border-2 rounded-lg ">
                  5%
                </button>
                <button className="w-[64px] h-10 border-solid border-red border-2 rounded-lg ">
                  10%
                </button>
                <button className="w-[64px] h-10 border-solid border-red border-2 rounded-lg ">
                  20%
                </button>
                <button className="w-[64px] h-10 border-solid border-red border-2 rounded-lg ">
                  25%
                </button>
                <button className="w-[64px] h-10 border-solid border-red border-2 rounded-lg ">
                  50%
                </button>
              </div>
              <div className="input mt-3">
                <div className=" relative">
                  <input
                    className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                  <p className="bg-bg text-text absolute -top-4 right-2">
                  مقدار دلخواه
                  </p>
                </div>
              </div>
              <div className="add mt-3">
                <button className="w-[150px] h-10 bg-gmain text-bg rounded-lg font-bold">ثبت تخفیف</button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          className="w-[400px] h-[500px] overflow-y-auto	mt-[130px] bg-bg  mx-auto p-4 font-roya md:w-[750px] rounded-lg "
          isOpen={isModalDelet}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            // content: {
            //   width: "400px",
            //   height: "500px",
            //   margin: "auto",
            //   backgroundColor: "#E0EAF1",
            //   padding:"20px",
            //   marginTop:"100px"

            // },
          }}
        >
          <div className="modal-middel mt-5">
            <div className=" content-discount bg-bg p-3 flex flex-col items-center justify-center flex-wrap  gap-3 rounded-lg">
              <h1 className="font-bold text">آیا از حذف کردن این محصول اطمینان دارید؟</h1>
              <div className="btns flex gap-3 mt-3">
                <button className="w-[150px] h-10 bg-gmain rounded-lg text-bg">بلی</button>
                <button onClick={()=> setIsModalDelet(false)} className="w-[150px] h-10 bg-gmelo rounded-lg text-text">خیر</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}