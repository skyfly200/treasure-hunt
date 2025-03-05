// define treasure type
export type Treasure = {
    code: string;
    title: string;
    description: string;
    lat: number;
    lng: number;
    created_at: number;
    hidden_at: number | null;
    found_at: number | null;
    finder: Object | null;
};