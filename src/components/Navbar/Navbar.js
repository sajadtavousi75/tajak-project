import React, { useState,useRef,useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Navbar.css";

export default function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showMobile, setShowMobile]= useState(false)
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (showMobile && !navbarRef.current.contains(event.target)) {
        setShowMobile(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMobile]);



  const handelMobileMenu = (e)=>{
    e.stopPropagation();
    setShowMobile(!showMobile)
    console.log(showMobile)
    if (showMobile) {
      document.body.classList.remove('overlay');
    } else {
      document.body.classList.add('overlay');
    }
  }
 
  return (
    <>
    <div className=" w-full bg-gmelo fixed top-0 left-0 right-0 z-10 border-solid border-gmain border-b-4">
      <div className="container ">
        <div className="navbar-content		flex justify-between items-start pt-4 ">
          <div className="navbar-right ">
            <img onClick={handelMobileMenu} src="/images/Asset 3 4.png" alt="" className="navbar-logo cursor-pointer md:hidden	" />
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
              <ul ref={navbarRef} className={`${showMobile ? 'translate-x-0' : 'translate-x-80'} flex flex-col transition-all duration-700 font-bold text-lg  justify-start	p-4 w-[300px] h-[100vh]	absolute top-0 right-0 opacity-100	 bg-gmain `}>
                <li className="flex  p-2 rounded-t	mx-auto">
                  
                  <Accordion className="w-[200px]" defaultActiveKey="0">
                    <Accordion.Item className="bg-bg " eventKey="0">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="1">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="2">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="3">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="4">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="5">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="bg-bg " eventKey="6">
                      <Accordion.Header className=" h-[30px] mb-1 text-xs bg-bg">داستان و رمان
                      </Accordion.Header>
                      <Accordion.Body className="text-xs bg-bg	flex flex-col gap-2">
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                        <a href="">داستان کوتاه</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li className="flex   rounded-t w-[200px] mx-auto">
                  <a className=" text-bg bg-text  w-full p-2 rounded-lg text-center" href="#">
                    درباره تاجک
                  </a>
                </li>
                <li className="flex   rounded-t w-[200px] mx-auto	">
                  <a className="text-bg bg-text  w-full mt-3 p-2 rounded-lg text-center" href="#">
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
              <img className="w-[64px] h-[24px] md:hidden" src="/images/logo.svg" alt="" />
            </div>
            <div className="w-full relative pt-[9px] md:pt-0 flex flex-col items-center justify-center">
              <input
                className="bg-gmelo border-t border-b border-gmain rounded-lg w-full h-[40px] text-center "
                type="text"
                placeholder="نام کتاب نام نویسنده ناشر"
              />
              <button className="absolute bottom-0 -left-2">
                <img className="w-8 h-8 md:h-10 md:w-10" src="/images/search.svg" alt="" />
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
                      isSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 hidden translate-y-[-10px]'
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
          <div className="navbar-left flex justify-around    ">
            <button className="ml-3">
              <img className=" w-6 h-6 md:w-10 md:h-10 " src="/images/Frame 365.png" alt="" />
            </button>
            <div className="relative">
              <img className=" w-6 h-6 md:w-10 md:h-10 md:absolute	md:-right-2" src="/images/profile.svg" alt="" />
              <button className="hidden md:block  border-t border-b border-gmain rounded-lg w-40 h-10 font-bold ">
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

