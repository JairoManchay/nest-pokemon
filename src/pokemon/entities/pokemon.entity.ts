import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{

    @Prop({ 
        required: true,
        index: true,
        unique: true, // Asegura que no haya duplicados
    })
    private name: string;

    @Prop({ 
        required: true,
        index: true,
        unique: true // Asegura que no haya duplicados
    })
    private no: number;
    
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);