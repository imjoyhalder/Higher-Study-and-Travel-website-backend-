import { ITravelPackage } from './../interfaces/ITravelPackage';
import { Schema, model } from "mongoose";
import slugify from "slugify";

const TravelPackageSchema = new Schema<ITravelPackage>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            unique: true,
            trim: true,
        },

        destinationCountry: {
            type: String,
            required: true,
            trim: true,
        },

        days: {
            type: Number,
            required: true,
            min: 1,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        discountPrice: {
            type: Number,
            min: 0,
            validate: {
                validator: function (value: number) {
                    // discount cannot be greater than price
                    return value <= this.price;
                },
                message: "Discount price cannot be higher than the main price!",
            },
        },

        Images: {
            type: [String],
            default: [],
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        includes: {
            type: [String],
            default: [],
        },

        excludes: {
            type: [String],
            default: [],
        },

        itinerary: {
            type: [String],
            default: [],
        },

        bookingAvailable: {
            type: Boolean,
            default: true,
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },

        tags: {
            type: [String],
            default: [],
        },
    
    },
    {
        timestamps: true,
    }
);

// Auto-generate slug on create/update
TravelPackageSchema.pre("save", function (next) {
    if (this.isModified("title")) {
        this.slug = slugify(this.title, { lower: true });
    }
    next();
});


export const TravelPackage = model<ITravelPackage>(
    "TravelPackage",
    TravelPackageSchema
);
