export interface HTtpAdapter{
    get<T>(url: string): Promise<T>;
}