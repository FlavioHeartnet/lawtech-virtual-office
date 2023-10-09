export interface IMongoConnect {
	connect(uri: string): Promise<void>;
	close(): Promise<void>;
}
