const SocialItem = ({ item }) => {
  return (
    <>
      <a href={item?.URL} target="_blank">
        {item.Platform === 0 && (
          <div className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        )}
        {item.Platform === 2 && (
          <div className="bg-gradient-to-r from-pink-600 to-orange-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              role="img"
              className="w-5"
              x="0"
              y="0"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  d="M303.8 158.9h-95.5c-27.2 0-49.4 22.1-49.4 49.4v95.5c0 27.2 22.1 49.4 49.4 49.4h95.5c27.2 0 49.4-22.1 49.4-49.4v-95.5c-.1-27.3-22.2-49.4-49.4-49.4zm-47.8 161c-35.2 0-63.9-28.7-63.9-63.9s28.7-63.9 63.9-63.9 63.9 28.7 63.9 63.9-28.7 63.9-63.9 63.9zm67.1-120.7c-6 0-10.8-4.8-10.8-10.8s4.8-10.8 10.8-10.8 10.8 4.8 10.8 10.8-4.8 10.8-10.8 10.8z"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></path>
                <circle
                  cx="256"
                  cy="256"
                  r="38.8"
                  transform="rotate(-89.31 256.026 255.981)"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></circle>
                <path
                  d="M256 31C131.7 31 31 131.7 31 256s100.7 225 225 225 225-100.7 225-225S380.3 31 256 31zm125 272.8c0 42.6-34.6 77.2-77.2 77.2h-95.5c-42.6 0-77.2-34.6-77.2-77.2v-95.5c0-42.6 34.6-77.2 77.2-77.2h95.5c42.6 0 77.2 34.6 77.2 77.2z"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
          </div>
        )}
        {item.Platform === 8 && (
          <div className="bg-[#1D70FA] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="w-5"
              viewBox="0 0 49.652 49.652"
            >
              <g>
                <path
                  d="M20.894 20.686c0-1.9-1.293-1.9-1.293-1.9H14.28v4.078h4.991c.863 0 1.623-.275 1.623-2.178zM33.221 22.864c-2.821 0-3.215 2.814-3.215 2.814h6.002c0 .002.037-2.814-2.787-2.814zM19.601 25.68h-5.318v4.886h4.711c.08 0 .198.004.339 0 .757-.019 2.196-.235 2.196-2.374 0-2.536-1.928-2.512-1.928-2.512z"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></path>
                <path
                  d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm4.393 16.615h7.539v2.251h-7.539zm-3.812 11.804c0 5.577-5.806 5.395-5.806 5.395h-9.508V15.539h9.508c2.891 0 5.172 1.597 5.172 4.867 0 3.269-2.788 3.477-2.788 3.477 3.675-.001 3.422 4.536 3.422 4.536zm14.105-.3h-9.471c0 3.396 3.217 3.182 3.217 3.182 3.036 0 2.93-1.966 2.93-1.966h3.219c0 5.218-6.254 4.859-6.254 4.859-7.503 0-7.021-6.985-7.021-6.985s-.007-7.022 7.021-7.022c7.396 0 6.357 7.932 6.359 7.932z"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
          </div>
        )}

        {item.Platform === 5 && (
          <div className="bg-[#fba01c] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              role="img"
              className="w-5"
              x="0"
              y="0"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fillRule="evenodd"
                  d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm162.5 355.241V164.978l-95.137 95.131zm-304.676 3.876h284.358l-86.908-86.908-33.123 33.118a8.563 8.563 0 0 1-6.05 2.5h-32.2a8.553 8.553 0 0 1-6.051-2.5l-33.122-33.118-86.908 86.908zM93.5 164.972v190.274l95.137-95.137zm312.906-12.089H105.6l137.844 137.844h25.117z"
                  fill="#FFFFFF"
                  data-original="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
          </div>
        )}
        {item.Platform === 3 && (
          <div className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <svg className="w-5" x="0" y="0" viewBox="0 0 32 32">
              <g>
                <path
                  d="M3.308 10.91a.99.99 0 0 0-.99.989V29.01c0 .547.443.99.99.99h3.96a.99.99 0 0 0 .99-.99V11.9a.99.99 0 0 0-.99-.99zM5.288 2a3.235 3.235 0 1 0 0 6.47 3.235 3.235 0 0 0 0-6.47zM16.707 10.91h-3.924a.99.99 0 0 0-.99.989v16.634c0 .547.443.99.99.99h3.96a.99.99 0 0 0 .99-.99V18.74a3.217 3.217 0 0 1 6.434 0v9.793c0 .547.443.99.99.99h3.8a.99.99 0 0 0 .99-.99V17.184a6.558 6.558 0 0 0-6.558-6.558h-.931c-1.54 0-3.005.674-4.008 1.843l-.753.88v-1.45a.99.99 0 0 0-.99-.99z"
                  fill="#FFFFFF"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
        )}
      </a>
    </>
  );
};

export default SocialItem;
