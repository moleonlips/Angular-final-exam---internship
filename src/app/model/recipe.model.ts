export class Recipe {
     id!: string
     name!: string
     imageURL!: string
     description!: string
     ingredients!: [{
          name: string,
          quantity: number
     }]
}