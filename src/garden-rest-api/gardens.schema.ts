import { Schema, model, Document } from 'mongoose';

export interface GardenRestApi {
  name: string;
  description: string;
  Contact_person: {
    name: string;
    phone_number: string;
  };
  Gardner: {
    name: string;
    Phone: string;
    Rating: number;
    gardner_image: string;
  };
  Park_size: number;
  Vegetation: string;
  Type: string;
  Treatment: {
    grass_trimming: boolean;
    tree_pruning: boolean;
    pest_control: boolean;
  };
  Coordinates: [number, number];
  Address: {
    street: string;
    city: string;
  };
  GardenImg: string[];
  GardenImgAlt: string;
}

export const GardenSchema = new Schema<GardenRestApi>(
  {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    Contact_person: {
      name: {
        type: String,
        default: '',
      },
      phone_number: {
        type: String,
        default: '',
      },
    },
    Gardner: {
      name: {
        type: String,
        default: '',
      },
      Phone: {
        type: String,
        default: '',
      },
      Rating: {
        type: Number,
        default: 0,
      },
      gardner_image: {
        type: String,
        default: '',
      },
    },
    Park_size: {
      type: Number,
      default: 0,
    },
    Vegetation: {
      type: String,
      default: '',
    },
    Type: {
      type: String,
      default: '',
    },
    Treatment: {
      grass_trimming: {
        type: Boolean,
        default: false,
      },
      tree_pruning: {
        type: Boolean,
        default: false,
      },
      pest_control: {
        type: Boolean,
        default: false,
      },
    },
    Coordinates: {
      type: [Number],
      validate: {
        validator: function (value: number[]) {
          return value.length === 2;
        },
        message: props => `${props.value} must be an array with 2 numbers.`,
      },
      default: [0, 0],
    },
    Address: {
      street: {
        type: String,
        default: '',
      },
      city: {
        type: String,
        default: '',
      },
    },
    GardenImg: {
      type: [String],
      default: [],
    },
    GardenImgAlt: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export interface GardenDocument extends GardenRestApi, Document {}

export const GardenRestApiModel = model<GardenDocument>('GardenRestApi', GardenSchema);
