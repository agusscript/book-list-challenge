import "./BookmarkBtn.scss";

function BookmarkBtn() {
  return (
    <button className="bookmark-button">
      <svg
        fill="#ffffff"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        height="46px"
        viewBox="0 0 512 512"
        stroke="#ffffff"
      >
        <title>Bookmark List</title>
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="7935ec95c421cee6d86eb22ecd117a4e">
            {" "}
            <path d="M30.563,0.5v511l225.434-76.824L481.438,511.5V0.5H30.563z M401.17,251.809H283.563v125.554 h-55.118V251.809H110.831v-52.859h117.614V74.518h55.118v124.432H401.17V251.809z">
              {" "}
            </path>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
}

export default BookmarkBtn;