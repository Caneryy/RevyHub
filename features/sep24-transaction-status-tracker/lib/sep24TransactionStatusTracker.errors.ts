import type { Sep24TransactionStatusTrackerErrorCode } from "@/features/sep24-transaction-status-tracker/types";

export function toSep24TransactionStatusTrackerErrorCode(
  status: number
): Sep24TransactionStatusTrackerErrorCode {
  if (status === 401 || status === 403) return "unauthorized";
  if (status === 404) return "transaction_not_found";
  return "request_failed";
}
