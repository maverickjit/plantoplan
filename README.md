# 🪴 PlantoPlan - Smart Plant Scheduler

**PlantoPlan** is a full-stack application that helps users track their plants, with details like species, location, notes, and upcoming watering dates.

---

## 📦 Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **Frontend**: Vue.js + Axios
- **Styling**: Tailwind CSS (optional)
- **Environment**: `.env` for sensitive config

---

## 🧠 Features

- Add, view, and list plants with:
  - Name, species, location, notes
  - Next watering date
- Data stored in a PostgreSQL database
- Custom RESTful API endpoints
- Frontend fetches and displays plant data dynamically

---

## 🔌 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/plants`        | Get all plants          |
| POST   | `/plants`        | Add a new plant         |

### Sample `POST /plants` Request:
```json
{
  "name": "Money Plant",
  "species": "Epipremnum aureum",
  "location": "Living Room",
  "next_water_date": "2025-06-25",
  "notes": "Water every 4 days"
}
