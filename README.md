# ✨ Rooh Yatra - A Travel Story (EZ Labs Assignment)

This is a single-page responsive web application built with **React** and **CSS Modules**. It was created to fulfill the EZ Labs assignment, focusing on recreating a Figma design, implementing a live API, and ensuring full responsiveness.

The project's theme is a travel blog documenting a journey across India, aiming to inspire discovery and passion.

**[🚀 View the Live Demo Here]((https://rooh-yatra.netlify.app/))**


-----

## 🎨 Features

  * **Fully Responsive Design:** Adapts beautifully to mobile, tablet, and desktop screens using a mobile-first approach.
  * **Modern CSS:** Styled with **CSS Modules** for component-scoped, conflict-free styling (no Tailwind/Bootstrap).
  * **Live API Integration:** A fully functional contact form that sends data to a live API endpoint.
  * **Client-Side Validation:** Uses **React Hook Form** for robust and instant form validation before API submission.
  * **Smooth Animations:** Subtle page-load and scroll-reveal animations implemented with **Framer Motion**.
  * **API Feedback:** Clear "Form Submitted\!" success messages and "Failed to send..." error messages for the user.
  * **Clean Code:** Modular, component-based React structure that is easy to read and maintain.

-----

## 💻 Tech Stack

  * **Frontend:** React (Vite)
  * **Styling:** CSS Modules
  * **Animations:** Framer Motion
  * **Form Management:** React Hook Form
  * **API Client:** Axios
  * **Icons:** React Icons

-----

## 🚀 Getting Started Locally

To clone and run this project on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tanishavermaaa/Rooh-Yatra.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd ez-labs-journey
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Your project will be running at `http://localhost:5173/`.

-----

## 📋 API & Form Handling

This project includes a complete contact form that meets all assignment requirements.

  * **Endpoint:** `POST` request to `https://vernanbackend.ezlab.in/api/contact-us/`
  * **Validation:** All fields (Name, Email, Phone, Message) are required. The email field must be a valid email format.
  * **Success:** On a `200` status response, the form is reset, and a "Form Submitted\! We'll be in touch soon." message is displayed.
  * **Error:** If the API call fails, an error message is shown to the user.
  * **Loading State:** The submit button is disabled and shows "Sending..." during the API call.
  * **Postman Dump:** A Postman collection JSON is included in the repository for API testing.
