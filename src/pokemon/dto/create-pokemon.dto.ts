import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsInt()
    @IsOptional()
    @Min(1)
    @Transform(({value})=> parseInt(value))
    no: number;

    @IsString()
    @MinLength(1)    
    @Transform(({value})=> value.toLowerCase().trim())
    name: string;
}
