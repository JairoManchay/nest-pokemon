import { Transform } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDTO {

    @IsOptional()
    @IsPositive()
    @Min(1)
    @Transform(({value}) => parseInt(value))
    limit: number;

    @IsOptional()
    @IsPositive()
    @Transform(({value}) => parseInt(value))
    offset: number;
}