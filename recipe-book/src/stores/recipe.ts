import { defineStore } from "pinia";
import { ref } from "vue";

interface Recipe{
  id: string
  name:string
  description:string
}

type NewRecipe = Omit<Recipe, 'id'>

export const useRecipeStore = defineStore('recipe', ()=>
  {

    const recipes = ref<Recipe[]>([])
    const addRecipe = (recipe: NewRecipe)=>{
      const NewRecipe ={
        id: Date.now().toString(),
      ...recipe
      }

      recipes.value.push(NewRecipe)
      return NewRecipe
    }
    return { recipes , addRecipe}
  }
)
