import { Types } from "mongoose";
import { BookingStatusType, PaymentType } from "../models/TravelBooking.model";



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