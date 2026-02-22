// TODO: CamelCase errors
export interface RailsError {
  details: Record<string, string>;
  errors?: { full_messages: string[] };
  full_messages?: string[];
}
