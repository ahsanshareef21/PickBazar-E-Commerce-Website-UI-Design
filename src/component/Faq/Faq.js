import React from 'react'

const Faq = () => {
  return (
    <div>
      <div
        class="accordion w-75 mx-auto mt-5"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How to contact with Customer Service?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              Our Customer Experience Team is available 7 days a week and we
              offer 2 ways to get in contact.Email and Chat . We try to reply
              quickly, so you need not to wait too long for a response!.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              App installation failed, how to update system information?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              Please read the documentation carefully . We also have some online
              video tutorials regarding this issue . If the problem remains,
              Please Open a ticket in the support forum
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Website response taking time, how to improve
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              At first, Please check your internet connection . We also have
              some online video tutorials regarding this issue . If the problem
              remains, Please Open a ticket in the support forum
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFourth">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFourth"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFourth"
            >
              How do I create a account?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFourth"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFourth"
          >
            <div class="accordion-body">
              If you want to open an account for personal use you can do it over
              the phone or online. Opening an account online should only take a
              few minutes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
