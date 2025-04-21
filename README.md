# 🥦 Bulk Vegetable & Fruit Ordering Platform

This is a full-stack web application built with **Next.js**, **Prisma ORM**, **PostgreSQL (Neon.tech)**, and deployed on **Vercel**. The platform enables buyers to place bulk orders for vegetables and fruits, and allows admins to manage inventory and view all incoming orders.

## 🚀 Features

- 🛒 Place bulk orders quickly and easily
- 📦 Track your existing orders
- 🔐 Admin dashboard to view/manage all orders
- 💾 PostgreSQL database with Prisma ORM
- ☁️ Deployed serverlessly using Vercel
- 🎯 Built using TypeScript and modern React architecture
- <img width="285" alt="image" src="https://github.com/user-attachments/assets/b2c86e43-0106-43c6-96e7-9a635aea1c0c" />


## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction), [Prisma ORM](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (Hosted on [Neon.tech](https://neon.tech/))
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Folder Structure
```
├── app
│   ├── api
│   │   └── orders
│   │       └── route.ts
│   ├── cart
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── products
│       └── page.tsx
├── components.json
├── components
│   ├── HomeComponent.tsx
│   ├── NavbarDemo.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       └── resizable-navbar.tsx
├── hooks
│   └── use-mounted.tsx
├── lib
│   ├── actions.ts
│   ├── cart-store.ts
│   ├── expenses.ts
│   ├── get-orders.ts
│   ├── orders.ts
│   ├── place-order.ts
│   ├── prisma.ts
│   ├── update-order-status.ts
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prisma
│   ├── migrations
│   │   ├── 20240628141429_init
│   │   │   └── migration.sql
│   │   ├── 20250419054418_snvs
│   │   │   └── migration.sql
│   │   ├── 20250419055955_add_category_to_product
│   │   │   └── migration.sql
│   │   ├── 20250419114843_add_order_model
│   │   │   └── migration.sql
│   │   ├── 20250419120246_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── LogoNav.png
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```




## 🗄️ Database Storage
 ```
console.log("you can access get the database link ")

### 🔗 Quick Access  
You can jump straight to your database dashboard by clicking below:

👉 [**Open Database on Neon**](https://console.neon.tech/app/projects/odd-butterfly-17791909/branches/br-shiny-cloud-a13dkbrg/tables?database=work)

### 🧠 Developer Tip  
Use this dashboard to:
- 🔍 View & manage your tables  
- 🧪 Run queries directly in-browser  
- 📈 Monitor database performance  
```


## 🧑‍💻 Local Development

```bash
# 1. Clone the project
git clone https://github.com/your-username/bulk-order-platform.git

# 2. Install dependencies
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. Run the development server
npm run dev
