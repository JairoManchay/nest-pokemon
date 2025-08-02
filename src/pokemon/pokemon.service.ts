import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDTO } from 'src/common/dto/Pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {

  private defaultLimit: number;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly configService: ConfigService
  ){
    
    this.defaultLimit = configService.getOrThrow<number>('defaultLimit')
  }

  async create(createPokemonDto: CreatePokemonDto) {
    try{
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      console.log(pokemon);
      return pokemon;
    } catch(error){
      
      this.handleExceptions(error, "Can't crreate Pokemon - Check server logs");
    }
  }

  findAll(paginationDto: PaginationDTO) {
    console.log(paginationDto);
    const limit = paginationDto.limit.toString()!="" ? paginationDto.limit:this.defaultLimit;
    console.log(limit);
    return this.pokemonModel.find()
    .limit(limit)
    .skip(paginationDto.offset)
    .select('-__v')
  }

  async findOne(term: string) {
    let pokemon: Pokemon|null = null;

    if( !isNaN(+term)){
      pokemon = await this.pokemonModel.findOne({no: term});
    }

    if(isValidObjectId(term) && !pokemon){
      pokemon = await this.pokemonModel.findById(term);
    }

    if(!pokemon){
      pokemon = await this.pokemonModel.findOne({name: term.toLocaleLowerCase().trim()})
    }

    if(!pokemon){
      throw new NotFoundException(`Pokemon with id ${term} not found`);
    }

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    try{
      const pokemon = await this.findOne(term);
      const pokemonUpdated = await pokemon.updateOne(updatePokemonDto);

      if(!pokemonUpdated){
          throw new InternalServerErrorException(`Can't update Pokemon - Check server logs`);
      }
      
      return {...pokemon.toJSON(), ...updatePokemonDto};
    }catch(error){
      this.handleExceptions(error, "Can't update Pokemon - Check server logs");
    }

  }

  async remove(id: string) {
      
    const {deletedCount} = await this.pokemonModel.deleteOne({_id: id});
    if(deletedCount === 0){
      throw new BadRequestException(`Pokemon with id ${id} not found`);
    }

    return;
  }


  private handleExceptions(error: any, message?: string){
     if(error.code === 11000){
        throw new BadRequestException(`Pokemon already exist in db ${JSON.stringify(error.keyValue)}`)
      }

      console.error(error);
      throw new InternalServerErrorException(message);
  }
}
