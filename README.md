# Feedback Dashboard and Rating Charts

## Project Overview
The **Feedback Dashboard and Rating Chart** is a web application where users can submit feedback with ratings from 1 to 5 stars. It visually displays the feedback distribution in a bar chart. The app uses **React** for the frontend and **Chart.js** to create the rating chart, styled with **Tailwind CSS** for a clean and responsive design.

### Tech Stack
- **Frontend**: React.js, Tailwind CSS, Chart.js
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL with Prisma
- **State Management**: React `useState`

---

### Installation & Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/feedback-dashboard.git
    cd feedback-dashboard
    ```

2. **Setup Environment Variables**:  
   Create a `.env` file in the project root and configure the following environment variables for Prisma to connect to your PostgreSQL database:
    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
    ```
   Replace `username`, `password`, and `database_name` with your actual PostgreSQL credentials.

3. **Install Dependencies**:  
   Run this command to install all necessary dependencies:
    ```bash
    npm install
    ```

4. **Run Database Migrations**:  
   To set up the database schema with Prisma, run:
    ```bash
    npx prisma migrate dev
    ```

5. **Starting the Backend (Node.js)**:  
   To start the backend server (API), use:
    ```bash
    npm run dev
    ```
   This will start the backend server in development mode. Ensure your backend setup is configured correctly, such as with Express and any additional dependencies.

6. **Starting the Frontend (React)**:  
   To run the React app, use the following command:
    ```bash
    npm start
    ```
   This will start the React development server. You can access the app at [http://localhost:3000](http://localhost:3000).

---

### How the Application Works

- **Feedback Form**: Users can submit ratings (1–5 stars) and feedback. Upon submission, the data is saved in the PostgreSQL database and displayed in the app.
- **Rating Chart**: A bar chart displays the distribution of ratings (e.g., how many users gave a 5-star rating), created with Chart.js.
- **UI**: The app is fully responsive, ensuring it works seamlessly on both desktop and mobile devices.

---

🌿 Wishing you a smooth coding experience as you explore this project!! 🌊
