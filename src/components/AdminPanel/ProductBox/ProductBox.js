import React, { useState } from "react";
import Modal from "react-modal";

export default function ProductBox() {
  const [isModalDiscount, setIsModalDiscount] = useState(false);
  const [isModalDelet, setIsModalDelet] = useState(false);
  const [isModalOffer, setIsModalOffer] = useState(false);
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
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="btn-discount w-[220px] h-[60px] flex items-center justify-center  gap-2 border-dashed border-gmain border-2 rounded-lg p-1">
            <button
              onClick={() => setIsModalDiscount(true)}
              className="w-[150px] h-10 bg-gmain text-bg rounded-lg"
            >
              افزودن تخفیف
            </button>
            <svg
              className="mt-4"
              width="60"
              height="60"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2251_26931)">
                <path
                  d="M25.8748 12.3115C25.8748 11.5755 25.6584 10.8561 25.2529 10.2443C24.8474 9.63243 24.2712 9.15564 23.597 8.87429C22.9228 8.59295 22.181 8.51971 21.4656 8.66376C20.7501 8.80788 20.0931 9.1628 19.5776 9.6837C19.0622 10.2046 18.7116 10.868 18.57 11.59C18.4285 12.312 18.5025 13.0601 18.7826 13.7396C19.0627 14.4192 19.5364 14.9997 20.1437 15.4076C20.751 15.8155 21.4645 16.0325 22.1941 16.0312C22.678 16.0312 23.1573 15.9349 23.6042 15.7479C24.0512 15.5609 24.4573 15.2868 24.7992 14.9413C25.141 14.5958 25.412 14.1857 25.5966 13.7344C25.7812 13.2832 25.8758 12.7996 25.8748 12.3115ZM20.5113 12.3115C20.5113 11.9771 20.6096 11.6502 20.7938 11.3722C20.978 11.0941 21.2397 10.8774 21.546 10.7494C21.8523 10.6215 22.1893 10.588 22.5144 10.6532C22.8395 10.7184 23.1382 10.8795 23.3726 11.116C23.607 11.3524 23.7666 11.6536 23.8313 11.9816C23.896 12.3097 23.8628 12.6496 23.7359 12.9585C23.6091 13.2674 23.3943 13.5315 23.1186 13.7173C22.843 13.9031 22.5189 14.0022 22.1874 14.0022C21.744 14.0005 21.3194 13.8215 21.0065 13.5047C20.6937 13.1878 20.518 12.7587 20.518 12.3115H20.5113Z"
                  fill="#519D9E"
                />
                <path
                  d="M30.6683 17.6813C29.9391 17.6813 29.2261 17.8994 28.6197 18.3082C28.0133 18.7169 27.5407 19.2978 27.2616 19.9775C26.9825 20.6572 26.9095 21.4051 27.0518 22.1267C27.194 22.8482 27.5453 23.511 28.061 24.0312C28.5766 24.5514 29.2337 24.9057 29.9489 25.0492C30.6642 25.1927 31.4057 25.1191 32.0795 24.8375C32.7533 24.556 33.3292 24.0792 33.7343 23.4675C34.1395 22.8558 34.3557 22.1367 34.3557 21.401C34.3557 20.4145 33.9673 19.4683 33.2757 18.7708C32.5842 18.0732 31.6463 17.6813 30.6683 17.6813ZM30.6683 23.0918C30.3366 23.0918 30.0122 22.9924 29.7365 22.8063C29.4607 22.6203 29.2459 22.3558 29.1192 22.0465C28.9926 21.7371 28.9598 21.3968 29.0249 21.0687C29.0902 20.7405 29.2505 20.4392 29.4855 20.2031C29.7207 19.9668 30.0199 19.8063 30.3455 19.7419C30.6711 19.6774 31.0083 19.7119 31.3144 19.8409C31.6206 19.9699 31.8819 20.1876 32.0653 20.4666C32.2486 20.7455 32.3458 21.0731 32.3444 21.4078C32.3409 21.8538 32.1628 22.2804 31.8488 22.5946C31.5349 22.9087 31.1105 23.085 30.6683 23.085V23.0918Z"
                  fill="#519D9E"
                />
                <path
                  d="M32.4652 10.8033C32.3723 10.7084 32.2616 10.6331 32.1396 10.5817C32.0177 10.5303 31.8867 10.5038 31.7545 10.5038C31.6223 10.5038 31.4914 10.5303 31.3694 10.5817C31.2475 10.6331 31.1368 10.7084 31.0438 10.8033L20.4308 21.4754C20.3367 21.5691 20.2621 21.6808 20.2111 21.8038C20.1601 21.9269 20.1339 22.0589 20.1339 22.1923C20.1339 22.3257 20.1601 22.4577 20.2111 22.5808C20.2621 22.7038 20.3367 22.8155 20.4308 22.9092C20.6196 23.0989 20.875 23.2058 21.1414 23.2067C21.4035 23.2163 21.6588 23.1216 21.8521 22.943L32.4652 12.2371C32.5592 12.1434 32.6339 12.0317 32.6849 11.9087C32.7359 11.7856 32.7621 11.6536 32.7621 11.5202C32.7621 11.3868 32.7359 11.2548 32.6849 11.1317C32.6339 11.0087 32.5592 10.897 32.4652 10.8033Z"
                  fill="#519D9E"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2251_26931"
                  x="0.5"
                  y="0.591797"
                  width="51.8555"
                  height="52.5293"
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
                    result="effect1_dropShadow_2251_26931"
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
                    result="effect1_dropShadow_2251_26931"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2251_26931"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="btn-offer w-[220px] h-[60px] flex items-center  gap-2 border-dashed border-gmain border-2 rounded-lg p-1">
            <button
              onClick={() => setIsModalOffer(true)}
              className="w-[150px] h-10 bg-gmain text-bg rounded-lg"
            >
              انتخاب پیشنهاد روز
            </button>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 29.6914C8.43595 29.6914 2.29446 23.5499 2.29446 15.9858C2.29446 11.3525 4.59962 7.25311 8.12237 4.77204C8.64092 4.40646 8.76482 3.69059 8.40077 3.17357C8.03671 2.65502 7.31931 2.53112 6.8023 2.89517C2.6891 5.79231 0 10.577 0 15.9858C0 24.8164 7.16941 31.9858 16 31.9858C16.6333 31.9858 17.1472 31.4718 17.1472 30.8386C17.1472 30.2053 16.6333 29.6914 16 29.6914Z"
                fill="#519D9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8841 2.30779C24.0367 2.76363 29.7055 8.7185 29.7055 15.9858C29.7055 20.1632 27.8333 23.9047 24.8826 26.4195C24.4008 26.8309 24.3426 27.556 24.7541 28.0378C25.1641 28.5196 25.8891 28.5778 26.3709 28.1663C29.8157 25.2309 32 20.8608 32 15.9858C32 7.50091 25.3813 0.550241 17.0294 0.017927C16.3977 -0.0218436 15.8516 0.458463 15.8119 1.0902C15.7721 1.72194 16.2524 2.26802 16.8841 2.30779Z"
                fill="#519D9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.9159 26.9915H25.2482V24.3239C25.2482 23.6906 24.7342 23.1766 24.101 23.1766C23.4677 23.1766 22.9537 23.6906 22.9537 24.3239V28.1388C22.9537 28.772 23.4677 29.286 24.101 29.286H27.9159C28.5491 29.286 29.0631 28.772 29.0631 28.1388C29.0631 27.5055 28.5491 26.9915 27.9159 26.9915Z"
                fill="#519D9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.97132 3.63093H7.63748V6.29709C7.63748 6.93036 8.15143 7.44431 8.7847 7.44431C9.41797 7.44431 9.93193 6.93036 9.93193 6.29709V2.4837C9.93193 1.85043 9.4195 1.33647 8.7847 1.33647H4.97132C4.33805 1.33647 3.82409 1.85043 3.82409 2.4837C3.82409 3.11697 4.33805 3.63093 4.97132 3.63093Z"
                fill="#519D9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4436 7.19651C11.5885 7.19651 7.64818 11.1384 7.64818 15.9919C7.64818 20.847 11.5885 24.7873 16.4436 24.7873C21.2971 24.7873 25.239 20.847 25.239 15.9919C25.239 11.1384 21.2971 7.19651 16.4436 7.19651ZM14.914 11.7854V15.6095C14.914 15.9139 15.0348 16.2061 15.2505 16.4218L18.3098 19.481C18.7564 19.9277 19.4845 19.9277 19.9312 19.481C20.3794 19.0328 20.3794 18.3063 19.9312 17.8581L17.2084 15.1353V11.7854C17.2084 11.1522 16.6945 10.6382 16.0612 10.6382C15.4279 10.6382 14.914 11.1522 14.914 11.7854Z"
                fill="#519D9E"
              />
            </svg>
          </div>
        </div>
        <div className="btn-delet border-dashed border-gmain border-2 rounded-lg p-1 h-[130px] flex items-center justify-center transition-all duration-700 hover:bg-red">
          <button onClick={() => setIsModalDelet(true)}>
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
                <button className="w-[150px] h-10 bg-gmain text-bg rounded-lg font-bold">
                  ثبت تخفیف
                </button>
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
              <h1 className="font-bold text">
                آیا از حذف کردن این محصول اطمینان دارید؟
              </h1>
              <div className="btns flex gap-3 mt-3">
                <button className="w-[150px] h-10 bg-gmain rounded-lg text-bg">
                  بلی
                </button>
                <button
                  onClick={() => setIsModalDelet(false)}
                  className="w-[150px] h-10 bg-gmelo rounded-lg text-text"
                >
                  خیر
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          className="w-[400px] h-[500px] overflow-y-auto	mt-[130px] bg-bg  mx-auto p-4 font-roya md:w-[750px] rounded-lg "
          isOpen={isModalOffer}
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
              onClick={() => setIsModalOffer(false)}
              className="bg-gmain w-10 h-10 flex items-center justify-center rounded-full hover:bg-gmelo hover:text-text"
            >
              <img src="/images/close.svg" alt="" />
            </div>
            <div className="flex gap-2 mt-3">
              <h1 className="text-text font-bold">پیشنهاد روز</h1>
            </div>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 29.6914C8.43595 29.6914 2.29446 23.5499 2.29446 15.9858C2.29446 11.3525 4.59962 7.25311 8.12237 4.77204C8.64092 4.40646 8.76482 3.69059 8.40077 3.17357C8.03671 2.65502 7.31931 2.53112 6.8023 2.89517C2.6891 5.79231 0 10.577 0 15.9858C0 24.8164 7.16941 31.9858 16 31.9858C16.6333 31.9858 17.1472 31.4718 17.1472 30.8386C17.1472 30.2053 16.6333 29.6914 16 29.6914Z"
                  fill="#519D9E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8841 2.30779C24.0367 2.76363 29.7055 8.7185 29.7055 15.9858C29.7055 20.1632 27.8333 23.9047 24.8826 26.4195C24.4008 26.8309 24.3426 27.556 24.7541 28.0378C25.1641 28.5196 25.8891 28.5778 26.3709 28.1663C29.8157 25.2309 32 20.8608 32 15.9858C32 7.50091 25.3813 0.550241 17.0294 0.017927C16.3977 -0.0218436 15.8516 0.458463 15.8119 1.0902C15.7721 1.72194 16.2524 2.26802 16.8841 2.30779Z"
                  fill="#519D9E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.9159 26.9915H25.2482V24.3239C25.2482 23.6906 24.7342 23.1766 24.101 23.1766C23.4677 23.1766 22.9537 23.6906 22.9537 24.3239V28.1388C22.9537 28.772 23.4677 29.286 24.101 29.286H27.9159C28.5491 29.286 29.0631 28.772 29.0631 28.1388C29.0631 27.5055 28.5491 26.9915 27.9159 26.9915Z"
                  fill="#519D9E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.97132 3.63093H7.63748V6.29709C7.63748 6.93036 8.15143 7.44431 8.7847 7.44431C9.41797 7.44431 9.93193 6.93036 9.93193 6.29709V2.4837C9.93193 1.85043 9.4195 1.33647 8.7847 1.33647H4.97132C4.33805 1.33647 3.82409 1.85043 3.82409 2.4837C3.82409 3.11697 4.33805 3.63093 4.97132 3.63093Z"
                  fill="#519D9E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4436 7.19651C11.5885 7.19651 7.64818 11.1384 7.64818 15.9919C7.64818 20.847 11.5885 24.7873 16.4436 24.7873C21.2971 24.7873 25.239 20.847 25.239 15.9919C25.239 11.1384 21.2971 7.19651 16.4436 7.19651ZM14.914 11.7854V15.6095C14.914 15.9139 15.0348 16.2061 15.2505 16.4218L18.3098 19.481C18.7564 19.9277 19.4845 19.9277 19.9312 19.481C20.3794 19.0328 20.3794 18.3063 19.9312 17.8581L17.2084 15.1353V11.7854C17.2084 11.1522 16.6945 10.6382 16.0612 10.6382C15.4279 10.6382 14.914 11.1522 14.914 11.7854Z"
                  fill="#519D9E"
                />
              </svg>
            </div>
          </div>
          <div className="modal-middel mt-5">
            <div className=" content-offer bg-bg p-3 flex flex-col items-center justify-center flex-wrap  gap-3 rounded-lg">
              <div className="input mt-3">
                <div className=" relative">
                  <input
                    className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                  <p className="bg-bg text-text absolute -top-4 right-2">
                  عنوان اصلی
                  </p>
                </div>
                <h1 className="text-text mt-3">عنوان فرعی</h1>
                <div className=" relative mt-2">
                  <input
                    className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                </div>
                <div className=" relative mt-2">
                  <input
                    className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                </div>
                <div className=" relative mt-2">
                  <input
                    className="w-[270px] h-10 border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                </div>
              </div>
              <div className="add mt-3">
                <button className="w-[150px] h-10 bg-gmain text-bg rounded-lg font-bold">
                  ثبت 
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
