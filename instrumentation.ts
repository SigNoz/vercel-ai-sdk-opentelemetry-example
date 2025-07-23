import { registerOTel, OTLPHttpJsonTraceExporter } from '@vercel/otel';
// Add otel logging
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';


diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR); // set diaglog level to DEBUG when debugging
export function register() {
  registerOTel({
    serviceName: 'vercel-chatbot-app',
    traceExporter: new OTLPHttpJsonTraceExporter({
        url: 'https://ingest.in.signoz.cloud:443/v1/traces',
        headers: { 'signoz-ingestion-key': process.env.SIGNOZ_INGESTION_KEY },
    }),
  });
}



