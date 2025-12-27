export interface InfoField {
    image:           string;
    title:           string;
    slug:            string;
    address:         string;
    description:     string;
    characteristics: Characteristics;
    services:        string[];
    punctuation:     string;
    price:           string;
    ubication:       string;
}

export interface Characteristics {
    grassType:    string;
    dimensions:   string;
    lighting:     string;
    availability: string;
}
