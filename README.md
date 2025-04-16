```markdown
# 💰 Personal Finance Tracker

A web application to track your expenses, manage budgets, and visualize your financial data. Built using **Next.js**, **React**, **TailwindCSS**, and **MongoDB**.

---

## ✨ Features

- ✅ **Expense Tracking**: Log and categorize your daily expenses.
- 💼 **Budget Management**: Set monthly budgets and compare them with actual spending.
- 📊 **Data Visualization**: Interactive charts to monitor financial trends.
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices.

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| **Frontend**| Next.js, React, TailwindCSS       |
| **Backend** | Node.js, MongoDB                  |
| **Forms**   | React Hook Form                   |
| **UI Kit**  | Radix UI, Lucide Icons            |

---

## 🗂️ Project Structure

```
.
├── app/           # Application routes and layouts
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── public/        # Static assets
├── styles/        # Global styles
├── .env           # Environment variables
├── jsconfig.json  # Path alias configuration
├── tailwind.config.ts  # Tailwind config
├── next.config.js # Next.js config
└── package.json   # Project dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb://localhost:27017/finance
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📦 Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start development server             |
| `npm run build`   | Build for production                 |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint for code quality checks   |

---

## 🔗 Configuration

### 🔄 Path Aliases

Path aliases are configured in `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

You can use `@/` to reference root-level files.  
Example:

```tsx
import { cn } from "@/lib/utils";
```

---

## 🎨 TailwindCSS

Tailwind is customized in `tailwind.config.ts` with themes and utility extensions.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature-name`
3. **Commit your changes**: `git commit -m "Add feature-name"`
4. **Push to GitHub**: `git push origin feature-name`
5. **Open a pull request**

---

## 📄 License

This project is licensed under the **MIT License**.

---

**Happy Tracking! 🎉**
```
