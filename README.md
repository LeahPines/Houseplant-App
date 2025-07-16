# Houseplant App – Full Stack Interin Assessment

## Project Description

This full-stack web application was built as part of a **Fullstack Intern Assessment** to demonstrate practical skills in **Python (FastAPI)** and **React**. It allows users to browse houseplants in a searchable, filterable table and view detailed information for each plant.


---
## Requirements Covered

### Frontend

**Frontend:**
- Table view with search and category filter
- Detailed plant info page with image
- Navigation between list and detail views
- State management with Redux Toolkit
- Responsive UI with Tailwind CSS

**Backend:**
- FastAPI server as a proxy to RapidAPI
- `/plants` and `/plants/{plant_id}` endpoints
- CORS enabled for frontend requests
- Error handling and status codes
- Unit tests for both main routes

---


## Approach

### Frontend

- **State Management:** Uses Redux Toolkit for global plant data; UI state (search/filter) is local.
- **API Integration:** Fetches data from the backend, which in turn uses the RapidAPI houseplants API.
- **Modular Components:** Table, search bar, filter, detail view, etc.
- **Routing:** Uses React Router for navigation between table and detail pages.
- **Styling:** Tailwind CSS for responsive and modern UI.

### Backend

- **FastAPI:** Python backend serving as a proxy to the RapidAPI houseplants API.
- **/plants Route:** Returns all plants in simplified form (only required fields).
- **/plants/<plant_id> Route:** Returns detailed info for a single plant.
- **CORS:** Implemented to allow frontend requests.
- **Error Handling:** Returns appropriate status codes and error messages.
- **Unit Testing:** Includes a test for both routes.

---


## Resources Used

- [FastAPI ](https://fastapi.tiangolo.com/)
- [React ](https://react.dev/)
- [Redux Toolkit ](https://redux-toolkit.js.org/)
- [Tailwind CSS ](https://tailwindcss.com/)
- [RapidAPI House Plants API](https://rapidapi.com/mnai01/api/house-plants2/)

---

## Time Spent
This project was completed over the course of approximately 2–3 days.
Most of the time was dedicated to building the application from the ground up, ensuring that both the frontend and backend were fully functional, well-structured, and aligned with all assessment requirements in an efficient and reliable way.

---

## How to Run the App
### 📦 Backend (FastAPI)

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```
2. **Create a `.env` file with your RapidAPI credentials:**  
   ```
   RAPIDAPI_KEY=your_rapidapi_key
   RAPIDAPI_HOST=house-plants2.p.rapidapi.com
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Start the backend server:**
   ```bash
   uvicorn main:app --reload
   ```
5. **Access the API at:**  
   [http://localhost:8000](http://localhost:8000)

---

### 💻 Frontend (React)

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Access the app at:**  
   [http://localhost:5173](http://localhost:5173)

---

## Notes

- The backend acts as a proxy to the RapidAPI houseplants API, simplifying and securing data for the frontend.
- CORS is enabled in the backend to allow requests from the frontend.
- Plant data is managed globally in Redux; UI state is kept local for efficiency.
- Error handling is consistent across frontend and backend.
- The codebase is modular, clean, and ready for future enhancements.

---