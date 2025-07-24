This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install all the necessary dependencies:

```bash
pnpm install
```

Next create a .env.local file with the following:
```bash
OPENAI_API_KEY=<your-openai-api-key>
SIGNOZ_INGESTION_KEY=<your-signoz-ingestion-key>
```


Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After usign the chatbot, you should be able to view traces and logs in your SigNoz Cloud platform:

<img width="1203" height="582" alt="vercel-traces-view" src="https://github.com/user-attachments/assets/36be9f07-7b03-41e6-a7ae-af196946a5c1" />
<img width="1458" height="786" alt="vercel-traces-detailed-view" src="https://github.com/user-attachments/assets/881ef4fd-7f56-4e2d-b5fc-d0220d60764c" />






