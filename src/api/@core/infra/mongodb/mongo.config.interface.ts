export interface IDataBaseConnect {
	connect(uri: string): Promise<void>;
	close(): Promise<void>;
}
