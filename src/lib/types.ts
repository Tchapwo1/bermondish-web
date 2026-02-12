export interface Restaurant {
    name: string;
    short_title?: string;
    address?: string;
    neighbourhood?: string[];
    cuisine?: string[];
    category?: string[];
    rating?: number;
    review_count?: number;
    phone?: string;
    menu?: string;
    reservations?: string;
    price_range?: string;
    typical_spend_per_person?: string;
    summary?: string;
    what_diners_love?: string[];
    popular_dishes?: string[];
    atmosphere_experience?: string;
    good_to_know?: string[];
    mixed_feedback?: string[];
    best_for?: string[];
    top_tip?: string;
    booking?: string;
}
