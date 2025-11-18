import { Schema, model, Types } from "mongoose";
import { ITravelBooking } from "../interfaces/ITravelBooking";


export enum PaymentType {
    PAID = "paid",
    UNPAID = "unpaid",
}

export enum BookingStatusType {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
}

const TravelBookingSchema = new Schema<ITravelBooking>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        packageId: {
            type: Schema.Types.ObjectId,
            ref: "TravelPackage",
            required: true,
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        travelDate: {
            type: Date,
            required: true,
        },

        numberOfPeople: {
            type: Number,
            required: true,
            min: [1, "Number of people must be at least 1"],
        },

        totalPrice: {
            type: Number,
            required: true,
            min: [0, "Total price cannot be negative"],
        },

        paymentStatus: {
            type: String,
            enum: Object.values(PaymentType),
            default: PaymentType.UNPAID,
        },

        paymentMethod: {
            type: String,
            required: true,
            trim: true,
        },

        bookingStatus: {
            type: String,
            enum: Object.values(BookingStatusType),
            default: BookingStatusType.PENDING,
        },
    },
    {
        timestamps: true, // createdAt and updatedAt auto
    }
);

export const TravelBooking = model<ITravelBooking>(
    "TravelBooking",
    TravelBookingSchema
);
