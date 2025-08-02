import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {


  

  constructor(
    private readonly http: AxiosAdapter,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ){}

  async executeSeed(){

    await this.pokemonModel.deleteMany({});


    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    console.log(data);

    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(( {name, url} )=>{
      const segments = url.split('/');
      const no: number = +segments[segments.length -2];

      console.log(name, no, url);
      pokemonToInsert.push(
        {name: name, no: no}
      );

    });

    await this.pokemonModel.insertMany(pokemonToInsert);
    return await this.pokemonModel.find(); 
  }


}
