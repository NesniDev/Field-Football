export interface Tournament {
    id: string;
    title: string;
    image: string;
    availability: string
    genre: string
    date: string;
    location: {
        city: string;
        address: string;
    }
    income: string;
}
