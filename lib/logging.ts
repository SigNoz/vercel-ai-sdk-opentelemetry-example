import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { LoggerProvider, SimpleLogRecordProcessor } from '@opentelemetry/sdk-logs';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { logs } from '@opentelemetry/api-logs';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);


const exporter = new OTLPLogExporter({
  url: 'https://ingest.in.signoz.cloud:443/v1/logs',
  headers: {
    'signoz-ingestion-key': process.env.SIGNOZ_INGESTION_KEY!,
  },
});

const loggerProvider = new LoggerProvider({
  processors: [new SimpleLogRecordProcessor(exporter)],
});

logs.setGlobalLoggerProvider(loggerProvider);

// Get a logger instance
const logger = logs.getLogger('vercel-chatbot-app');

// Export the logger
export default logger;
