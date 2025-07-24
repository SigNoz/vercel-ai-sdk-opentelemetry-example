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



After usign the chatbot, you should be able to view traces and logs in your SigNoz Cloud platform:


### Traces
<img width="1203" height="582" alt="vercel-traces-view" src="https://github.com/user-attachments/assets/36be9f07-7b03-41e6-a7ae-af196946a5c1" />
<img width="1458" height="786" alt="vercel-traces-detailed-view" src="https://github.com/user-attachments/assets/881ef4fd-7f56-4e2d-b5fc-d0220d60764c" />

### Logs
<img width="507" height="87" alt="vercel-logs" src="https://github.com/user-attachments/assets/f980859d-93a1-43ac-bbd9-3423d942b63b" />
<img width="889" height="649" alt="starter_msg_log" src="https://github.com/user-attachments/assets/a5953dba-e33d-49d4-96d7-4329fbb1ea21" />
<img width="889" height="649" alt="feedback_log" src="https://github.com/user-attachments/assets/2b429651-4240-49f6-94c9-a1f819bc6c22" />



You can also create custom dashboards using these logs and traces attributes:

<img width="714" height="153" alt="input_output_tokens" src="https://github.com/user-attachments/assets/44e44388-f49e-4fc4-b74d-12375da90b8a" />
<img width="710" height="297" alt="feedback_distribution" src="https://github.com/user-attachments/assets/202ea601-2d0d-4107-8b80-1c5a9fb70a72" />
<img width="701" height="297" alt="starter_message_distribution" src="https://github.com/user-attachments/assets/28069233-be16-434e-8448-93e31c2f3567" />
<img width="711" height="143" alt="requests_latency" src="https://github.com/user-attachments/assets/4448d612-4510-4f9c-9a5d-fc78e7101e22" />










