import React, { useState, useRef, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Navbar.css";

export default function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [showProfile , setShowProfile] = useState(false);
  const navbarRef = useRef(null);
  const profilRef = useRef (null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (showMobile && !navbarRef.current.contains(event.target)) {
        setShowMobile(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMobile]);

  useEffect(() => {
    function handleProfileClick(event) {
      if (showProfile && !profilRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("click", handleProfileClick);

    return () => {
      document.removeEventListener("click", handleProfileClick);
    };
  }, [showProfile]);

  const handelMobileMenu = (e) => {
    e.stopPropagation();
    setShowMobile(!showMobile);
    console.log(showMobile);
    
  };

  const handelProfile = (e)=>{
    e.stopPropagation();
    setShowProfile(!showProfile)
    console.log(showProfile)
  }

  return (
    <>
      <div className=" w-full bg-gmelo fixed top-0 left-0 right-0 z-20 border-solid border-gmain border-b-4 font-roya">
        <div className="container ">
          <div className="navbar-content		flex justify-between items-start pt-4 ">
            <div className="navbar-right ">
              <img
                onClick={handelMobileMenu}
                src="/images/Asset 3 4.png"
                alt=""
                className="navbar-logo cursor-pointer md:hidden	"
              />
              <img className="hidden md:block " src="/images/logo.svg" alt="" />
            </div>
            {/* start mobile menu */}
            <div className="navbar-middle flex flex-col justify-between	 items-center w-2/4 md:hidden">
              <div>
                <img
                  className="w-[64px] h-[24px]"
                  src="/images/logo.svg"
                  alt=""
                />
              </div>
              <div className="w-full relative pt-[9px] flex flex-col items-center justify-center">
                <input
                  className="bg-gmelo border-t border-b border-gmain rounded-lg w-full h-[32px] text-center "
                  type="text"
                  placeholder="نام کتاب نام نویسنده ناشر"
                />
                <button className="absolute bottom-0 -left-2">
                  <img className="w-8 h-8" src="/images/search.svg" alt="" />
                </button>
              </div>
              <div className=" 	w-full pt-2 ">
                <ul
                  ref={navbarRef}
                  className={`${
                    showMobile ? "translate-x-0" : "translate-x-80"
                  } flex flex-col transition-all duration-700 font-bold text-lg  justify-start	p-4 w-[300px] h-[100vh]	absolute top-0 right-0 opacity-100	 bg-gmain `}
                >
                  <li className="flex  p-2 rounded-t	mx-auto">
                    <Accordion className="w-[200px]" defaultActiveKey="0">
                      <Accordion.Item className="bg-bg " eventKey="0">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="1">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="2">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="3">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="4">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="5">
                        <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="bg-bg " eventKey="6">
                        <Accordion.Header className=" h-[30px]  text-xs bg-bg">
                          داستان و رمان
                        </Accordion.Header>
                        <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2 rounded-b-lg">
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                          <a href="">داستان کوتاه</a>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </li>
                  <li className="flex   rounded-t w-[200px] mx-auto">
                    <a
                      className=" text-bg bg-text  w-full p-2 rounded-lg text-center"
                      href="#"
                    >
                      درباره تاجک
                    </a>
                  </li>
                  <li className="flex   rounded-t w-[200px] mx-auto	">
                    <a
                      className="text-bg bg-text  w-full mt-3 p-2 rounded-lg text-center"
                      href="#"
                    >
                      نصب تاجک
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end mobile menu */}

            {/*start main menu */}
            <div className="hidden navbar-middle md:flex  md:w-[40%] flex-col 	 items-center  ">
              <div>
                <img
                  className="w-[64px] h-[24px] md:hidden"
                  src="/images/logo.svg"
                  alt=""
                />
              </div>
              <div className="w-full relative pt-[9px] md:pt-0 flex flex-col items-center justify-center">
                <input
                  className="bg-gmelo border-t border-b border-gmain rounded-lg w-full h-[40px] text-center "
                  type="text"
                  placeholder="نام کتاب نام نویسنده ناشر"
                />
                <button className="absolute bottom-0 -left-2">
                  <img
                    className="w-8 h-8 md:h-10 md:w-10"
                    src="/images/search.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className=" 	w-full pt-2">
                <ul className="  flex font-bold text-lg  justify-between w-full 	">
                  <li
                    onMouseEnter={() => setIsSubMenuOpen(true)}
                    onMouseLeave={() => setIsSubMenuOpen(false)}
                    className="flex hover:bg-bg p-2 rounded-t	"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_926_2914)">
                        <path
                          d="M23.9996 0.0797729H13.0703V11.009H23.9996V0.0797729Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M8.76611 2.24291V8.84588H2.16314V2.24291H8.76611ZM10.9292 0.0797729H0V11.009H10.9292V0.0797729Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M8.76611 15.1541V21.7571H2.16314V15.1541H8.76611ZM10.9292 12.991H0V23.9202H10.9292V12.991Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M21.8364 15.1541V21.7571H15.2334V15.1541H21.8364ZM23.9996 12.991H13.0703V23.9202H23.9996V12.991Z"
                          fill="#519D9E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_926_2914">
                          <rect
                            width="24"
                            height="23.8405"
                            fill="white"
                            transform="translate(0 0.0797729)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <a className="mr-5  text-xs	lg:text-sm xl:text-lg" href="#">
                      دسته بندی
                    </a>
                    <ul
                      onMouseEnter={() => setIsSubMenuOpen(true)}
                      onMouseLeave={() => setIsSubMenuOpen(false)}
                      className={`${
                        isSubMenuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 hidden translate-y-[-10px]"
                      } transition-all duration-300 flex justify-around flex-wrap absolute top-full bg-bg md:left-[20%] lg:left-[30%] xl:left-[36%] min-w-[500px] max-w-[500px] gap-5 h-[400px]  border border-gray-300 rounded-lg p-2 shadow-lg transform -translate-y-2 `}
                    >
                      <li className="sajad active text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                      <li className="text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                      <li className="text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                      <li className="text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                      <li className="text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                      <li className="text-gmain font-bold text-xl">
                        داستان ورمان
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                        <ul>
                          <li className="text-text font-normal	">
                            داستان کوتاه
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="flex hover:bg-bg p-2 rounded-t	">
                    <svg
                      width="25"
                      height="22"
                      viewBox="0 0 25 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_926_2900)">
                        <path
                          d="M22.4961 11.999V9.99799C22.4961 4.47799 18.0231 -0.00100708 12.4971 -0.00100708C6.97107 -0.00100708 2.49807 4.47799 2.49807 9.99799V11.999C1.39707 11.999 0.49707 12.899 0.49707 14V20C0.49707 21.101 1.39707 22.001 2.49807 22.001H5.99907V12.002H4.49907V10.001C4.49907 5.58499 8.08107 1.99999 12.5001 1.99999C16.9191 1.99999 20.5011 5.58199 20.5011 10.001V12.002H19.0011V22.001H22.5021C23.6031 22.001 24.5031 21.101 24.5031 20V14C24.5031 12.899 23.6031 11.999 22.5021 11.999H22.4961Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M10.5835 20.6574H8.50343C8.2273 20.6574 7.96316 20.519 7.76807 20.2697C7.57297 20.0233 7.46191 19.6855 7.46191 19.3366V6.13107C7.46191 5.78217 7.57297 5.44435 7.76807 5.19791C7.96316 4.95146 8.2273 4.81024 8.50343 4.81024H10.5835C10.8596 4.81024 11.1237 4.94869 11.3188 5.19791C11.5139 5.44435 11.625 5.78217 11.625 6.13107V19.3366C11.625 19.6855 11.5139 20.0233 11.3188 20.2697C11.1237 20.5162 10.8596 20.6574 10.5835 20.6574ZM8.50343 5.69079C8.41039 5.69079 8.32334 5.73787 8.25731 5.82094C8.19128 5.90401 8.15526 6.01477 8.15526 6.13107V19.3366C8.15526 19.4529 8.19128 19.5664 8.25731 19.6467C8.32334 19.727 8.41039 19.7769 8.50343 19.7769H10.5835C10.6765 19.7769 10.7636 19.7298 10.8296 19.6467C10.8956 19.5636 10.9316 19.4529 10.9316 19.3366V6.13107C10.9316 6.01477 10.8956 5.90124 10.8296 5.82094C10.7636 5.73787 10.6765 5.69079 10.5835 5.69079H8.50343Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M10.2344 8.33237H8.84809C8.75506 8.33237 8.66804 8.2853 8.60203 8.20224C8.53601 8.11918 8.5 8.00843 8.5 7.89215C8.5 7.77587 8.53601 7.66235 8.60203 7.58206C8.66804 7.50177 8.75506 7.45193 8.84809 7.45193H10.2344C10.3275 7.45193 10.4145 7.499 10.4805 7.58206C10.5465 7.66512 10.5825 7.77587 10.5825 7.89215C10.5825 8.00843 10.5465 8.12195 10.4805 8.20224C10.4145 8.28253 10.3275 8.33237 10.2344 8.33237Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M10.2344 18.0157H8.84809C8.75506 18.0157 8.66804 17.9686 8.60203 17.8855C8.53601 17.8025 8.5 17.6917 8.5 17.5754C8.5 17.4592 8.53601 17.3456 8.60203 17.2654C8.66804 17.1851 8.75506 17.1352 8.84809 17.1352H10.2344C10.3275 17.1352 10.4145 17.1823 10.4805 17.2654C10.5465 17.3484 10.5825 17.4592 10.5825 17.5754C10.5825 17.6917 10.5465 17.8052 10.4805 17.8855C10.4145 17.9658 10.3275 18.0157 10.2344 18.0157Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M15.5087 20.6574C15.2806 20.6574 15.0585 20.5605 14.8754 20.3833C14.6953 20.2061 14.5632 19.9596 14.5062 19.6772L11.8109 6.92304C11.7388 6.58521 11.7778 6.22524 11.9159 5.92065C12.054 5.61605 12.2821 5.3973 12.5462 5.30592L14.5572 4.62197C14.8244 4.53336 15.1065 4.58044 15.3466 4.75488C15.5867 4.92933 15.7608 5.21731 15.8329 5.55514L18.5282 18.3093C18.6002 18.6471 18.5612 19.0071 18.4232 19.3117C18.2851 19.6163 18.057 19.835 17.7928 19.9264L15.7818 20.6104C15.6948 20.6408 15.6017 20.6547 15.5117 20.6547L15.5087 20.6574ZM14.8274 5.45822C14.7973 5.45822 14.7673 5.46376 14.7373 5.47206L12.7263 6.15601C12.6813 6.16986 12.6423 6.19755 12.6063 6.23078C12.5702 6.26678 12.5402 6.31108 12.5162 6.36092C12.4922 6.41077 12.4772 6.46615 12.4712 6.5243C12.4652 6.58245 12.4712 6.6406 12.4802 6.69598L15.1725 19.4529C15.1845 19.5083 15.2056 19.5609 15.2326 19.608C15.2596 19.655 15.2956 19.691 15.3346 19.7215C15.3736 19.7492 15.4187 19.7686 15.4637 19.7769C15.5087 19.7852 15.5537 19.7796 15.5987 19.7658L17.6098 19.0819C17.6548 19.068 17.6938 19.0403 17.7298 19.0071C17.7658 18.9711 17.7958 18.9268 17.8199 18.8769C17.8439 18.8271 17.8589 18.7717 17.8619 18.7136C17.8679 18.6554 17.8619 18.5973 17.8529 18.5419L15.1575 5.78773C15.1365 5.69359 15.0945 5.61052 15.0345 5.55237C14.9744 5.49422 14.8994 5.46099 14.8244 5.46099L14.8274 5.45822Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M13.5095 8.6092C13.4254 8.6092 13.3444 8.57044 13.2814 8.49845C13.2184 8.42924 13.1764 8.32956 13.1674 8.22436C13.1554 8.11915 13.1764 8.01117 13.2244 7.92257C13.2724 7.83398 13.3414 7.7703 13.4224 7.74261L14.7638 7.28578C14.8088 7.26917 14.8538 7.2664 14.8988 7.27471C14.9438 7.28301 14.9888 7.29963 15.0278 7.33008C15.0668 7.35777 15.1029 7.39653 15.1299 7.4436C15.1569 7.49066 15.1779 7.54327 15.1899 7.59864C15.2019 7.65401 15.2049 7.71216 15.1989 7.7703C15.1929 7.82844 15.1779 7.88381 15.1539 7.93365C15.1299 7.98348 15.0999 8.02778 15.0638 8.06377C15.0278 8.09977 14.9858 8.12468 14.9408 8.13853L13.6025 8.59536C13.5725 8.60643 13.5425 8.61197 13.5125 8.61197L13.5095 8.6092Z"
                          fill="#519D9E"
                        />
                        <path
                          d="M15.485 17.963C15.401 17.963 15.32 17.9242 15.257 17.8522C15.194 17.783 15.152 17.6833 15.143 17.5781C15.131 17.4729 15.152 17.3649 15.2 17.2763C15.248 17.1877 15.317 17.1241 15.398 17.0964L16.7364 16.6395C16.8264 16.6091 16.9194 16.6257 17.0004 16.6838C17.0814 16.742 17.1385 16.8389 17.1625 16.9524C17.1865 17.0659 17.1745 17.185 17.1265 17.2874C17.0814 17.3899 17.0034 17.4618 16.9164 17.4923L15.5781 17.9491C15.5481 17.9602 15.5181 17.963 15.488 17.963H15.485Z"
                          fill="#519D9E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_926_2900">
                          <rect
                            width="24.006"
                            height="22.002"
                            fill="white"
                            transform="translate(0.49707 -0.00100708)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <a className="mr-5 text-xs	lg:text-sm xl:text-lg" href="#">
                      درباره تاجک
                    </a>
                  </li>
                  <li className="flex hover:bg-bg p-2 rounded-t	">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.375 10.75H24.25V10H19.75V6.25C19.75 6.04262 19.5824 5.875 19.375 5.875C18.6408 5.875 17.977 6.17875 17.5 6.66663V3.625C17.5 2.59113 16.6589 1.75 15.625 1.75H5.875C4.84113 1.75 4 2.59113 4 3.625V10.2085C3.77837 10.0795 3.5245 10 3.25 10C2.42275 10 1.75 10.6727 1.75 11.5C1.75 11.9504 1.95325 12.3497 2.26825 12.625C1.95325 12.9003 1.75 13.2996 1.75 13.75C1.75 14.2004 1.95325 14.5997 2.26825 14.875C1.95325 15.1503 1.75 15.5496 1.75 16C1.75 16.4504 1.95325 16.8497 2.26825 17.125C1.95325 17.4003 1.75 17.7996 1.75 18.25C1.75 19.0772 2.42275 19.75 3.25 19.75C3.5245 19.75 3.77837 19.6705 4 19.5415V22.375C4 23.4089 4.84113 24.25 5.875 24.25H15.625C16.6589 24.25 17.5 23.4089 17.5 22.375V19.75H24.25V19H17.5V8.5C17.5 7.59438 18.1454 6.83687 19 6.66288V10.375C19 10.5824 19.1676 10.75 19.375 10.75ZM5.875 2.5H15.625C16.2452 2.5 16.75 3.00475 16.75 3.625V4H4.75V3.625C4.75 3.00475 5.25475 2.5 5.875 2.5ZM2.5 11.5C2.5 11.0864 2.83637 10.75 3.25 10.75C3.66363 10.75 4 11.0864 4 11.5C4 11.9136 3.66363 12.25 3.25 12.25C2.83637 12.25 2.5 11.9136 2.5 11.5ZM2.5 13.75C2.5 13.3364 2.83637 13 3.25 13C3.66363 13 4 13.3364 4 13.75C4 14.1636 3.66363 14.5 3.25 14.5C2.83637 14.5 2.5 14.1636 2.5 13.75ZM2.5 16C2.5 15.5864 2.83637 15.25 3.25 15.25C3.66363 15.25 4 15.5864 4 16C4 16.4136 3.66363 16.75 3.25 16.75C2.83637 16.75 2.5 16.4136 2.5 16ZM3.25 19C2.83637 19 2.5 18.6636 2.5 18.25C2.5 17.8364 2.83637 17.5 3.25 17.5C3.66363 17.5 4 17.8364 4 18.25C4 18.6636 3.66363 19 3.25 19ZM15.625 23.5H5.875C5.25475 23.5 4.75 22.9953 4.75 22.375V22H16.75V22.375C16.75 22.9953 16.2452 23.5 15.625 23.5ZM16.75 21.25H4.75V4.75H16.75V8.5V21.25Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M5.72656 9.9375H9.55469C9.76638 9.9375 9.9375 9.76638 9.9375 9.55469V6.49219C9.9375 6.28049 9.76638 6.10938 9.55469 6.10938H5.72656C5.51487 6.10938 5.34375 6.28049 5.34375 6.49219V9.55469C5.34375 9.76638 5.51487 9.9375 5.72656 9.9375ZM6.10938 6.875H9.17188V9.17187H6.10938V6.875Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M15.6797 11.0859H11.8516C11.6399 11.0859 11.4688 11.2571 11.4688 11.4687V14.5312C11.4688 14.7429 11.6399 14.9141 11.8516 14.9141H15.6797C15.8914 14.9141 16.0625 14.7429 16.0625 14.5312V11.4687C16.0625 11.2571 15.8914 11.0859 15.6797 11.0859ZM15.2969 14.1484H12.2344V11.8516H15.2969V14.1484Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 6.10938H10.7031V6.875H16.0625V6.10938Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 7.64062H10.7031V8.40625H16.0625V7.64062Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M14.5312 9.17188H10.7031V9.9375H14.5312V9.17188Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M9.55469 16.0625H5.72656C5.51487 16.0625 5.34375 16.2336 5.34375 16.4453V19.5078C5.34375 19.7195 5.51487 19.8906 5.72656 19.8906H9.55469C9.76638 19.8906 9.9375 19.7195 9.9375 19.5078V16.4453C9.9375 16.2336 9.76638 16.0625 9.55469 16.0625ZM9.17188 19.125H6.10938V16.8281H9.17188V19.125Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 16.0625H10.7031V16.8281H16.0625V16.0625Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 17.5938H10.7031V18.3594H16.0625V17.5938Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M11.4688 19.125H10.7031V19.8906H11.4688V19.125Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M10.7031 11.0859H5.34375V11.8516H10.7031V11.0859Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M10.7031 12.6172H5.34375V13.3828H10.7031V12.6172Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M10.7031 14.1484H5.34375V14.9141H10.7031V14.1484Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 9.17188H15.2969V9.9375H16.0625V9.17188Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M13 19.125H12.2344V19.8906H13V19.125Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M14.5312 19.125H13.7656V19.8906H14.5312V19.125Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M16.0625 19.125H15.2969V19.8906H16.0625V19.125Z"
                        fill="#519D9E"
                      />
                    </svg>
                    <a className="mr-5 text-xs	lg:text-sm xl:text-lg" href="#">
                      نصب تاجک
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end main menu */}
            <div className="navbar-left flex justify-around items-center relative  ">
              <button className="ml-3">
                <img
                  className=" w-6 h-6 md:w-10 md:h-10 "
                  src="/images/Frame 365.png"
                  alt=""
                />
              </button>
              <div className="relative flex items-center">
                <button onClick={handelProfile} className="w-6 h-6 md:w-10 md:h-10 md:absolute	md:-right-2">
                <img
                  className=" w-6 h-6 md:w-10 md:h-10 "
                  src="/images/profile.svg"
                  alt=""
                />
                </button>
                <button onClick={handelProfile} className="hidden md:block  border-t border-b border-gmain rounded-lg w-40 h-10 font-bold ">
                  ورود
                </button>
              </div>
              <div ref={profilRef} className={`${showProfile ? 'block' : 'hidden'} menu-profile w-[212px] h-auto bg-bg absolute	top-[50px] left-0 shadow-lg rounded-lg`}>
                <ul className="p-4">
                  <li className="flex items-center justify-between">
                    <a className="font-bold text-text" href="">نام کاربری</a>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3996 15.7H9.59961C8.99961 15.7 8.59961 15.3 8.59961 14.7V11.9C8.59961 11.6 8.69961 11.4 8.89961 11.2L19.4996 0.599988C19.6996 0.399988 19.8996 0.299988 20.1996 0.299988C20.4996 0.299988 20.6996 0.399988 20.8996 0.599988L23.6996 3.39999C24.0996 3.79999 24.0996 4.39999 23.6996 4.79999L13.0996 15.4C12.8996 15.6 12.6996 15.7 12.3996 15.7Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M14.4996 16.8C13.8996 17.4 13.1996 17.7 12.3996 17.7H9.59961C7.89961 17.7 6.59961 16.4 6.59961 14.7V11.9C6.59961 11.1 6.89961 10.3 7.49961 9.80001L13.4996 3.70001H3.59961C1.89961 3.70001 0.599609 5.00001 0.599609 6.70001V20.7C0.599609 22.4 1.89961 23.7 3.59961 23.7H17.5996C19.2996 23.7 20.5996 22.4 20.5996 20.7V10.8L14.4996 16.8Z"
                        fill="#519D9E"
                      />
                    </svg>
                  </li>
                  <hr className="color-gmain" />
                  <li className="flex items-center justify-between">
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.75 4.5C12.8639 4.5 12.1456 5.17158 12.1456 6H15.3545C15.3545 5.17158 14.6361 4.5 13.75 4.5ZM11.0759 6H10.4226C9.60903 6 8.92422 6.56932 8.82916 7.32474L8.0112 13.8248C7.89899 14.7165 8.64425 15.5 9.60467 15.5H17.8954C18.8558 15.5 19.601 14.7165 19.4888 13.8248L18.6708 7.32474C18.5758 6.56932 17.891 6 17.0774 6H16.4241C16.4241 4.61929 15.2269 3.5 13.75 3.5C12.2731 3.5 11.0759 4.61929 11.0759 6Z"
                        fill="#519D9E"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.6603 0.00407104C7.64113 -0.159231 2.70987 4.61151 2.70987 10.502H0.593092C0.0609423 10.502 -0.19922 11.1319 0.179198 11.4935L3.47853 14.7595C3.71504 14.9928 4.08163 14.9928 4.31814 14.7595L7.61747 11.4935C7.98407 11.1319 7.7239 10.502 7.19175 10.502H5.07498C5.07498 5.95292 8.83551 2.27863 13.4711 2.33695C17.8702 2.39527 21.5716 6.04623 21.6308 10.3854C21.6899 14.9462 17.9648 18.6671 13.3529 18.6671C11.449 18.6671 9.68695 18.0256 8.29153 16.9408C7.81851 16.5792 7.15628 16.6142 6.73056 17.0341C6.23388 17.524 6.26936 18.3522 6.82516 18.7721C8.62265 20.1718 10.8813 21 13.3529 21C19.3248 21 24.1614 16.1359 23.9959 10.1988C23.8421 4.72816 19.2065 0.155708 13.6603 0.00407104Z"
                        fill="#519D9E"
                      />
                    </svg>
                    <a className="font-bold text-text" href="">تاریحچه سفارشات</a>
                  </li>
                  <li className="flex items-center justify-between mt-4">
                    <svg
                      width="18"
                      height="25"
                      viewBox="0 0 18 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 3.24232C18 2.38413 17.6655 1.56194 17.071 0.955742C16.4706 0.342581 15.6554 0 14.8065 0H3.19355C2.34465 0 1.52942 0.342581 0.929032 0.955742C0.334452 1.56194 0 2.38413 0 3.24232C0 7.71677 0 18.2822 0 22.9111C0 23.7147 0.462194 24.4417 1.17639 24.7761C1.90219 25.1175 2.75574 24.9968 3.36194 24.4672L8.81768 19.692C8.92219 19.6003 9.07781 19.6003 9.18232 19.692L14.6381 24.4672C15.2443 24.9968 16.0978 25.1175 16.8236 24.7761C17.5378 24.4417 18 23.7147 18 22.9111V3.24232Z"
                        fill="#519D9E"
                      />
                    </svg>
                    <a className="font-bold text-text" href="">کتاب های مورد علاقه</a>
                  </li>
                  <li className="flex items-center justify-between mt-4">
                    <svg
                      width="18"
                      height="26"
                      viewBox="0 0 18 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00037 0C3.61694 0 0 3.08559 0 7.67801C0 13.7645 7.7387 24.7383 7.81576 24.8241C7.96476 24.9905 8.14716 25.1236 8.35107 25.2148C8.55497 25.306 8.77581 25.3532 8.99917 25.3533C9.22254 25.3534 9.44342 25.3064 9.64741 25.2155C9.85141 25.1245 10.0339 24.9915 10.1831 24.8253C10.2613 24.7383 18 13.7645 18 7.67801C18 3.08559 14.3832 0 9.00037 0ZM9 14.9218C7.82996 14.9218 6.6862 14.5748 5.71335 13.9248C4.7405 13.2747 3.98225 12.3508 3.5345 11.2698C3.08674 10.1889 2.96959 8.99938 3.19786 7.85182C3.42612 6.70427 3.98955 5.65017 4.81689 4.82282C5.64423 3.99548 6.69833 3.43205 7.84589 3.20379C8.99345 2.97553 10.1829 3.09268 11.2639 3.54043C12.3449 3.98818 13.2688 4.74643 13.9188 5.71928C14.5689 6.69213 14.9158 7.83589 14.9158 9.00593C14.9158 9.78281 14.7628 10.5521 14.4655 11.2698C14.1682 11.9876 13.7325 12.6397 13.1831 13.1891C12.6338 13.7384 11.9816 14.1742 11.2639 14.4715C10.5462 14.7688 9.77688 14.9218 9 14.9218Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M12.9394 11.5417C12.907 11.5932 12.8746 11.6408 12.8403 11.6904C12.4089 12.3087 11.8345 12.8137 11.1661 13.1625C10.4977 13.5113 9.75489 13.6935 9.00094 13.6937C8.24698 13.6939 7.50413 13.512 6.83552 13.1636C6.16691 12.8151 5.59233 12.3104 5.1606 11.6923C5.12438 11.6427 5.09007 11.5913 5.05957 11.5398C5.06339 11.5131 5.0672 11.4883 5.07101 11.4636C5.09371 11.334 5.14639 11.2116 5.22482 11.106C5.30326 11.0004 5.40529 10.9146 5.52276 10.8555C6.30997 10.4629 8.0331 9.8853 8.0331 9.8853V9.31537L7.98544 9.27916C7.65061 9.02337 7.4268 8.64877 7.36024 8.23271L7.35071 8.17171H7.30496C7.17861 8.17231 7.05496 8.13505 6.94998 8.06472C6.845 7.99439 6.7635 7.89423 6.71597 7.77715C6.65813 7.67414 6.62793 7.55791 6.6283 7.43978C6.62846 7.3596 6.64331 7.28013 6.67214 7.20532C6.68717 7.12303 6.7328 7.04949 6.79984 6.99947L6.95996 6.90416L6.92184 6.73261C6.64164 5.50699 7.55848 4.40336 8.8165 4.3252C8.82466 4.32362 8.83298 4.32298 8.84128 4.32329C8.86225 4.32138 8.88321 4.31949 8.90419 4.31949H9.0948C9.11576 4.31949 9.13673 4.32138 9.15769 4.32329C9.166 4.32298 9.17431 4.32362 9.18247 4.3252C10.4424 4.40336 11.3592 5.50699 11.079 6.73261L11.039 6.90416L11.1991 6.99947C11.2668 7.04893 11.3126 7.12274 11.3268 7.20532C11.3563 7.28002 11.3718 7.35949 11.3726 7.43978C11.372 7.55779 11.3419 7.67379 11.2849 7.77715C11.2374 7.89423 11.1559 7.99439 11.0509 8.06472C10.9459 8.13505 10.8223 8.17231 10.6959 8.17171H10.6502L10.6387 8.23271C10.5737 8.64885 10.3504 9.02377 10.0154 9.27916L9.96778 9.31537V9.8853C9.96778 9.8853 11.6909 10.4629 12.4762 10.8555C12.5939 10.9143 12.6961 11 12.7746 11.1057C12.8531 11.2113 12.9056 11.3339 12.928 11.4636C12.9318 11.4883 12.9356 11.515 12.9394 11.5417Z"
                        fill="#519D9E"
                      />
                    </svg>
                    <a className="font-bold text-text" href="">آدرس های من</a>
                  </li>
                  <hr />
                  <li className="flex items-center justify-between">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3078 1.68579L13.8209 0.0116321C13.7006 -0.00857468 13.5773 -0.00240019 13.4595 0.0297296C13.3418 0.0618593 13.2325 0.119177 13.1391 0.197719C13.0457 0.276261 12.9704 0.374153 12.9186 0.484626C12.8667 0.595098 12.8395 0.715515 12.8388 0.837548V1.77507L7.45914 3.06975C7.27664 3.11455 7.11435 3.21907 6.99807 3.3667C6.88178 3.51433 6.81819 3.69659 6.81738 3.88451V6.17252C6.81738 6.39452 6.90558 6.60744 7.06256 6.76442C7.21954 6.9214 7.43245 7.00959 7.65446 7.00959C7.87647 7.00959 8.08938 6.9214 8.24636 6.76442C8.40335 6.60744 8.49154 6.39452 8.49154 6.17252V4.53185L12.8388 3.49387V20.5814L8.49154 19.5434V18.1371C8.49154 17.9151 8.40335 17.7022 8.24636 17.5452C8.08938 17.3883 7.87647 17.3001 7.65446 17.3001C7.43245 17.3001 7.21954 17.3883 7.06256 17.5452C6.90558 17.7022 6.81738 17.9151 6.81738 18.1371V20.2019C6.81819 20.3898 6.88178 20.5721 6.99807 20.7197C7.11435 20.8674 7.27664 20.9719 7.45914 21.0167L12.8388 22.3002V23.1596C12.8404 23.2813 12.8683 23.4013 12.9204 23.5113C12.9726 23.6213 13.0478 23.7188 13.141 23.7971C13.2342 23.8755 13.3431 23.9329 13.4604 23.9654C13.5778 23.9979 13.7007 24.0047 13.8209 23.9855L23.3078 22.3114C23.5019 22.2772 23.6778 22.1756 23.8043 22.0245C23.9309 21.8735 24.0001 21.6825 23.9998 21.4854V2.5117C24.0001 2.3146 23.9309 2.12369 23.8043 1.9726C23.6778 1.82152 23.5019 1.71995 23.3078 1.68579Z"
                        fill="#519D9E"
                      />
                      <path
                        d="M10.3612 11.9986C10.3612 11.7766 10.273 11.5637 10.116 11.4067C9.95901 11.2497 9.74609 11.1615 9.52409 11.1615H5.01503V8.65027C5.00851 8.48766 4.95473 8.33048 4.86028 8.19796C4.76582 8.06544 4.63478 7.96333 4.4832 7.90412C4.33162 7.8449 4.16606 7.83116 4.00679 7.86457C3.84752 7.89798 3.70144 7.97709 3.58642 8.09222L0.238113 11.4405C0.0853282 11.5996 0 11.8115 0 12.0321C0 12.2526 0.0853282 12.4646 0.238113 12.6236L3.58642 15.9719C3.70547 16.0911 3.8577 16.1715 4.02321 16.2028C4.18872 16.2341 4.35982 16.2147 4.51414 16.1472C4.66846 16.0797 4.79882 15.9672 4.88818 15.8244C4.97755 15.6816 5.02176 15.5152 5.01503 15.3469V12.8357H9.52409C9.74609 12.8357 9.95901 12.7475 10.116 12.5905C10.273 12.4335 10.3612 12.2206 10.3612 11.9986Z"
                        fill="#519D9E"
                      />
                    </svg>
                    <a className="font-bold text-text" href="">خروج از حساب</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
