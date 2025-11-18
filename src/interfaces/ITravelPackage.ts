

export interface ITravelPackage extends Document{
    title: string, 
    slug: string, 
    destinationCountry: string, 
    days: number;  
    price: number;  
    discountPrice?: number, 
    Images?: string[]; 
    description: string; 
    includes?: string[]; 
    excludes?: string[]
    itinerary?: string[]; 
    bookingAvailable: boolean; 
    rating?: number; 
    tags?: string[]; 
    createdAt: Date; 
    updatedAt: Date; 
}