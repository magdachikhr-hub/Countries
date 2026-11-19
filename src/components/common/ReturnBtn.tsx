import { Link } from "react-router-dom";
function ReturnBtn() {
  return (
    <>
      <div>
        <Link className="flex items-center gap-2" to={"/"}>
          <svg
            width="17"
            height="11"
            viewBox="0 0 17 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.30337 -2.98023e-08L6.36403 1.06066L2.86385 4.56084H16.2282L16.2282 6.04576H2.86385L6.36403 9.54594L5.30337 10.6066L7.03335e-05 5.3033L5.30337 -2.98023e-08Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#111517"
            />
          </svg>
          Back
        </Link>
      </div>
    </>
  );
}

export default ReturnBtn;
