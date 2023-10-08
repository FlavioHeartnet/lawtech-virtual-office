export interface IMongoConnect {
    connect(): Promise<void>;
    close(): Promise<void>;
}