// define user type
export type User = {
    userId: number;
    username: string;
};

// define treasure type
export type Treasure = {
    code: string;
    title: string;
    description: string;
    img: string | null;
    lat: number;
    lng: number;
    created_at: number;
    hidden_at: number | null;
    found_at: number | null;
    finder: User | null;
};
