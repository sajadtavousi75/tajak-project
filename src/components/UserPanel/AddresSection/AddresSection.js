import React, { useState } from "react";
import Modal from "react-modal";
import AddresBox from "../AddresBox/AddresBox";

export default function AddresSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="addressection bg-gmelo rounded-lg my-3 w-full p-5">
      <div className="container">
        <div className="content  ">
          <AddresBox />
          <div className="flex items-center justify-end mt-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-[150px] h-10 bg-gmain text-bg rounded-lg text-end flex items-center justify-center "
            >
              افزودن آدرس جدید
            </button>
          </div>
        </div>
        <div>
          <Modal
          className="w-[400px] h-[500px] overflow-y-scroll	mt-[130px] bg-bg  mx-auto p-4 font-roya md:w-[600px]"
            isOpen={isModalOpen}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              // content: {
              //   width: "600px",
              //   height: "500px",
              //   margin: "auto",
              //   backgroundColor: "#E0EAF1",
              //   padding: "20px",
              //   marginTop: "100px",
              // },
            }}
          >
            <div className="modal-top flex items-center justify-between">
              <div
                onClick={() => setIsModalOpen(false)}
                className="bg-gmain w-10 h-10 flex items-center justify-center rounded-full hover:bg-gmelo hover:text-text"
              >
                <img src="/images/close.svg" alt="" />
              </div>
            </div>
            <div className="content">
              <h1 className="text-center font-bold text-text">افزودن آدرس جدید</h1>
              <form className="mt-3" action="#">
                <div className="mb-4 relative w-[45%]">
                  <input
                    className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                  <p className="bg-bg text-text absolute -top-4 right-2">
                  عنوان آدرس
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mb-4 relative w-[45%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    استان
                    </p>
                  </div>
                  <div className="mb-4 relative w-[45%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    شهر
                    </p>
                  </div>
                </div>
                <div className="mb-4 relative w-full">
                  <input
                    className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                    type="text"
                  />
                  <p className="bg-bg text-text absolute -top-4 right-2">
                  جزئیات آدرس
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mb-4 relative w-[30%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    پلاک
                    </p>
                  </div>
                  <div className="mb-4 relative w-[30%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    واحد
                    </p>
                  </div>
                  <div className="mb-4 relative w-[30%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    کد پستی
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mb-4 relative w-[45%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    نام گیرنده
                    </p>
                  </div>
                  <div className="mb-4 relative w-[45%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    نام خانوادگی گیرنده
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mb-4 relative w-[45%]">
                    <input
                      className="w-full border-solid border-gmain border-1 p-1 rounded-lg bg-bg 	"
                      type="text"
                    />
                    <p className="bg-bg text-text absolute -top-4 right-2">
                    شماره تماس
                    </p>
                  </div>
                  <div className="mb-4 ">
                  <button className="w-[150px] h-10 bg-gmain text-bg rounded-lg">ثبت آدرس</button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
