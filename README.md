# 💰 Personal Finance Tracker



A modern web application to track expenses, manage budgets, and visualize financial data. Built with Next.js, React, and MongoDB.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)

# ✨ Features

- 📝 **Expense Tracking**: Log and categorize daily expenses with intuitive forms
- 💼 **Budget Management**: Set monthly budgets and receive spending alerts
- 📊 **Data Visualization**: Interactive charts with filtering options
- 🔄 **Sync Across Devices**: Cloud-saved data accessible anywhere
- 🔒 **Secure Authentication**: Optional user accounts for data protection
- 📱 **Mobile-Friendly**: Fully responsive design

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) 13+ (App Router)
- **UI Library**: [React](https://reactjs.org/) 18+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS Modules
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Charts**: [Chart.js](https://www.chartjs.org/) or [Recharts](https://recharts.org/)

### Backend
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Next-Auth](https://next-auth.js.org/)
- **API Routes**: Next.js API routes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finance-tracker.git
   cd finance-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/finance
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
finance-tracker/
├── app/                # App router directory
│   ├── (auth)/         # Authentication routes
│   ├── (dashboard)/    # Protected routes
│   ├── api/            # API routes
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
├── constants/          # Application constants
├── context/            # React context providers
├── hooks/              # Custom hooks
├── lib/                # Utility functions
│   └── database.ts     # Database connection
├── models/             # MongoDB models
├── public/             # Static assets
├── styles/             # Global styles
├── types/              # TypeScript types
└── tailwind.config.ts  # Tailwind configuration
```

## 📜 Available Scripts

In the project directory, you can run:

| Script          | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Starts the development server        |
| `npm run build` | Creates a production build           |
| `npm run start` | Starts the production server         |
| `npm run lint`  | Runs ESLint for code quality checks  |
| `npm run test`  | Runs Jest tests (if configured)      |

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/)

Live: https://finance-tracker-app-iewy-shankersingh01s-projects.vercel.app/

1. Push your code to GitHub/GitLab
2. Import your project on Vercel
3. Add your environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Alternatively, you can deploy to other platforms like Netlify or AWS.

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Happy Budgeting!** 💸
