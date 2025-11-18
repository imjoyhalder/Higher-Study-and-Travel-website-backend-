import { Types } from "mongoose";

export enum PaymentType{
    'paid', 
    'unpaid'
}

export enum BookingStatusType{
    'pending', 
    'confirmed', 
    'cancelled'
}


export interface ITravelBooking extends Document{
    userId: Types.ObjectId; 
    packageId: Types.ObjectId; 
    fullname: string; 
    email: string; 
    phone: string; 
    travelDate: Date; 
    numberOfPeople: number; 
    totalPrice: number; 
    paymentStatus: PaymentType; 
    paymentMethod: string; 
    bookingStatus: BookingStatusType; 
    createAt?: Date; 
    updatedAt?: Date; 
}