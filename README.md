
## 🍲 Recipe Book SPA

Um livro de receitas moderno desenvolvido com **Vue 3**, **TypeScript**, **Pinia**, **Tailwind CSS** e **Vue Router**. A aplicação é uma **SPA** com reatividade em tempo real, armazenamento local persistente e interface amigável para adicionar, editar, visualizar e favoritar receitas.

---

### 🚀 Funcionalidades

* ✅ **Home View**: lista todas as receitas adicionadas.
* ✅ **Favorites View**: mostra apenas as receitas marcadas como favoritas.
* ✅ **Add Recipe View**: permite adicionar uma nova receita com nome e descrição.
* ✅ **Edit Recipe View**: permite editar o conteúdo da receita diretamente na rota `/recipe/:id/edit`.
* ✅ **Recipe View**: exibe detalhes da receita e permite marcar/desmarcar como favorita.
* ✅ **Not Found View**: rota personalizada para URLs inválidas.
* ✅ **SPA reativa**: todas as mudanças (edição, favoritos, adição) refletem instantaneamente sem recarregar a página.
* ✅ **Armazenamento persistente** com `localStorage` usando plugin do Pinia.
* ✅ **Estilização moderna com Tailwind CSS**.

---

### 🧱 Tecnologias Utilizadas

* [Vue 3 + Vite](https://vitejs.dev/)
* [Pinia (store global)](https://pinia.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)

---

### 📁 Estrutura de Pastas

```
src/
├── components/
│   └── RecipeList.vue        # Componente de listagem de receitas
├── stores/
│   └── recipe.ts             # Store com Pinia
├── views/
│   ├── HomeView.vue
│   ├── FavoritesView.vue
│   ├── AddRecipeView.vue
│   ├── RecipeView.vue
│   ├── EditRecipeView.vue
│   └── NotFoundView.vue
├── router/
│   └── index.ts              # Configuração do Vue Router
└── App.vue
```

---

### 🧠 Lógica de Negócio

* **Armazenamento local (localStorage)** é ativado via `PiniaPluginContext`, permitindo que as receitas e favoritos persistam entre sessões.
* Cada receita recebe um `id` baseado em `Date.now()` no momento da criação.
* A edição das receitas é feita localmente pelo ID na própria rota.
* Favoritos são controlados via array de IDs e computados com reatividade.
* O campo de busca (quando utilizado na Home) permite filtrar receitas dinamicamente.

---

### 📝 Store (`stores/recipe.ts`)

A store gerencia:

* `recipes`: lista de todas as receitas
* `favoriteIds`: array com os IDs das receitas favoritas
* `addRecipe()`: adiciona uma nova receita
* `editRecipe()`: edita uma receita existente
* `toggleFavorite()`: alterna o status de favorito
* `filteredRecipes(searchQuery)`: filtra as receitas com base na busca
* `getRecipeById(id)`: retorna uma receita específica
* `favoriteRecipes`: retorna receitas marcadas como favoritas

---

### 🧪 Como Rodar Localmente

```bash
# Instale as dependências
npm create vue@latest
npm install tailwindcss @tailwindcss/vite
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

---

### 🛠 Exemplos de Rotas

| Rota               | Descrição                    |
| ------------------ | ---------------------------- |
| `/`                | Página inicial               |
| `/favorites`       | Página de favoritos          |
| `/add-recipe`      | Formulário para nova receita |
| `/recipe/:id`      | Visualizar receita           |
| `/recipe/:id/edit` | Editar receita               |
| `/:wrongPath(.*)*` | Página de erro 404           |

---

### 💡 Melhorias Futuras

* [ ] Filtro de busca na Home
* [ ] Upload de imagem da receita
* [ ] Upload de videos com tutoriais/modo de preparo
* [ ] Compartilhamento via link
* [ ] Suporte a categorias
* [ ] Sincronização com backend (opcional)

---

### 👨‍💻 Autor

Desenvolvido por **André Pereira de Carvalho**

---

