import "./SignUp.css";

export const SignUp = () => {
  return (
    <>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="bannerSignUp">
        <div className="input-items">
          <input type="email" id="email" />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="banner-btn-container">
          <button>Get Started</button>
          <div className="banner-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="ChevronRightStandard"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
