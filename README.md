# ✅ API Testing & Coverage Report

As part of **Keploy's API Fellowship Session 3**, I implemented comprehensive testing for the backend API of the **PlantoPlan** application using **Jest** and **Supertest**.

### 🧪 What I Tested

| Type of Test     | Details |
|------------------|---------|
| ✅ **Unit Tests** | Tested utility logic like `isWateringDue(date)` from `utils.js`. |
| ✅ **Integration Tests** | Tested CRUD operations with PostgreSQL via routes (`GET /plants`, `POST /plants`). |
| ✅ **API Tests** | Ensured endpoints behave as expected using `supertest`. |

### 🧰 Tech Stack & Tools

- **Framework:** Node.js + Express
- **Database:** PostgreSQL
- **Testing:** [Jest](https://jestjs.io/), [Supertest](https://github.com/visionmedia/supertest)

### 📁 Test Structure

```
backend/
├── __test__/
│   ├── plants.test.js      # API and integration tests
│   └── unit.test.js        # Logic/unit tests (e.g., isWateringDue)
├── utils.js
├── server.js
├── db.js
└── ...
```

### 📊 Coverage Report (via `npx jest --coverage`)

| Metric       | Value     |
|--------------|-----------|
| Statements   | **93.75%** |
| Branches     | **50%**    |
| Functions    | **75%**    |
| Lines        | **93.75%** |

![Coverage Screenshot]("C:\Users\KIIT\Desktop\plantoplan\cov.png") <!-- Replace this with your actual screenshot path -->

---

### 🔧 How to Run Tests Locally

```bash
cd backend
npm install
npm start           # Optional - for manual testing
npx jest --coverage # To run all tests with coverage report
```
