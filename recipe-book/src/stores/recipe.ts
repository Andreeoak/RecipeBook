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
    const favorites = ref<string[]>([])
    const recipes = ref<Recipe[]>([])

    const isFavorite = (id: string) => {
      return favorites.value.includes(id)
    }

    const toggleFavorite = (id: string)=>{
      if (isFavorite(id)){
        favorites.value = favorites.value.filter(
          favId =>favId !== id
        )
      } else {
        favorites.value.push(id)
      }
    }



    const addRecipe = (recipe: NewRecipe)=>{
      const newRecipe ={
        id: Date.now().toString(),
      ...recipe
      }

      recipes.value.push(newRecipe)
      return newRecipe
    }

    const editRecipe = (updatedRecipe:Recipe) => {
      const index = recipes.value.findIndex(
        recipe=>recipe.id === updatedRecipe.id
      )

      if(index !== -1 ) {
          recipes.value[index] = updatedRecipe
      }
    }

    const filteredRecipes = (
      (searchQuery: string)=> recipes.value.filter(
        recipe=>recipe.name.toLocaleLowerCase().includes(
          searchQuery.toLocaleLowerCase()
        )
      )
    )

    const getRecipeById = (id:string)=>recipes.value.find((recipe)=>recipe.id ===id)




    return { recipes , addRecipe, getRecipeById, filteredRecipes, editRecipe, toggleFavorite, isFavorite}
  }
)
