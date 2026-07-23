# 💰 Expense Tracker

A simple, intuitive application to track your income and expenses, visualize spending habits, and stay on top of your budget.

## Features

- 📊 Addand delete income/expense transactions
- 🏷️ Categorize transactions (food, rent, utilities, entertainment, etc.)
- 📈 Visual dashboards with charts (monthly trends, category breakdown)
- 💵 Set and track budgets per category
- 🔍 Search and sort transaction history
- 📤 Export data to Excel

## Tech Stack

- **Frontend:** React and tailwind css
- **Backend:** Node.js + Express 
- **Database:** Mysql
- **Charts:** Chart.js / Recharts
- **Auth:** JWT-based authentication

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- A running database instance (see `.env.example`)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/TONY-OCHIENG/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Then fill in your database URL, JWT secret, and other config values.

4. Run database migrations (if applicable)
   ```bash
   npm run migrate
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

6. Open your browser at `http://localhost:3000`

## Project Structure

```
expense-tracker/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level views
│   ├── api/            # API routes / controllers
│   ├── models/         # Database models
│   ├── utils/          # Helper functions
│   └── styles/         # Global styles
├── public/              # Static assets
├── tests/               # Unit & integration tests
├── .env.example
├── package.json
└── README.md
```

## Usage

1. **Sign up / log in** to create your personal account.
2. **Add a transaction** by clicking "New Transaction" and filling in the amount, category, and date
3. **View your dashboard** to see spending trends and category breakdowns.
4. **Export your data** anytime as a Excel for backup or further analysis.

## Screenshots



## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Mobile app (React Native)
- [ ] Shared/family budgets
- [ ] Bank account integration


## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Charts powered by [Chart.js](https://www.chartjs.org/)
