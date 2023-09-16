export default class TaskStatus{
    public static readonly PENDING: string = "PENDING";
    public static readonly COMPLETED: string = "COMPLETED";
    public static readonly FAILED: string = "FAILED";
    public static readonly CANCELLED: string = "CANCELLED";
    public static readonly ABORTED: string = "ABORTED";
    public static readonly PENDING_RETRY: string = "PENDING_RETRY";
    public static readonly RETRYING: string = "RETRYING";
    public static readonly RETRY_FAILED: string = "RETRY_FAILED";
    public static readonly RETRY_CANCELLED: string = "RETRY_CANCELLED";
    public static readonly RETRY_ABORTED: string = "RETRY_ABORTED";
    public static readonly RETRY_PENDING: string = "RETRY_PENDING";
    public static readonly RETRY_COMPLETED: string = "RETRY_COMPLETED";
    public static readonly RETRY_PENDING_RETRY: string = "RETRY_PENDING_RETRY";
    public static readonly RETRY_RETRYING: string = "RETRY_RETRYING";
    public static readonly RETRY_RETRY_FAILED: string = "RETRY_RETRY_FAILED";
}