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
In your terminal, you should see output from OpenTelemetry when the application starts, confirming that the instrumentation.ts file was loaded correctly. 

<img width="719" height="264" alt="vercel-run-output" src="https://github.com/user-attachments/assets/e1249669-ddfb-4b0b-a712-b75068017859" />



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and interact with the application.



## After usign the chatbot, you should be able to view traces and logs in your SigNoz Cloud platform:


### Traces
<img width="1203" height="582" alt="vercel-traces-view" src="https://github.com/user-attachments/assets/36be9f07-7b03-41e6-a7ae-af196946a5c1" />
<img width="1458" height="786" alt="vercel-traces-detailed-view" src="https://github.com/user-attachments/assets/881ef4fd-7f56-4e2d-b5fc-d0220d60764c" />

### Logs
<img width="507" height="87" alt="vercel-logs" src="https://github.com/user-attachments/assets/f980859d-93a1-43ac-bbd9-3423d942b63b" />
<img width="889" height="649" alt="starter_msg_log" src="https://github.com/user-attachments/assets/a5953dba-e33d-49d4-96d7-4329fbb1ea21" />
<img width="889" height="649" alt="feedback_log" src="https://github.com/user-attachments/assets/2b429651-4240-49f6-94c9-a1f819bc6c22" />



## You can also create custom dashboards using these logs and traces attributes:
### Import Dashboard
Go to the **Dashboards** tab in SigNoz.

Click on **+ New Dashboard**

Go to **Import JSON**
<img width="1510" height="788" alt="Screenshot 2025-07-28 at 12 05 38 PM" src="https://github.com/user-attachments/assets/d59b5d6f-be3f-4513-ba5e-1be0a74ad968" />

Import the **Vercel Chatbot.json** file from the repo.

Your dashboard should now be imported and look something like this:
<img width="1506" height="800" alt="Screenshot 2025-07-28 at 12 04 06 PM" src="https://github.com/user-attachments/assets/d4aa9e73-c5f8-4c78-b426-dbdb84d42bf4" />









