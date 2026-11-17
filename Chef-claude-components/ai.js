import Groq from "groq-sdk"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Just suggest one recipe only .Format your response in markdown to make it easier to render to a web page
`

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const model = 'openai/gpt-oss-20b'

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientSting = ingredientsArr.join(", ")
    try {
        const response = await groq.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: `I have ${ingredientSting}. Please give me a recipe you'd recommend I make!` }
            ],
            max_tokens: 1024
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}